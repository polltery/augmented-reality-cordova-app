// Form methods : on click of toggle button send a post request
$(document).on("click", "#switchBtn", function (e) {

    $('#toggleRedBtn').toggleClass('button-balanced');
    $('#toggleRedBtn').toggleClass('button-assertive');
    $('#toggleGreenBtn').toggleClass('button-balanced');
    $('#toggleGreenBtn').toggleClass('button-assertive');

    e.preventDefault();

    $.ajax({
        type: 'GET',
        url: apiUrl + '/toggle',
        success: function (data) {
            //
        },
        error: function (jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            alert(msg);
        }
    });
});

// Form methods : on click of toggle red button, send a get request
$(document).on("click", "#toggleRedBtn", function (e) {

    $('#toggleRedBtn').toggleClass('button-balanced');
    $('#toggleRedBtn').toggleClass('button-assertive');

    e.preventDefault();

    $.ajax({
        type: 'GET',
        url: apiUrl + '/toggle/led',
        success: function (data) {
            //
        },
        error: function (jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            alert(msg);
        }
    });
});

// Form methods : on click of toggle red button
$(document).on("click", "#toggleGreenBtn", function (e) {

    $('#toggleGreenBtn').toggleClass('button-balanced');
    $('#toggleGreenBtn').toggleClass('button-assertive');

    e.preventDefault();

    $.ajax({
        type: 'GET',
        url: apiUrl + '/toggle/led2',
        success: function (data) {
            //
        },
        error: function (jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            alert(msg);
        }
    });
});


$(document).on("change", "#brightnessControl", function (e) {

    e.preventDefault();

    var brightnessValue = 255*(0.01*($("#brightnessControl").val()));

        $.ajax({
        type: 'GET',
        url: apiUrl + '/brightness/'+brightnessValue,
        success: function (data) {
            //
        },
        error: function (jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            alert(msg);
        }
    });
});