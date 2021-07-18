// create a rest Client
var HttpClient = require('node-rest-client').Client;
var http = new HttpClient();

const { baseUrls } = require('../config');

exports.createFrameOrder = async ({ task, taskService }) => {

  console.log('order started for frame n. ', task.variables.get('frame_id'));

  var args = {
    data : { "frame_id": task.variables.get('frame_id'), "quantity":1},
    headers: { "Content-Type": "application/json" }
  }

  http.post(baseUrls.frameService + 'create-frame-order/', args, (data) => {
    
  });
  // Complete the task
  await taskService.complete(task);

}