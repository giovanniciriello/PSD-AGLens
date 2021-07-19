// create a rest Client
var HttpClient = require('node-rest-client').Client;
var http = new HttpClient();

const { baseUrls } = require('../config');

exports.createShippingOrder = async ({ task, taskService }) => {

  console.log('create shipping order for: ', task.variables.get('optician_id'));
  console.log('height-> ', task.variables.get('height'));
  console.log('width-> ', task.variables.get('width'));
  console.log('depth-> ', task.variables.get('depth'));
  console.log('weight-> ', task.variables.get('weight'));
  console.log('address-> ', task.variables.get('address'));


  var args = {
    data : { 
      "height": task.variables.get('height'), 
      "width": task.variables.get('width'), 
      "depth": task.variables.get('depth'), 
      "weight": task.variables.get('weight'), 
      "address": task.variables.get('address'), 
    },
    headers: { "Content-Type": "application/json" }
  }

  http.post(baseUrls.shippingService + 'create-shipping-order/', args, (data) => {
    
  });

  // Complete the task
  await taskService.complete(task);
}