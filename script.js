$(document).ready(function() {
  // Setup var
  var plannerStart = 9;
  var plannerEnd = 18;
  var dailyTasks = JSON.parse(localStorage.getItem('myDay')) || {};
  console.log(dailyTasks);

  // Add today's date to header
  function addTodaysDate() {
    var todaysDate = moment().format('MMMM Do YYYY');
    $('#header').append(`<div>${todaysDate}</div>`);
  }

  // Fill <div> with all of the time slots
  function createPlanner() {
    for (i = plannerStart; i < plannerEnd; i++) {
      // Create date div
      var timeDiv = $(`<div class="row dateRow">`);
      // Create design cols
      var leftCol = $(`<div class="col-2"></div>`);
      var midCol = $(`<div class="col-8"></div>`);
      var rightCol = $(`<div class="col-2"></div>`);

      //   Create content div
      var contentDiv = $(`<div class="row contentRow">`);

      // Create columns
      var timeCol = $(
        `<div class="col-2 time contentCenter padZero" id="time${i}" >${i}</div>`
      );
      var taskCol = $(`<div class="col-8 contentCenter padZero"></div>`);
      var taskInput = $(
        `<textarea class="task contentCenter" id="${i}"></textarea>`
      );

      var saveCol = $(`<div class="col-2 contentCenter padZero" ></div>`);

      // Create save button
      var saveButton = $(
        `<button class="contentCenter js-save saveBtn" id="save" data-key="${i}"></button>`
      );
      var saveIcon = $(`<i class="fas fa-save font24"></i>`);

      // Append

      timeDiv.append(leftCol);
      timeDiv.append(midCol);
      timeDiv.append(rightCol);
      midCol.append(contentDiv);
      contentDiv.append(timeCol);
      contentDiv.append(taskCol);
      contentDiv.append(saveCol);
      taskCol.append(taskInput);
      saveCol.append(saveButton);
      saveButton.append(saveIcon);
      $('#todoList').append(timeDiv);
    }
    taskBackground();
    changeTimeFormat();
    taskFill();
  }

  // Change the valus into number formats for each time slot task
  function changeTimeFormat() {
    // Run through loop of all time slots
    for (i = plannerStart; i < plannerEnd; i++) {
      // Look for ID of each time slot
      var idRef = `#time${i}`;
      // Create var for value in cell
      var taskTimeString = $(idRef).text();
      // Convert string to number
      var taskTime = Number(taskTimeString);
      // Check if time is AM (or less than 12)
      if (taskTime < 12) {
        // Add "AM" tag to time
        var amTime = i + ' AM';
        $(idRef).text(amTime);
      }
      // Check if time is noon
      else if (taskTime === 12) {
        // Add PM tag to noon
        var noonTime = i + ' PM';
        $(idRef).text(noonTime);
      }
      // Check if time is PM (or greater than 12)
      else if (taskTime > 12) {
        // Reduce time by 12 and add "PM" tag
        var pmTime = i - 12 + ' PM';
        $(idRef).text(pmTime);
      }
    }
  }

  // Change the background color based on current time
  function taskBackground() {
    // Set variable to current hour
    var currentHourString = moment().format('HH');
    // Convert variable from string to number
    var currentHour = Number(currentHourString);
    // Move through all tasks
    for (i = plannerStart; i < plannerEnd; i++) {
      // set a variable that will change the idName for each loop
      var idName = '#' + i;
      // If current task is in the past, change color to past
      if (i < currentHour) {
        $(idName).addClass('task_bg_past');
        // If current task is in the future, change color to future
      } else if (i > currentHour) {
        $(idName).addClass('task_bg_future');
        // If current task is in the current hour, change color to current
      } else {
        $(idName).addClass('task_bg_current');
      }
    }
  }

  // Fill tasks from local storage
  function taskFill() {
    for (i = plannerStart; i < plannerEnd; i++) {
      $(`#${i}`).text(dailyTasks[i]);
    }
  }

  // CLick event for saving tasks to local storage
  $(document).on('click', '.js-save', function() {
    // get the key and the value
    var key = $(this).data('key');
    console.log(key);

    var value = $(`#${key}`).val();
    dailyTasks[key] = value;
    localStorage.setItem('myDay', JSON.stringify(dailyTasks));
  });

  addTodaysDate();
  createPlanner();

  console.log($('.js-save'));
  // taskBackground();
});
