// calendar

var month_olypic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var month_name_list = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// get controls' id
var div_day = document.getElementById("day");
var div_month = document.getElementById("month");
var a_last_month = document.getElementById("last-month");
var a_next_month = document.getElementById("next-month");
var days_list = document.getElementById("days-list")

// get current date
var current_date = new Date();
var current_year = current_date.getFullYear();
var current_month = current_date.getMonth();
var current_day = current_date.getDay();


function monthStart(month, year) {
    if (month < 0) {
        month = 11
    }
    if (month > 11) {
        month = 0;
    }
    var tempData = new Date(year, month, 1);
    return tempData.getDay();
}

function numberDays(month, year) {
    if (month < 0) {
        month = 11;
        year--;
    }
    if (month > 11) {
        month = 0;
        year++;
    }
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return month_olypic[month];
    }
    else {
        return month_normal[month];
    }
}

function refreshCalendar() {
    var totalDay = numberDays(current_month, current_year);
    var lastTotalDay = numberDays(current_month - 1, current_year);
    var firstDay = monthStart(current_month, current_year);
    var nextFirstDay = monthStart(current_month + 1, current_year);
    var strDaysList = "<tr>";
    var tempNum = 0;
    for (var i = 0; i < firstDay; i++) {
        tempNum = lastTotalDay - firstDay + i + 1;
        strDaysList += "<td class='last-month-days'>" + tempNum + "</td>";
    }
    var tempClass;
    for (var i = 1; i <= totalDay; i++) {
        if (current_year === current_date.getFullYear() && current_month === current_date.getMonth() && i == current_day) {
            strDaysList += "<td class='current-day'>" + i + "</td>";
        }
        else {
            strDaysList += "<td>" + i + "</td>";
        }
        if ((i + firstDay) % 7 === 0) {
            strDaysList += "</tr>";
        }
    }
    for (var i = 1; i <= 7 - nextFirstDay; i++) {
        if (nextFirstDay === 0) {
            break;
        }
        strDaysList += "<td class='next-month-days'>" + i + "</td>";
    }
    strDaysList += "</tr>";

    days_list.innerHTML = strDaysList;
    div_day.innerHTML = current_day;
    div_month.innerHTML = month_name_list[current_month] + ", " + current_year;
}

refreshCalendar();

a_last_month.onclick = function (e) {
    e.preventDefault();
    current_month--;
    if (current_month < 0) {
        current_year--;
        current_month = 11;
    }
    refreshCalendar();
}

a_next_month.onclick = function (e) {
    e.preventDefault();
    current_month++;
    if (current_month > 11) {
        current_year++;
        current_month = 0;
    }
    refreshCalendar();
}
