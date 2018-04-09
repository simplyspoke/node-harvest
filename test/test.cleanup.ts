require('dotenv').config();

import Harvest from '../src/index';
import config from './test.config';

const instance = new Harvest(config);

time()
  .then(tasks)
  .then(invoices)
  .then(projects)
  .then(estimates)
  .then(clients)
  .catch(error => {
    console.error(error);
  });

function invoices() {
  return new Promise((resolve, reject) => {
    instance.invoices.list().then(({ invoices }) => {
      const defered = [];

      invoices.forEach(entry => {
        defered.push(instance.invoices.delete(entry.id));
      });

      Promise.all(defered)
        .then(() => {
          console.log('Cleanup invoices complete');
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  });
}

function time() {
  return new Promise((resolve, reject) => {
    instance.timeEntries.list().then(results => {
      const defered = [];
      results.time_entries.forEach(entry => {
        defered.push(instance.timeEntries.delete(entry.id));
      });

      Promise.all(defered)
        .then(() => {
          console.log('Cleanup time entries complete');
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  });
}

function projects() {
  return new Promise((resolve, reject) => {
    instance.projects.list().then(({ projects }) => {
      const defered = [];

      projects.forEach(entry => {
        defered.push(instance.projects.delete(entry.id));
      });

      Promise.all(defered)
        .then(() => {
          console.log('Cleanup projects complete');
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  });
}

function tasks() {
  return new Promise((resolve, reject) => {
    instance.tasks.list().then(({ tasks }) => {
      const defered = [];

      tasks.forEach(entry => {
        defered.push(instance.tasks.delete(entry.id));
      });

      Promise.all(defered)
        .then(() => {
          console.log('Cleanup tasks complete');
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  });
}

function estimates() {
  return new Promise((resolve, reject) => {
    instance.estimates.list().then(({ estimates }) => {
      const defered = [];

      estimates.forEach(entry => {
        defered.push(instance.estimates.delete(entry.id));
      });

      Promise.all(defered)
        .then(() => {
          console.log('Cleanup estimates complete');
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  });
}

function clients() {
  return new Promise((resolve, reject) => {
    instance.clients.list().then(({ clients }) => {
      const defered = [];

      clients.forEach(entry => {
        defered.push(instance.clients.delete(entry.id));
      });

      Promise.all(defered)
        .then(() => {
          console.log('Cleanup clients complete');
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  });
}
