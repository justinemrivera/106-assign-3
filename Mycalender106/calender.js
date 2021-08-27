important = true;
serverUrl = "https://fsdiapi.azurewebsites.net/";




function toggleImportant(){
    console.log("clicked!")
   
   if(important) {
    $('#important').removeClass("fas").addclass("far");
    important = false;  
   } else {
    $('#important').removeClass("fas").addclass("far");
    important = true;
}
}
function save(){
    console.log("Saving Task");
    let tasktitle = $('#textTitle').val();
    let dueDate = $('#textDate').val();
    let location = $('#textLocation').val();
    let priority = $('#selPriority').val();
    let color = $('#selColor').val();
    let contact = $('#textContact').val();
    let description = $('#textDescription').val();
    //hw finish getting variables 
    //create a new task object
    let Event=new Task(tasktitle,important, dueDate, location, priority, color, contact, description)
    //console log the object}
   

    $.ajax({
        type:"POST",
        url: serverUrl + "api/tasks/",
        data: JSON.stringify(Event), //from obj to string 
        contentType: "application/json",

        success: function(res) {
            console.log("Server says", res);
            let t = JSON.parse(res);//from string to obj
            displayEvent(t);
            },
        error: function() {
            console.log("Error saving task", error);
            }
        
    });
}
function displayEvent(Event){
    let syntax = `<div class="task">
    <h6>${Event.tasktitle}</h6>
    <label>${Event.important}</label>
    <label>${Event.dueDate}</label>
    <label>${Event.location}</label>
    <label>${Event.priority}</label>
    <label>${Event.color}</label>
    <label>${Event.contact}</label>
    <label>${Event.description}</label>
    </div>`;
    $(".pending-tasks").append(syntax);
}

function init() {
    console.log("calender system");
    // call a get from the same url
  // json part
  // travel the array
  // send each objet to display function

//hook events
    $('#important').click(toggleImportant);
    $('#btnSave').click(save);
}
window.onload = init;


