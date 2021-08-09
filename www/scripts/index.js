(function() {
  "use strict";
  window.addEventListener("load", init);

  // data structure references defined in data.js

  function init() {
    initOptionBox();
    id("category-select-btn").addEventListener("click", showCategoryView);
    id("explore-btn").addEventListener("click", showExploreView);
    id("click-to-back").addEventListener("click", revertView);
    id("prompt-select-btn").addEventListener("click", revertCategoryView);
    id("website-logo").addEventListener("click", resetView);
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
    if(id("option-box").getElementsByClassName("category-grid-container").length == 0) {
      id("category-view-link").classList.remove("hidden");
    } else {
      id("prompt-view-link").classList.remove("hidden");
    }
    id("company-details").classList.add("hidden");
    id("website-description").classList.remove("hidden");
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
      let newPrompt = document.createElement("div");
      newPrompt.classList.add("option");
      let promptTxt = document.createElement("h3");
      promptTxt.innerText = prompt;
      newPrompt.appendChild(promptTxt);
      let downArrow = document.createElement("img");
      downArrow.src = "images/icons/down-arrow.png";
      newPrompt.appendChild(downArrow);
      newPrompt.addEventListener("click", expandOption.bind(newPrompt));
      // newLabelContainer.appendChild(newPrompt);
      thisColumn.appendChild(newPrompt);
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

  // filling options from categoryCompanies
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
        if(categoryDescription[category]) {
          description.innerText = categoryDescription[category];
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
      // setBackgroundColor(this);
      let categories = promptDict[this.innerText.trim()];
      let newHTML = "<h3>" + this.innerText.trim() + "</h3>" + "<div class=\"category-list\">";
      for(let i = 0; i < categories.length; i++) {
        if(categories[i] in categoryCompanies) {
          let description = "description placeholder";
          if(categories[i] in categoryDescription) {
            description = categoryDescription[categories[i]];
          }
          // console.log(description);
          newHTML += "<div class=\"category\"><h4>" + categories[i] + "</h4><p>" + description + "</p><img class=\"inblock-icon-2\" src=\"images/icons/plus-blue.png\"/></div>";
        }
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
    id("explore-btn").classList.remove("btn-deselected");
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
      // set background color
      newElement.classList.add(getBackgroundColor(this.firstChild.innerText));
      newElement.addEventListener("click", removeSelection.bind(newElement));
      selectionBox.appendChild(newElement);
    }
  }

  function removeSelection() {
    this.remove();
    if(id("selected-options").getElementsByClassName("selection").length == 0) {
      id("explore-btn").classList.add("btn-deselected");
    }
  }

  function removeCompany() {
    this.remove();
    if(id("selected-companies").getElementsByClassName("company-blue").length == 0) {
      id("pdf-button").classList.add("btn-deselected");
      id("section-right-description-2").classList.remove("hidden");
    }
  }

  function showExploreView() {
    let selections = id("selected-options").getElementsByClassName("selection");
    if(selections.length > 0) {
      id("category-select").classList.add("hidden");
      id("category-explore").classList.remove("hidden");
      id("click-to-back").parentNode.classList.remove("hidden");
      id("category-view-link").classList.add("hidden");
      id("prompt-view-link").classList.add("hidden");
      id("website-description").classList.add("hidden");
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
      updateBox(newLego.innerText.trim(), []);
      updateFilters(newLego.innerText.trim());
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

  // updates list of vendors for a category depending on filters array
  function updateBox(category, filters) {
    let companyBox = id("companies-box");
    // first remove all existing childnodes
    while(companyBox.firstChild) {
      companyBox.removeChild(companyBox.firstChild);
    }
    if(category in categoryCompanies) {
      for(let i = 0; i < categoryCompanies[category].length; i++) {
        let companyName = categoryCompanies[category][i];
        if(passesFilters(companyName, filters)) {
          let newCompany = document.createElement("div");
          newCompany.classList.add("company");
          let companyName = categoryCompanies[category][i];
          newCompany.innerHTML = "<div class=\"logo-container\"><h2 class=\"hidden\">" + companyName + "</h2><img class=\"logo\" src=\"" + companyInfo[companyName]["image"] + "\" alt=\"" + companyName + "\"/></div>";
          newCompany.addEventListener("click", expandDetails.bind(newCompany));
          companyBox.appendChild(newCompany);
        }
      }
    } else {
      let message = document.createElement("p");
      message.innerText = "We currently do not have information for " + category + ".";
      companyBox.appendChild(message);
    }
  }

  // company = company name, filters = dictionary of attributes that need to be met
  function passesFilters(company, filters) {
    let isValid = true;
    let companyAttributes = companyInfo[company]["attributes"];
    for(let filter in filters) {
      // filter is an array of attributes
      let values = filters[filter];
      for(let i = 0; i < values.length; i++) {
        if(!(filter in companyAttributes)) {
          isValid = false;
        } else if(Array.isArray(companyAttributes[filter])) {
          for(let j = 0; j < values.length; j++) {
            if(!companyAttributes[filter].includes(values[j])) {
              isValid = false;
            }
          }
        } else if(!values.includes(companyAttributes[filter].toString())) {
          isValid = false;
        }
      }
    }
    return isValid;
  }

  // initial update of filter box - individual or multiple select depending on attribute
  function updateFilters(category) {
    let filtersDict = findAttributes(category);
    let container = id("filters");
    while(container.firstChild) {
      container.removeChild(container.firstChild);
    }
    let heading = document.createElement("h1");
    heading.innerText = "Filters (Click to Select):";
    container.appendChild(heading);
    for(let attribute in filtersDict) {
      let filterContainer = document.createElement("div");
      filterContainer.classList.add("filters-row");
      let description = document.createElement("h3");
      description.innerText = attribute;
      filterContainer.appendChild(description);
      let options = document.createElement("div");
      options.classList.add("filters-box");
      for(let i = 0; i < filtersDict[attribute].length; i++) {
        let option = document.createElement("div");
        option.classList.add("filter");
        option.innerText = filtersDict[attribute][i];
        option.addEventListener("click", applyFilter.bind(option));
        options.appendChild(option);
      }
      filterContainer.appendChild(options);
      container.appendChild(filterContainer);
    }
  }

  // clicking on filter will 1. toggle its state on/off, 2. update list of companies accordingly
  function applyFilter() {
    let value = this.innerText;
    let attribute = this.parentNode.parentNode.querySelector("h3").innerText;
    if(valuesAreArray(attribute)) {
      toggleFilter(this);
    } else {
      let selectedFilter = this.parentNode.querySelector(".filter-selected");
      if(selectedFilter != null && !this.classList.contains("filter-selected")) {
        toggleFilter(selectedFilter);
      }
      toggleFilter(this);
    }
    filterCompanies();
  }

  // filter = .filter or .filter-selected div element
  function toggleFilter(filter) {
    if(filter.classList.contains("filter")) {
      filter.classList.remove("filter");
      filter.classList.add("filter-selected");
    } else {
      filter.classList.remove("filter-selected");
      filter.classList.add("filter");
    }
  }

  function filterCompanies() {
    let filters = id("filters");
    let selectedFiltersDict = {};
    let filterRows = filters.getElementsByClassName("filters-row");
    for(let i = 0; i < filterRows.length; i++) {
      let attribute = filterRows[i].querySelector("h3").innerText;
      let selectedFilters = filterRows[i].getElementsByClassName("filter-selected");
      if(attribute in selectedFiltersDict) {
        for(let j = 0; j < selectedFilters.length; j++) {
          if(!selectedFiltersDict[attribute].includes(selectedFilters[j].innerText)) {
            selectedFiltersDict[attribute].push(selectedFilters[j].innerText);
          }
        }
      } else {
        let filterAry = [];
        for(let j = 0; j < selectedFilters.length; j++) {
          filterAry.push(selectedFilters[j].innerText);
        }
        selectedFiltersDict[attribute] = filterAry;
      }
    }
    // filter companies
    hideCompanies(selectedFiltersDict);
  }

  function hideCompanies(dict) {
    let companies = id("companies-box").querySelectorAll("div");
    for(let i = 0; i < companies.length; i++) {
      if(passesFilters(companies[i].querySelector(".hidden").innerText, dict)) {
        companies[i].classList.remove("hidden");
      } else {
        companies[i].classList.add("hidden");
      }
    }
  }

  // returns true if the values for an attribute are arrays (e.g., Regions Served) by checking the first company in companyInfo
  function valuesAreArray(attribute) {
    let isArray = false;
    if(attributeTypes[attribute] == "array") {
      isArray = true;
    }
    return isArray;
  }

  // returns list of attributes that each company in category has
  function findAttributes(category) {
    let allAttributes = {};
    for(let i = 0; i < categoryCompanies[category].length; i++) {
      let companyName = categoryCompanies[category][i];
      if(companyName in companyInfo) {
        let companyAttributes = companyInfo[companyName]["attributes"];
        for(let attribute in companyAttributes) {
          if(attribute in allAttributes) {
            if(Array.isArray(companyAttributes[attribute])) { // e.g. regions served
              for(let j = 0; j < companyAttributes[attribute].length; j++) {
                let value = companyAttributes[attribute][j];
                if(!allAttributes[attribute].includes(value)) {
                  allAttributes[attribute].push(value);
                }
              }
            } else {
              if(!allAttributes[attribute].includes(companyAttributes[attribute])) {
                allAttributes[attribute].push(companyAttributes[attribute]);
              }
            }
          } else {
            if(Array.isArray(companyAttributes[attribute])) {
              let ary = [];
              for(let i = 0; i < companyAttributes[attribute].length; i++) {
                ary.push(companyAttributes[attribute][i]);
              }
              allAttributes[attribute] = ary;
            } else {
              let ary = [];
              ary.push(companyAttributes[attribute]);
              allAttributes[attribute] = ary;
            }
          }
        }
      }
    }
    return allAttributes;
  }

  // popup with additional information about company
  // add button that adds company to vendor shortlist
  function expandDetails() {
    let company = this; // changing refernece to avoid key word when sending to closepopup
    let oldSelection = id("companies-box").querySelector(".company-selected");
    if(oldSelection != null) {
      oldSelection.removeChild(oldSelection.querySelector(".popup"));
      oldSelection.classList.remove("company-selected");
      oldSelection.classList.add("company");
    }
    if(!this.classList.contains("company-selected")) {
      this.classList.remove("company");
      this.classList.add("company-selected");
      let companyName = this.querySelector(".hidden").innerText;
      let popup = document.createElement("div");
      popup.classList.add("popup");
      let nameContainer = document.createElement("h3");
      nameContainer.innerText = companyName;
      let closeIcon = document.createElement("img");
      closeIcon.src = "images/icons/x.png";
      closeIcon.classList.add("popup-icon");
      closeIcon.addEventListener("click", function(e) {closePopup(e, company)});
      let description = document.createElement("p");
      description.innerText = companyInfo["description"];
      let addBtn = document.createElement("button");
      addBtn.id = "company-add-btn";
      addBtn.innerText = "Add to List";
      addBtn.addEventListener("click", addToCompanyList.bind(companyName));
      popup.appendChild(nameContainer);
      popup.appendChild(description);
      popup.appendChild(closeIcon);
      popup.appendChild(addBtn);
      this.appendChild(popup);
      this.removeEventListener("click", expandDetails);
    }
  }

  function stopBubbling(evt) {
    evt.stopPropagation();
    evt.cancelBubble = true;
  }

  function closePopup(e, company) {
    company.removeChild(company.querySelector(".popup"));
    company.classList.remove("company-selected");
    company.classList.add("company");
    stopBubbling(e);
  }

  // this = company name (string)
  function addToCompanyList() {
    id("section-right-description-2").classList.add("hidden");
    let section = id("selected-companies");
    let categoryName = id("legos").querySelector(".lego-selected").innerText;
    if(!vendorAdded(this, categoryName)) {
      // first check if category section exists already
      let selectedCategories = section.getElementsByClassName("company-container");
      let categoryExists = false;
      for(let i = 0; i < selectedCategories.length; i++) {
        if(selectedCategories[i].querySelector("h4").innerText == categoryName) {
          categoryExists = true;
          let newCompany = makeCompanyIcon(this);
          selectedCategories[i].querySelector("div").appendChild(newCompany);
        }
      }
      if(!categoryExists) {
        let backgroundColor = "background-default";
        let root = findRoot(this);
        if(root in categoryColors) {
          backgroundColor = categoryColors[root];
        }
        let newContainer = document.createElement("div");
        newContainer.classList.add("company-container");
        newContainer.classList.add(backgroundColor);
        let categoryContainer = document.createElement("h4");
        categoryContainer.innerText = categoryName;
        newContainer.appendChild(categoryContainer);
        let companyBox = document.createElement("div");
        companyBox.appendChild(makeCompanyIcon(this));
        newContainer.appendChild(companyBox);
        section.appendChild(newContainer);
      }
    }
    id("pdf-button").classList.remove("btn-deselected");
  }

  function makeCompanyIcon(name) {
    let newCompany = document.createElement("div");
    newCompany.classList.add("company-blue");
    let companyName = document.createElement("h3");
    companyName.classList.add("hidden");
    companyName.innerText = name;
    newCompany.appendChild(companyName);
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("logo-container");
    let img = document.createElement("img");
    img.classList.add("logo");
    img.src = companyInfo[name]["image"];
    imgContainer.appendChild(img);
    newCompany.appendChild(imgContainer);
    let icon = document.createElement("img");
    icon.classList.add("inblock-icon-2");
    icon.src = "images/icons/minus-blue.png";
    newCompany.appendChild(icon);
    newCompany.addEventListener("click", removeCompany.bind(newCompany));
    return newCompany;
  }

  // checks if vendor is added already to vendor shortlist
  function vendorAdded(company, category) {
    let isAdded = false;
    let selections = id("selected-companies").getElementsByClassName("company-container");
    for(let i = 0; i < selections.length; i++) {
      if(selections[i].querySelector("h4").innerText.trim() == category.trim()) {
        let addedCompanies = selections[i].querySelector("div").getElementsByClassName("company-blue");
        for(let j = 0; j < addedCompanies.length; j++) {
          let thisCompany = addedCompanies[j].querySelector("h3").innerText;
          if(company == thisCompany) {
            isAdded = true;
          }
        }
      }
    }
    return isAdded;
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

  // update content when switching category tabs
  function updateContent() {
    let currentLego = id("lego-box").querySelector(".lego-selected");
    currentLego.classList.remove("lego-selected");
    currentLego.classList.add("lego-unselected");
    this.classList.remove("lego-unselected");
    this.classList.add("lego-selected");
    let category = this.innerText.trim();
    updateBox(category, []);
    updateFilters(category);
  }

  // function updateFilters() {
  //   let companies = id("companies-box").getElementsByClassName("hidden");
  //   let attributesDict = {"Regions Served": [], "Funding to Date ($)": [], "Employee Count": []};
  //   // companyInfo["Brightcove"] = {"image": "", "description": "", "contact": "", "attributes": {"Regions Served": [], "Funding to Date ($)": 0, "Employee Count": 0}};
  //   for(let i = 0; i < companies.length; i++) {
  //     if(companies[i].innerText in companyInfo) {
  //       let companyAttributes = companyInfo[companies[i].innerText]["attributes"];
  //       for(let attribute in companyAttributes) {
  //         if(attribute == "Regions Served") { // special case bc arrays instead of strings/numbers
  //           for(let j = 0; j < companyAttributes[attribute].length; j++) {
  //             if(!attributesDict[attribute].includes(companyAttributes[attribute][j])) {
  //               attributesDict[attribute].push(companyAttributes[attribute][j]);
  //             }
  //           }
  //         } else {
  //           if(!attributesDict[attribute].includes(companyAttributes[attribute])) {
  //             attributesDict[attribute].push(companyAttributes[attribute]);
  //           }
  //         }
  //       }
  //     }
  //   }
  //   updateFiltersHTML(attributesDict);
  // }
  //
  // function updateFiltersHTML(attributes) {
  //   let filterSection = id("filters");
  //   while(filterSection.firstChild) {
  //     filterSection.removeChild(filterSection.firstChild);
  //   }
  //   let heading = document.createElement("h1");
  //   heading.innerText = "Filters (Click to select):";
  //   filterSection.appendChild(heading);
  //   for(let attribute in attributes) {
  //     let newRow = document.createElement("div");
  //     newRow.classList.add("filters-row");
  //     let filterType = document.createElement("h3");
  //     filterType.innerText = attribute;
  //     newRow.appendChild(filterType);
  //     let filterBox = document.createElement("div");
  //     filterBox.classList.add("filters-box");
  //     for(let i = 0; i < attributes[attribute].length; i++) {
  //       let newFilterValue = document.createElement("div");
  //       newFilterValue.classList.add("filter");
  //       newFilterValue.innerText = attributes[attribute][i];
  //       newFilterValue.addEventListener("click", applyFilter.bind(newFilterValue));
  //       filterBox.appendChild(newFilterValue);
  //     }
  //     newRow.appendChild(filterBox);
  //     filterSection.appendChild(newRow);
  //   }
  // }
  //
  // function applyFilter() {
  //   // simple case - for regions
  //   if(this.parentNode.parentNode.firstChild.innerText == "Regions Served") {
  //     if(this.classList.contains("filter")) {
  //       this.classList.remove("filter");
  //       this.classList.add("filter-selected");
  //     } else {
  //       this.classList.remove("filter-selected");
  //       this.classList.add("filter");
  //     }
  //   } else {
  //     let currentFilter = this.parentNode.getElementsByClassName("filter-selected")[0];
  //     if(currentFilter == undefined) {
  //       this.classList.remove("filter");
  //       this.classList.add("filter-selected");
  //     } else if(currentFilter.innerText != this.innerText) {
  //       currentFilter.classList.remove("filter-selected");
  //       currentFilter.classList.add("filter");
  //       this.classList.remove("filter");
  //       this.classList.add("filter-selected");
  //     } else {
  //       this.classList.remove("filter-selected");
  //       this.classList.add("filter");
  //     }
  //   }
  //   let filters = calculateFilters();
  //   filterCompanies(filters);
  // }
  //
  // // returns dictionary of filters applied
  // function calculateFilters() {
  //   let filters = {};
  //   let filterRows = id("filters").getElementsByClassName("filters-row");
  //   for(let i = 0; i < filterRows.length; i++) {
  //     let filterType = filterRows[i].firstChild.innerText;
  //     let filtersArray = [];
  //     let selectedFilters = filterRows[i].getElementsByClassName("filter-selected");
  //     for(let j = 0; j < selectedFilters.length; j++) {
  //       filtersArray.push(selectedFilters[j].innerText);
  //     }
  //     filters[filterType] = filtersArray;
  //   }
  //   return filters;
  // }
  //
  // function filterCompanies(filters) {
  //   let companies = id("companies-box").querySelectorAll(".company, .company-selected");
  //   // first reset - remove class "hidden"
  //   for(let i = 0; i < companies.length; i++) {
  //     companies[i].classList.remove("hidden");
  //     let name = companies[i].getElementsByClassName("hidden")[0].innerText;
  //     let companyAttributesDict = companyInfo[name]["attributes"];
  //     let meetsRequirement = true;
  //     for(let attribute in companyAttributesDict) {
  //       if(attribute in filters) {
  //         if(attribute == "Regions Served") {
  //           for(let i = 0; i < filters[attribute].length; i++) {
  //             if(!companyAttributesDict[attribute].includes(filters[attribute][i])) {
  //               meetsRequirement = false;
  //             }
  //           }
  //         } else {
  //           for(let i = 0; i < filters[attribute].length; i++) {
  //             if(companyAttributesDict[attribute] != filters[attribute][i]) { // can only select one option for funding/company size
  //               meetsRequirement = false;
  //             }
  //           }
  //         }
  //       }
  //     }
  //     if(!meetsRequirement) {
  //       companies[i].classList.add("hidden");
  //     }
  //   }
  // }

  function showCategoryView() {
    id("prompt-view-link").classList.remove("hidden");
    id("category-view-link").classList.add("hidden");
    initOptionBoxNoPrompt();
    id("main-prompt").classList.add("hidden");
    id("main-prompt-sub").classList.add("hidden");
  }

  function revertCategoryView() {
    id("prompt-view-link").classList.add("hidden");
    id("category-view-link").classList.remove("hidden");
    id("main-prompt").classList.remove("hidden");
    id("main-prompt-sub").classList.remove("hidden");
    initOptionBox();
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
      window.open(redirectUrl, "_blank");
    }
  }

  function id(idName) {
    return document.getElementById(idName);
  }
})();
