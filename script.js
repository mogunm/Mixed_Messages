let generateRandom = num => {
    // return randoom number baseed on length of array
    return Math.floor(Math.random() * num);
}

let messageComponents = {
    astrology: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'],
    chineseZodiac: ['Rooster', 'Dog', 'Pig', 'Rat',' Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey'],
    inspo: ['Don\'t regret the past, just learn from it.', 'Whatever you are, be a good one.', 'Learn from yesterday, live for today, hope for tomorrow.', 'Life is a one time offer, use it well.', 'Life is short. Live passionately.']
}

// array to hold the object props
let message = [];

for (let prop in messageComponents) {
    // random index for the nested arrays.
    let index = generateRandom(messageComponents[prop].length);
    
    // use object properties to customize the message.
    switch (prop) {
        case 'astrology':
            message.push(`Your astrology sign is ${messageComponents[prop][index]}`);
            break;
        case 'chineseZodiac':
            message.push(`Your chinese zodiac sign is ${messageComponents[prop][index]}`);
            break;
        case 'inspo':
            message.push(`Here is some inspiration: ${messageComponents[prop][index]}`);
            break;
        default:
            message.push('This is random and should not happen ...... oops');
            break;
    }
}

let format = message => {
    
    // fomrat the messages to include new lines for each pushed seperate message.
    const format = message.join('\n');
    console.log(format);
}

format(message);