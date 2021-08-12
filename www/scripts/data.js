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
categoryDescription["GraphQL Client"] = "Simplify app development by combining API endpoints, databases, and microservices into a single service for easier access.";
categoryDescription["GraphQL Server"] = "Set up your API endpoints so that they can be called dynamically and efficiently from a single location.";
categoryDescription["Identity & Access Management"] = "Handle login security and protect against cyber attacks.";
categoryDescription["Continuous Delivery Tooling"] = "Efficiently deploy development changes routinely and predictably, ensuring code is always deployable.";


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

// key: category; value: array of vendors specializing in category
// if the category doesn't exist here (i.e., no vendors associated with category), it will not show on front end.
var categoryVendors = {};
categoryVendors["CDN"] = ["Akamai", "AWS Cloudfront", "Google Cloud CDN", "Fastly", "Azure CDN", "Cloudflare"];
categoryVendors["Load Optimization"] = ["Moovweb", "Yottaa"];
categoryVendors["Frontend-as-a-Service"] = ["Frontastic", "Vue Storefront", "commerce-ui", "Shogun"];
categoryVendors["SEO"] = ["Bloomreach"];
categoryVendors["Frontend"] = ["Bloomreach Experience Platform (Hippo)", "Adobe Experience Manager", "Acquia (Drupal)", "Styla"];
categoryVendors["Clienteling"] = ["Tulip", "NewStore"];
categoryVendors["Content Management"] = ["Contentstack", "Contentful", "Amplience", "GraphCMS", "CoreMedia"];
categoryVendors["DAM"] = ["Amplience", "Bynder", "CoreMedia", "Threekit", "Cloudinary"];
categoryVendors["Images"] = ["Scene7"];
// categoryVendors["Video"] = ["Brightcove"];
categoryVendors["Commerce"] = ["commercetools", "Storm Commerce", "Commerce Layer", "Four51", "emporix", "Episerver"];
categoryVendors["Single Page Checkout"] = ["Fast", "Bolt"];
categoryVendors["Payment"] = ["CyberSource", "Stripe", "Braintree", "Adyen"];
categoryVendors["Fraud"] = ["N38"];
categoryVendors["Taxes"] = ["Avalara", "Vertex"];
categoryVendors["Subscriptions"] = ["Chargebee"];
categoryVendors["Search"] = ["Constructor.io", "Coveo", "LucidWorks", "Attraqt"];
categoryVendors["Ratings & Reviews"] = ["Bazaarvoice", "Trustpilot"];
categoryVendors["Pricing"] = ["7Learnings"];
categoryVendors["Promotions"] = ["Talon.One", "XCCommerce", "Voucherify"];
categoryVendors["Social Listing"] = ["Tribe"];
categoryVendors["Loyalty"] = ["Voyado", "Antavo"];
categoryVendors["Personalization"] = ["trbo", "Dynamic Yield", "Rich Relevance", "Apptus", "Emarsys"];
categoryVendors["OMS"] = ["Fluent", "fulfillmenttools", "Manhattan Associates", "Sterling"];
categoryVendors["In-Store"] = ["NewStore", "Mercaux", "Tulip"];
categoryVendors["PIM"] = ["Riversand", "inRiver", "Pimcore"];
categoryVendors["Product Enrichment"] = ["Salsify"];
categoryVendors["Content Distribution/Syndication"] = ["Productsup"];
categoryVendors["Commerce Platforms"] = ["VTEX"];
categoryVendors["Marketplace Plaforms"] = ["Mirakl"];
categoryVendors["Outbound Contract"] = ["SendGrid", "Twilio", "Postmark", "Mailchimp"];
categoryVendors["CPQ"] = ["Threekit"];
categoryVendors["GraphQL Client"] = ["Apollo"];
categoryVendors["GraphQL Server"] = ["Apollo"];
categoryVendors["Identity & Access Management"] = ["Auth0", "Azure Active Directory"];
categoryVendors["Continuous Delivery Tooling"] = ["Vamp.io", "Ashiba"];
categoryVendors["Connectivity/Integrations"] = ["Pipe17", "Workato"];

// detailed information for each vendor
var vendorInfo = {};
vendorInfo["Bloomreach Experience Platform (Hippo)"] = {"image": "images/logos/bloomreach.png", "description": "Bloomreach solutions combine the power of unified customer and product data with the speed and scale of AI and predictive decisioning, so you can deliver magical experiences that convert on any channel and every journey.", "contact": "1-111-111-1111", "attributes": {"Regions Served": ["USA", "Germany"], "Funding to Date ($ in millions)": 247, "Employee Count": 500, "Year Founded": 2009, "MACH Certified": true, "GraphQL Support": false, "Gartner/Forrester Industry Leader": true}, "socials": {"url": "https://www.bloomreach.com", "linkedin": "https://www.linkedin.com/company/bloomreach/", "crunchbase": "https://www.crunchbase.com/organization/bloomreach", "g2": "https://www.g2.com/products/bloomreach-bloomreach/reviews"}};
vendorInfo["Adobe Experience Manager"] = {"image": "images/logos/adobeexperiencemanager.png", "description": "Adobe Experience Manager (AEM) is a comprehensive content management solution for building websites, mobile apps and forms. And it makes it easy to manage your marketing content and assets.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 1500, "Employee Count": 200, "MACH Certified": true, "Industry Leader per Gartner/Forrester": false}};
vendorInfo["Acquia (Drupal)"] = {"image": "images/logos/acquiadrupal.jpg", "description": "Acquia provides an unrivaled Enterprise Digital Experience Platform designed to help you build Drupal experiences that engage customers, enhance conversions and help your business stand out.", "contact": "123-567-9872", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 0}};
vendorInfo["Styla"] = {"image": "images/logos/styla.png", "description": "Styla is a platform that allows brands and retailers to: <ul><li>Regain control of your content and build personalised, branded experiences in minutes.</li> <li>Eliminate the risks, complexity, and lengthy timelines of building a frontend from scratch.</li><li>Explore limitless possibilities that boost premium digital experiences: agile, scalable and impactful.</li></ul>", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
vendorInfo["Akamai"] = {"image": "images/logos/akamai.png", "description": "Akamai focuses on four areas: <ul><li>Protecting apps and APIs from credentials abuse</li><li>Enhancing customer web and mobile customer experience using data and automation.</li><li>Deliver high-quality media</li><li>Quickly integrate Akamai into existing developer workflows.</li></ul>", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
vendorInfo["AWS Cloudfront"] = {"image": "images/logos/awscloudfront.jpg", "description": "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer-friendly environment.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
vendorInfo["Google Cloud CDN"] = {"image": "images/logos/googlecloud.png", "description": "Fast, reliable web and video content delivery with global scale and reach.<ul><li>Brings consistently great web and video experiences to users anywhere</li><li>Provides privacy and data security</li><li>Activates with a single click for Cloud Load Balancing users</li></ul>", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
vendorInfo["Fastly"] = {"image": "images/logos/fastly.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
vendorInfo["Azure CDN"] = {"image": "images/logos/azure.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
vendorInfo["Cloudflare"] = {"image": "images/logos/cloudflare.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
vendorInfo["Moovweb"] = {"image": "images/logos/moovweb.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
vendorInfo["Yottaa"] = {"image": "images/logos/yottaa.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
vendorInfo["Netlify"] = {"image": "images/logos/netlify.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
vendorInfo["Frontastic"] = {"image": "images/logos/frontastic.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
vendorInfo["Vue Storefront"] = {"image": "images/logos/vuestorefront.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1500, "Employee Count": 0}};
vendorInfo["commerce-ui"] = {"image": "images/logos/commerce-ui.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
vendorInfo["Shogun"] = {"image": "images/logos/shogun.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 0}};
vendorInfo["Bloomreach"] = {"image": "images/logos/bloomreach.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
vendorInfo["Tulip"] = {"image": "images/logos/tulip.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1500, "Employee Count": 0}};
vendorInfo["NewStore"] = {"image": "images/logos/newstore.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
vendorInfo["Contentstack"] = {"image": "images/logos/contentstack.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["Europe"], "Funding to Date ($)": 1000, "Employee Count": 0}};
vendorInfo["Contentful"] = {"image": "images/logos/contentful.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 1000, "Employee Count": 200}};
vendorInfo["Amplience"] = {"image": "images/logos/amplience.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 1000, "Employee Count": 0}};
vendorInfo["GraphCMS"] = {"image": "images/logos/graphcms.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
vendorInfo["CoreMedia"] = {"image": "images/logos/coremedia.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1500, "Employee Count": 0}};
vendorInfo["Bynder"] = {"image": "images/logos/bynder.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
vendorInfo["Threekit"] = {"image": "images/logos/threekit.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1500, "Employee Count": 0}};
vendorInfo["Cloudinary"] = {"image": "images/logos/cloudinary.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
vendorInfo["Scene7"] = {"image": "images/logos/scene7.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 0}};
vendorInfo["Brightcove"] = {"image": "images/logos/brightcove.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
vendorInfo["commercetools"] = {"image": "images/logos/commercetools.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 0}};
vendorInfo["Storm Commerce"] = {"image": "images/logos/stormcommerce.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
vendorInfo["Commerce Layer"] = {"image": "images/logos/commercelayer.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1500, "Employee Count": 0}};
vendorInfo["Four51"] = {"image": "images/logos/four51.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
vendorInfo["emporix"] = {"image": "images/logos/emporix.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 0}};
vendorInfo["Episerver"] = {"image": "images/logos/episerver.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
vendorInfo["Fast"] = {"image": "images/logos/fast.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1500, "Employee Count": 0}};
vendorInfo["Bolt"] = {"image": "images/logos/bolt.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1500, "Employee Count": 200}};
vendorInfo["Cybersource"] = {"image": "images/logos/cybersource.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 0}};
vendorInfo["Stripe"] = {"image": "images/logos/stripe.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 200}};
vendorInfo["Braintree"] = {"image": "images/logos/braintree.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 1000, "Employee Count": 0}};
vendorInfo["Adyen"] = {"image": "images/logos/adyen.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2200, "Employee Count": 200}};
vendorInfo["NS8"] = {"image": "images/logos/ns8.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2000, "Employee Count": 0}};
vendorInfo["Avalara"] = {"image": "images/logos/avalara.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2200, "Employee Count": 200}};
vendorInfo["Vertex"] = {"image": "images/logos/vertex.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2000, "Employee Count": 0}};
vendorInfo["Chargebee"] = {"image": "images/logos/chargebee.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2200, "Employee Count": 100}};
vendorInfo["Constructor.io"] = {"image": "images/logos/constructorio.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2000, "Employee Count": 100}};
vendorInfo["Coveo"] = {"image": "images/logos/coveo.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2200, "Employee Count": 200}};
vendorInfo["LucidWorks"] = {"image": "images/logos/lucidworks.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2000, "Employee Count": 100}};
vendorInfo["Attraqt"] = {"image": "images/logos/attraqt.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2200, "Employee Count": 0}};
vendorInfo["Bazaarvoice"] = {"image": "images/logos/bazaarvoice.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2000, "Employee Count": 100}};
vendorInfo["Trustpilot"] = {"image": "images/logos/trustpilot.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2200, "Employee Count": 200}};
vendorInfo["7Learnings"] = {"image": "images/logos/7learnings.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2000, "Employee Count": 100}};
vendorInfo["Talon.One"] = {"image": "images/logos/talonone.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2200, "Employee Count": 0}};
vendorInfo["XCCommerce"] = {"image": "images/logos/xccommerce.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2000, "Employee Count": 100}};
vendorInfo["Voucherify"] = {"image": "images/logos/voucherify.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2200, "Employee Count": 200}};
vendorInfo["Tribe"] = {"image": "images/logos/tribe.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2000, "Employee Count": 100}};
vendorInfo["Voyado"] = {"image": "images/logos/voyado.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2200, "Employee Count": 0}};
vendorInfo["Antavo"] = {"image": "images/logos/antavo.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA", "Europe"], "Funding to Date ($)": 2000, "Employee Count": 100}};
vendorInfo["trbo"] = {"image": "images/logos/trbo.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2200, "Employee Count": 100}};
vendorInfo["Dynamic Yield"] = {"image": "images/logos/dynamicyield.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2000, "Employee Count": 200}};
vendorInfo["Rich Relevance"] = {"image": "images/logos/richrelevance.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2200, "Employee Count": 100}};
vendorInfo["Apptus"] = {"image": "images/logos/apptus.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2000, "Employee Count": 0}};
vendorInfo["Emarsys"] = {"image": "images/logos/emarsys.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2200, "Employee Count": 100}};
vendorInfo["Fluent"] = {"image": "images/logos/fluent.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2000, "Employee Count": 100}};
vendorInfo["fulfillmenttools"] = {"image": "images/logos/fulfillmenttools.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2200, "Employee Count": 200}};
vendorInfo["Manhattan Associates"] = {"image": "images/logos/manhattanassociates.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2000, "Employee Count": 100}};
vendorInfo["Sterling"] = {"image": "images/logos/sterling.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2200, "Employee Count": 0}};
vendorInfo["Riversand"] = {"image": "images/logos/riversand.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2000, "Employee Count": 200}};
vendorInfo["inRiver"] = {"image": "images/logos/inriver.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2200, "Employee Count": 100}};
vendorInfo["Pimcore"] = {"image": "images/logos/pimcore.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2000, "Employee Count": 0}};
vendorInfo["Salsify"] = {"image": "images/logos/salsify.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2200, "Employee Count": 100}};
vendorInfo["Productsup"] = {"image": "images/logos/productsup.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2000, "Employee Count": 200}};
vendorInfo["VTEX"] = {"image": "images/logos/vtex.jpg", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 2200, "Employee Count": 100}};
vendorInfo["Mirakl"] = {"image": "images/logos/mirakl.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 0}};
vendorInfo["SendGrid"] = {"image": "images/logos/sendgrid.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 100}};
vendorInfo["Twilio"] = {"image": "images/logos/twilio.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 200}};
vendorInfo["Postmark"] = {"image": "images/logos/postmark.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 100}};
vendorInfo["Mailchimp"] = {"image": "images/logos/mailchimp.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 0}};
vendorInfo["Apollo"] = {"image": "images/logos/apollo.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 200}};
vendorInfo["Auth0"] = {"image": "images/logos/auth0.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 100}};
vendorInfo["Azure Active Directory"] = {"image": "images/logos/azureactivedirectory.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 100}};
vendorInfo["Vamp.io"] = {"image": "images/logos/vamp.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 0}};
vendorInfo["Ashiba"] = {"image": "images/logos/ashiba.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 100}};
vendorInfo["Pipe17"] = {"image": "images/logos/pipe17.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 100}};
vendorInfo["Workato"] = {"image": "images/logos/workato.png", "description": "Placeholder for company description - fill in later.", "contact": "111-222-3333", "attributes": {"Regions Served": ["USA"], "Funding to Date ($)": 3000, "Employee Count": 100}};

// Attributes that appear in filter panel
var filterTypes = ["Regions Served", "MACH Certified", "Gartner/Forrester Industry Leader"];

// image paths for social icons
var socialIcons = {"url": "images/icons/internet.png", "crunchbase": "images/icons/crunchbase.png", "linkedin": "images/icons/linkedin.png", "g2": "images/icons/g2.png"};

// attribute:type dictionary (e.g., "Regions Served": "array")
var attributeTypes = {};
for(let company in vendorInfo) {
  for(let attribute in vendorInfo[company]["attributes"]) {
    if(!(attribute in attributeTypes)) {
      console.log(attribute);
      if(Array.isArray(vendorInfo[company]["attributes"][attribute])) {
        attributeTypes[attribute] = "array";
      } else {
        attributeTypes[attribute] = "string";
      }
    }
  }
}
console.log(attributeTypes);

var categoryColors = {};
categoryColors["Frontend"] = "background-blue-1";
categoryColors["Backend"] = "background-blue-2";
categoryColors["Developer Tooling"] = "background-blue-3";

var rootCategories = findCategoryChildren();
// returns dictionary of rootCategory:children (both subcategories and companies) e.g. {}"Frontend": [a, b, c], "Backend": [d, e, f], ...}
function findCategoryChildren() {
  let rootCategories = {};
  let roots = ["Frontend", "Backend", "Developer Tooling"];
  for(let i = 0; i < roots.length; i++) {
    let companyArray = [];
    rootCategories[roots[i]] = findChildren(roots[i], companyArray);
  }
  return rootCategories;
}

function findChildren(category, ary) {
  ary.push(category);
  if(category in categoryTree) {
    for(let i = 0; i < categoryTree[category].length; i++) {
      findChildren(categoryTree[category][i], ary);
    }
  }
  if(category in categoryVendors) {
    for(let i = 0; i < categoryVendors[category].length; i++) {
      if(!ary.includes(categoryVendors[category][i])) {
        ary.push(categoryVendors[category][i]);
      }
    }
  }
  return ary;
}

// end set up data
