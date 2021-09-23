var tasks = JSON.parse(localStorage.getItem('tasks')) || {id:"",description:""}; //sets tasks as array as well
console.log(tasks);

var day = function() {
    //generates date-time
    var currentDay = moment().format("dddd MMM D YYYY");
    console.log(currentDay);
    $("#currentDay").text(currentDay);
};
   
var color = function() {
    //generates hour out of 24
    var hour = moment().format("HH");
    console.log(hour);
    //sets color by comparing var hour to the id
    $('.time-block').each(function() {
        var t = $(this).attr('id');
        console.log(t);
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

$(".saveBtn").on('click', function(event){
    event.preventDefault();
    
    var task = $(this).siblings('.description').val();
    var taskHour = $(this).parent().attr('id');
    tasks.id = taskHour;
    tasks.description = task;    

    localStorage.setItem('tasks', JSON.stringify(tasks));
});

day();
color();