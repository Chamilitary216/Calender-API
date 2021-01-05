// Displays the current Date and Time
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
// Saves inputed data

$(".saveBtn").on("click", function(){
    console.log(.saveBtn)
    var index = $(".saveBtn").index(this);
    task[index] = $(this).parent().find(".taskItem").text();
    localStorage.setItem("task", JSON.stringify(task));

});