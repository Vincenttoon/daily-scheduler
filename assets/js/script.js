// variables
$(document).ready(function() {

    // functions
    function handleSaveTask() {
        // get the text
        let textValue = $(this).siblings('.task').val();
        // get the time
        let timeValue = $(this).parent().attr('data-time');

        console.log(textValue);
        console.log(timeValue);

        // save textarea to local storage
        localStorage.setItem(timeValue, textValue);
    }

    // color the rows based on hour
    function colorRows() {
        // current hour
        let currentHour = moment().hours();
        console.log(currentHour);
        // loop through rows add color class based on time
        $('.row').each(function() {
            let rowHour = parseInt($(this).attr('data-time'));
            if (rowHour < currentHour) {
                $(this).addClass('past');
            } else if (rowHour === currentHour) {
                $(this).addClass('present');
            } else {
                $(this).addClass('future');
            }
        })

    }

    function refreshStorage() {
        let loadPage = JSON.parse(window.localStorage(timeValue));

    }

    // events
    // save button event
    $('#eight').on('click', handleSaveTask);
    $('#nine').on('click', handleSaveTask);
    $('#ten').on('click', handleSaveTask);
    $('#eleven').on('click', handleSaveTask);
    $('#twelve').on('click', handleSaveTask);
    $('#thirteen').on('click', handleSaveTask);
    $('#fourteen').on('click', handleSaveTask);
    $('#fifteen').on('click', handleSaveTask);
    $('#sixteen').on('click', handleSaveTask);
    $('#seventeen').on('click', handleSaveTask);
    $('#eighteen').on('click', handleSaveTask);
    $('#nineteen').on('click', handleSaveTask);

    // runs on page load
    // populate textarea with local storage



    // loop through rows and add a class
    colorRows();
});