

// Function to get current date and Time
function getCurrentDateTime() {
var currentDateTime = dayjs().format("dddd, MMMM DD, YYYY hh:mm:ss");
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
  //triple equal sign doesn't work but double does
  if (blockIdAssign == currentHour) {
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
