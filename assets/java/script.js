//START OF SCRIPT
var currentDay = moment() 

 //Document To Store Description Upon Click
 $(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })



  //Time Function If and Else Statements
     function timeScheduler() {
         //current time
         var currentTime = moment().hour();
         //time loop
         $(".time-block").each(function () {
             //select time
             var timeSelected = preseInt($(this).attr("id").split("hr")[1]);
             //checks time
             if (timeSelected < currentTime) {
                 $(this).removeClass("future");
                 $(this).removeClass("present");
                 $(this).addClass("past");
             }
             else if (timeSelected === currentTime) {
                 $(this).removeClass("future");
                 $(this).removeClass("present");
                 $(this).addClass("future")
             }
             else if (timeSelected === currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present")
            }
         })
     }




//STORAGE OF DATA INPUTED MIDDLE
$("#hr8.description").val(localStorage.getItem("hr1"));
$("#hr9.description").val(localStorage.getItem("hr2"));
$("#hr10.description").val(localStorage.getItem("hr3"));
$("#hr11.description").val(localStorage.getItem("hr4"));
$("#hr12.description").val(localStorage.getItem("hr5"));
$("#hr.description").val(localStorage.getItem("hr6"));
$("#hr.description").val(localStorage.getItem("hr7"));





})