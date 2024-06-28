"use strict"

const allCardsIds = []
let flippedCardsIds = []

const flipCards = document.querySelectorAll(".js-flip-card")

const progressBarElem = document.querySelector(".js-progress-bar")
const continueBtn = document.querySelector(".js-continue-btn")

function refreshProgressBar(countPickedAccordions) {
    if (countPickedAccordions > (allCardsIds.length / 2)) {
        progressBarElem.style.backgroundColor = "#ffd43f"
    }
    if (countPickedAccordions === allCardsIds.length) {
        progressBarElem.style.backgroundColor = "#73BE43"
    }
    progressBarElem.style.width = countPickedAccordions * (1000 / allCardsIds.length) + "px"
}

function isReadyToContinue() {
    if (flippedCardsIds.length == allCardsIds.length) {
        continueBtn.classList.add("active")
        continueBtn.removeAttribute("disabled")
    }
}

function flippedChecker() {
    flipCards.forEach((card, i) => {
        if (card.classList.contains("flipped")) {
            if (!flippedCardsIds.includes(i)) {
                flippedCardsIds.push(i)
            }
        }
    })
}

for (let id = 0; id < flipCards.length; id++) {
    allCardsIds.push(id)
}

flipCards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.classList.add("flipped")
        if (flippedCardsIds.length !== allCardsIds.length) {
            flippedChecker()
            refreshProgressBar(flippedCardsIds.length)
            isReadyToContinue()
        }
    })
})







