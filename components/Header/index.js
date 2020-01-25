// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    let classHeader = document.createElement("div");
    let spanClass = document.createElement("span");
    let h1 = document.createElement("h1");
    let tempClass = document.createElement("span");

    classHeader.classList.add("header");
    spanClass.classList.add("date");
    tempClass.classList.add("temp");

    classHeader.appendChild(spanClass);
    classHeader.appendChild(h1);
    classHeader.appendChild(tempClass);


    // Give elements content


    
    h1.textContent = "Lambda Times";

    tempClass.textContent = "98°";
    spanClass.textContent = "SMARCH 28, 2019";


    return classHeader;
}


let headContainer = document.querySelector('.header-container');
headContainer.appendChild(Header());

