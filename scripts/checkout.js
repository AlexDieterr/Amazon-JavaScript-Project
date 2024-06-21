import{renderCheckoutHeader} from './checkout/checkoutHeader.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadPage(){
  try{
    //throw 'error1';

    await loadProductsFetch();

    await new Promise((resolve, reject)=>{
      //throw 'error2'
      loadCart(() => {
        //reject('error3')
        resolve();
      });
    });

  } catch(error){
    console.log('theres an error')
  }
  
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();

}
loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(() => {
      resolve();
    });
  }),

]).then((values) => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });
}).then((value) => { 
  console.log(value)
  return new Promise((resolve)=>{
    loadCart(() => {
      resolve();
    });
  });
}).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
})
*/

/*
loadProducts(()=>{
  loadCart(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/



