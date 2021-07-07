// Event application: ----------------------------------------------------------------------------------------------------------------------

const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

function getEventWeekDay(today, noOfDays) {
    if (today === 'sunday') {
        eventDay = noOfDays % 7;
    } else if (today === 'monday') {
        eventDay = (1 + noOfDays) % 7;
    } else if (today === 'tuesday') {
        eventDay = (2 + noOfDays) % 7;
    } else if (today === 'wednesday') {
        eventDay = (3 + noOfDays) % 7;
    } else if (today === 'thursday') {
        eventDay = (4 + noOfDays) % 7;
    } else if (today === 'friday') {
        eventDay = (5 + noOfDays) % 7;
    } else {
        eventDay = (6 + noOfDays) % 7;
    }
    eventWeekDay = weekdays[eventDay];
    console.log('Today is ' + today + ' and the event is in ' + noOfDays + ' days; i.e on: ' + eventWeekDay);
}
getEventWeekDay('friday', 2);
getEventWeekDay('tuesday', 15);