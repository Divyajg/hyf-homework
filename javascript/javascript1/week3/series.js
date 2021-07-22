const seriesDurations = [{
        title: "Modern Family",
        days: 4,
        hours: 8,
        minutes: 9,
    },
    {
        title: "Pretty Little Liars",
        days: 8,
        hours: 22,
        minutes: 11,
    },
    {
        title: "Dark",
        days: 9,
        hours: 21,
        minutes: 9,
    },
];
const avgLifespan = 80;
const leapyearsInLifespan = parseInt(avgLifespan / 4);
const normalyearsInLifespan = (avgLifespan - leapyearsInLifespan);
const lifespanInDays = (leapyearsInLifespan * 366 + normalyearsInLifespan * 365);
const lifespanInHours = lifespanInDays * 24;
const lifespanInMinutes = lifespanInHours * 60;


function percentageOfTimeSpentOnSeries(seriesDurations) {
    let totalTimeSpent = 0;
    for (let i = 0; i < seriesDurations.length; i++) {

        let timeSpent = [];
        timeSpent[i] = (seriesDurations[i].days * 24 * 60 + seriesDurations[i].hours * 60 + seriesDurations[i].minutes);

        let timeSpentInPercentage = [];
        timeSpentInPercentage[i] = ((timeSpent[i] / lifespanInMinutes) * 100).toFixed(3);
        totalTimeSpent += timeSpent[i];

        console.log(seriesDurations[i].title + " took " + timeSpentInPercentage[i] + "% of my life.")

    }

    let resultPercentage = ((totalTimeSpent / lifespanInMinutes) * 100).toFixed(3);
    return resultPercentage;
}
const percentageOfTime = percentageOfTimeSpentOnSeries(seriesDurations);
console.log("In total that is " + percentageOfTime + "% of my life.");