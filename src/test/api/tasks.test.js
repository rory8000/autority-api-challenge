import { expect } from 'chai';
import request from "supertest";
import app from '../../app';
import db from '@/database';

describe('Fetch tasks tests', async () => {
  let incompleteProduct1, incompleteProduct2, completeProduct;
  beforeEach(() => {
    incompleteProduct1 = {
      id: 100,
      name: 'Task 1',
      description: 'Description 1',
      author: 'Author 1',
      isComplete: false,
      createdAt: '2021-02-08T00:00:00.000Z',
      updatedAt: '2021-02-08T00:00:00.000Z',
      deletedAt: null,
    };
    incompleteProduct2 = {
      id: 200,
      name: 'Task 2',
      description: 'Description 2',
      author: 'Author 2',
      isComplete: false,
      createdAt: '2021-02-08T00:00:00.000Z',
      updatedAt: '2021-02-08T00:00:00.000Z',
      deletedAt: null,
    };
    completeProduct = {
      id: 300,
      name: 'Task 3',
      description: 'Description 3',
      author: 'Author 3',
      isComplete: true,
      createdAt: '2021-02-08T00:00:00.000Z',
      updatedAt: '2021-02-08T00:00:00.000Z',
      deletedAt: null,
    };
  });
  it('should fetch with default pagination', async () => {
    const { body, status } = await request(app).get('/tasks');
    const { data, metadata } = body;
    expect(status).to.equal(200);
    expect(metadata).to.deep.equal(
      { totalRowCount: 3, pageIndex: 0, pageSize: 10 }
    );
    expect(data).to.deep.equal([incompleteProduct1, incompleteProduct2, completeProduct]);
  });

  it('should fetch with order', async () => {
    let sorting = [{ id: 'id', desc: true }];
    sorting = JSON.stringify(sorting);
    const { body, status } = await request(app).get(`/tasks?sorting=${sorting}`);
    const { data, metadata } = body;
    expect(status).to.equal(200);
    expect(metadata).to.deep.equal(
      { totalRowCount: 3, pageIndex: 0, pageSize: 10 }
    );
    expect(data).to.deep.equal([completeProduct, incompleteProduct2, incompleteProduct1]);
  });

  it('should fetch the second page', async () => {
    const { body, status } = await request(app).get('/tasks?page=1&size=2');
    const { data, metadata } = body;
    expect(status).to.equal(200);
    expect(metadata).to.deep.equal(
      { totalRowCount: 3, pageIndex: 1, pageSize: 2 }
    );
    expect(data).to.deep.equal([completeProduct]);
  });

  it('should not fetch with invalid page param', async () => {
    const { body, status } = await request(app).get('/tasks?page=-1');
    expect(status).to.equal(400);
    expect(body).to.deep.equal({ error: 'Invalid page number' });
  });

  it('should not fetch with invalid size param', async () => {
    const { body, status } = await request(app).get('/tasks?size=0');
    expect(status).to.equal(400);
    expect(body).to.deep.equal({ error: 'Invalid page size' });
  });
});

describe('Complete task tests', async () => {
  it('should complete a task', async () => {
    const taskId = 100;
    const { status } = await request(app).patch(`/tasks/${taskId}/complete`);
    expect(status).to.equal(204);
    const task = await db.models.task.findByPk(taskId);
    expect(task.isComplete).to.be.true;
  });

  it('should not complete an already completed task', async () => {
    const { body, status } = await request(app).patch('/tasks/300/complete');
    expect(status).to.equal(400);
    expect(body).to.deep.equal({ error: 'Task has already been marked as complete' });
  });

  it('should not complete due to a non-existent task', async () => {
    const { status } = await request(app).patch('/tasks/500/complete');
    expect(status).to.equal(404);
  });

  it('should not complete due to an invalid url', async () => {
    const { body, status } = await request(app).patch('/tasks/undefined/complete');
    expect(status).to.equal(400);
    expect(body).to.deep.equal({ error: 'Invalid url' });
  });
});

describe('Create task tests', async () => {
  it('should create a task successfully', async () => {
    let payload = {
      name: 'Name 1',
      description: 'Desc 1',
      author: 'Author 1',
    }
    const { body, status } = await request(app).post('/tasks').send(payload);
    expect(status).to.equal(200);
    expect(body).to.deep.equal({ id: 1 });
  });

  it('should not create a task due to missing required data', async () => {
    let payload = {
      author: 'Author 1',
    }
    const { status } = await request(app).post('/tasks').send(payload);
    expect(status).to.equal(400);
  });

  it('should not create a task due to empty data', async () => {
    let payload = { name: "", description: "", author: "" }
    const { status } = await request(app).post('/tasks').send(payload);
    expect(status).to.equal(400);
  });
});

describe('Update task tests', async () => {
  let payload;
  beforeEach(() => {
    payload = {
      name: 'Name 1',
      description: 'Desc 1',
      author: 'Author 1',
    }
  });
  it('should update a task successfully', async () => {
    const taskId = 100;
    const { status } = await request(app).put(`/tasks/${taskId}`).send(payload);
    expect(status).to.equal(204);
    const task = await db.models.task.findByPk(taskId);
    expect(task.name).to.equal('Name 1');
    expect(task.description).to.equal('Desc 1');
    expect(task.author).to.equal('Author 1');
  });

  it('should not update due to a non-existent task', async () => {
    const { status } = await request(app).put('/tasks/500').send(payload);
    expect(status).to.equal(404);
  });

  it('should not update due to an invalid url', async () => {
    const { body, status } = await request(app).put('/tasks/undefined').send(payload);
    expect(status).to.equal(400);
    expect(body).to.deep.equal({ error: 'Invalid url' });
  });
});

describe('Delete task tests', async () => {
  it('should delete a task', async () => {
    const taskId = 100;
    const { status } = await request(app).delete(`/tasks/${taskId}`);
    expect(status).to.equal(204);
    const task = await db.models.task.findByPk(taskId);
    expect(task).to.be.null;
  });

  it('should not delete due to a non-existent task', async () => {
    const { status } = await request(app).delete('/tasks/500');
    expect(status).to.equal(404);
  });

  it('should not delete due to an invalid url', async () => {
    const { body, status } = await request(app).delete('/tasks/undefined');
    expect(status).to.equal(400);
    expect(body).to.deep.equal({ error: 'Invalid url' });
  });
});