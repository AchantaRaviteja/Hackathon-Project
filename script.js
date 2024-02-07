let tabButtons = document.querySelectorAll(".buttonContainer button");
let tabPanels = document.querySelectorAll(".tabPanel");
let FlashCards = document.querySelectorAll(".FlashCardList");
let Flashes = document.querySelectorAll(".FlashCardContainer #Flash");
let Interact = document.querySelectorAll("#Interact");

function showPanel(idx){
    tabPanels.forEach(function(node){
        node.style.display = "none";
    });
    tabPanels[idx].style.display = "block";
};
showPanel(0);

function showFlashCard(val){
Flashes.forEach(function(node){
        node.style.display = "none";
    });
    Flashes[val].style.display = "block";
    FlashCards[0].style.display = "none";
    for(let i=0;i<2;i++){
        Interact[i].style.display = "block";
    }
   
}

function Reset(){
    Flashes.forEach(function(node){
        node.style.display = "none";
    });
    FlashCards[0].style.display = "flex";
    for(let i=0;i<2;i++){
        Interact[i].style.display = "none";
    }
}