const { Variables } = require('camunda-external-task-client-js');

// create a rest Client
var HttpClient = require('node-rest-client').Client;
var http = new HttpClient();

const { baseUrls } = require('../config');

exports.checkFrameAvailability = async ({ task, taskService }) => {

  console.log('controllo disponibilità frame n. ', task.variables.get('frame_id'));
  
  http.get(baseUrls.frameService + 'check-frame-availability/'+ task.variables.get('frame_id'), async (data) => {
    
    const processVariables = new Variables()
    .set("availability_supplier", data.available)
    .set("days_to_deliver", data.days_to_deliver);

    await taskService.complete(task, processVariables);
  });

  // Complete the task
  
}