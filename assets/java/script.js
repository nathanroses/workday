//START OF SCRIPT
var currentDay = moment() 


  //Time Function If and Else Statements
     function timeScheduler() {
         //current time
         var currentTime = moment().hour();
         //time loop
         $(".time-block").each(function () {
             //select time
             var timeSelected = preseInt($(this).attr("id").split("hr")[6]);
             //checks time
             if (timeSelected < currentTime) {
                 $(this).removeClass("future");
                 $(this).removeClass("present");
                 $(this).addClass("past");
             }
             else if (timeSelected === currentTime) {
                 $(this).removeClass("future");
                 $(this).removeClass("present");
                 $(this).
             }
         })
     }

 //Document To Store Description Upon Click
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

})












//STORAGE OF DATA INPUTED MIDDLE
$("#hr8.description").val(localStorage.getItem("hr8"));
$("#hr9.description").val(localStorage.getItem("hr9"));
$("#hr10.description").val(localStorage.getItem("hr10"));
$("#hr11.description").val(localStorage.getItem("hr11"));
$("#hr12.description").val(localStorage.getItem("hr12"));
$("#hr.description").val(localStorage.getItem("hr"));
$("#hr.description").val(localStorage.getItem("hr"));
