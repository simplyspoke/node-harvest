import Harvest from '../src/index';
import config from './test.config';

describe('The Expenses API', () => {
  let instance;
  let category;
  let client;
  let project;
  let user;
  let expense;

  beforeAll(done => {
    instance = new Harvest(config);
    instance.clients
      .create({
        name: 'Test Client - expenses'
      })
      .then(response => {
        client = response;
        instance.projects
          .create({
            bill_by: 'none',
            budget_by: 'none',
            client_id: client.id,
            is_billable: true,
            name: 'Test Project - expenses'
          })
          .then(response => {
            project = response;
            instance.expenseCategories
              .create({
                name: 'Test Expense Category - expenses',
                unit_name: 'tube',
                unit_price: 10.0
              })
              .then(response => {
                category = response;
                instance.users.me().then(response => {
                  user = response;
                  done();
                });
              });
          });
      });
  });

  afterAll(done => {
    instance.expenseCategories.delete(category.id).then(() => {
      instance.projects.delete(project.id).then(() => {
        instance.clients.delete(client.id).then(() => {
          done();
        });
      });
    });
  });

  it('should create an Expense', done => {
    instance.expenses
      .create({
        user_id: user.id,
        project_id: project.id,
        expense_category_id: category.id,
        spent_date: '2017-03-01'
      })
      .then(response => {
        expect(response).toBeDefined();
        expense = response;
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should retrieve a list of Expenses', done => {
    instance.expenses
      .list()
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should retrieve an Expense', done => {
    instance.expenses
      .get(expense.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should update an Expense', done => {
    instance.expenses
      .update(expense.id)
      .then(response => {
        expect(response).toBeDefined();
        done();
      })
      .catch(error => {
        console.error(error);
        fail();
      });
  });

  it('should to delete an Expense', done => {
    instance.expenses
      .delete(expense.id)
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
