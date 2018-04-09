import Harvest from '../src/index';
import config from './test.config';

describe('The Task API', () => {
  let instance;
  let task;

  beforeAll(() => {
    instance = new Harvest(config);
  });

  it('should create a task', done => {
    instance.tasks
      .create({
        name: 'Test Task'
      })
      .then(response => {
        expect(response).toBeDefined();
        task = response;
        done();
      })
      .catch(error => {
        console.log(error);
        fail();
      });
  });

  it('should retrieve a list of tasks', done => {
    instance.tasks
      .list()
      .then(response => {
        expect(response).toBeDefined();
        // Find and assign the estimate incase the create failed
        if (!task) {
          task = response.tasks.find(entry => entry.name === 'Test Task');
        }
        done();
      })
      .catch(error => {
        console.log(error);
        fail();
      });
  });

  it('should retrieve an task', done => {
    instance.tasks
      .get(task.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should update an task', done => {
    instance.tasks
      .update(task.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should to delete an task', done => {
    instance.tasks
      .delete(task.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.log(error);
        fail();
      });
  });
});
