// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// Save Button

$(".saveBtn").on("click", function() {
    var index = $("saveBtn").index(this);
    tasks[index] = $(this).parent().find(".taskItem").text();
 //saves to local storage   
    localStorage.setItem("tasks" , JSON.stringify(tasks));

});

// This is how it determines the time block for present, past and future
$.each(timeHour, function (i, hour) {
    var hourID = parseInt($(this).attr("id"));
    if (hourID === now) {
        $(this).next().addClass("present");
    } else if (hourID < now) {
        $(this).next().addClass("past");
    } else if (hourID > now) {
        $(this).next().addClass("future");
    }
});

var timeHour = $(".hour");
var now = parseInt(moment().format("H"));

//Current moment of the day to determine if time block is present, past or future.

var timeBlock = $(".hour");
var now = parseInt(moment().format("H"));
