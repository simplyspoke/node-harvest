// import Harvest from '../src/harvest';
//
// const config = {
//   subdomain: process.env.SUBDOMAIN,
//   userAgent: 'MyApp (yourname@example.com)',
//   auth: {
//     accessToken: process.env.ACCESS_TOKEN,
//     accountId: process.env.ACCOUNT_ID
//   }
// };
//
// describe('Harvest', () => {
//   let instance;
//
//   beforeAll(() => {
//     instance = new Harvest(config);
//   });
//
//   it('Harvest is instantiable', () => {
//     expect(instance).toBeInstanceOf(Harvest);
//   });
//
//   it('Can retrieve the me record', done => {
//     instance
//       .request('GET', 'v2/users/me', {})
//       .then(response => {
//         expect(response).toBeDefined();
//         done();
//       })
//       .catch(error => {
//         expect(error).toBeNull();
//         done();
//       });
//   });
//
//   it('Can retrieve the me record', done => {
//     instance.company
//       .get()
//       .then(response => {
//         expect(response).toBeDefined();
//         done();
//       })
//       .catch(error => {
//         expect(error).toBeNull();
//         done();
//       });
//   });
// });
