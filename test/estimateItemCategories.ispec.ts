import Harvest from '../src/index';
import config from './test.config';

describe('The Estimate Item Categories API', () => {
  let instance;
  let category;

  beforeAll(() => {
    instance = new Harvest(config);
  });

  it('should create an Estimate Item Category', done => {
    instance.estimateItemCategories
      .create({ name: 'Test Estimate Item Category' })
      .then(response => {
        expect(response).toBeDefined();
        category = response;
        done();
      })
      .catch(() => {
        fail();
      });
  });

  it('should retrieve a list of Estimate Item Categories', done => {
    instance.estimateItemCategories
      .list()
      .then(response => {
        expect(response).toBeDefined();
        // Find and assign the category incase the create failed
        if (!category) {
          category = response.estimate_item_categories.find(
            entry => entry.name === 'Test Estimate Item Category'
          );
        }
        done();
      })
      .catch(() => {
        fail();
      });
  });

  it('should retrieve an Estimate Item Category', done => {
    instance.estimateItemCategories
      .get(category.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(() => {
        fail();
      });
  });

  it('should update an Estimate Item Category', done => {
    instance.estimateItemCategories
      .update(category.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(() => {
        fail();
      });
  });

  it('should to delete an Estimate Item Category', done => {
    instance.estimateItemCategories
      .delete(category.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(() => {
        fail();
      });
  });
});
