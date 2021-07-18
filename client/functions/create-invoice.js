// create a rest Client
var HttpClient = require('node-rest-client').Client;
var http = new HttpClient();

const { baseUrls } = require('../config');

exports.createInvoice = async ({ task, taskService }) => {

  console.log('create invoice for: ', task.variables.get('optician_id'));

  var args = {
    data : { "optician_id": task.variables.get('optician_id'), "quantity":task.variables.get('price')},
    headers: { "Content-Type": "application/json" }
  }

  http.post(baseUrls.invoiceService + 'create-invoice/', args, (data) => {
    
  });

  // Complete the task
  await taskService.complete(task);
}