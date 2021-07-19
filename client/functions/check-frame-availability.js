const { Variables } = require('camunda-external-task-client-js');

// create a rest Client
var HttpClient = require('node-rest-client').Client;
var http = new HttpClient();

const { baseUrls } = require('../config');

exports.checkFrameAvailability = async ({ task, taskService }) => {
  console.log(`Checking for frame availability in supplier warehouse for item ${task.variables.get('frame_id')}`);

  http.get(baseUrls.frameService + 'check-frame-availability/' + task.variables.get('frame_id'), async (data) => {
    const processVariables = new Variables();

    processVariables.set('availability_supplier', data.available);

    if (data.available) {
      processVariables.set('price', data.price);
      processVariables.set('days_to_deliver', data.daysToDeliver);
    }

    // console.log(processVariables.getAll());

    // Complete the task
    await taskService.complete(task, processVariables);
  });
};
