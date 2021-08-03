(function() {
  "use strict";
  window.addEventListener("load", init);

  // promptDict, descriptionDict, categoryTree, categoryCompanies, companyInfo defined in data.js

  function init() {
    console.log(companyCategories);
    initOptionBox();
    id("category-select-btn").addEventListener("click", showCategoryView);
    id("explore-btn").addEventListener("click", showExploreView);
    id("click-to-back").addEventListener("click", revertView);
    id("prompt-select-btn").addEventListener("click", revertCategoryView);
    id("website-logo").addEventListener("click", resetView);
    id("email-button").addEventListener("click", email);
    id("pdf-button").addEventListener("click", makePdf);
  }

  function resetView() {
    location.reload();
  }

  function revertView() {
    id("category-select").classList.remove("hidden");
    id("category-explore").classList.add("hidden");
    id("click-to-back").parentNode.classList.add("hidden");
    let selectionBoxes = document.getElementsByClassName("companies-box-2");
    for(let i = 0; i < selectionBoxes.length; i++) {
      while(selectionBoxes[i].firstChild) {
        selectionBoxes[i].removeChild(selectionBoxes[i].firstChild);
      }
    }
    console.log(id("option-box").getElementsByClassName("category-grid-container"));
    if(id("option-box").getElementsByClassName("category-grid-container").length == 0) {
      console.log("enter");
      id("category-view-link").classList.remove("hidden");
    } else {
      id("prompt-view-link").classList.remove("hidden");
    }
  }

  function changeView() {
    id("category-select").classList.add("hidden");
    id("category-explore").classList.remove("hidden");
    id("click-to-back").parentNode.classList.remove("hidden");
    id("category-view-link").classList.add("hidden");
    id("prompt-view-link").classList.add("hidden");
  }

  function initOptionBox() {
    let optionBox = id("option-box");
    while(optionBox.firstChild) {
      optionBox.removeChild(optionBox.firstChild);
    }
    optionBox.classList.remove("flex-vertical");
    let leftColumn = document.createElement("div");
    leftColumn.classList.add("option-column");
    let rightColumn = document.createElement("div");
    rightColumn.classList.add("option-column");
    optionBox.appendChild(leftColumn);
    optionBox.appendChild(rightColumn);
    let i = 0;
    for(let prompt in promptDict) {
      let thisColumn = optionBox.getElementsByClassName("option-column")[i%2];
      let newLabelContainer = document.createElement("div");
      newLabelContainer.classList.add("category-container");
      let categoryLabel = document.createElement("div");
      categoryLabel.classList.add("category-label");
      let icon = document.createElement("img");
      icon.src = "images/icons/category.png";
      categoryLabel.appendChild(icon);
      let heading = document.createElement("h5");
      heading.innerText = findRootCategory(promptDict[prompt][0]); // finds frontend/backend/developer tooling based on first child
      categoryLabel.appendChild(heading);
      newLabelContainer.appendChild(categoryLabel);
      let newPrompt = document.createElement("div");
      newPrompt.classList.add("option");
      let promptTxt = document.createElement("h3");
      promptTxt.innerText = prompt;
      newPrompt.appendChild(promptTxt);
      let downArrow = document.createElement("img");
      downArrow.src = "images/icons/down-arrow.png";
      newPrompt.appendChild(downArrow);
      newPrompt.addEventListener("click", expandOption.bind(newPrompt));
      newLabelContainer.appendChild(newPrompt);
      thisColumn.appendChild(newLabelContainer);
      i++;
    }
  }

  // find Frontend, Backend, or Developer Tooling root categories of a subcategory
  function findRootCategory(category) {
    let answer = "root not found";
    if(category != undefined) {
      for(let root in companyCategories) {
        if(companyCategories[root].includes(category)) {
          answer = root;
        }
      }
    }
    return answer;
  }

  // filling options from categoryCompanies, rather than categoryTree
  function initOptionBoxNoPrompt() {
    let optionBox = id("option-box");
    while(optionBox.firstChild) {
      optionBox.removeChild(optionBox.firstChild);
    }
    // make 3 sections for frontend, backend, developer tooling
    optionBox.classList.add("flex-vertical");
    for(let category in companyCategories) {
      let newLabelContainer = document.createElement("div");
      newLabelContainer.classList.add("category-container");
      let categoryLabel = document.createElement("div");
      categoryLabel.classList.add("category-label");
      let icon = document.createElement("img");
      icon.src = "images/icons/category.png";
      categoryLabel.appendChild(icon);
      let heading = document.createElement("h5");
      heading.innerText = category;
      categoryLabel.appendChild(heading);
      newLabelContainer.appendChild(categoryLabel);
      let topContainer = document.createElement("div");
      topContainer.classList.add("category-grid-container");
      let categoryContainer = document.createElement("div");
      categoryContainer.classList.add("category-grid");
      let containerHeading = document.createElement("h3");
      containerHeading.innerText = "Explore options for: " + category;
      topContainer.appendChild(containerHeading);
      let categories = companyCategories[category]; // have to filter out companies
      let sortedCategories = sortArray(categories);
      for(let i = 0; i < sortedCategories.length; i++) {
        let category = sortedCategories[i];
        let newCategory = document.createElement("div");
        newCategory.classList.add("category-gridded");
        let categoryHeading = document.createElement("h4");
        categoryHeading.innerText = category;
        let description = document.createElement("p");
        if(descriptionDict[category]) {
          description.innerText = descriptionDict[category];
        } else {
          description.innerText = "Description placeholder";
        }
        let icon = document.createElement("img");
        icon.classList.add("inblock-icon-2");
        icon.src = "images/icons/plus-blue.png";
        newCategory.appendChild(categoryHeading);
        newCategory.appendChild(description);
        newCategory.appendChild(icon);
        newCategory.addEventListener("click", addToSelection.bind(newCategory));
        categoryContainer.appendChild(newCategory);
      }
      for(let i = 0; i < categoryContainer.getElementsByClassName("category-gridded").length % 4; i++) {
        let fillerDiv = document.createElement("div");
        fillerDiv.classList.add("filler-div");
        categoryContainer.appendChild(fillerDiv);
      }
      topContainer.appendChild(categoryContainer);
      newLabelContainer.appendChild(topContainer);
      console.log(newLabelContainer);
      setBackgroundColor(newLabelContainer.getElementsByClassName("category-grid-container")[0]);
      optionBox.appendChild(newLabelContainer);
    }
  }

  // sets color based on category-label h5
  function setBackgroundColor(container) {
    let category = container.parentNode.querySelector("h5").innerText.trim();
    container.classList.add(getBackgroundColor(category));
  }

  // returns class name for background color based on whether category belongs to frontend, backend, or dev tools
  function getBackgroundColor(category) {
    let colors = {"Frontend": "background-blue-1", "Backend": "background-blue-2", "Developer Tooling": "background-blue-3"};
    let root = findRootCategory(category);
    return colors[root];
  }

  // sorting by alphabetical order
  function sortArray(ary) {
    let sorted = [];
    for(let i = 0; i < ary.length; i++) {
      if(ary[i] in categoryCompanies) { // if there's at least one company listed for the category; also checks that the key isn't a company name
        sorted.push(ary[i]);
      }
    }
    return sorted.sort();
  }

  function expandOption() {
    if(this.classList.contains("option")) {
      this.classList.remove("option");
      this.classList.add("option-selected");
      setBackgroundColor(this);
      let categories = promptDict[this.innerText.trim()];
      let newHTML = "<h3>" + this.innerText.trim() + "</h3>" + "<div class=\"category-list\">";
      for(let i = 0; i < categories.length; i++) {
        let description = "description placeholder";
        if(categories[i] in descriptionDict) {
          description = descriptionDict[categories[i]];
        }
        // console.log(description);
        newHTML += "<div class=\"category\"><h4>" + categories[i] + "</h4><p>" + description + "</p><img class=\"inblock-icon-2\" src=\"images/icons/plus-blue.png\"/></div>";
      }
      newHTML += "</div>";
      this.innerHTML = newHTML;
      setCategoryListeners(this.getElementsByClassName("category-list")[0].childNodes);
    }
  }

  function setCategoryListeners(categories) {
    for(let i = 0; i < categories.length; i++) {
      categories[i].addEventListener("click", addToSelection.bind(categories[i]));
    }
  }

  function addToSelection() {
    id("section-right-description").innerText = "Your Selections:";
    let selectionBox = id("selected-options");
    // check if this already in selections
    let selections = selectionBox.getElementsByClassName("selection");
    let isSelected = false;
    for(let i = 0; i < selections.length; i++) {
      if(this.firstChild.innerText == selections[i].firstChild.innerText) {
        isSelected = true;
      }
    }
    // if not already selected, add to list
    if(!isSelected) {
      let newElement = document.createElement("div");
      newElement.classList.add("selection");
      let heading = document.createElement("h5");
      heading.innerText = this.firstChild.innerText;
      let image = document.createElement("img");
      image.classList.add("inblock-icon");
      image.src = "images/icons/minus-white.png";
      newElement.appendChild(heading);
      newElement.appendChild(image);
      console.log(newElement);
      // set background color
      newElement.classList.add(getBackgroundColor(this.firstChild.innerText));
      newElement.addEventListener("click", removeSelection.bind(newElement));
      selectionBox.appendChild(newElement);
    }
  }

  function removeSelection() {
    this.remove();
  }

  function removeCompany() {
    this.remove();
    if(id("selected-options-2").getElementsByClassName("company-blue").length == 0) {
      id("email-button").classList.add("email-deselected");
      id("email-button").removeAttribute("href");
      id("pdf-button").classList.add("btn-deselected");
    } else {
      updateHref();
    }
  }

  function showExploreView() {
    let selections = id("selected-options").getElementsByClassName("selection");
    if(selections.length > 0) {
      changeView();
      let selectionsArray = [];
      for(let i = 0; i < selections.length; i++) {
        selectionsArray.push(selections[i].innerText);
      }
      generateLegos(selectionsArray);
    }
  }

  function generateLegos(selectionArray) {
    let legoBox = id("legos");
    while(legoBox.firstChild) {
      legoBox.removeChild(legoBox.firstChild);
    }
    if(selectionArray.length > 0) {
      let newLego = document.createElement("div");
      newLego.classList.add("lego-selected");
      newLego.innerHTML = "<h4>" + selectionArray[0] + "</h4>";
      newLego.addEventListener("click", updateContent.bind(newLego));
      updateBox(newLego.innerText.trim());
      updateFilters();
      legoBox.appendChild(newLego);
    }
    for(let i = 1; i < selectionArray.length; i++) {
      let newLego = document.createElement("div");
      newLego.classList.add("lego-unselected");
      newLego.innerHTML = "<h4>" + selectionArray[i] + "</h4>";
      newLego.addEventListener("click", updateContent.bind(newLego));
      legoBox.appendChild(newLego);
    }
  }

  function updateBox(category) {
    let companyBox = id("companies-box");
    // first remove all existing childnodes
    while(companyBox.firstChild) {
      companyBox.removeChild(companyBox.firstChild);
    }
    if(category in categoryCompanies) {
      for(let i = 0; i < categoryCompanies[category].length; i++) {
        let companyName = categoryCompanies[category][i];
        if(companyName in companyInfo) {
          let newCompany = document.createElement("div");
          newCompany.classList.add("company");
          let companyName = categoryCompanies[category][i];
          newCompany.innerHTML = "<div><h2 class=\"hidden\">" + companyName + "</h2><img class=\"logo\" src=\"" + companyInfo[companyName]["image"] + "\" alt=\"" + companyName + "\"/></div>";
          newCompany.addEventListener("click", expandDetails.bind(newCompany));
          companyBox.appendChild(newCompany);
        } else {
          console.log("update companyInfo for " + companyName);
        }
      }
    } else {
      let message = document.createElement("p");
      message.innerText = "We currently do not have information for " + category + ".";
      companyBox.appendChild(message);
    }
  }

  function expandDetails() {
    let currentChoice = document.getElementsByClassName("company-selected")[0];
    if(currentChoice != undefined) {
      currentChoice.classList.remove("company-selected");
      currentChoice.classList.add("company");
    }
    this.classList.remove("company");
    this.classList.add("company-selected");
    let companyName = this.getElementsByClassName("hidden")[0].innerText;
    if(companyName in companyInfo) {
      let detailBox = id("company-details");
      while(detailBox.firstChild) {
        detailBox.removeChild(detailBox.firstChild);
      }
      let header = document.createElement("h1");
      header.innerText = companyName;
      detailBox.appendChild(header);
      let description = document.createElement("p");
      description.innerText = companyInfo[companyName]["description"];
      detailBox.appendChild(description);
      let addBtn = document.createElement("button");
      addBtn.id = "company-add-btn";
      addBtn.innerText = "Add to List";
      addBtn.addEventListener("click", addToCompanyList.bind(companyName));
      detailBox.appendChild(addBtn);
    }
  }

  // this = company name (string)
  function addToCompanyList() {
    id("section-right-description-2").innerText = "Your Companies of Interest:";
    let section = id("selected-companies"); // 3 sections for frontend, backend, developer tooling
    let thisRoot = findRoot(this); //"Frontend", "Backend", or "Developer Tooling"
    let categories = section.getElementsByClassName("company-container");
    let isAdded = false;
    let i = 0;
    while(!isAdded) {
      if(thisRoot == categories[i].querySelector("h4").innerText.trim()) {
        if(alreadyAdded(this, categories[i])) {
          isAdded = true;
        } else {
          let newElement = document.createElement("div");
          newElement.classList.add("company-blue");
          newElement.innerHTML = "<h3 class=\"hidden\">" + this + "</h3><div><img class=\"logo\" src=\"" + companyInfo[this]["image"] + "\" alt=\"" + this + "\"/></div><img class=\"inblock-icon-2\" src=\"images/icons/minus-blue.png\"/>";
          newElement.addEventListener("click", removeCompany.bind(newElement));
          categories[i].querySelector(".companies-box-2").appendChild(newElement);
          isAdded = true;
        }
      } else if(i >= 3) {
        console.log("error: can't find correct category");
        isAdded = true;
      }
      i++;
    }
    id("email-button").classList.remove("email-deselected");
    updateHref();
  }

  function alreadyAdded(companyName, companyContainer) {
    let existingCompanies = companyContainer.getElementsByClassName("companies-box-2")[0].getElementsByClassName("company-blue");
    let isAdded = false;
    for(let i = 0; i < existingCompanies.length; i++) {
      if(existingCompanies[i].firstChild.innerText.trim() == companyName) {
        isAdded = true;
      }
    }
    return isAdded;
  }

  function findRoot(company) {
    let root = "root not found";
    for(let category in companyCategories) {
      if(companyCategories[category].includes(company)) {
        root = category;
      }
    }
    return root;
  }

  function updateContent() {
    let currentLego = document.getElementsByClassName("lego-selected")[0];
    currentLego.classList.remove("lego-selected");
    currentLego.classList.add("lego-unselected");
    this.classList.remove("lego-unselected");
    this.classList.add("lego-selected");
    let category = this.innerText.trim();
    updateBox(category);
    updateFilters();
  }

  function updateFilters() {
    let companies = id("companies-box").getElementsByClassName("hidden");
    let attributesDict = {"Regions Served": [], "Funding to Date ($)": [], "Employee Count": []};
    // companyInfo["Brightcove"] = {"image": "", "description": "", "contact": "", "attributes": {"Regions Served": [], "Funding to Date ($)": 0, "Employee Count": 0}};
    for(let i = 0; i < companies.length; i++) {
      if(companies[i].innerText in companyInfo) {
        let companyAttributes = companyInfo[companies[i].innerText]["attributes"];
        for(let attribute in companyAttributes) {
          if(attribute == "Regions Served") { // special case bc arrays instead of strings/numbers
            for(let j = 0; j < companyAttributes[attribute].length; j++) {
              if(!attributesDict[attribute].includes(companyAttributes[attribute][j])) {
                attributesDict[attribute].push(companyAttributes[attribute][j]);
              }
            }
          } else {
            if(!attributesDict[attribute].includes(companyAttributes[attribute])) {
              attributesDict[attribute].push(companyAttributes[attribute]);
            }
          }
        }
      }
    }
    updateFiltersHTML(attributesDict);
  }

  function updateFiltersHTML(attributes) {
    let filterSection = id("filters");
    while(filterSection.firstChild) {
      filterSection.removeChild(filterSection.firstChild);
    }
    let heading = document.createElement("h1");
    heading.innerText = "Filters (Click to select):";
    filterSection.appendChild(heading);
    for(let attribute in attributes) {
      let newRow = document.createElement("div");
      newRow.classList.add("filters-row");
      let filterType = document.createElement("h3");
      filterType.innerText = attribute;
      newRow.appendChild(filterType);
      let filterBox = document.createElement("div");
      filterBox.classList.add("filters-box");
      for(let i = 0; i < attributes[attribute].length; i++) {
        let newFilterValue = document.createElement("div");
        newFilterValue.classList.add("filter");
        newFilterValue.innerText = attributes[attribute][i];
        newFilterValue.addEventListener("click", applyFilter.bind(newFilterValue));
        filterBox.appendChild(newFilterValue);
      }
      newRow.appendChild(filterBox);
      filterSection.appendChild(newRow);
    }
  }

  function applyFilter() {
    // simple case - for regions
    if(this.parentNode.parentNode.firstChild.innerText == "Regions Served") {
      if(this.classList.contains("filter")) {
        this.classList.remove("filter");
        this.classList.add("filter-selected");
      } else {
        this.classList.remove("filter-selected");
        this.classList.add("filter");
      }
    } else {
      let currentFilter = this.parentNode.getElementsByClassName("filter-selected")[0];
      if(currentFilter == undefined) {
        this.classList.remove("filter");
        this.classList.add("filter-selected");
      } else if(currentFilter.innerText != this.innerText) {
        currentFilter.classList.remove("filter-selected");
        currentFilter.classList.add("filter");
        this.classList.remove("filter");
        this.classList.add("filter-selected");
      } else {
        this.classList.remove("filter-selected");
        this.classList.add("filter");
      }
    }
    let filters = calculateFilters();
    filterCompanies(filters);
  }

  // returns dictionary of filters applied
  function calculateFilters() {
    let filters = {};
    let filterRows = id("filters").getElementsByClassName("filters-row");
    for(let i = 0; i < filterRows.length; i++) {
      let filterType = filterRows[i].firstChild.innerText;
      let filtersArray = [];
      let selectedFilters = filterRows[i].getElementsByClassName("filter-selected");
      for(let j = 0; j < selectedFilters.length; j++) {
        filtersArray.push(selectedFilters[j].innerText);
      }
      filters[filterType] = filtersArray;
    }
    return filters;
  }

  function filterCompanies(filters) {
    console.log(filters);
    let companies = id("companies-box").querySelectorAll(".company, .company-selected");
    console.log(companies);
    // first reset - remove class "hidden"
    for(let i = 0; i < companies.length; i++) {
      companies[i].classList.remove("hidden");
      let name = companies[i].getElementsByClassName("hidden")[0].innerText;
      let companyAttributesDict = companyInfo[name]["attributes"];
      let meetsRequirement = true;
      for(let attribute in companyAttributesDict) {
        if(attribute in filters) {
          if(attribute == "Regions Served") {
            for(let i = 0; i < filters[attribute].length; i++) {
              if(!companyAttributesDict[attribute].includes(filters[attribute][i])) {
                meetsRequirement = false;
              }
            }
          } else {
            for(let i = 0; i < filters[attribute].length; i++) {
              if(companyAttributesDict[attribute] != filters[attribute][i]) { // can only select one option for funding/company size
                meetsRequirement = false;
              }
            }
          }
        }
      }
      if(!meetsRequirement) {
        companies[i].classList.add("hidden");
      }
    }
  }

  function showCategoryView() {
    console.log("showCategoryView");
    id("prompt-view-link").classList.remove("hidden");
    id("category-view-link").classList.add("hidden");
    initOptionBoxNoPrompt();
  }

  function revertCategoryView() {
    id("prompt-view-link").classList.add("hidden");
    id("category-view-link").classList.remove("hidden");
    initOptionBox();
  }

  function updateHref() {
    let emailHref = "mailto:koyo.nakamura@commercetools.com?subject=Website%20User&body=";
    let msg = "Hello! Here's the website information I entered: ";
    let selectedCompanies = document.getElementsByClassName("company-blue");
    for(let i = 0; i < selectedCompanies.length - 1; i++) {
      let companyName = selectedCompanies[i].getElementsByClassName("hidden")[0];
      msg += companyName.innerText + ", ";
    }
    let companyName = selectedCompanies[selectedCompanies.length - 1].getElementsByClassName("hidden")[0];
    msg += companyName.innerText + ".";
    emailHref += encodeURIComponent(msg);
    id("email-button").href = emailHref;
  }

  function email() {
    if(!id("email-button").classList.contains("email-deselected")) {
      id("pdf-button").classList.remove("btn-deselected");
    }
  }

  function makePdf() {
    if(!id("pdf-button").classList.contains("btn-deselected")) {
      let companies = document.getElementsByClassName("company-blue");
      let redirectUrl = "./pdf.html?companies=";
      let encodedCompanies = "";
      for(let i = 0; i < companies.length - 1; i++) {
        encodedCompanies += companies[i].getElementsByClassName("hidden")[0].innerText + ",";
      }
      encodedCompanies += companies[companies.length - 1].getElementsByClassName("hidden")[0].innerText;
      redirectUrl += encodeURIComponent(encodedCompanies);
      console.log(redirectUrl);
      console.log(decodeURIComponent(redirectUrl));
      window.open(redirectUrl, "_blank");
    }
  }

  function id(idName) {
    return document.getElementById(idName);
  }
})();
