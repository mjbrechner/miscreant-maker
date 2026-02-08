'use strict';

const copiedSection = document.getElementById("copied-characters");
// const copiedSectionColor = ["#CA5346","#A05A52", "#F4402D", "#CA5346","#A05A52", "#F4402D", "#CA5346","#A05A52", "#F4402D"];
let NumberOfCopies = 0;
let copiedData = [];

// When someone tries to copy a trait box that has already been copied, a message pops up. This function re-hides that popup message.
function copyMessageRemove() {
    document.getElementById("already-copied-message").style.visibility = "hidden";
    document.getElementById("copy-button").style.pointerEvents = "auto";
    document.getElementById("copy-button").style.opacity = "1";
}

function copier() {
    copyMessageRemove();
    NumberOfCopies++;

    let newCharacterArea = document.createElement("div");
    newCharacterArea.setAttribute("class", "character-area");
    // newCharacterArea.style.color = copiedSectionColor[(NumberOfCopies+ 1)];
    newCharacterArea.style.color = "#F4402D";
    newCharacterArea.style.position = "relative";

    let newHeading = document.createElement("h2");
    newHeading.setAttribute("class", "traits-heading created-element");
    newHeading.textContent = `Miscreant #${NumberOfCopies}`;

    let newCharacterAreaDetail = document.createElement("div");
    newCharacterAreaDetail.setAttribute("class", "character-area-detail");

    // x-out button start
    let xOut = document.createElement("div");
    xOut.setAttribute("class", "x-out created-element");
    xOut.innerText = "×";
    xOut.addEventListener("click", function() {newCharacterArea.remove();});
    //x-out button end

    // personality copier start
    let newCharacterAreaPersonality = document.createElement("div");
    newCharacterAreaPersonality.setAttribute("class", "character-section");
    newCharacterAreaPersonality.setAttribute("class", "personality-section");

    let newCharacterAreaDetailPersonalityHeading = document.createElement("h3");
    newCharacterAreaDetailPersonalityHeading.setAttribute("class", "created-element");
    newCharacterAreaDetailPersonalityHeading.textContent = "personality";

    let newCharacterAreaPersonalityList = document.createElement("ul");

    let newCharacterAreaPersonalityListElement1 = document.createElement("li");
    newCharacterAreaPersonalityListElement1.setAttribute("class", "trait created-element");
    newCharacterAreaPersonalityListElement1.textContent = document.getElementById("personality-trait-1").innerText;

    let newCharacterAreaPersonalityListElement2 = document.createElement("li");
    newCharacterAreaPersonalityListElement2.setAttribute("class", "trait created-element");
    newCharacterAreaPersonalityListElement2.textContent = document.getElementById("personality-trait-2").innerText;

    let newCharacterAreaPersonalityListElement3 = document.createElement("li");
    newCharacterAreaPersonalityListElement3.setAttribute("class", "trait created-element");
    newCharacterAreaPersonalityListElement3.textContent = document.getElementById("personality-trait-3").innerText;
    // personality copier end

    // physical copier start
    let newCharacterAreaPhysical = document.createElement("div");
    newCharacterAreaPhysical.setAttribute("class", "character-section");
    newCharacterAreaPhysical.setAttribute("class", "physical-section");

    let newCharacterAreaDetailPhysicalHeading = document.createElement("h3");
    newCharacterAreaDetailPhysicalHeading.setAttribute("class", "created-element");
    newCharacterAreaDetailPhysicalHeading.textContent = "physical";

    let newCharacterAreaPhysicalList = document.createElement("ul");

    let newCharacterAreaPhysicalListElement1 = document.createElement("li");
    newCharacterAreaPhysicalListElement1.setAttribute("class", "trait created-element");
    newCharacterAreaPhysicalListElement1.textContent = document.getElementById("physical-trait-1").innerText;

    let newCharacterAreaPhysicalListElement2 = document.createElement("li");
    newCharacterAreaPhysicalListElement2.setAttribute("class", "trait created-element");
    newCharacterAreaPhysicalListElement2.textContent = document.getElementById("physical-trait-2").innerText;

    let newCharacterAreaPhysicalListElement3 = document.createElement("li");
    newCharacterAreaPhysicalListElement3.setAttribute("class", "trait created-element");
    newCharacterAreaPhysicalListElement3.textContent = document.getElementById("physical-trait-3").innerText;
    // physical copier end

    let copiedDataNew = [document.getElementById("personality-trait-1").innerText, document.getElementById("personality-trait-2").innerText, document.getElementById("personality-trait-3").innerText, document.getElementById("physical-trait-1").innerText, document.getElementById("physical-trait-2").innerText, document.getElementById("physical-trait-3").innerText];
    console.log("copiedData: " + copiedData);
    console.log("copiedDataNew: " + copiedDataNew);

    if (JSON.stringify(copiedDataNew) === JSON.stringify(copiedData)) {
        console.log("failed attempt to copy duplicate");
        NumberOfCopies--; // since we're not using this copy after all, decrease it by one.
        setTimeout(copyMessageRemove, 5000);
        document.getElementById("already-copied-message").style.visibility = "visible";
        // The following prevents someone from just repeatedly clicking the button after it has been shown that the data has already been copied.
        document.getElementById("copy-button").style.pointerEvents = "none";
        document.getElementById("copy-button").style.opacity = ".5"; 
        return // If the newly copied data is simply an exact copy of the previously copied data, just exist the function without creating a new duplicate box.
    } else {
        console.log("will now make copy");
        copiedData = copiedDataNew; // The new data will now be registered so it can't be duplicated next time.
    }

    //build the copy
    copiedSection.appendChild(newCharacterArea);
    newCharacterArea.appendChild(xOut);
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


    function deleteItem() {
        document.getElementById(`newCharacterArea`).remove();
    }
}