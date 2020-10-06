console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
    appendPeople();
    pickRandom();
}

function appendPeople() {
    for (let i = 0; i < people.length; i++) {  
        $('#githubPeople').append(`
            <li>
                <img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}">
            </li>
        `);
    }
}

function pickRandom() {
    let randNum = randomNumber(0, people.length - 1);

    $('#person').append(people[randNum].name);
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}