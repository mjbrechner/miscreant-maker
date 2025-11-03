'use strict';

const copiedSection = document.getElementById("copied-characters");
let NumberOfCopies = 0;

function copier() {
    NumberOfCopies++;

    let newCharacterArea = document.createElement("div");
    newCharacterArea.setAttribute("class", "character-area");
    newCharacterArea.style.color = 'pink';

    let newHeading = document.createElement("h2");
    newHeading.setAttribute("class", "traits-heading");
    newHeading.textContent = `Character #${NumberOfCopies}`;

    let newCharacterAreaDetail = document.createElement("div");
    newCharacterAreaDetail.setAttribute("class", "character-area-detail");

    let newCharacterAreaPersonality = document.createElement("div");
    newCharacterAreaPersonality.setAttribute("class", "character-section");
    newCharacterAreaPersonality.setAttribute("class", "personality-section");


    let newCharacterAreaDetailHeading = document.createElement("h3");
    newCharacterAreaDetailHeading.textContent = "personality";

    let newCharacterAreaPersonalityList = document.createElement("ul");

    let newCharacterAreaPersonalityListElement1 = document.createElement("li");
    newCharacterAreaPersonalityListElement1.setAttribute("class", "trait");
    newCharacterAreaPersonalityListElement1.textContent = document.getElementById("personality-trait-1").innerText;

    let newCharacterAreaPersonalityListElement2 = document.createElement("li");
    newCharacterAreaPersonalityListElement2.setAttribute("class", "trait");
    newCharacterAreaPersonalityListElement2.textContent = document.getElementById("personality-trait-2").innerText;


    let newCharacterAreaPersonalityListElement3 = document.createElement("li");
    newCharacterAreaPersonalityListElement3.setAttribute("class", "trait");
    newCharacterAreaPersonalityListElement3.textContent = document.getElementById("personality-trait-3").innerText;


    copiedSection.appendChild(newCharacterArea);
    newCharacterArea.appendChild(newHeading);
    newCharacterArea.appendChild(newCharacterAreaDetail);
    newCharacterAreaDetail.appendChild(newCharacterAreaPersonality);
    newCharacterAreaPersonality.appendChild(newCharacterAreaDetailHeading);
    newCharacterAreaPersonality.appendChild(newCharacterAreaPersonalityList);
    newCharacterAreaPersonalityList.appendChild(newCharacterAreaPersonalityListElement1);
    newCharacterAreaPersonalityList.appendChild(newCharacterAreaPersonalityListElement2);
    newCharacterAreaPersonalityList.appendChild(newCharacterAreaPersonalityListElement3);
}