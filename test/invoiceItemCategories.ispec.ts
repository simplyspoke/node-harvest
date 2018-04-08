import Harvest from '../src/index';
import config from './test.config';

describe('The Invoice Item Categories API', () => {
  let instance;
  let category;

  beforeAll(() => {
    instance = new Harvest(config);
  });

  it('should create an Invoice Item Category', done => {
    instance.invoiceItemCategories
      .create({ name: 'Test Invoice Item Category' })
      .then(response => {
        expect(response).toBeDefined();
        category = response;
        done();
      })
      .catch(() => {
        fail();
      });
  });

  it('should retrieve a list of Invoice Item Categories', done => {
    instance.invoiceItemCategories
      .list()
      .then(response => {
        expect(response).toBeDefined();
        // Find and assign the category incase the create failed
        if (!category) {
          category = response.invoice_item_categories.find(
            entry => entry.name === 'Test Invoice Item Category'
          );
        }
        done();
      })
      .catch(() => {
        fail();
      });
  });

  it('should retrieve an Invoice Item Category', done => {
    instance.invoiceItemCategories
      .get(category.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(() => {
        fail();
      });
  });

  it('should update an Invoice Item Category', done => {
    instance.invoiceItemCategories
      .update(category.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(() => {
        fail();
      });
  });

  it('should to delete an Invoice Item Category', done => {
    instance.invoiceItemCategories
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
