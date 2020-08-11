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

        // Created second column textarea 
        var colTwo = $('<div class="col-sm-8 present"><textarea id=text${i} class="description" placeholder="Write here"></textarea>');

        //create column 3
        var colThree = $('<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>');

        // append col to row
        row.append(colOne);
        row.append(colTwo);
        row.append(colThree);
        // Adds rows to the container
        $(".container").append(row);

        getLocalStorage(i);
    }
          // sets hours in first row
    function formatTime(hours) {
        var amPm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + amPm;
    }
    formatTime();


});