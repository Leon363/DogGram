console.log("script launched");
let detailsImage = document.querySelector(".details-image");
let detailsTitle = document.querySelector(".details-title");
let mainContentEl = document.querySelector(".main-content");
let selectedItem ;
let anchors = document.querySelectorAll(".thumbnails-anchor");
for(let i = 0; anchors.length; i++){
    anchors[i].addEventListener("click", function(event){
        event.preventDefault();
        showDetails();
        // console.log(anchors[i].getAttribute("href"));
        setDetails(anchors[i]);
        // hideDetails();
    })
}     
function setDetails(anchor) {
    console.log("anchor element was pressed", anchor);
    let hrefValue = anchor.getAttribute("href")
    detailsImage.setAttribute("src", hrefValue );
    anchor.parentElement.classList.add("selected");
    if(selectedItem) {
        selectedItem.classList.remove("selected")
    }
    selectedItem = anchor.parentElement;

    //get element with class thumbnails-title inside the given anchor
    let thumbnailsTitleSelector = `[href="${hrefValue}"] .thumbnails-title`; //слектор структуры "element element"
    let thumbnailsTitleE1 = document.querySelector(thumbnailsTitleSelector);
    //dog name exists inside thumbnailsTitleE1.textContent
    detailsTitle.textContent = `${thumbnailsTitleE1.textContent}: ${anchor.getAttribute('data-details-title')} ` ;
   
  
    
    // detailsTitle.textContent = anchor.querySelector(".thumbnails-title").textContent + ": " + anchor.getAttribute("data-details-title");    
}



function showDetails() {
    mainContentEl.classList.remove('hidden');
}

function hideDetails() {
    mainContentEl.classList.add('hidden')
}

// function hideDetails(){
//     mainContentEl.classList.add('hidden')
// }

// function hideDetails() {
//     mainContentEl.classList.add('hidden');
// }

// function setDetails(span){
//     console.log("span element", span);
//     detailsImage.setAttribute1("src", span.getAttribute1("href"));
//     thumbnails-title.textContent = span.getAttribute1("data-details-name");

// }   