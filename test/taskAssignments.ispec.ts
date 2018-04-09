import Harvest from '../src/index';
import config from './test.config';

describe('The Project Task Assignments API', () => {
  let instance;
  let client;
  let project;
  let task;
  let assignment;

  beforeAll(done => {
    instance = new Harvest(config);
    instance.clients
      .create({
        name: 'Test Client - taskAssignments'
      })
      .then(response => {
        client = response;
        instance.projects
          .create({
            bill_by: 'none',
            budget_by: 'none',
            client_id: client.id,
            is_billable: true,
            name: 'Test Project - taskAssignments'
          })
          .then(response => {
            project = response;
            instance.tasks
              .create({
                name: 'Test Task - taskAssignments'
              })
              .then(response => {
                task = response;
                done();
              });
          });
      });
  });

  afterAll(done => {
    instance.tasks.delete(task.id).then(() => {
      instance.projects.delete(project.id).then(() => {
        instance.clients.delete(client.id).then(() => {
          done();
        });
      });
    });
  });

  it('should create a task assignment', done => {
    instance.taskAssignments
      .create(project.id, {
        task_id: task.id
      })
      .then(response => {
        expect(response).toBeDefined();
        assignment = response;
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should retrieve a list of task assignments', done => {
    instance.taskAssignments
      .list(project.id)
      .then(response => {
        expect(response).toBeDefined();
        // Find and assign the project incase the create failed
        if (!assignment) {
          assignment = response.task_assignments.find(
            entry => entry.task.name === 'Test Task'
          );
        }
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should retrieve a task assignment', done => {
    instance.taskAssignments
      .get(project.id, assignment.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should update a task assignment', done => {
    instance.taskAssignments
      .update(project.id, assignment.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should to delete a task assignment', done => {
    instance.taskAssignments
      .delete(project.id, assignment.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });
});
