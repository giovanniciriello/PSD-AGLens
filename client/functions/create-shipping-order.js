// create a rest Client
var HttpClient = require('node-rest-client').Client;
var http = new HttpClient();

const { baseUrls } = require('../config');

exports.createShippingOrder = async ({ task, taskService }) => {

  console.log('create shipping order for: ', task.variables.get('optician_id'));

  var args = {
    data : { "optician_id": task.variables.get('optician_id'), "quantity":1},
    headers: { "Content-Type": "application/json" }
  }

  http.post(baseUrls.shippingService + 'create-shipping-order/', args, (data) => {
    
  });

  // Complete the task
  await taskService.complete(task);
}