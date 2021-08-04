let userName;
let myTodoList = [];

function getReply(command) {

    let tempCommand = command.split(' ');

    //givining a name-------------------------------------------------------------

    if (command.toLowerCase().includes('hello')) {

        username = tempCommand[tempCommand.length - 1];

        if (username === userName) {

            console.log(username + ' already existed in the group, Thank you!!');

        } else {
            userName = username;
            console.log('Nice to meet you ' + userName);
        }

        //calling the given name---------------------------------------------------------

    } else if (command.toLowerCase().includes('what is my name')) {
        if (username != '') {
            console.log('Your name is ' + username);
        } else {
            console.log("Sorry, I don't know, Please provide your name");
        }

        //ading activity to todo list-----------------------------------------------

    } else if (command.toLowerCase().includes('add' && 'to my todo')) {

        let activity = tempCommand[1];

        for (let i = 2; i < tempCommand.length - 3; i++) {
            activity = activity + ' ' + tempCommand[i];
        }
        myTodoList.push(activity);
        console.log(myTodoList);

        //remove activity from todo list-------------------------------------------------

    } else if (command.toLowerCase().includes('remove' && 'from my todo')) {

        let activity = tempCommand[1];

        for (let i = 2; i < tempCommand.length - 3; i++) {
            activity = activity + ' ' + tempCommand[i];
        }

        let x;
        for (let i = 0; i < myTodoList.length; i++) {
            if (myTodoList[i] === activity) {
                x = i;
            }
        }

        myTodoList.splice(x, 1);

        console.log('Removed ' + activity + ' from your todo list.');
        console.log(myTodoList);

        //displaying activities in the todo list--------------------------------------

    } else if (command.toLowerCase().includes('what' && 'on my todo')) {

        console.log(myTodoList);

        //display today's date-----------------------------------------------------

    } else if (command.toLowerCase().includes('what da' && 'today')) {

        let objToday = new Date(),

            dayOfMonth = objToday + (objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate(),

            months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),

            curMonth = months[objToday.getMonth()],

            curYear = objToday.getFullYear();

        let today = dayOfMonth + ". of " + curMonth + " " + curYear;
        console.log('Today is ' + today);

        //Simple calculator with arithmetic--------------------------------------------

    } else if (command.toLowerCase().includes('what is')) {
        const mathCommand = command.match(/(\d+)\s*([\+\-\*\/\%])\s*(\d+)/);

        if (mathCommand) {
            if (mathCommand[2] === "+") {
                result = parseInt(mathCommand[1]) + parseInt(mathCommand[3]);

            } else if (mathCommand[2] === "-") {
                result = parseInt(mathCommand[1]) - parseInt(mathCommand[3]);

            } else if (mathCommand[2] === "*") {
                result = parseInt(mathCommand[1]) * parseInt(mathCommand[3]);

            } else if (mathCommand[2] === "/") {
                result = parseInt(mathCommand[1]) / parseInt(mathCommand[3]);

            } else if (mathCommand[2] === "%") {
                result = parseInt(mathCommand[1]) % parseInt(mathCommand[3]);
            }
            console.log('The result is ' + result);
        } else {
            console.log('Given command cannot be processed');
        }

        //Setting a timer in minutes----------------------------------------------------

    } else if (command.toLowerCase().includes('timer')) {

        if (command.match(/\d+/) && command.includes('minutes')) {

            let timer = tempCommand[tempCommand.length - 2];
            console.log('Timer is set for ' + timer + ' minutes');
            let timeInMilliSeconds = timer * 60 * 1000;

            setInterval(() => {

                console.log('Timer done for ' + timer + ' minutes!!');
            }, timeInMilliSeconds);
        } else {
            console.log("Please provide the timer in right format!!");
        }
    }
}


getReply("Hello i am Benjamin");
getReply("Hello i am Benjamin");
getReply("What is my name?");
getReply('Add singing in the shower to my todo');
getReply("Add finish homework to my todo");
getReply("Add fishing to my todo");
getReply("Add buy groceries to my todo");
getReply("Remove fishing from my todo");
getReply('What is on my todo?');
getReply('What day is it today?'); // it can be both day or date!
getReply('What date is it today?');
getReply('what is  3 + 3');
getReply('what is 4 * 12');
getReply('what is  8 - 3');
getReply('what is  8 / 3');
getReply('what is  6 % 5');
getReply("Timer set for  minutes");
getReply("Timer set for 1 minutes");
getReply("Timer set for 4 minutes");