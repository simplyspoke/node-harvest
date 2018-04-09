import Harvest from '../src/index';
import config from './test.config';

describe('The Contacts API', () => {
  let instance;
  let client;
  let contact;

  beforeAll(done => {
    instance = new Harvest(config);
    instance.clients
      .create({
        name: 'Test Client - contacts'
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

  it('should create an contact', done => {
    instance.contacts
      .create({
        first_name: 'Test',
        last_name: 'Contact',
        client_id: client.id
      })
      .then(response => {
        expect(response).toBeDefined();
        contact = response;
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should retrieve a list of contacts', done => {
    instance.contacts
      .list()
      .then(response => {
        expect(response).toBeDefined();
        // Find and assign the contact incase the create failed
        if (!contact) {
          contact = response.contacts.find(
            entry => entry.first_name === 'Test'
          );
        }
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should retrieve an contact', done => {
    instance.contacts
      .get(contact.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should update an contact', done => {
    instance.contacts
      .update(contact.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should to delete an contact', done => {
    instance.contacts
      .delete(contact.id)
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
