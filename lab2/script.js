"use strict";

var deletedTasks = [];
var lastDeletedTask = null;

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");

        var taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        var removeButton = document.createElement("button");
        removeButton.innerHTML = '<i class="fas fa-trash"></i>';
        removeButton.style.marginLeft = "20px"; 
        removeButton.classList.add("removeButton");
        removeButton.addEventListener("click", function(event) {
            removeTask(event);
        });

        li.appendChild(taskSpan);
        li.appendChild(removeButton);

        li.addEventListener("click", function() {
            toggleTaskDone(li);
        });

        taskList.appendChild(li);

        taskInput.value = "";
    }
}

function toggleTaskDone(task) {
    task.classList.toggle("done");
    
    var removeButton = task.querySelector(".removeButton");
    if (task.classList.contains("done")) {
        removeButton.style.marginLeft = "20px"; 
        var date = new Date();
        var dateString = date.toLocaleDateString() + " " + date.toLocaleTimeString();
        var dateSpan = document.createElement("span");
        dateSpan.textContent = " (Done: " + dateString + ")";
        dateSpan.classList.add("doneDate"); 
        task.appendChild(dateSpan);
    } else {
        var dateSpan = task.querySelector(".doneDate");
        if (dateSpan) {
            task.removeChild(dateSpan);
        }
    }
}

function removeTask(event) {
    if (event.target.classList.contains("fa-trash")) {
        var taskToRemove = event.target.parentNode.parentNode;
        var taskText = taskToRemove.querySelector("span").textContent;
        var taskIndex = Array.from(taskToRemove.parentNode.children).indexOf(taskToRemove);

        var isDone = taskToRemove.classList.contains("done");

        openModal(taskText, function () {
            lastDeletedTask = { text: taskText, index: taskIndex, done: isDone };

            taskToRemove.parentNode.removeChild(taskToRemove);

            if (isDone) {
                var dateSpan = taskToRemove.querySelector(".doneDate");
                taskToRemove.removeChild(dateSpan);
                taskToRemove.classList.remove("done");
            }
        });
    }
}

function undoDelete() {
  if (lastDeletedTask !== null) {
      var taskList = document.getElementById("taskList");
      var li = document.createElement("li");
      li.textContent = lastDeletedTask.text;
      
      var taskAtIndex = taskList.children[lastDeletedTask.index];
      taskList.insertBefore(li, taskAtIndex);
      
      li.addEventListener("click", function() {
          toggleTaskDone(li);
      });

      var removeButton = document.createElement("button");
      removeButton.innerHTML = '<i class="fas fa-trash"></i>';
      removeButton.classList.add("removeButton");
      removeButton.addEventListener("click", function(event) {
          removeTask(event);
      });
      li.appendChild(removeButton);
      
      lastDeletedTask = null;

      closeModal();
  }
}

function openModal(taskText, callback) {
  var modal = document.getElementById("modal");
  var modalText = document.getElementById("modalText");
  modalText.textContent = "Are you sure you want to delete the task: " + taskText + "?";

  modal.style.display = "block";

  var confirmButton = document.getElementById("confirmDelete");
  confirmButton.onclick = function() {
      callback();
      closeModal(); 
  };

  var closeButton = document.getElementById("closeModal");
  closeButton.onclick = function() {
      closeModal();
  };

  window.onclick = function(event) {
      if (event.target == modal) {
          closeModal();
      }
  };
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}
