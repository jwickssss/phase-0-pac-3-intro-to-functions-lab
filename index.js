// Function for 'string' to upper case
function shout(string) {
    return string.toUpperCase();
}

// Function for 'string' to lower case
function whisper(string) {
    return string.toLowerCase();
}

// Function for 'string' to be upper case and printed via log
function logShout(string) {
    console.log(string.toUpperCase());
}

// Function for 'string' to be lower case and printed via log
function logWhisper(string) {
    console.log(string.toLowerCase());
}

// sayHiToHeadphonedRoommate function
function sayHiToHeadphonedRoommate(string) {
    const cantHear = "I can't hear you!";
    const canHear = "YES INDEED!";
    const foodHear = "I would love to!"

    if (string.toLowerCase() === string) {
        return cantHear;
    }

    else if (string.toUpperCase() === string) {
        return canHear;
    }

    else if ("Let's have dinner together!" === string) {
        return foodHear;
    }
}

