'use strict';

let personalityTrait1;
let personalityTrait2;
let personalityTrait3;

// Because the goal is to generate miscreants, the plan is to have 'evil' traits be in the majority.
// However, I don't want this to be merely a grab bag of steoretypes, so I have options for 'neutral' and even 'good' traits as well.
// This doesn't mean that all these traits have an equal chance of being selected; evil options will predominate,
// with a smaller chance of a neutral trait appearing and much smaller - but still possible - chance of a good trait being applied.

const personalityEvil = ['angry', 'malicious', 'boastful', 'loud', 'deceitful', 'sinister', 'brutal', 'soulless'];
const personalityNeutral = ['nervous', 'quick-witted', 'comical', 'goofy', 'cheerful', 'eager'];
const personalityGood = ['friendly', 'empathetic'];

console.log(personalityEvil.length);

function generateTraits() {

    let GoodNeutralEvil = '';

    let chanceofGood = Math.floor(Math.random() * 25);
    console.log(`Chance of Good = ${chanceofGood}`);
    let chanceofNeutral = Math.floor(Math.random() * 10);
    console.log(`Chance of Neutral = ${chanceofNeutral}`);


    if (chanceofGood === 0) {
        // Go with a 'good' trait
        GoodNeutralEvil = 'good';
    } else if (chanceofNeutral === 0) {
        // Go with a 'neutral' trait
        GoodNeutralEvil = 'neutral';
    } else {
        // Go with a 'evil' trait
        GoodNeutralEvil = 'evil';
    }

    console.log(GoodNeutralEvil);

    if (GoodNeutralEvil === 'good') {
        personalityTrait1 = personalityGood[Math.floor(Math.random() * personalityGood.length)];
    } else if (GoodNeutralEvil === 'neutral') {
        personalityTrait1 = personalityNeutral[Math.floor(Math.random() * personalityNeutral.length)];
    } else if (GoodNeutralEvil === 'evil') {
        personalityTrait1 = personalityEvil[Math.floor(Math.random() * personalityEvil.length)];
    }



    console.log(personalityTrait1);
document.getElementById("personality-trait-1").innerText = personalityTrait1;

}