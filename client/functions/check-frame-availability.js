// create a rest CLient
var HttpClient = require('node-rest-client').Client;
var http = new HttpClient();

const baseUrl = 'http://localhost:3000/framesupplier/';

exports.checkFrameAvailability = async ({ task, taskService }) => {

  console.log('controllo disponibilità frame n. ', task.variables.get('frame_id'));

  http.get(baseUrl + 'check-frame-availability/'+ task.variables.get('frame_id'), (data) => {
    console.log('risultato', data.available);
  });

  // Complete the task
  await taskService.complete(task);
}