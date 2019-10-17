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
      // Create design cols
      var leftCol = $(`<div class="col-2">Col 1</div>`);
      var midCol = $(`<div class="col-8"></div>`);
      var rightCol = $(`<div class="col-2">Col 3</div>`);

      //   Create content div
      var contentDiv = $(`<div class="row">`);

      // Create columns
      var timeCol = $(`<div class="col-2" id="time">Time${i}</div>`);
      var taskCol = $(`<div class="col-8" id="task">Task</div>`);
      var saveCol = $(`<div class="col-2" id="save">Save</div>`);

      // Append

      dateDiv.append(leftCol);
      dateDiv.append(midCol);
      dateDiv.append(rightCol);
      midCol.append(contentDiv);
      contentDiv.append(timeCol);
      contentDiv.append(taskCol);
      contentDiv.append(saveCol);
      $('#todoList').append(dateDiv);
    }
  }
  createPlanner();
});
