function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
    }
}

$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    
    for (let i = 9; i < 18; i++) {

        // create a row
        var row = $(`<div data-time=${i} id='${i}' class="row">`);

        // Create the time column
        var colOne = $('<div class="col-sm-2"> <p class="hour">' + formatTime(i) + '</p>');

        //create column 2

        // append col to row
        row.append(colOne);

        // last step add rows to container
        $(".container").append(row);

        getLocalStorage(i);
    }
    // sets # hours in the column 9am 10am .....
    function formatTime(hours) {
        var amPm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + amPm;
    }
    formatTime();


});