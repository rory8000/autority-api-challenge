import db from '@/database';
import { paginate } from './util'

/**
 * GET /tasks
 * Get paginated tasks
 */
export const getTasks = async (req, res) => {
  const getData = (req) => {
    //validate query params
    const pageIndex = Number(req.query.page ?? 0);
    if (pageIndex < 0) {
      throw new Error('Invalid page number');
    }
    const pageSize = Number(req.query.size ?? 10);
    if (pageSize < 1) {
      throw new Error('Invalid page size');
    }

    let sorting = JSON.parse(req.query.sorting ?? "[]");
    sorting = sorting.map((sort) => [sort.id, sort.desc ? 'DESC' : 'ASC']);

    return { pageIndex, pageSize, sorting };
  }

  try {
    const { pageIndex, pageSize, sorting } = getData(req);
    const { count, rows } = await db.models.task.findAndCountAll(
      paginate(
        {
          order: sorting,
        },
        { pageIndex, pageSize },
      )
    );
    return res.json({
      metadata: {
        totalRowCount: count,
        pageIndex: pageIndex,
        pageSize: pageSize,
      },
      data: rows
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

/**
 * POST /tasks
 * Create a task
 */
export const createTask = async (req, res) => {
  const taskPayload = req.body;
  try {
    const task = await db.models.task.create({
      name: taskPayload.name,
      author: taskPayload.author,
      description: taskPayload.description
    });
    return res.json({ id: task.id });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

/**
 * PUT /tasks/:id
 * Update a task
 */
export const updateTask = async (req, res) => {
  try {
    const taskId = getTaskId(req);
    const task = await db.models.task.findByPk(taskId);
    if (task === null) {
      return res.sendStatus(404);
    } else {
      await task.update({
        name: req.body.name,
        author: req.body.author,
        description: req.body.description
      })
      return res.sendStatus(204);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

/**
 * DELETE /tasks/:id
 * Delete a task
 */
export const deleteTask = async (req, res) => {
  try {
    const taskId = getTaskId(req);
    const task = await db.models.task.findByPk(taskId);
    if (task === null) {
      return res.sendStatus(404);
    } else {
      await task.destroy();
      return res.sendStatus(204);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

/**
 * PATCH /tasks/:id/complete
 * Complete a task
 */
export const completeTask = async (req, res) => {
  try {
    const taskId = getTaskId(req);
    const task = await db.models.task.findByPk(taskId);
    if (task === null) {
      return res.sendStatus(404);
    } else {
      if (task.isComplete) {
        return res.status(400).json({ error: 'Task has already been marked as complete' });
      }
      await task.update({ isComplete: true })
      return res.sendStatus(204);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getTaskId = (req) => {
  //validate query params
  const taskId = req.params.id ?? null;
  if (!taskId || taskId === 'undefined') {
    throw new Error('Invalid url')
  }

  return taskId;
}