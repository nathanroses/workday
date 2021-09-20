//START OF SCRIPT
var currentDay = moment().format("MN DY YYYY");

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

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
         })
     }
})












//STORAGE OF DATA INPUTED MIDDLE
$("#hr6.description").val(localStorage.getItem("hr6"));
$("#hr7.description").val(localStorage.getItem("hr7"));
$("#hr8.description").val(localStorage.getItem("hr8"));
$("#hr9.description").val(localStorage.getItem("hr9"));
$("#hr10.description").val(localStorage.getItem("hr10"));
$("#hr11.description").val(localStorage.getItem("hr11"));
$("#hr12.description").val(localStorage.getItem("hr12"));
