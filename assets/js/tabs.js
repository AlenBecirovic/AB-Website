/*
 .----------------.  .----------------.  .----------------.  .----------------. 
| .--------------. || .--------------. || .--------------. || .--------------. |
| |     ______   | || |     ____     | || |     ____     | || |   _____      | |
| |   .' ___  |  | || |   .'    `.   | || |   .'    `.   | || |  |_   _|     | |
| |  / .'   \_|  | || |  /  .--.  \  | || |  /  .--.  \  | || |    | |       | |
| |  | |         | || |  | |    | |  | || |  | |    | |  | || |    | |   _   | |
| |  \ `.___.'\  | || |  \  `--'  /  | || |  \  `--'  /  | || |   _| |__/ |  | |
| |   `._____.'  | || |   `.____.'   | || |   `.____.'   | || |  |________|  | |
| |              | || |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' || '--------------' | REMOVE ME 
 '----------------'  '----------------'  '----------------'  '----------------' 
*/

$(document).ready(function () {
    // find and add click events to the tabs
    $(".pricing-tabs").children("li").click(function (e) {
        // hide all tables 
        $(".pricing-table").find("table").addClass("hide");
        // reveal the table that matches our clicked index
        $(".pricing-table table").eq($(this).index()).removeClass("hide");
    });
});