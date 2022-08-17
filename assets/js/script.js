// variables
$(document).ready(function() {

    // functions
    function handleSaveTask() {
        // get the text
        let textValue = $(this).siblings('.task').val();
        // get the time
        let timeValue = $(this).parent().attr('data-time');

        // save textarea to local storage
        localStorage.setItem(timeValue, textValue);
    }

    // color the rows based on hour
    function colorRows() {
        // current hour
        let currentHour = moment().hours();
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

    // save button event for each individual save
    $('#seven').on('click', handleSaveTask);
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


    // individual keys and values added back to local storage
    $("#hour-seven .task").val(localStorage.getItem("7"));
    $("#hour-eight .task").val(localStorage.getItem("8"));
    $("#hour-nine .task").val(localStorage.getItem("9"));
    $("#hour-ten .task").val(localStorage.getItem("10"));
    $("#hour-eleven .task").val(localStorage.getItem("11"));
    $("#hour-twelve .task").val(localStorage.getItem("12"));
    $("#hour-thirteen .task").val(localStorage.getItem("13"));
    $("#hour-fourteen .task").val(localStorage.getItem("14"));
    $("#hour-fifteen .task").val(localStorage.getItem("15"));
    $("#hour-sixteen .task").val(localStorage.getItem("16"));
    $("#hour-seventeen .task").val(localStorage.getItem("17"));
    $("#hour-eighteen .task").val(localStorage.getItem("18"));
    $("#hour-nineteen .task").val(localStorage.getItem("19"));

    // !!!! HERE TO LINE 77 IS TEST FOR MULTI-FUNCTION BUTTON !!!!
    let reloadPage = function() {
        window.location.reload();
    }

    let clearHistory = function() {
        $('clearBtn').on('click', localStorage.clear());
    }
    // // button to clear local storage
    $(function() {
        $('clearBtn').on('click', function() {
            reloadPage();
            clearHistory();
        });
    });
    //!!!! END TEST FUNCTION, DELETE LATER !!!!

    // // button to clear local storage

    // loop through rows and add a class
    colorRows();
});