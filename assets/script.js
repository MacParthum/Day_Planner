$("#date").text(moment().format("MMM Do YYYY"))

// var currentHour = moment().format('H')
var currentHour = 12

for (let i = 9; i < 18; i++) {
    if (currentHour < i) {
        $("#hour-" + i).addClass("future")
    }
    else if(parseInt(currentHour) === i){
        $("#hour-" + i).addClass("present")
    }
    var localStore = localStorage.getItem("hour-"+i)
    if(localStore){
        $("#hour-"+i).text(localStore)
    }
}
$(".saveBtn").on("click", function () {
    var clickedHour = $(this).val()
   var textAreaContent = $("#hour-" + clickedHour).val()
    localStorage.setItem("hour-"+clickedHour,textAreaContent)

})