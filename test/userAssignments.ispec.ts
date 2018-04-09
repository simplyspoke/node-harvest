import Harvest from '../src/index';
import config from './test.config';

describe('The Project User Assignments API', () => {
  let instance;
  let client;
  let project;
  let user;
  let assignment;

  beforeAll(done => {
    instance = new Harvest(config);
    instance.clients
      .create({
        name: 'Test Client - userAssignments'
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
            instance.users.me().then(response => {
              user = response;
              done();
            });
          });
      });
  });

  afterAll(done => {
    instance.projects.delete(project.id).then(() => {
      instance.clients.delete(client.id).then(done);
    });
  });

  it('should create a user assignment', done => {
    instance.userAssignments
      .create(project.id, {
        user_id: user.id
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

  it('should retrieve a list of user assignments', done => {
    instance.userAssignments
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

  it('should retrieve a user assignment', done => {
    instance.userAssignments
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

  it('should update a user assignment', done => {
    instance.userAssignments
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

  it('should to delete a user assignment', done => {
    instance.userAssignments
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
