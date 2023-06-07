function twoDigits(d) {
    if (0 <= d && d < 10) return "0" + d.toString();
    if (-10 < d && d < 0) return "-0" + (-1 * d).toString();
    return d.toString();
}
function formatDate(dateToFormat) {
    const date = new Date(dateToFormat);
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    return day + '/' + month + '/' + date.getFullYear();
}
function formatDateHour(dateToFormat) {
    const date = new Date(dateToFormat);
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let hours = date.getUTCHours() < 10 ? '0' + date.getUTCHours() : date.getUTCHours();
    let minutes = date.getUTCMinutes() < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes();
    return day + '/' + month + '/' + date.getFullYear() + ' ' + hours + ':' + minutes;
}
function formatUSADate(dateToFormat) {
    const date = new Date(dateToFormat);
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    return date.getFullYear() + '-' + month + '-' + day;
}
function convertDateToUTC(dateToFormat) {
    const date = new Date(dateToFormat);
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
}

function convertToInput(dateToFormat) {
    const date = new Date(dateToFormat);
    console.log(date, dateToFormat)
    return date.toISOString().slice(0, 16);
}

export default {
    twoDigits,
    formatDate,
    formatDateHour,
    formatUSADate,
    convertDateToUTC,
    convertToInput
};