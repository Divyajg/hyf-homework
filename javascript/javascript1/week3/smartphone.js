let activities = [];

function addActivity(activity, duration) {
    let obj = {
        "date": new Date().toISOString().slice(0, -14),
        "activity": activity,
        "duration": duration,
    }
    activities.push(obj);
}

addActivity("Youtube", 30);
addActivity("Facebook", 20);
addActivity("Google-news", 100);
addActivity("Instagram", 60);

console.log(activities);

function showStatus(activities) {
    let totalActivities = activities.length;
    let totalDuration = 0;
    const usageLimit = 150;


    if (activities != 0) {
        for (let i = 0; i < activities.length; i++) {
            totalDuration += activities[i].duration;
        }

        let remainingMinutes = usageLimit - totalDuration;
        let crossedMinutes = totalDuration - usageLimit;

        if (totalDuration === usageLimit) {
            console.log("You have reached your limit, no more smartphoning for you!");
        } else if (totalDuration > usageLimit) {
            console.log("You have crossed " + crossedMinutes + "mins of your usage limit!");
        } else {
            console.log("You are " + remainingMinutes + "mins away to your usage limit!");
        }

        return "You have been engaged with  " + totalActivities + " activities. They amount to " + totalDuration + " min. of usage";

    } else {
        return "Add some activities before calling showStatus";
    }

}

console.log(showStatus(activities));

//-----------------------------------------------------------------------------------------------

function mostSpentActivity(activities) {
    let result = 0;
    let mostSpentActivity;
    for (let i = 0; i < activities.length; i++) {
        if (result < activities[i].duration) {
            result = activities[i].duration;
            mostSpentActivity = activities[i].activity;
        } else {
            result = result;
        }
    }

    return mostSpentActivity;
}
const mostSpent = mostSpentActivity(activities);
console.log("You are spending most of your time on " + mostSpent);