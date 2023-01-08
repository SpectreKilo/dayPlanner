// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Function to get current date and Time
function getCurrentDateTime() {
var currentDateTime = dayjs().format("MMMM DD, YYYY hh:mm:ss");
$("#currentDay").text(currentDateTime);  
}
setInterval(function () {
  getCurrentDateTime()
}, 1000);

var currentHour = dayjs().format("HH");
console.log("The current hour is : " + currentHour);


//need to add code to add variable  to use to compare id with current hour
function checkCurrentTimeBlock(){
$(".time-block").each(function () {
  //used parseInt to get the ID and used split to split the id and get the number
  var blockIdAssign = parseInt($(this).attr("id").split("-")[1])
  console.log("The time block is " + blockIdAssign,"current hour is " + currentHour);
  //use if/else to assign id based on current time and remove false ids
  if (blockIdAssign < currentHour) {
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
  } else
  if (blockIdAssign === currentHour) {
    $(this).addClass("present");
    $(this).removeClass("past");
    $(this).removeClass("future");
  } else {
    $(this).addClass("future");
    $(this).removeClass("past");
    $(this).removeClass("present");
  }
})
}

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage? Done
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time? Past and future classes are being applied but present class is not
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this? Done
  //
  // TODO: Add code to display the current date in the header of the page. Done

checkCurrentTimeBlock();
$(".saveBtn").on("click", function () {
  console.log(this);
  var inputText = $(this).siblings(".description").val();
  var inputTime = $(this).parent().attr("id");
  localStorage.setItem(inputTime, inputText);
});

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
