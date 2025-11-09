'use strict';

const copiedSection = document.getElementById("copied-characters");
let NumberOfCopies = 0;
let copiedData = [];

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

    // personality copier start
    let newCharacterAreaPersonality = document.createElement("div");
    newCharacterAreaPersonality.setAttribute("class", "character-section");
    newCharacterAreaPersonality.setAttribute("class", "personality-section");

    let newCharacterAreaDetailPersonalityHeading = document.createElement("h3");
    newCharacterAreaDetailPersonalityHeading.textContent = "personality";

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
    // personality copier end

    // physical copier start
    let newCharacterAreaPhysical = document.createElement("div");
    newCharacterAreaPhysical.setAttribute("class", "character-section");
    newCharacterAreaPhysical.setAttribute("class", "physical-section");

    let newCharacterAreaDetailPhysicalHeading = document.createElement("h3");
    newCharacterAreaDetailPhysicalHeading.textContent = "physical";

    let newCharacterAreaPhysicalList = document.createElement("ul");

    let newCharacterAreaPhysicalListElement1 = document.createElement("li");
    newCharacterAreaPhysicalListElement1.setAttribute("class", "trait");
    newCharacterAreaPhysicalListElement1.textContent = document.getElementById("physical-trait-1").innerText;

    let newCharacterAreaPhysicalListElement2 = document.createElement("li");
    newCharacterAreaPhysicalListElement2.setAttribute("class", "trait");
    newCharacterAreaPhysicalListElement2.textContent = document.getElementById("physical-trait-2").innerText;

    let newCharacterAreaPhysicalListElement3 = document.createElement("li");
    newCharacterAreaPhysicalListElement3.setAttribute("class", "trait");
    newCharacterAreaPhysicalListElement3.textContent = document.getElementById("physical-trait-3").innerText;
    // physical copier end

    let copiedDataNew = [document.getElementById("personality-trait-1").innerText, document.getElementById("personality-trait-2").innerText, document.getElementById("personality-trait-3").innerText, newCharacterAreaPhysicalListElement1.textContent = document.getElementById("physical-trait-1").innerText, newCharacterAreaPhysicalListElement1.textContent = document.getElementById("physical-trait-2").innerText, newCharacterAreaPhysicalListElement1.textContent = document.getElementById("physical-trait-3").innerText];
    console.log("copiedData: " + copiedData);
    console.log("copiedDataNew: " + copiedDataNew);

    if (JSON.stringify(copiedDataNew) === JSON.stringify(copiedData)) {
        console.log("failed attempt to copy duplicate");
        alert("already copied this trait box");
        return // If the newly copied data is simply an exact copy of the previously copied data, just exist the function without creating a new duplicate box.
    } else {
        console.log("will now make copy");
        copiedData = copiedDataNew; // The new data will now be registered so it can't be duplicated next time.
    }

    //build the copy
    copiedSection.appendChild(newCharacterArea);
    newCharacterArea.appendChild(newHeading);
    newCharacterArea.appendChild(newCharacterAreaDetail);
    newCharacterAreaDetail.appendChild(newCharacterAreaPersonality);
    newCharacterAreaPersonality.appendChild(newCharacterAreaDetailPersonalityHeading);
    newCharacterAreaPersonality.appendChild(newCharacterAreaPersonalityList);
    newCharacterAreaPersonalityList.appendChild(newCharacterAreaPersonalityListElement1);
    newCharacterAreaPersonalityList.appendChild(newCharacterAreaPersonalityListElement2);
    newCharacterAreaPersonalityList.appendChild(newCharacterAreaPersonalityListElement3);

    newCharacterAreaDetail.appendChild(newCharacterAreaPhysical);
    newCharacterAreaPhysical.appendChild(newCharacterAreaDetailPhysicalHeading);
    newCharacterAreaPhysical.appendChild(newCharacterAreaPhysicalList);
    newCharacterAreaPhysicalList.appendChild(newCharacterAreaPhysicalListElement1);
    newCharacterAreaPhysicalList.appendChild(newCharacterAreaPhysicalListElement2);
    newCharacterAreaPhysicalList.appendChild(newCharacterAreaPhysicalListElement3);
}