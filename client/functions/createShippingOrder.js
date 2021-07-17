// create a rest Client
var HttpClient = require('node-rest-client').Client;
var http = new HttpClient();

const { baseUrls } = require('../config');

exports.createShippingOrder = async ({ task, taskService }) => {

  console.log('controllo disponibilità frame n. ', task.variables.get('frame_id'));

  http.get(baseUrls.frameService + 'check-frame-availability/'+ task.variables.get('frame_id'), (data) => {
    console.log('risultato', data.available);
  });

  // Complete the task
  await taskService.complete(task);
}