// Greeting Builder

// function to get the first and last name of the person

function formatName(firstName, lastName) {
    return firstName + " " + lastName;
}

// function to get the time of day

function getGreeting(timeOfDay) {
    if(timeOfDay === "morning") {
        return "Good morning";
    } else if(timeOfDay === "afternoon") {
        return "Good afternoon";
    } else {
        return "Good evening";
    }
}

// function to get the above two functions as input and return the final greeting as output

function createGreeting(firstName, lastName, timeOfDay) {
    console.log(`${getGreeting(timeOfDay)}, ${formatName(firstName, lastName)}`);
}


console.log(createGreeting('Alok', 'Barman', 'morning'));
console.log(createGreeting('Annu', 'Singh', 'afternoon'));
console.log(createGreeting('Alok', 'Barman', 'morning'));

