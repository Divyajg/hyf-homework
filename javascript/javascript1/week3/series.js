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
const daysInLifespan = (leapyearsInLifespan * 366 + normalyearsInLifespan * 365);
const hoursInLifespan = daysInLifespan * 24;
const minInLifespan = exactLifespan = hoursInLifespan * 60;


function percentage() {
    let totalTimeSpent = 0;
    for (let i = 0; i < seriesDurations.length; i++) {

        let timeSpent = [];
        timeSpent[i] = (seriesDurations[i].days * 24 * 60 + seriesDurations[i].hours * 60 + seriesDurations[i].minutes);

        let timeSpentInPercentage = [];
        timeSpentInPercentage[i] = ((timeSpent[i] / exactLifespan) * 100).toFixed(3);

        totalTimeSpent += timeSpent[i];
        console.log(seriesDurations[i].title + " took " + timeSpentInPercentage[i] + "% of my life.")

    }

    let resultPercentage = ((totalTimeSpent / exactLifespan) * 100).toFixed(3);
    return resultPercentage;
}
const percentageOfTime = percentage(seriesDurations);
console.log("In total that is " + percentageOfTime + "% of my life.");