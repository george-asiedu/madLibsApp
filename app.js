"use strict";

// Total user questions
let questionTotal = 28;

// Question counter (questions left to be answered)
let questionCounter = 0;

// questions logic
let textPhrase = `Please enter`;
let questionArray = [
    `${textPhrase} a year ("2000", "2001", etc)`,
    `${textPhrase} your full name`,
    `${textPhrase} your computer's model`,
    `${textPhrase} the name of your school`,
    `${textPhrase} a word for the people you know (friends, family, etc)`,
    `${textPhrase} a type of bug`,
    `${textPhrase} a part of your computer in plural tense`,
    `${textPhrase} your profession in plural tense`,
    `${textPhrase} your favorite book`,
    `${textPhrase} any verb in past tense`,
    `${textPhrase} another verb in past tense`,
    `${textPhrase} an adjective`,
    `${textPhrase} a pronoun`,
    `${textPhrase} a noun`,
    `${textPhrase} a verb`,
    `${textPhrase} your birthday in full`,
    `${textPhrase} a lucky number`,
    `${textPhrase} a noun in plural tense`,
    `${textPhrase} the name of any museum you know`,
    `${textPhrase} a city, state`,
    `${textPhrase} an adjective`,
    `${textPhrase} a physics word (noun)`,
    `${textPhrase} your full name`,
    `${textPhrase} a number`,
    `${textPhrase} a type of document (poem, essay, etc)`,
    `${textPhrase} an error`,
    `${textPhrase} the name of any old machine`,
    `${textPhrase} a tool used in hunting`,
    `${textPhrase} a verb kin an infinitive tense`
];

let userInputs = [];
for (let i = questionTotal; i >= 0; i--) {
    //console.log(i);
    console.log(
        questionArray[questionCounter] + `... (${questionTotal} questions left)`
        );
    userInputs.push (
        prompt(
            questionArray[questionCounter] + `... (${questionTotal} questions left)`
        )
    );
    console.log(userInputs);
    questionCounter++;
    // console.log(`This is the current "questionCounter" variable (it should go up):`);
    // console.log(questionCounter);
    questionTotal--;
    // questionsLeft = `; (${questions} questions left)`;
    // console.log(`This is the current "Questions" variable (it should go down ... and be the same as the next "i"`);
    // console.log(questionTotal);
}

// User story
let originalStory = `<h2>In ${userInputs[0]}, computer pioneer ${userInputs[1]} 
                    found herself working on a ${userInputs[2]} at ${userInputs[3]}. 
                    It was at this time that ${userInputs[4]} discovered a ${userInputs[5]} 
                    had gotten trapped in one of the ${userInputs[6]} and was causing an error. 
                    The ${userInputs[7]} removed the ${userInputs[5]} and taped it in their 
                    ${userInputs[8]}, identifying it as the "first actual case of bug being 
                    ${userInputs[9]}."</h2>
                    <h2>Word got out that the team had "${userInputs[10]}" the ${userInputs[2]}, 
                    hence leading to the phrase’s use in computing and ${userInputs[11]} culture. 
                    ${userInputs[1]} readily admitted that ${userInputs[12]} was not there when 
                    the incident occurred, but that didn’t stop it from becoming one of ${userInputs[1]}'s 
                    favorite ${userInputs[13]}s. ${userInputs[1]} ${userInputs[14]} of natural causes on 
                    January 1, ${userInputs[15]}, at the age of ${userInputs[16]}. For those interested, 
                    the offending ${userInputs[5]}'s ${userInputs[17]}, along with the original ${userInputs[8]}, 
                    can be seen at the ${userInputs[18]} in ${userInputs[19]}.</h2>
                    <h2>And while this is the "${userInputs[20]}" use case of finding a ${userInputs[2]} ${userInputs[5]}, 
                    the original use of the word dates further back in ${userInputs[21]} to ${userInputs[22]}, who in an 
                    ${userInputs[23]} ${userInputs[24]} used the term "${userInputs[5]}" to refer to a technological 
                    ${userInputs[25]}. While he worked on the quadruplex ${userInputs[26]}, he said it needed a 
                    "${userInputs[5]} ${userInputs[27]} to ${userInputs[28]} properly."</h2>`;

console.log(originalStory);

//End of user inputs
alert(
    "All done! Ready for your story?"
);

// Output
console.log(originalStory);
document.write(originalStory);