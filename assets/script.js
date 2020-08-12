$("#date").text(moment().format("MMM Do YYYY"))

var currentHour = moment().format('H')
var currentHour = 12

for (let i = 9; i < 18; i++) {
    if (currentHour > i) {
        $("#hour-" + i).addClass("past")
    }

}
$(".saveBtn").on("click", function () {
    var clickedHour = $(this).val()
    console.log($("#hour-" + clickedHour).val())

})