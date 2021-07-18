const { Variables } = require('camunda-external-task-client-js');

// create a rest Client
var HttpClient = require('node-rest-client').Client;
var http = new HttpClient();

const { baseUrls } = require('../config');

exports.checkFrameAvailability = async ({ task, taskService }) => {

  console.log('controllo disponibilità frame n. ', task.variables.get('frame_id'));

  http.get(baseUrls.frameService + 'check-frame-availability/'+ task.variables.get('frame_id'), async (data) => {
    // set a process variable 'availableFrame'

    const processVariables = new Variables();
    processVariables.set("availability_supplier", data.available);
    processVariables.set("days_to_deliver", data.days_to_deliver);

    // Complete the task
    await taskService.complete(task, processVariables);

  });


}