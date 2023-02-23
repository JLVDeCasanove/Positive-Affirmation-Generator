

//Takes a string containing afirst name as a parameter and logs a random positive affirmation sentance to the console.
const PositiveAffirmationMachine = (fName) => {
    
    //This array holds the positive words that will be placed into a template to complete a sentance.
    const posWords = [
        'amazing',
        'wonderful',
        'beautiful',
        'intelligent',
        'capable',
        'worthy',
        'fun',
        'kind',
        'humble',
        'confident',
        'successful',
        'strong',
        'loving',
        'caring',
        'interesting',
        'compassionate',
        'warm',
        'generous',
        'determined',
        'resilliant'
    ];

    //Selects 2 random words from the array
    let word1 = '';
    let word2 = '';
    let wordsStringLength = posWords.length;
    word1 = posWords[Math.floor(Math.random() * wordsStringLength)];
    do {
        word2 = posWords[Math.floor(Math.random() * wordsStringLength)];
    } while (word1 === word2);

    // This array holds the templates for the  positive affirmation message
    const posAffTemplates = [
        `My name is ${fName}. I am ${word1}, ${word2}, and ready for the day!`,
        `I am ${fName}! I am ${word1} and ${word2}!`,
        `When you are feeling sad, ${fName}, remember you are ${word1}!`,
        `${fName} deserves to be happy because ${fName} is ${word1} and ${word2}`,
        `Believe in yourself ${fName}! You are ${word1} and ${word2}!`
    ];

    //This picks the templat4e at random
    let tempStringLength = posAffTemplates.length;
    let template = posAffTemplates[Math.floor(Math.random() * tempStringLength)];
    
    console.log(`repeat after me...`);
    console.log(template);
}

PositiveAffirmationMachine('Joe');