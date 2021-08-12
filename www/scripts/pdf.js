(function() {
  "use strict";
  window.addEventListener("load", init);

  // data structure references defined in data.js

  function init() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    let companies = params["companies"].split(",");
    summarizeSelections(companies);
    id("pdf").addEventListener("click", generatePDF);
    id("copyURL").addEventListener("click", copyURL);
  }

  function summarizeSelections(companies) {
    let container = id("company-rows");
    for(let i = 0; i < companies.length; i++) {
      let companyContainer = document.createElement("div");
      companyContainer.classList.add("two-column");
      let logoContainer = document.createElement("div");
      logoContainer.classList.add("logo");
      let logoImg = document.createElement("img");
      logoImg.src = vendorInfo[companies[i]]["image"];
      logoImg.alt = companies[i];
      logoContainer.appendChild(logoImg);
      companyContainer.appendChild(logoContainer);
      let infoContainer = document.createElement("div");
      infoContainer.classList.add("info");
      let infoH2 = document.createElement("h2");
      infoH2.innerText = companies[i];
      infoContainer.appendChild(infoH2);
      let description = document.createElement("p");
      description.innerHTML = vendorInfo[companies[i]]["description"];
      infoContainer.appendChild(description);
      let iconRow = document.createElement("div");
      iconRow.classList.add("icons-row");
      let categoryName = "";
      for(let category in categoryVendors) {
        if(categoryVendors[category].includes(companies[i])) {
          categoryName = category;
        }
      }
      let contact = vendorInfo[companies[i]]["contact"];
      iconRow.appendChild(makeIcon("category", categoryName));
      iconRow.appendChild(makeIcon("contact", contact));
      infoContainer.appendChild(iconRow);
      companyContainer.appendChild(infoContainer);
      container.appendChild(companyContainer);
      if((i+1)%4 == 0) {
        let breakDiv = document.createElement("div");
        breakDiv.classList.add("break");
        container.appendChild(breakDiv);
      }
    }
  }

  function makeIcon(type, text) {
    let categoryContainer = document.createElement("div");
    categoryContainer.classList.add("icon-container");
    let iconContainer = document.createElement("div");
    iconContainer.classList.add("icon");
    let iconImg = document.createElement("img");
    iconImg.src = "images/icons/" + type + ".png";
    iconImg.alt = type;
    iconContainer.appendChild(iconImg);
    categoryContainer.appendChild(iconContainer);
    let categoryH3 = document.createElement("h3");
    categoryH3.innerText = text; // make formula to find correct category
    categoryContainer.appendChild(categoryH3);
    return categoryContainer;
  }

  function copyURL() {
    let thisUrl = window.location.href;
    const cb = navigator.clipboard;
    const paragraph = thisUrl;
    cb.writeText(paragraph).then(() => alert('URL copied to clipboard.'));
  }

  function generatePDF() {
    window.print();
  }

  function id(idName) {
    return document.getElementById(idName);
  }
})();
