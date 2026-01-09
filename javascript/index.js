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
    // The first time traits are actually generated, the Copy Button needs to be enabled, since the user will now have potential text to copy.
    document.getElementById("copy-button").style.pointerEvents = "auto";
    document.getElementById("copy-button").style.opacity = "1";


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

    let physical1 = ['gigantic', 'tall', 'medium', 'short', 'tiny'];
    let physical2 = ['brawny', 'wiry', 'scrawny', 'plump', 'medium', 'heavy', 'delicate'];
    let physical3 = ['wide-eyed', 'wild-eyed', 'squinty', 'sleepy-eyed', 'blinky', 'red-eyed'];
    let physical4 = ['fleet-footed', 'plodding', 'clumsy', 'twinkle-toed', 'jumpy', 'sure-footed'];
    let physical5 = ['slimy', 'crusty', 'sunburned', 'sweaty', 'foul-smelling', 'perfumed', 'unwashed', 'clean'];

    // Randomly pick three sets of physical traits.
    let ChosenTraitSet1 = (Math.floor(Math.random() * 5)) + 1; // Pick Physical Trait Set 1
    console.log("chosen1: " + ChosenTraitSet1);

    let ChosenTraitSet2 = (Math.floor(Math.random() * 5)) + 1; // Pick Physical Trait Set 2
    console.log("chosen2: " + ChosenTraitSet2);
    while (ChosenTraitSet2 === ChosenTraitSet1) { // Make sure Physical Trait Set 2 doesn't match Physical Trait Set 1
        ChosenTraitSet2 = (Math.floor(Math.random() * 5)) + 1;
        console.log("chosen2 while: " + ChosenTraitSet2);
    }
    console.log("chosen2: " + ChosenTraitSet2);

    let ChosenTraitSet3 = (Math.floor(Math.random() * 5)) + 1; // Pick Physical Trait Set 2
    console.log("chosen3: " + ChosenTraitSet3);
    while ((ChosenTraitSet3 === ChosenTraitSet1) || (ChosenTraitSet3 === ChosenTraitSet2)) { // Make sure Physical Trait Set 3 desn't match Physical Trait Set 1 or 2
        ChosenTraitSet3 = (Math.floor(Math.random() * 5)) + 1;
        console.log("chosen3 while: " + ChosenTraitSet3);
    }
    console.log("chosen3: " + ChosenTraitSet3);
    console.log("___");
    console.log("chosen totals: " + ChosenTraitSet1 + ", " + ChosenTraitSet2 + ", " + ChosenTraitSet3);

    // Now that three unique sets have been chosen from the options for physical traits, now to randomly pick a trait from each set.


    let ChosenTrait1 = (Math.floor(Math.random() * physical1.length))
    console.log("ChosenTrait1 is now #" + ChosenTrait1 + "from this array: " + physical1);
    ChosenTrait1 = physical1[ChosenTrait1];
    console.log("ChosenTrait1 is now a value: " + ChosenTrait1);

    let ChosenTrait2 = (Math.floor(Math.random() * physical2.length))
    console.log("ChosenTrait2 is now #" + ChosenTrait2 + "from this array: " + physical2);
    ChosenTrait2 = physical2[ChosenTrait2];
    console.log("ChosenTrait2 is now a value: " + ChosenTrait2);

    let ChosenTrait3 = (Math.floor(Math.random() * physical3.length))
    console.log("ChosenTrait3 is now #" + ChosenTrait3 + "from this array: " + physical3);
    ChosenTrait3 = physical3[ChosenTrait3];
    console.log("ChosenTrait3 is now a value: " + ChosenTrait3);

    let ChosenTrait4 = (Math.floor(Math.random() * physical4.length))
    console.log("ChosenTrait4 is now #" + ChosenTrait4 + "from this array: " + physical4);
    ChosenTrait4 = physical4[ChosenTrait4];
    console.log("ChosenTrait4 is now a value: " + ChosenTrait4);

    let ChosenTrait5 = (Math.floor(Math.random() * physical5.length))
    console.log("ChosenTrait5 is now #" + ChosenTrait5 + "from this array: " + physical5);
    ChosenTrait5 = physical5[ChosenTrait5];
    console.log("ChosenTrait5 is now a value: " + ChosenTrait5);


    // Now there are three unique SETS and a unique TRAIT for each set. Now to match a ChosenTraitSet to the ChosenTrait for that set.

    console.log("Chosen Trait Sets: " + ChosenTraitSet1 + ", " + ChosenTraitSet2 + ", " + ChosenTraitSet3);

    if (ChosenTraitSet1 === 1) {
        document.getElementById("physical-trait-1").innerText = ChosenTrait1;
    } else if (ChosenTraitSet1 === 2) {
        document.getElementById("physical-trait-1").innerText = ChosenTrait2;
    } else if (ChosenTraitSet1 === 3) {
        document.getElementById("physical-trait-1").innerText = ChosenTrait3;
    } else if (ChosenTraitSet1 === 4) {
        document.getElementById("physical-trait-1").innerText = ChosenTrait4;
    } else if (ChosenTraitSet1 === 5) {
        document.getElementById("physical-trait-1").innerText = ChosenTrait5;
    }

    if (ChosenTraitSet2 === 1) {
        document.getElementById("physical-trait-2").innerText = ChosenTrait1;
    } else if (ChosenTraitSet2 === 2) {
        document.getElementById("physical-trait-2").innerText = ChosenTrait2;
    } else if (ChosenTraitSet2 === 3) {
        document.getElementById("physical-trait-2").innerText = ChosenTrait3;
    } else if (ChosenTraitSet2 === 4) {
        document.getElementById("physical-trait-2").innerText = ChosenTrait4;
    } else if (ChosenTraitSet2 === 5) {
        document.getElementById("physical-trait-2").innerText = ChosenTrait5;
    }

    if (ChosenTraitSet3 === 1) {
        document.getElementById("physical-trait-3").innerText = ChosenTrait1;
    } else if (ChosenTraitSet3 === 2) {
        document.getElementById("physical-trait-3").innerText = ChosenTrait2;
    } else if (ChosenTraitSet3 === 3) {
        document.getElementById("physical-trait-3").innerText = ChosenTrait3;
    } else if (ChosenTraitSet3 === 4) {
        document.getElementById("physical-trait-3").innerText = ChosenTrait4;
    } else if (ChosenTraitSet3 === 5) {
        document.getElementById("physical-trait-3").innerText = ChosenTrait5;
    }

}