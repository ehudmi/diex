// Exercise 1 - Todo List

// Recreate the todo list above:

// Create an HTML, CSS and a JS file.

// In the HTML file
// create a form with one input type="text", and a “Submit” button.
// add an empty div below the form
// <div class="listTasks"></div>

// In the js file, you must add the following functionalities:
// Create an empty array : let listTasks = [];

// Create a function called addTask(). As soon as the user clicks on the button:
// check that the input is not empty,
// then add it to the array (ie. add the text of the task)
// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have (starting from left to right - check out the image at the top of the page)
// a “X” button. Use font awesome for the “X” button.
// an input type="checkbox". The label of the input is the task added by the user.

// BONUS I (not mandatory):
// Change the variable listTasks to an array of task objects.
// Each new task added to the array should have the properties : task_id, text and done (a boolean - false by default).
// Every new task object should have a task_id, starting from 0, and a data-task-id attribute, which value is the same
// as the task_id. Check out data-* attributes here.
// Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input,
// the done property should change from false to true in the object, and from black to crossed out red in the DOM.

// BONUS II (not mandatory):
// Create a function named deleteTask(), that as soon as the user clicks on the “X” button,
// delete that specific task from the array listTasks.

let listTasks = [];

class Task {
  constructor(task_id, text, done) {
    this.task_id = Number(task_id);
    this.text = String(text);
    this.done = Boolean(done);
  }
}

const addTask = () => {
  document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    if (document.querySelector("#task").value != "") {
      let newTask = new Task(
        listTasks.length,
        document.querySelector("#task").value,
        false
      );
      listTasks.push(newTask);
      let newListItem = document.createElement("input");
      newListItem.type = "checkbox";
      newListItem.classList.add("task");
      newListItem.setAttribute("data-task-id", newTask.task_id);
      let newListItemLabel = document.createElement("label");
      newListItemLabel.htmlFor = newListItem;
      let newItemText = document.createTextNode(newTask.text);
      let newIcon = document.createElement("i");
      newIcon.classList.add("fa-solid", "fa-square-xmark");
      newIcon.style.color = "red";
      newIcon.id = newTask.task_id;
      document.querySelector(".listTasks").appendChild(newIcon);
      document.querySelector(".listTasks").appendChild(newListItem);
      document.querySelector(".listTasks").appendChild(newListItemLabel);
      newListItemLabel.appendChild(newItemText);
      newListItem.addEventListener("change", doneTask);
      newIcon.addEventListener("click", deleteTask);
    }
  });
};

const doneTask = (e) => {
  if (e.target.checked == true) {
    let index = e.target.attributes[2].value;
    listTasks[index].done = true;
    e.target.nextSibling.style.color = "red";
    e.target.nextSibling.style.textDecoration = "line-through";
    console.log(e);
  } else {
    let index = e.target.attributes[2].value;
    listTasks[index].done = false;
    e.target.nextSibling.style.color = "black";
    e.target.nextSibling.style.textDecoration = "none";
  }
};

const deleteTask = (e) => {
  listTasks.splice(e.target.id, 1);
  listTasks.forEach((index) => {
    // listTasks[index].task_id = index;
    console.log(listTasks[index]);
  });
  //   for (i = 0; i < 2; i++) {
  //     e.target.nextSibling.remove();
  //   }
  //   while (!!e.target.nextElementSibling) {
  //     e.target.nextElementSibling.remove();
  //   }
  //   e.target.remove();

  console.log(listTasks);
};

addTask();
console.log(listTasks);
