import Harvest from '../src/index';
import config from './test.config';

describe('The Time Entries API', () => {
  let instance;
  let client;
  let project;
  let task;
  let assignment;
  let user;
  let entry;

  beforeAll(done => {
    instance = new Harvest(config);
    instance.clients
      .create({
        name: 'Test Client'
      })
      .then(response => {
        client = response;
        instance.projects
          .create({
            bill_by: 'none',
            budget_by: 'none',
            client_id: client.id,
            is_billable: true,
            name: 'Test Project'
          })
          .then(response => {
            project = response;
            instance.tasks
              .create({
                name: 'Test Task'
              })
              .then(response => {
                task = response;
                instance.taskAssignments
                  .create(project.id, {
                    task_id: task.id
                  })
                  .then(response => {
                    expect(response).toBeDefined();
                    assignment = response;
                    instance
                      .request('GET', 'v2/users/me', {})
                      .then(response => {
                        user = response;
                        done();
                      });
                  });
              });
          });
      });
  });

  afterAll(done => {
    instance.timeEntries.delete(entry.id).then(() => {
      instance.tasks.delete(task.id).then(() => {
        instance.projects.delete(project.id).then(() => {
          instance.clients.delete(client.id).then(done);
        });
      });
    });
  });

  it('should create a time entry', done => {
    instance.timeEntries
      .create({
        project_id: project.id,
        task_id: task.id,
        user_id: user.id,
        spent_date: '2017-03-21'
      })
      .then(response => {
        expect(response).toBeDefined();
        entry = response;
        done();
      })
      .catch(error => {
        console.log(error);
        fail();
      });
  });

  it('should retrieve a list of time entries', done => {
    instance.timeEntries
      .list(project.id)
      .then(response => {
        expect(response).toBeDefined();
        // Find and assign the project incase the create failed
        done();
      })
      .catch(() => {
        fail();
      });
  });

  it('should retrieve a time entry', done => {
    instance.timeEntries
      .get(entry.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(() => {
        fail();
      });
  });

  it('should update a time entry', done => {
    instance.timeEntries
      .update(entry.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(() => {
        fail();
      });
  });

  it('should to delete a time entry', done => {
    instance.timeEntries
      .delete(entry.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(() => {
        fail();
      });
  });
});
