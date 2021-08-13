# ct-moderncommercelandscape

##  Overview
This document will explain how to make changes to the information displayed on moderncommercelandscape, a website that helps people explore modern e-commerce vendors.

### Explanation of relevant variables
`promptDict` key (string): prompt that appears in homepage (the expandable options); value (array): relevant categories\
`categoryDescription` key (string): category name; value (string): description of category\
`categoryTree` key (string): category name; value (array): immediate subcategories of the category. Used currently to generate rootcategories \
`categoryVendors` key (string): category name; value (array): vendors specializing in category\
`vendorInfo` key (string): vendor name; value (dictionary): detailed information for each vendor (see example in "Making Changes: data")  \
`filterTypes` array: list of attribute types that will appear in filter panel\
`socialIcons` key (string): social icon (e.g., "linkedin"); value (string): icon URL

### How to make common changes

#### Making changes: data

##### ADD/REMOVE A PROMPT ON THE HOME PAGE
Format: `promptDict["Prompt"] = ["Relevant Category 1", "Relevant Category 2", "Relevant Category 3", ...];` (best with 1-4 categories)\
To remove, simply comment out the appropriate line of code.

##### ADD/REMOVE A CATEGORY
*NOTE: Category will not appear on page until you also add it to categoryDescription*\
Format: `categoryTree["Supercategory"] = ["Existing Category 1", "Existing Category 2", "NEW CATEGORY"];`\
Add the new category to the appropriate supercategory (i.e., the most appropriate parent that exists in the list of categories). If the supercategory has no children yet (i.e., not a key in categoryTree, but supercategory is a value in categoryTree), make a new relationship following this format: `categoryTree["Supercategory"] = ["NEW CATEGORY"]`;\
To remove, comment out references where necessary.

###### ADD/EDIT/REMOVE DESCRIPTION FOR A CATEGORY
Format: `categoryDescription["Category"] = "Beginner-friendly description";`\
To remove, comment out the appropriate line of code.

##### ADD/EDIT/REMOVE A VENDOR
**To add**\
Step 1: add vendor to categoryVendors where appropriate, e.g. `categoryVendors["Social Listing"] = ["Tribe", "NEW VENDOR"];`\
Step 2: add vendor information to vendorInfo (follow example format below).\
Example Format: `vendorInfo["Bloomreach Experience Platform (Hippo)"] = {"image": "images/logos/bloomreach.png", "description": "Bloomreach solutions combine the power of unified customer and product data with the speed and scale of AI and predictive decisioning, so you can deliver magical experiences that convert on any channel and every journey.", "contact": "1-111-111-1111", "attributes": {"Regions Served": ["USA", "Germany"], "Funding to Date ($ in millions)": 247, "Employee Count": 500, "Year Founded": 2009, "MACH Certified": true, "GraphQL Support": false, "Gartner/Forrester Industry Leader": true}, "socials": {"url": "https://www.bloomreach.com", "linkedin": "https://www.linkedin.com/company/bloomreach/", "crunchbase": "https://www.crunchbase.com/organization/bloomreach", "g2": "https://www.g2.com/products/bloomreach-bloomreach/reviews"}};`

**To edit**\
Navigate to the appropriate line of code referencing the vendor and edit as necessary, e.g. `"contact": "1-111-111-1111"` to `"contact": "1-234-567-8901"`

**To remove**\
Comment out vendor name references in categoryVendors, e.g. `categoryVendors["CDN"] = ["Akamai", "AWS Cloudfront", /*"Google Cloud CDN", */"Fastly", "Azure CDN", "Cloudflare"];`

##### CHANGE DISPLAYED FILTERS
The filters panel only shows filters for attributes specified in filterTypes. To change, simply add/remove attributes to the filterTypes array, making sure that the attribute is typed the same as in the `vendorInfo[vendor]["attributes"]` array\
Example Format: `filterTypes = ["Regions Served", "MACH Certified", "Gartner/Forrester Industry Leader"];`

#### Making changes: design
`style.css` Stylesheet for the website\
`style-pdf.css` Stylesheet for the PDF output page (i.e. the page that pops up after clicking "Generate Summary")\
`index.js` Script for the website\
`pdf.js` Script for the PDF output page

## Deploying to Production
1. Navigate to the directory with the folder "www" and app.yaml
3. Open terminal from this location (e.g., on Windows, right click in folder and click on "Git Bash Here").
2. If this is your first time, run `gcloud init` and select the right project (ct-product-landscape). If you do not see the project, please ask the SRE team for help.
3. Run `gcloud app deploy` to push changes to www.moderncommercelandscape.com. It might take a few minutes to update.

## Next steps
- Display list of partners that vendors work with to aid selection
- Simplify data entry/revision with a backend API
- Collect user information
