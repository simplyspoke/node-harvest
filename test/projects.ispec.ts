import Harvest from '../src/index';
import config from './test.config';

describe('The Projects API', () => {
  let instance;
  let client;
  let project;

  beforeAll(done => {
    instance = new Harvest(config);
    instance.clients
      .create({
        name: 'Test Client - projects'
      })
      .then(response => {
        client = response;
        done();
      });
  });

  afterAll(done => {
    instance.clients.delete(client.id).then(() => {
      done();
    });
  });

  it('should create an project', done => {
    instance.projects
      .create({
        bill_by: 'none',
        budget_by: 'none',
        client_id: client.id,
        is_billable: true,
        name: 'Test Project'
      })
      .then(response => {
        expect(response).toBeDefined();
        project = response;
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should retrieve a list of projects', done => {
    instance.projects
      .list()
      .then(response => {
        expect(response).toBeDefined();
        // Find and assign the project incase the create failed
        if (!project) {
          project = response.projects.find(entry => entry.name === 'Test Role');
        }
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should retrieve an project', done => {
    instance.projects
      .get(project.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should update an project', done => {
    instance.projects
      .update(project.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should to delete an project', done => {
    instance.projects
      .delete(project.id)
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
