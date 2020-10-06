console.log('Here are all the available people:', people);

let randomPerson = '';

$(document).ready(onReady);

function onReady() {
    appendPeople();
    pickRandom();
    $('#githubPeople').on('click', '.clickPic', clickedPerson)
}

function clickedPerson () {
    let clickedPerson = $(this).data('name');
    if (clickedPerson == randomPerson) {
        alert(`Yes, this is ${randomPerson}!`);
        pickRandom();
    } else {
        alert('Try Again!')
    }
}

function appendPeople() {
    for (let i = 0; i < people.length; i++) {  
        $('#githubPeople').append(`
            <li data-name=${people[i].name} class="clickPic">
                <img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}"/>
            </li>
        `);
    }
}

function pickRandom() {
    let randNum = randomNumber(0, people.length - 1);

    randomPerson = people[randNum].name;

    $('#person').empty().append(randomPerson);
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}