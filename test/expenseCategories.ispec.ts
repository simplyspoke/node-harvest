import Harvest from '../src/index';
import config from './test.config';

describe('The Expense Categories API', () => {
  let instance;
  let category;

  beforeAll(() => {
    instance = new Harvest(config);
  });

  it('should create an Expense Category', done => {
    instance.expenseCategories
      .create({ name: 'Test Expense Category' })
      .then(response => {
        expect(response).toBeDefined();
        category = response;
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should retrieve a list of Expense Categories', done => {
    instance.expenseCategories
      .list()
      .then(response => {
        expect(response).toBeDefined();
        // Find and assign the category incase the create failed
        if (!category) {
          category = response.expense_categories.find(
            entry => entry.name === 'Test Expense Category'
          );
        }
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should retrieve an Expense Category', done => {
    instance.expenseCategories
      .get(category.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should update an Expense Category', done => {
    instance.expenseCategories
      .update(category.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should to delete an Expense Category', done => {
    instance.expenseCategories
      .delete(category.id)
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
