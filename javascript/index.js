'use strict';

let personalityTrait1;
let personalityTrait2;
let personalityTrait3;

let indexToDelete;

// Because the goal is to generate miscreants, the plan is to have 'evil' traits be in the majority.
// However, I don't want this to be merely a grab bag of steoretypes, so I have options for 'neutral' and even 'good' traits as well.
// This doesn't mean that all these traits have an equal chance of being selected; evil options will predominate,
// with a smaller chance of a neutral trait appearing and much smaller - but still possible - chance of a good trait being applied.

const personalityEvilFullList = ['angry', 'malicious', 'boastful', 'loud', 'deceitful', 'sinister', 'brutal', 'soulless', 'cunning', 'traitorous', 'quick-tempered'];
const personalityNeutralFullList = ['nervous', 'quick-witted', 'comical', 'goofy', 'cheerful', 'eager', 'dutiful', 'thorough', 'flighty', 'muttering'];
const personalityGoodFullList = ['friendly', 'empathetic', 'conscientious', 'merciful', 'supportive', 'fair-minded'];

const physicialFullList1 = ['gigantic', 'tall', 'medium', 'short', 'tiny'];
const physicialFullList2 = ['brawny', 'wiry', 'scrawny', 'plump', 'medium', 'heavy', 'delicate'];
const physicialFullList3 = ['wide-eyed', 'wild-eyed', 'squinty', 'sleepy-eyed', 'blinky', 'red-eyed'];
const physicialFullList4 = ['fleet-footed', 'plodding', 'clumsy', 'twinkle-toed', 'jumpy', 'sure-footed'];
const physicialFullList5 = ['slimy', 'crusty', 'sunburned', 'sweaty', 'foul-smelling', 'perfumed', 'unwashed', 'clean'];

function generateTraits() {

    let personalityEvil = ['angry', 'malicious', 'boastful', 'loud', 'deceitful', 'sinister', 'brutal', 'soulless', 'cunning', 'traitorous'];
    let personalityNeutral = ['nervous', 'quick-witted', 'comical', 'goofy', 'cheerful', 'eager', 'dutiful', 'thorough', 'flighty'];
    let personalityGood = ['friendly', 'empathetic', 'conscientious', 'merciful', 'supportive'];

    for (let i = 0; i <= 2; i++) {
        console.log("i= " + i);

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
        console.log("three original arrays:");
        console.log("pers good:" + personalityGood);
        console.log("pers neutral:" + personalityNeutral);
        console.log("pers evil" + personalityEvil);

        if (GoodNeutralEvil === 'good') {
            personalityTrait1 = personalityGood[Math.floor(Math.random() * personalityGood.length)];
            indexToDelete = personalityGood.indexOf(personalityTrait1);
            personalityGood.splice(indexToDelete, 1);
            console.log("PersonalityGoodFull: " + personalityGoodFullList);
            console.log("PersonalityGood: " + personalityGood);
        } else if (GoodNeutralEvil === 'neutral') {
            personalityTrait1 = personalityNeutral[Math.floor(Math.random() * personalityNeutral.length)];
            indexToDelete = personalityNeutral.indexOf(personalityTrait1);
            personalityNeutral.splice(indexToDelete, 1);
            console.log("personalityNeutralFull: " + personalityNeutralFullList);
            console.log("personalityNeutral " + personalityNeutral);
        } else if (GoodNeutralEvil === 'evil') {
            personalityTrait1 = personalityEvil[Math.floor(Math.random() * personalityEvil.length)];
            indexToDelete = personalityEvil.indexOf(personalityTrait1);
            personalityEvil.splice(indexToDelete, 1);
            console.log("PersonalityEvilFull: " + personalityEvilFullList);
            console.log("PersonalityEvil: " + personalityEvil);
        }




        console.log("three new  arrays:");
        console.log("pers good:" + personalityGood);
        console.log("pers neutral:" + personalityNeutral);
        console.log("pers evil" + personalityEvil);

        if (i === 0) {
            document.getElementById("personality-trait-1").innerText = personalityTrait1;
        } else if (i === 1) {
            document.getElementById("personality-trait-2").innerText = personalityTrait1;
        } else if (i === 2) {
            document.getElementById("personality-trait-3").innerText = personalityTrait1;
        }
    }

    // PHYSICAL TRAITS
    // This set of traits are divided into separate groups in order that conficting traits (such as "tall" and "short") will not be picked simultanously.
    // The plan is to generate three unique traits at a time, though there are more than three sets of traits from which to draw.
    // Therefore, the first step is to randomly choose three different sets of physical traits, and from there randomly pick a trait from each set.

    let physicial1 = ['gigantic', 'tall', 'medium', 'short', 'tiny'];
    let physicial2 = ['brawny', 'wiry', 'scrawny', 'plump', 'medium', 'heavy', 'delicate'];
    let physicial3 = ['wide-eyed', 'wild-eyed', 'squinty', 'sleepy-eyed', 'blinky', 'red-eyed'];
    let physicial4 = ['fleet-footed', 'plodding', 'clumsy', 'twinkle-toed', 'jumpy', 'sure-footed'];
    let physicial5 = ['slimy', 'crusty', 'sunburned', 'sweaty', 'foul-smelling', 'perfumed', 'unwashed', 'clean'];

    // Randomly pick three sets of physical traits.
    let ChosenTrait1 = (Math.floor(Math.random() * 5)) + 1; // Pick Physical Trait Set 1
    console.log("chosen1: " + ChosenTrait1);

    let ChosenTrait2 = (Math.floor(Math.random() * 5)) + 1; // Pick Physical Trait Set 2
    console.log("chosen2: " + ChosenTrait2);
    while (ChosenTrait2 === ChosenTrait1) { // Make sure Physical Trait Set 2 doesn't match Physical Trait Set 1
        ChosenTrait2 = (Math.floor(Math.random() * 5)) + 1;
        console.log("chosen2 while: " + ChosenTrait2);
    }
    console.log("chosen2: " + ChosenTrait2);

    let ChosenTrait3 = (Math.floor(Math.random() * 5)) + 1; // Pick Physical Trait Set 2
    console.log("chosen3: " + ChosenTrait3);
    while ((ChosenTrait3 === ChosenTrait1) || (ChosenTrait3 === ChosenTrait2)) { // Make sure Physical Trait Set 3 desn't match Physical Trait Set 1 or 2
        ChosenTrait3 = (Math.floor(Math.random() * 5)) + 1;
        console.log("chosen3 while: " + ChosenTrait3);
    }
    console.log("chosen3: " + ChosenTrait3);
    console.log("___");
    console.log("chosen totals: " + ChosenTrait1 + ", " + ChosenTrait2 + ", " + ChosenTrait3);

    // Now that three unique sets have been chosen, now to randomly pick a trait from each set.

    // for (let i = 0; i <= 2; i++) {
    //     console.log("i= " + i);
    // }
}