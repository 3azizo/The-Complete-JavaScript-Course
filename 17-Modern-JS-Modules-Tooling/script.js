import { budget } from './clean.js';
import cloneDeep from 'lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateDeepClone = cloneDeep(state);
console.log('#####################');
console.log(stateDeepClone);

console.log(budget);
if (module.hot) {
  module.hot.accept();
}
