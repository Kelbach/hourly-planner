// //im bad with arrays for some reason
// var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//generates hour out of 24
var hour = moment().format("HH");
var clock = moment().format("h:mm:ss a");
console.log(clock);

var day = function() {
    //generates date-time
    var currentDay = moment().format("dddd MMM D YYYY");
    console.log(currentDay);
    $("#currentDay").text(currentDay);
};
   
var color = function() {
    //sets color by comparing var hour to the id
    $('.time-block').each(function() {
        var t = $(this).attr('id');

        if (t < hour) {
            $(this).addClass("past");
        }
        if (t === hour) {
            $(this).addClass("present");
        } 
        if (t > hour) {
            $(this).addClass("future");
        }
    });
};

//save buttons
$(".saveBtn").on('click', function(event){
    event.preventDefault();
    
    //loop for saving tasks
    $('.time-block').each(function() {
        var task = $(this).children('.description').val();
        var taskHour = $(this).attr('id');

        // tasks.id = taskHour;
        // tasks.description = task;
        // console.log(tasks.id);
        // console.log(tasks.description);
        
        localStorage.setItem(taskHour, task);
    });
});

//loads localStorage data by KEY once the page loads
$(document).ready(function() {
    $('.time-block').each(function() {
        var timeId = $(this).attr('id');
        //grabs localStorage values by their KEY
        var localVal = localStorage.getItem(timeId);
        // console.log(timeId);
        // console.log(localVal);
        
        //puts local values into .description textbox
        $(this).children('.description').text(localVal);
    });
});

//reloads every 5 minutes to keep task urgency up to date
window.setInterval('refresh()', 5*60*1000);
function refresh() {
    location.reload();
};

day();
color();