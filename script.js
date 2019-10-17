$(document).ready(function() {
  // Setup var
  var calendarLength = 24;

  // Fill <div> with all of the time slots
  function createPlanner() {
    console.log('run');
    for (i = 0; i < calendarLength; i++) {
      console.log('run2');
      // Create date div
      var dateDiv = $(`<div class="row">`);
      console.log(dateDiv);
      // Create create columns
      var timeCol = $(`<div class="col-2">Col 1</div>`);
      var taskCol = $(`<div class="col-8">Col 2</div>`);
      var saveCol = $(`<div class="col-2">Col 3</div>`);

      // Append

      dateDiv.append(timeCol);
      dateDiv.append(taskCol);
      dateDiv.append(saveCol);
      $('#todoList').append(dateDiv);
    }
  }
  createPlanner();
});
