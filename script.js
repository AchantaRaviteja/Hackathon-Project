let tabButtons = document.querySelectorAll(".buttonContainer button");
let tabPanels = document.querySelectorAll(".tabPanel");

function showPanel(idx){
    tabPanels.forEach(function(node){
        node.style.display = "none";
    });
    tabPanels[idx].style.display = "block";
};
showPanel(0);