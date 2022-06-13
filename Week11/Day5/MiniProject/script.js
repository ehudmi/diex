// Mini Project - Special To Do List
// Part I - The List:
// In the HTML file, create a form to add a new task. The form should contain a few inputs:

// Name
// Description
// Start date and time - check the documentation
// End date and time - check the documentation
// A submit button
// Example

//     Name : "Buy food for my party"

//     Description : "All my friends are invited,
//                    everything needs to be perfect"

//     Start date and time : "03/08/2021 14:00:00"

//     End date and time : "05/08/2021 21:00:00"

//     Done : False

// As soon as the user submits the form, the task should be saved.
// By default, the status of the task is “uncompleted” (ie. isCompleted: false)
// IMPORTANT : The todo list items should be stored in your localStorage - You should use an array of objects -
// each object contains a task

// As soon as the user submits the form, the new task will be displayed in another HTML page.
// Every task should be displayed in the following way:

// Name
// Starting date
// How many days left to complete the task.
// Note:
// Example: if a task was set yesterday and the end date is in 5 days, then there are 4 days remaining to complete the task.
// Example: if a task was set to start tomorrow and the end date is in 5 days then there are 6 days remaining to complete the task.

// Part II - Improve The Tasks Displayed :
// Make each task clickable. When clicking on a task you should display the description: you could use some kind of drop down, for example.

// Add a checkbox next to each task. You can check the checkbox to update the status of the task (ie. from uncompleted to completed).

// Requirements:
// The list of tasks should be added to the page in ascending order, according to their start date.
// Display the completed tasks in a different color. For example : red for uncompleted, green for completed.
// If the task end date has passed, without the task being completed, display the task in a different color.

// Part III - More Functionalities :
// Add an “X” button next to each task. The user will be able to delete the task.
// Make sure to show a confirmation popup/modal to the user, to avoid deleting a task by mistake.

// Add an “Edit” button next to each task. The user can edit a task and save the changes.
// Another possibility is to double click on the task to edit the details.
