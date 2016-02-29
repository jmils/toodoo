// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on("ready page:load", ready);

function ready() {
  $('#new_task').on('ajax:success', newTask(event, data));
  function newTask() {
    // console.log(arguments);
  // window.location.reload();
  $('body').append(data);
  $('#tasks').append(data);
  $('#task_name').val('');
  }
}
