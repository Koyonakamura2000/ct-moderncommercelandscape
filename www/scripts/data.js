// setting up data

// key: beginner-friendly prompt; value: array of relevant categories
var promptDict = {};
promptDict["Include interactive features to improve the store browsing experience"] = ["Content Management", "Images", "Video"];
promptDict["Create an e-commerce website for my products"] = ["Frontend-as-a-Service", "Frontend", "SEO", "Commerce"];
promptDict["Manage product orders and statuses"] = ["Returns", "OMS", "Shipping"];
promptDict["Increase customer retention on my website"] = ["Promotions", "Personalization", "Loyalty"];
promptDict["Reduce the number of abandoned carts"] = ["Personalization"];
promptDict["Improve website performance"] = ["Load Optimization", "CDN", "JAMStack Hosting"];
promptDict["Build a marketing-only (non-transactional) website"] = ["Frontend-as-a-Service"];
promptDict["Help my customers better discover products"] = ["Search", "Conversational", "Ratings & Reviews"];

// key: category; value: string - beginner-friendly description of category
var categoryDescription = {};
categoryDescription["Frontend"] = "General package for the customer-facing interface for your service.";
categoryDescription["CDN"] = "Content Delivery Networks improve website availability and performance by optimizing for geographic location.";
categoryDescription["Load Optimization"] = "Improve website load-times for a faster user experience.";
categoryDescription["JAMStack Hosting"] = "Host your website on the cloud to avoid server management.";
categoryDescription["Frontend-as-a-Service"] = "Beginner-friendly, efficient website-building without having to code.";
categoryDescription["A/B Testing"] = "A/B testing helps you improve website engagement/retainment through statistical analysis.";
categoryDescription["SEO"] = "Search Engine Optimization improves your website's discoverability on search engines.";
categoryDescription["Store"] = "STORE";
categoryDescription["Clienteling"] = "Empower retail associates to foster customer relationships and improve the in-store experience.";
categoryDescription["POS"] = "POS";
categoryDescription["Social"] = "SOCIAL";
categoryDescription["AR"] = "AR";
categoryDescription["Backend"] = "Backend";
categoryDescription["Content Management"] = "Headless content management decouples the frontend (customer-facing interface) and the backend (files, images, etc.) for increased flexibility and scalability across devices.";
categoryDescription["DAM"] = "Digital Asset Management lets you organize all your digital assets (e.g., documents, videos, images) in a single location."
categoryDescription["Images"] = "Manage your images in a single location.";
// categoryDescription["Videos"] = "Manage your videos in a single location.";
categoryDescription["Workflow/Approval"] = "WORKFLOW/APPROVAL";
categoryDescription["Commerce"] = "Handle the backend of your commercial service, with complete freedom on frontend implementation.";
categoryDescription["Orders"] = "Orders";
categoryDescription["Single Page Checkout"] = "Quick and easy secure checkout experience.";
categoryDescription["Payment"] = "Suite of services to handle online payment.";
categoryDescription["Fraud"] = "Protect against business fraud and cyber attacks.";
categoryDescription["Wallets"] = "WALLETS";
categoryDescription["Gift Cards"] = "GIFT CARDS";
categoryDescription["Taxes"] = "Automate sales tax calculations.";
categoryDescription["Subscriptions"] = "Automate the handling of subscriptions for your service.";
categoryDescription["Product"] = "PRODUCT";
categoryDescription["Search"] = "Improve the search feature of your service.";
// categoryDescription["Conversational"] = "CONVERSATIONAL";
categoryDescription["Visual"] = "Visual";
categoryDescription["Recommendations"] = "Recommendations";
categoryDescription["In-store"] = "In-store";
categoryDescription["Ratings & Reviews"] = "Collect and display user-generated ratings and reviews.";
categoryDescription["Pricing"] = "Automate price management of your products to smartly adjust prices.";
categoryDescription["Promotions"] = "Automate promotion marketing without wasting development time and money.";
categoryDescription["Coupons"] = "Coupons";
categoryDescription["Inventory"] = "Inventory";
categoryDescription["Social Listing"] = "Advertise your product to social media audiences.";
categoryDescription["Customer"] = "Customer";
categoryDescription["Loyalty"] = "Foster customer loyalty leveraging customer metrics.";
categoryDescription["Personalization"] = "Connect with customers personally with personalized content.";
categoryDescription["OMS"] = "Order Management Systems handle order entry and processing for online and physical stores.";
categoryDescription["In-store"] = "In-store";
categoryDescription["PIM"] = "Product Information Management helps you manage your products in a single place.";
categoryDescription["Product Enrichment"] = "Provide additional product information for customers looking for specific details.";
categoryDescription["Content Distribution/Enrichment"] = "Find and update missing, inaccurate, or outdated product information.";
categoryDescription["Commerce Platforms"] = "Build a complete online platform for your commercial service.";
categoryDescription["Marketplace Platforms"] = "Build an online marketplace organizing products from various sellers.";
categoryDescription["Outbound Contact"] = "E-mail, phone, and other communication services for your platform.";
categoryDescription["CPQ"] = "Short for Configure, Price, and Quote, CPQ helps you figure out the right product/service combinations for your business needs.";
categoryDescription["Connectivity/Integrations"] = "Facilitate implementation of your web services for a seamless and efficient experience.";
categoryDescription["GraphQL Client"] = "";
categoryDescription["GraphQL Server"] = "";
categoryDescription["Identity & Access Management"] = "";
categoryDescription["Continuous Delivery Tooling"] = "";


// key: category; value: array of subcategories; no key if no subcategories (e.g., Frontend-as-a-Service)
var categoryTree = {};
categoryTree["Frontend"] = ["CDN", "Frontend-as-a-Service", "A/B Testing", "SEO", "Store", "Social", "AR", "VR"];
categoryTree["CDN"] = ["Load Optimization", "JAMStack Hosting"];
categoryTree["Store"] = ["Clienteling", "POS"];
categoryTree["Backend"] = ["Content Management", "Commerce", "OMS", "PIM", "Marketplace", "Marketing", "Service", "CRM", "Analytics", "CPQ", "MDM", "Globalization/Localization", "Connectivity/Integrations"];
categoryTree["Content Management"] = ["DAM", "Workflow/Approval"];
categoryTree["DAM"] = ["Images"];
categoryTree["Commerce"] = ["Orders", "Product", "Customer"];
categoryTree["Orders"] = ["Single Page Checkout", "Payment", "Subscriptions"];
categoryTree["Payment"] = ["Fraud", "Wallets", "Gift Cards", "Taxes"];
categoryTree["Product"] = ["Search", "Ratings & Reviews", "Pricing", "Inventory", "Social Listing"];
categoryTree["Search"] = ["Visual", "Recommendations", "In-store"];
categoryTree["Pricing"] = ["Promotions"];
categoryTree["Promotions"] = ["Coupons"];
categoryTree["Customer"] = ["Loyalty", "Personalization"];
categoryTree["OMS"] = ["In-store", "Shipping"];
categoryTree["PIM"] = ["Product Enrichment", "Content Distribution/Syndication", "Data Centralization and Governance", "Data Onboarding from Partners"];
categoryTree["Marketplace"] = ["Commerce Platforms", "Marketplace Platforms"];
categoryTree["Marketing"] = ["Outbound Contact", "Campaign Management"];
categoryTree["CRM"] = ["CDP"];
categoryTree["Analytics"] = ["Customer Journey"];
categoryTree["Globalization/Localization"] = ["Translations"];
categoryTree["Developer Tooling"] = ["GraphQL Client", "GraphQL Server", "Identity & Access Management", "Continuous Delivery Tooling"];

// key: category; value: array of companies specializing in category
// if the category doesn't exist here (i.e., no companies associated with category), it will not show on front end.
var categoryCompanies = {};
categoryCompanies["CDN"] = ["Akamai", "AWS Cloudfront", "Google Cloud CDN", "Fastly", "Azure CDN", "Cloudflare"];
categoryCompanies["Load Optimization"] = ["Moovweb", "Yottaa"];
categoryCompanies["Frontend-as-a-Service"] = ["Frontastic", "Vue Storefront", "commerce-ui", "Shogun"];
categoryCompanies["SEO"] = ["Bloomreach"];
categoryCompanies["Frontend"] = ["Bloomreach Experience Platform (Hippo)", "Adobe Experience Manager", "Acquia (Drupal)", "Styla"];
categoryCompanies["Clienteling"] = ["Tulip", "NewStore"];
categoryCompanies["Content Management"] = ["Contentstack", "Contentful", "Amplience", "GraphCMS", "CoreMedia"];
categoryCompanies["DAM"] = ["Amplience", "Bynder", "CoreMedia", "Threekit", "Cloudinary"];
categoryCompanies["Images"] = ["Scene7"];
// categoryCompanies["Video"] = ["Brightcove"];
categoryCompanies["Commerce"] = ["commercetools", "Storm Commerce", "Commerce Layer", "Four51", "emporix", "Episerver"];
categoryCompanies["Single Page Checkout"] = ["Fast", "Bolt"];
categoryCompanies["Payment"] = ["CyberSource", "Stripe", "Braintree", "Adyen"];
categoryCompanies["Fraud"] = ["N38"];
categoryCompanies["Taxes"] = ["Avalara", "Vertex"];
categoryCompanies["Subscriptions"] = ["Chargebee"];
categoryCompanies["Search"] = ["Constructor.io", "Coveo", "LucidWorks", "Attraqt"];
categoryCompanies["Ratings & Reviews"] = ["Bazaarvoice", "Trustpilot"];
categoryCompanies["Pricing"] = ["7Learnings"];
categoryCompanies["Promotions"] = ["Talon.One", "XCCommerce", "Voucherify"];
categoryCompanies["Social Listing"] = ["Tribe"];
categoryCompanies["Loyalty"] = ["Voyado", "Antavo"];
categoryCompanies["Personalization"] = ["trbo", "Dynamic Yield", "Rich Relevance", "Apptus", "Emarsys"];
categoryCompanies["OMS"] = ["Fluent", "fulfillmenttools", "Manhattan Associates", "Sterling"];
categoryCompanies["In-Store"] = ["NewStore", "Mercaux", "Tulip"];
categoryCompanies["PIM"] = ["Riversand", "inRiver", "Pimcore"];
categoryCompanies["Product Enrichment"] = ["Salsify"];
categoryCompanies["Content Distribution/Syndication"] = ["Productsup"];
categoryCompanies["Commerce Platforms"] = ["VTEX"];
categoryCompanies["Marketplace Plaforms"] = ["Mirakl"];
categoryCompanies["Outbound Contract"] = ["SendGrid", "Twilio", "Postmark", "Mailchimp"];
categoryCompanies["CPQ"] = ["Threekit"];
categoryCompanies["GraphQL Client"] = ["Apollo"];
categoryCompanies["GraphQL Server"] = ["Apollo"];
categoryCompanies["Identity & Access Management"] = ["Auth0", "Azure Active Directory"];
categoryCompanies["Continuous Delivery Tooling"] = ["Vamp.io", "Ashiba"];
categoryCompanies["Connectivity/Integrations"] = ["Pipe17", "Workato"];

// key: company; value: dictionary with keys "logo" "description" "contact" "attributes" (dictionary with keys "Regions Served" (Array), "Funding to Date ($)", "Employee Count")
var companyInfo = {};
companyInfo["Bloomreach Experience Platform (Hippo)"] = {"image": "images/logos/bloomreach.png", "description": "Description", "contact": "1-111-111-1111", "attributes": {"Regions Served": ["USA", "Germany"], "Funding to Date ($)": 9999, "Employee Count": 100}};
companyInfo["Adobe Experience Manager"] = {"image": "images/logos/adobeexperiencemanager.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 1500, "Employee Count": 200}};
companyInfo["Acquia (Drupal)"] = {"image": "images/logos/acquiadrupal.jpg", "description": "Placeholder for company description - fill in later.", "contact": "123-567-9872", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 0}};
companyInfo["Styla"] = {"image": "images/logos/styla.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
companyInfo["Akamai"] = {"image": "images/logos/akamai.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
companyInfo["AWS CloudFront"] = {"image": "images/logos/awscloudfront.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
companyInfo["Google Cloud CDN"] = {"image": "images/logos/googlecloud.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
companyInfo["Fastly"] = {"image": "images/logos/fastly.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
companyInfo["Azure CDN"] = {"image": "images/logos/azure.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
companyInfo["Cloudflare"] = {"image": "images/logos/cloudflare.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
companyInfo["Moovweb"] = {"image": "images/logos/moovweb.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
companyInfo["Yottaa"] = {"image": "images/logos/yottaa.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
companyInfo["Netlify"] = {"image": "images/logos/netlify.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
companyInfo["Frontastic"] = {"image": "images/logos/frontastic.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
companyInfo["Vue Storefront"] = {"image": "images/logos/vuestorefront.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1500, "Employee Count": 0}};
companyInfo["commerce-ui"] = {"image": "images/logos/commerce-ui.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
companyInfo["Shogun"] = {"image": "images/logos/shogun.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 0}};
companyInfo["Bloomreach"] = {"image": "images/logos/bloomreach.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
companyInfo["Tulip"] = {"image": "images/logos/tulip.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1500, "Employee Count": 0}};
companyInfo["NewStore"] = {"image": "images/logos/newstore.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
companyInfo["Contentstack"] = {"image": "images/logos/contentstack.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 0}};
companyInfo["Contentful"] = {"image": "images/logos/contentful.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 1000, "Employee Count": 200}};
companyInfo["Amplience"] = {"image": "images/logos/amplience.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 1000, "Employee Count": 0}};
companyInfo["GraphCMS"] = {"image": "images/logos/graphcms.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
companyInfo["CoreMedia"] = {"image": "images/logos/coremedia.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1500, "Employee Count": 0}};
companyInfo["Bynder"] = {"image": "images/logos/bynder.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
companyInfo["Threekit"] = {"image": "images/logos/threekit.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1500, "Employee Count": 0}};
companyInfo["Cloudinary"] = {"image": "images/logos/cloudinary.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
companyInfo["Scene7"] = {"image": "images/logos/scene7.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 0}};
companyInfo["Brightcove"] = {"image": "images/logos/brightcove.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
companyInfo["commercetools"] = {"image": "images/logos/commercetools.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 0}};
companyInfo["Storm Commerce"] = {"image": "images/logos/stormcommerce.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
companyInfo["Commerce Layer"] = {"image": "images/logos/commercelayer.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1500, "Employee Count": 0}};
companyInfo["Four51"] = {"image": "images/logos/four51.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
companyInfo["emporix"] = {"image": "images/logos/emporix.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 0}};
companyInfo["Episerver"] = {"image": "images/logos/episerver.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
companyInfo["Fast"] = {"image": "images/logos/fast.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1500, "Employee Count": 0}};
companyInfo["Bolt"] = {"image": "images/logos/bolt.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
companyInfo["Cybersource"] = {"image": "images/logos/cybersource.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 0}};
companyInfo["Stripe"] = {"image": "images/logos/stripe.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
companyInfo["Braintree"] = {"image": "images/logos/braintree.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 0}};
companyInfo["Adyen"] = {"image": "images/logos/adyen.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2200, "Employee Count": 200}};
companyInfo["NS8"] = {"image": "images/logos/ns8.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2000, "Employee Count": 0}};
companyInfo["Avalara"] = {"image": "images/logos/avalara.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2200, "Employee Count": 200}};
companyInfo["Vertex"] = {"image": "images/logos/vertex.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2000, "Employee Count": 0}};
companyInfo["Chargebee"] = {"image": "images/logos/chargebee.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2200, "Employee Count": 100}};
companyInfo["Constructor.io"] = {"image": "images/logos/constructorio.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2000, "Employee Count": 100}};
companyInfo["Coveo"] = {"image": "images/logos/coveo.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2200, "Employee Count": 200}};
companyInfo["LucidWorks"] = {"image": "images/logos/lucidworks.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2000, "Employee Count": 100}};
companyInfo["Attraqt"] = {"image": "images/logos/attraqt.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2200, "Employee Count": 0}};
companyInfo["Bazaarvoice"] = {"image": "images/logos/bazaarvoice.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2000, "Employee Count": 100}};
companyInfo["Trustpilot"] = {"image": "images/logos/trustpilot.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2200, "Employee Count": 200}};
companyInfo["7Learnings"] = {"image": "images/logos/7learnings.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2000, "Employee Count": 100}};
companyInfo["Talon.One"] = {"image": "images/logos/talonone.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2200, "Employee Count": 0}};
companyInfo["XCCommerce"] = {"image": "images/logos/xccommerce.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2000, "Employee Count": 100}};
companyInfo["Voucherify"] = {"image": "images/logos/voucherify.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2200, "Employee Count": 200}};
companyInfo["Tribe"] = {"image": "images/logos/tribe.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2000, "Employee Count": 100}};
companyInfo["Voyado"] = {"image": "images/logos/voyado.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2200, "Employee Count": 0}};
companyInfo["Antavo"] = {"image": "images/logos/antavo.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2000, "Employee Count": 100}};
companyInfo["trbo"] = {"image": "images/logos/trbo.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2200, "Employee Count": 100}};
companyInfo["Dynamic Yield"] = {"image": "images/logos/dynamicyield.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2000, "Employee Count": 200}};
companyInfo["Rich Relevance"] = {"image": "images/logos/richrelevance.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2200, "Employee Count": 100}};
companyInfo["Apptus"] = {"image": "images/logos/apptus.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2000, "Employee Count": 0}};
companyInfo["Emarsys"] = {"image": "images/logos/emarsys.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2200, "Employee Count": 100}};
companyInfo["Fluent"] = {"image": "images/logos/fluent.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2000, "Employee Count": 100}};
companyInfo["fulfillmenttools"] = {"image": "images/logos/fulfillmenttools.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2200, "Employee Count": 200}};
companyInfo["Manhattan Associates"] = {"image": "images/logos/manhattanassociates.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2000, "Employee Count": 100}};
companyInfo["Sterling"] = {"image": "images/logos/sterling.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2200, "Employee Count": 0}};
companyInfo["Riversand"] = {"image": "images/logos/riversand.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2000, "Employee Count": 200}};
companyInfo["inRiver"] = {"image": "images/logos/inriver.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2200, "Employee Count": 100}};
companyInfo["Pimcore"] = {"image": "images/logos/pimcore.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2000, "Employee Count": 0}};
companyInfo["Salsify"] = {"image": "images/logos/salsify.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2200, "Employee Count": 100}};
companyInfo["Productsup"] = {"image": "images/logos/productsup.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2000, "Employee Count": 200}};
companyInfo["VTEX"] = {"image": "images/logos/vtex.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2200, "Employee Count": 100}};
companyInfo["Mirakl"] = {"image": "images/logos/mirakl.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 0}};
companyInfo["SendGrid"] = {"image": "images/logos/sendgrid.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 100}};
companyInfo["Twilio"] = {"image": "images/logos/twilio.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 200}};
companyInfo["Postmark"] = {"image": "images/logos/postmark.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 100}};
companyInfo["Mailchimp"] = {"image": "images/logos/mailchimp.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 0}};
companyInfo["Apollo"] = {"image": "images/logos/apollo.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 200}};
companyInfo["Auth0"] = {"image": "images/logos/auth0.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 100}};
companyInfo["Azure Active Directory"] = {"image": "images/logos/azureactivedirectory.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 100}};
companyInfo["Vamp.io"] = {"image": "images/logos/vamp.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 0}};
companyInfo["Ashiba"] = {"image": "images/logos/ashiba.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 100}};
companyInfo["Pipe17"] = {"image": "images/logos/pipe17.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 100}};
companyInfo["Workato"] = {"image": "images/logos/workato.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 100}};

var categoryColors = {};
categoryColors["Frontend"] = "background-blue-1";
categoryColors["Backend"] = "background-blue-2";
categoryColors["Developer Tooling"] = "background-blue-3";

var companyCategories = findCategoryChildren();
// returns dictionary of rootCategory:children (both subcategories and companies) e.g. {}"Frontend": [a, b, c], "Backend": [d, e, f], ...}
function findCategoryChildren() {
  let companyCategories = {};
  let roots = ["Frontend", "Backend", "Developer Tooling"];
  for(let i = 0; i < roots.length; i++) {
    let companyArray = [];
    companyCategories[roots[i]] = findChildren(roots[i], companyArray);
  }
  return companyCategories;
}

function findChildren(category, ary) {
  ary.push(category);
  if(category in categoryTree) {
    for(let i = 0; i < categoryTree[category].length; i++) {
      findChildren(categoryTree[category][i], ary);
    }
  }
  if(category in categoryCompanies) {
    for(let i = 0; i < categoryCompanies[category].length; i++) {
      if(!ary.includes(categoryCompanies[category][i])) {
        ary.push(categoryCompanies[category][i]);
      }
    }
  }
  return ary;
}

// end set up data
