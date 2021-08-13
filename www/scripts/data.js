"Fluent Commerce"// setting up data

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
categoryVendors["Fraud"] = ["NS8"];
categoryVendors["Taxes"] = ["Avalara", "Vertex"];
categoryVendors["Subscriptions"] = ["Chargebee"];
categoryVendors["Search"] = ["Constructor.io", "Coveo", "LucidWorks", "Attraqt"];
categoryVendors["Ratings & Reviews"] = ["Bazaarvoice", "Trustpilot"];
categoryVendors["Pricing"] = ["7Learnings"];
categoryVendors["Promotions"] = ["Talon.One", "XCCommerce", "Voucherify"];
categoryVendors["Social Listing"] = ["Tribe"];
categoryVendors["Loyalty"] = ["Voyado", "Antavo"];
categoryVendors["Personalization"] = ["trbo", "Dynamic Yield", "Rich Relevance", "Apptus", "Emarsys"];
categoryVendors["OMS"] = ["Fluent Commerce", "fulfillmenttools", "Manhattan Associates", "Sterling"];
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
categoryVendors["Continuous Delivery Tooling"] = ["Vamp.io"];
categoryVendors["Connectivity/Integrations"] = ["Pipe17", "Workato"];

// detailed information for each vendor
var vendorInfo = {};
vendorInfo["Bloomreach Experience Platform (Hippo)"] = {"image": "images/logos/bloomreach.png", "description": "Bloomreach solutions combine the power of unified customer and product data with the speed and scale of AI and predictive decisioning, so you can deliver magical experiences that convert on any channel and every journey.", /* "Contact": "1-111-111-1111"*/"attributes": {"Regions Served": ["USA", "Germany"], "Funding to Date ($ in millions)": 247, "Employee Count": "251-500", "Year Founded": 2009, "MACH Certified": true, "Gartner/Forrester Industry Leader": true}, "socials": {"url": "https://www.bloomreach.com", "linkedin": "https://www.linkedin.com/company/bloomreach/", "crunchbase": "https://www.crunchbase.com/organization/bloomreach", "g2": "https://www.g2.com/products/bloomreach-bloomreach/reviews"}};

// "attributes": {"Funding to Date ($ in millions)": , "Employee Count": "", "Year Founded": }, "socials": {"url": "", "linkedin": "", "crunchbase": "", "g2": ""}};

vendorInfo["Adobe Experience Manager"] = {"image": "images/logos/adobeexperiencemanager.png", "description": "Adobe Experience Manager (AEM) is a comprehensive content management solution for building websites, mobile apps and forms. And it makes it easy to manage your marketing content and assets.", "attributes": {"Employee Count": "10001+", "Year Founded": 1982, "Funding to Date ($ in millions)": 2.5, "Gartner/Forrester Industry Leader": true}, "socials": {"url": "https://business.adobe.com/products/experience-manager/adobe-experience-manager.html", "g2": "https://www.g2.com/products/adobe-experience-manager/reviews"}};

vendorInfo["Acquia (Drupal)"] = {"image": "images/logos/acquiadrupal.jpg", "description": "Acquia provides an unrivaled Enterprise Digital Experience Platform designed to help you build Drupal experiences that engage customers, enhance conversions and help your business stand out.", "attributes": {"Gartner/Forrester Industry Leader": true, "Funding to Date ($ in millions)": 173.5, "Employee Count": "1001-5000"}, "socials": {"url": "https://www.acquia.com/", "linkedin": "https://www.linkedin.com/company/acquia/", "crunchbase": "https://www.crunchbase.com/organization/acquia", "g2": "https://www.g2.com/products/acquia-drupal-cloud/reviews"}};

vendorInfo["Styla"] = {"image": "images/logos/styla.png", "description": "Styla is a platform that allows brands and retailers to: <ul><li>Regain control of your content and build personalised, branded experiences in minutes.</li> <li>Eliminate the risks, complexity, and lengthy timelines of building a frontend from scratch.</li><li>Explore limitless possibilities that boost premium digital experiences: agile, scalable and impactful.</li></ul>", "attributes": {"Funding to Date ($ in millions)": 7.2, "Employee Count": "51-100", "Year Founded": 2012}, "socials": {"url": "https://www.styla.com/", "linkedin": "https://www.linkedin.com/company/styla-com/", "crunchbase": "https://www.crunchbase.com/organization/styla-com", "g2": "https://www.g2.com/products/styla-com/reviews"}};

vendorInfo["Akamai"] = {"image": "images/logos/akamai.png", "description": "Akamai focuses on four areas: <ul><li>Protecting apps and APIs from credentials abuse</li><li>Enhancing customer web and mobile customer experience using data and automation.</li><li>Deliver high-quality media</li><li>Quickly integrate Akamai into existing developer workflows.</li></ul>", "attributes": {"Funding to Date ($ in millions)": 35, "Employee Count": "10001+", "Year Founded": 1998}, "socials": {"url": "https://www.akamai.com/", "linkedin": "https://www.linkedin.com/company/akamai-technologies/", "crunchbase": "https://www.crunchbase.com/organization/akamai-technologies", "g2": "https://www.g2.com/products/akamai/reviews"}};

vendorInfo["AWS Cloudfront"] = {"image": "images/logos/awscloudfront.jpg", "description": "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer-friendly environment.", "attributes": {"Employee Count": "10001+", "Year Founded": 2012}, "socials": {"url": "https://aws.amazon.com/cloudfront/", "linkedin": "https://www.linkedin.com/company/amazon-web-services/", "crunchbase": "https://www.crunchbase.com/organization/amazon-web-services", "g2": "https://www.g2.com/products/amazon-cloudfront/reviews"}};

vendorInfo["Google Cloud CDN"] = {"image": "images/logos/googlecloud.png", "description": "Fast, reliable web and video content delivery with global scale and reach.<ul><li>Brings consistently great web and video experiences to users anywhere</li><li>Provides privacy and data security</li><li>Activates with a single click for Cloud Load Balancing users</li></ul>", "attributes": {"Employee Count": "10001+", "Year Founded": 2008}, "socials": {"url": "https://cloud.google.com/cdn", "crunchbase": "https://www.crunchbase.com/organization/google-cloud-platform", "g2": "https://www.g2.com/products/google-cloud-cdn/reviews"}};

vendorInfo["Fastly"] = {"image": "images/logos/fastly.png", "description": "Fastly focuses on three pillars: <ol><li>Reduce business costs: By offloading content to Fastly, save on pricey bandwidth and storage costs, and reduce the burden on servers or the central cloud.</li><li>More control, more flexibility: Enable teams to work independently while syncing seamlessly</li><li>Enhance security and user trust: Protect customer data, display secure HTTPS sites</li></ol>", "attributes": {"Funding to Date ($ in millions)": 219, "Employee Count": "501-1000", "Year Founded": 2011}, "MACH Certified": true, "socials": {"url": "https://www.fastly.com/", "linkedin": "https://www.linkedin.com/company/fastly/", "crunchbase": "https://www.crunchbase.com/organization/fastly", "g2": "https://www.g2.com/products/fastly/reviews"}};

vendorInfo["Azure CDN"] = {"image": "images/logos/azure.png", "description": "Azure Content Delivery Network (CDN) lets you reduce load times, save bandwidth, and speed responsiveness—whether you’re developing or managing websites or mobile apps, or encoding and distributing streaming media, gaming software, firmware updates, or IoT endpoints.", "attributes": {"Employee Count": "101-250", "Year Founded": 2010}, "socials": {"url": "https://azure.microsoft.com/en-us/services/cdn/", "crunchbase": "https://www.crunchbase.com/organization/azure", "g2": "https://www.g2.com/products/microsoft-azure-cdn/reviews"}};

vendorInfo["Cloudflare"] = {"image": "images/logos/cloudflare.png", "description": "Cloudflare offers ultra-fast static and dynamic content delivery over our global edge network. Exercise precise control over how your content is cached, reduce bandwidth costs, and take advantage of built-in unmetered DDoS protection.", "attributes": {"Employee Count": "501-1000", "Year Founded": 2009}, "socials": {"url": "https://www.cloudflare.com/", "linkedin": "https://www.linkedin.com/company/cloudflare/", "crunchbase": "https://www.crunchbase.com/organization/cloudflare", "g2": "https://www.g2.com/products/cloudflare-inc-cloudflare-cdn/reviews"}};

vendorInfo["Moovweb"] = {"image": "images/logos/moovweb.png", "description": "All-in-one Jamstack platform to develop, deploy, preview, split test and monitor your frontend.", "attributes": {"Funding to Date ($ in millions)": 16.7, "Employee Count": "51-100", "Year Founded": 2009}, "socials": {"url": "https://www.layer0.co/", "linkedin": "https://www.linkedin.com/company/moov-corporation/", "crunchbase": "https://www.crunchbase.com/organization/moovweb"}};

vendorInfo["Yottaa"] = {"image": "images/logos/yottaa.png", "description": "Placeholder for company description - fill in later.", "attributes": {"Funding to Date ($ in millions)": 63.4, "Employee Count": "51-100", "Year Founded": 2009}, "socials": {"url": "https://www.yottaa.com/", "linkedin": "https://www.linkedin.com/company/yottaa/", "crunchbase": "https://www.crunchbase.com/organization/yottaa", "g2": "https://www.g2.com/products/yottaa/reviews"}};

vendorInfo["Netlify"] = {"image": "images/logos/netlify.png", "description": "Instantly build and deploy your sites to our global network from Git. Custom domains, HTTPS, deploy previews, rollbacks, and much more.", "attributes": {"Funding to Date ($ in millions)": 97.1, "Employee Count": "101-250", "Year Founded": 2014}, "socials": {"url": "https://www.netlify.com/", "linkedin": "https://www.linkedin.com/company/netlify/", "crunchbase": "https://www.crunchbase.com/organization/netlify", "g2": "https://www.g2.com/products/netlify/reviews"}};

vendorInfo["Frontastic"] = {"image": "images/logos/frontastic.png", "description": "Build amazing commerce sites on headless without limits. Frontastic combines API orchestration, workflows, and frontend delivery to enable commerce teams to build and deliver engaging, optimized websites and web apps.", "attributes": {"Funding to Date ($ in millions)": 3.6, "Employee Count": "11-50", "Year Founded": 2017}, "MACH Certified": true, "socials": {"url": "https://www.frontastic.cloud/", "linkedin": "https://www.linkedin.com/company/frontastic-gmbh/", "crunchbase": "https://www.crunchbase.com/organization/frontastic", "g2": "https://www.g2.com/products/frontastic/reviews"}};

vendorInfo["Vue Storefront"] = {"image": "images/logos/vuestorefront.png", "description": "Lightning-Fast Frontend Platform for Headless Commerce. Boost your site performance, shape the customer journey and free your developer's creativity with Vue Storefront, the last frontend you will ever need.", "attributes": {"Funding to Date ($ in millions)": 3, "Employee Count": "11-50", "Year Founded": 2017}, "MACH Certified": true, "socials": {"url": "https://www.vuestorefront.io/", "linkedin": "https://www.linkedin.com/company/vue-storefront/", "crunchbase": "https://www.crunchbase.com/organization/vue-storefront", "g2": "https://www.g2.com/products/vue-storefront/reviews"}};

vendorInfo["commerce-ui"] = {"image": "images/logos/commerce-ui.png", "description": "commerce-ui builds the storefront (frontend) of an e-commerce system.<ol><li>Unprecedented flexibility of content, simple to integrate with modern headless CMS (custom frontend built to bridge content and commerce).</li><li>State of the art optimizations allowing for superior speed and conversions (loading times under 1 second).</li><li>Connect with any e-commerce platform (Shopify, Commerce Tools, SAP Commerce, Magento).</li></ol>", "attributes": {"Employee Count": "1-10"}, "socials": {"url": "https://commerce-ui.com/", "linkedin": "https://www.linkedin.com/company/commerce-ui/"}};

vendorInfo["Shogun"] = {"image": "images/logos/shogun.jpg", "description": "Create stunning, fast-loading custom storefronts that drive more conversions, revenue, and brand loyalty. Drag-and-drop website builder with fast performance as a priority.", "attributes": {"Funding to Date ($ in millions)": 114.6, "Employee Count": "101-250", "Year Founded": 2015}, "socials": {"url": "https://getshogun.com/", "linkedin": "https://www.linkedin.com/company/shogun/", "crunchbase": "https://www.crunchbase.com/organization/shogun", "g2": "https://www.g2.com/products/shogun-page-builder/reviews"}};

vendorInfo["Bloomreach"] = {"image": "images/logos/bloomreach.png", "description": "Bloomreach solutions combine the power of unified customer and product data with the speed and scale of AI and predictive decisioning, so you can deliver magical experiences that convert on any channel and every journey.", "attributes": {"Regions Served": ["USA", "Germany"], "Funding to Date ($ in millions)": 247, "Employee Count": "251-500", "Year Founded": 2009, "MACH Certified": true, "Gartner/Forrester Industry Leader": true}, "socials": {"url": "https://www.bloomreach.com", "linkedin": "https://www.linkedin.com/company/bloomreach/", "crunchbase": "https://www.crunchbase.com/organization/bloomreach", "g2": "https://www.g2.com/products/bloomreach-bloomreach/reviews"}};

vendorInfo["Tulip"] = {"image": "images/logos/tulip.png", "description": "Enhance store associates’ capabilities with seamless and harmonious omnichannel experiences. Tulip offers the world’s most user-friendly and powerful cloud-based mobile apps built exclusively for stores of the future.", "attributes": {"Funding to Date ($ in millions)": 79.2, "Employee Count": "101-250", "Year Founded": 2013, "MACH Certified": true, "Gartner/Forrester Industry Leader": true}, "socials": {"url": "https://www.tulip.com/", "linkedin": "https://www.linkedin.com/company/tulip-retail/", "crunchbase": "https://www.crunchbase.com/organization/tulip-retail", "g2": "https://www.g2.com/products/tulip/reviews"}};

vendorInfo["NewStore"] = {"image": "images/logos/newstore.png", "description": "Fast. Flexible. Easy to use. Live in over 20 countries, the NewStore Omnichannel Platform comes with a POS, OMS, Inventory, and Clienteling—modern retail, for modern brands.", "attributes": {"Funding to Date ($ in millions)": 155.4, "Employee Count": "101-250", "Year Founded": 2015}, "MACH Certified": true, "socials": {"url": "https://www.newstore.com/", "linkedin": "https://www.linkedin.com/company/newstore-inc/", "crunchbase": "https://www.crunchbase.com/organization/newstore", "g2": "https://www.g2.com/products/newstore/reviews"}};

vendorInfo["Contentstack"] = {"image": "images/logos/contentstack.png", "description": "Contentstack specializes in headless CMS. <ul><li>Creating Content Faster: Intuitively designed so marketers can do more faster, flying solo - developers rejoice.</li><li>Managing Content Easier: Get more content in more places with less hassle - all in one platform.</li><li>Made for the Enterprise: Built in the cloud to scale with exceptional support to accelerate your digital strategy.</li></ul>", "attributes": {"Funding to Date ($ in millions)": 89, "Employee Count": "101-250", "Year Founded": 2018, "MACH Certified": true, "Gartner/Forrester Industry Leader": true}, "socials": {"url": "https://www.contentstack.com/", "linkedin": "https://www.linkedin.com/company/contentstack/", "crunchbase": "https://www.crunchbase.com/organization/contentstack", "g2": "https://www.g2.com/products/contentstack/reviews"}};

vendorInfo["Contentful"] = {"image": "images/logos/contentful.png", "description": "Launch faster with a modern content platform. It’s the easiest, fastest way to manage content: Integrate your tools. Publish across channels. Unblock your team with our industry-leading app framework.", "attributes": {"Funding to Date ($ in millions)": 334.6, "Employee Count": "501-1000", "Year Founded": 2013, "MACH Certified": true, "Gartner/Forrester Industry Leader": true}, "socials": {"url": "https://www.contentful.com/", "linkedin": "https://www.linkedin.com/company/contentful/", "crunchbase": "https://www.crunchbase.com/organization/contentful", "g2": "https://www.g2.com/products/contentful/reviews"}};

vendorInfo["Amplience"] = {"image": "images/logos/amplience.png", "description": "<ul><li>Dynamic Content: Plan, schedule, produce and deliver all your digital experiences. This is future-proofed content and experience management with visualization and preview built in every step of the way.</li><li>Dynamic Media: Optimize media for product pages and deliver marketing assets for all channels and devices. Adapt images on the fly and transcode videos. It’s all about super slick performance and super fast page load.</li><li>Content Hub: The foundation of Amplience. Accelerate processes. Reuse, remix and repurpose assets. Then deliver them consistently and fully optimized, anywhere. It’s a single library for everything and your one source of truth.</li></ul>", "attributes": {"Funding to Date ($ in millions)": 78.3, "Employee Count": "101-250", "Year Founded": 2008, "MACH Certified": true, "Gartner/Forrester Industry Leader": true}, "socials": {"url": "https://amplience.com/", "linkedin": "https://www.linkedin.com/company/amplience/", "crunchbase": "https://www.crunchbase.com/organization/amplience", "g2": "https://www.g2.com/products/amplience/reviews"}};

vendorInfo["GraphCMS"] = {"image": "images/logos/graphcms.jpg", "description": "GraphCMS gives you instant GraphQL Content APIs to create, enrich, unify, and deliver your content across platforms.", "attributes": {"Funding to Date ($ in millions)": 13.6, "Employee Count": "11-50", "Year Founded": 2017}, "socials": {"url": "https://graphcms.com/", "linkedin": "https://www.linkedin.com/company/graphcms/", "crunchbase": "https://www.crunchbase.com/organization/graphcms", "g2": "https://www.g2.com/products/graphcms/reviews"}};

vendorInfo["CoreMedia"] = {"image": "images/logos/coremedia.png", "description": "At our core is a flexible Agile CMS and Omnichannel DAM that allow your team to store and orchestrate content from multiple sources and collaborately orchestrate them into engaging digital experience for any device or platform.", "attributes": {"Funding to Date ($ in millions)": 4.2, "Employee Count": "101-250", "Year Founded": 1996, "Gartner/Forrester Industry Leader": true}, "socials": {"url": "https://www.coremedia.com/", "linkedin": "https://www.linkedin.com/company/coremedia-corp/", "crunchbase": "https://www.crunchbase.com/organization/coremedia", "g2": "https://www.g2.com/products/coremedia/reviews"}};

vendorInfo["Bynder"] = {"image": "images/logos/bynder.png", "description": "Bynder’s digital asset management platform enables teams to collaborate in the cloud, get content to market faster, and maximize the impact of marketing assets.", "attributes": {"Funding to Date ($ in millions)": 22.2, "Employee Count": "251-500", "Year Founded": 2013}, "socials": {"url": "https://www.bynder.com/", "linkedin": "https://www.linkedin.com/company/bynder/", "crunchbase": "https://www.crunchbase.com/organization/bynder", "g2": "https://www.g2.com/products/bynder/reviews"}};

vendorInfo["Threekit"] = {"image": "images/logos/threekit.jpg", "description": "Threekit supports transparent presentation of products such as by making 3D configurations, virtual photography, and augmented reality.", "attributes": {"Funding to Date ($ in millions)": 30, "Employee Count": "101-250", "Year Founded": 2005}, "socials": {"url": "https://www.threekit.com/", "linkedin": "https://www.linkedin.com/company/threekit/", "crunchbase": "https://www.crunchbase.com/organization/threekit", "g2": "https://www.g2.com/products/threekit-threekit/reviews"}};

vendorInfo["Cloudinary"] = {"image": "images/logos/cloudinary.png", "description": "Image and Video API for Powerful Visual Experiences. Store, transform, optimize, and deliver all your media assets with easy-to-use APIs, widgets, or user interface.", "attributes": {"Employee Count": "101-250", "Year Founded": 2011}, "MACH Certified": true, "socials": {"url": "https://cloudinary.com/", "linkedin": "https://www.linkedin.com/company/cloudinary/", "crunchbase": "https://www.crunchbase.com/organization/cloudinary", "g2": "https://www.g2.com/products/cloudinary/reviews"}};

vendorInfo["Scene7"] = {"image": "images/logos/scene7.jpg", "description": "Dynamic Media is the next generation evolution of Dynamic Media Classic (formerly Scene7) capabilities within Adobe Experience Manager Assets. The solution combines the power of asset management with rich media delivery. This consists of:<ul><li>Single user interface and platform for managing images and video</li><li>Innovative merchandising features</li><li>Powered by the same robust and proven our proven delivery platform</li><li>Seamless unification with Adobe Experience Manager</li></ul>", "attributes": {}, "socials": {"url": "https://experienceleague.adobe.com/docs/experience-manager-65/assets/dynamic/dynamic-media.html?lang=en", "crunchbase": "https://www.crunchbase.com/organization/scene7"}};

vendorInfo["Brightcove"] = {"image": "images/logos/brightcove.png", "description": "Brightcove simplifies the delivery of video to every destination and device with the most complete video tool set available. You’ll launch faster, deliver faster experiences, and scale instantly.", "attributes": {"Funding to Date ($ in millions)": 143, "Employee Count": "251-500", "Year Founded": 2004}, "socials": {"url": "https://www.brightcove.com/en/", "linkedin": "https://www.linkedin.com/company/brightcove/", "crunchbase": "https://www.crunchbase.com/organization/brightcove", "g2": "https://www.g2.com/products/brightcove-brightcove/reviews"}};

vendorInfo["commercetools"] = {"image": "images/logos/commercetools.jpg", "description": "commercetools is the world’s leading commerce platform built on modern MACH principles (Microservices support, API first, Cloud native and Headless), allowing you to work with, not around, your commerce solution to tailor experiences to the exact needs of your business and its customers.", "attributes": {"Funding to Date ($ in millions)": 167.7, "Employee Count": "251-500", "Year Founded": 2006, "MACH Certified": true, "Gartner/Forrester Industry Leader": true}, "socials": {"url": "https://commercetools.com/", "linkedin": "https://www.linkedin.com/company/commercetools/", "crunchbase": "https://www.crunchbase.com/organization/commercetools", "g2": "https://www.g2.com/products/commercetools/reviews"}};

vendorInfo["Storm Commerce"] = {"image": "images/logos/stormcommerce.png", "description": "Storm Commerce is a scalable headless platform for digital commerce that helps the B2B & B2C players of the future grow and achieve success.", "attributes": {"Funding to Date ($ in millions)": 2.3, "Employee Count": "11-50", "Year Founded": 2005}, "socials": {"url": "https://storm.io/", "linkedin": "https://www.linkedin.com/company/storm-commerce/", "crunchbase": "https://www.crunchbase.com/organization/enferno", "g2": "https://www.g2.com/products/storm/reviews"}};

vendorInfo["Commerce Layer"] = {"image": "images/logos/commercelayer.png", "description": "Composable commerce API for developers. Flexible options to support developers looking to transition to headless e-commerce.", "attributes": {"Funding to Date ($ in millions)": 22, "Employee Count": "1-10", "Year Founded": 2017}, "socials": {"url": "https://commercelayer.io/", "linkedin": "https://www.linkedin.com/company/commerce-layer/", "crunchbase": "https://www.crunchbase.com/organization/commerce-layer"}};

vendorInfo["Four51"] = {"image": "images/logos/four51.jpg", "description": "Four51, now part of Sitecore, is a flexible 'experience commerce' platform to create a custom storefront experience with headless architecture.", "attributes": {"Funding to Date ($ in millions)": 8.5, "Employee Count": "51-100", "Year Founded": 1999}, "socials": {"url": "https://www.sitecore.com/", "linkedin": "https://www.linkedin.com/company/four51/", "crunchbase": "https://www.crunchbase.com/organization/four51", "g2": "https://www.g2.com/products/four51/reviews"}};

vendorInfo["emporix"] = {"image": "images/logos/emporix.png", "description": "Emporix provides an enterprise-grade digital commerce platform. The Emporix Digital Commerce Platform (DCP) manages advanced commerce in B2B and B2C with a state-of-the-art composable commerce architecture. Retailers, wholesalers, manufacturers, and brands can innovate their business models and differentiate themselves through technology.", "attributes": {"Employee Count": "11-50", "Year Founded": 2015}, "socials": {"url": "https://www.emporix.com/", "linkedin": "https://www.linkedin.com/company/emporix/", "g2": "https://www.g2.com/products/emporix/reviews"}};

vendorInfo["Episerver"] = {"image": "images/logos/episerver.png", "description": "Episerver, now Optimizely creates digital experiences that transform your company takes data-driven decisions, continued experimentation and constant invention. Optimizely Digital Experience Platform helps you unlock your digital potential.", "attributes": {"Funding to Date ($ in millions)": 140, "Employee Count": "501-1000", "Year Founded": 1994}, "socials": {"url": "https://www.optimizely.com/", "linkedin": "https://www.linkedin.com/company/episerver-ab/", "crunchbase": "https://www.crunchbase.com/organization/episerver", "g2": "https://www.g2.com/products/optimizely-commerce-cloud/reviews"}};

vendorInfo["Fast"] = {"image": "images/logos/fast.png", "description": "One-click checkout for customers. One smart move for your business. Get the button that increases conversion, boosts sales and delights customers. Install Fast Checkout in minutes so your customers can check out in seconds.", "attributes": {"Funding to Date ($ in millions)": 124.5, "Employee Count": "101-250", "Year Founded": 2019}, "socials": {"url": "https://www.fast.co/", "linkedin": "https://www.linkedin.com/company/fast/", "crunchbase": "https://www.crunchbase.com/organization/byepass", "g2": "https://www.g2.com/products/fast-fast/reviews"}};

vendorInfo["Bolt"] = {"image": "images/logos/bolt.png", "description": "We’re building a network of millions of happy shoppers by making online buying fast, safe and easy. Our Checkout Experience Platform connects shoppers with retailers in a unified cross-brand network. Bolt tackles the problems retailers face through optimizing conversions at checkout, managing hundreds of integrations and the rising risk of fraud.", "attributes": {"Funding to Date ($ in millions)": 215.1, "Employee Count": "101-250", "Year Founded": 2014}, "socials": {"url": "https://www.bolt.com/", "linkedin": "https://www.linkedin.com/company/bolt-com/", "crunchbase": "https://www.crunchbase.com/organization/bolt-5", "g2": "https://www.g2.com/products/bolt-bolt/reviews"}};

vendorInfo["Cybersource"] = {"image": "images/logos/cybersource.png", "description": "Acquired by Visa, Cybersource is an e-commerce payment management company that simplifies and automates payment operations.", "attributes": {"Employee Count": "501-1000", "Year Founded": 1994}, "socials": {"url": "https://www.cybersource.com/en-us.html", "linkedin": "https://www.linkedin.com/company/cybersource/", "crunchbase": "https://www.crunchbase.com/organization/cybersource", "g2": "https://www.g2.com/products/cybersource-payment-management-platform/reviews"}};

vendorInfo["Stripe"] = {"image": "images/logos/stripe.png", "description": "Stripe is a developer-oriented commerce company helping small and large companies accept web and mobile payments.", "attributes": {"Funding to Date ($ in millions)": 2200, "Employee Count": "1001-5000", "Year Founded": 2010}, "socials": {"url": "https://stripe.com/", "linkedin": "https://www.linkedin.com/company/stripe/", "crunchbase": "https://www.crunchbase.com/organization/stripe", "g2": "https://www.g2.com/products/stripe-stripe-payments/reviews"}};

vendorInfo["Braintree"] = {"image": "images/logos/braintree.png", "description": "Acquired by PayPal, Braintree's payment platform provides all the tools online and mobile businesses need to accept payments.", "attributes": {"Funding to Date ($ in millions)": 69, "Employee Count": "251-500", "Year Founded": 2007}, "socials": {"url": "https://www.braintreepayments.com/", "linkedin": "https://www.linkedin.com/company/braintree/", "crunchbase": "https://www.crunchbase.com/organization/braintree-payment-solutions", "g2": "https://www.g2.com/products/braintree-direct/reviews"}};

vendorInfo["Adyen"] = {"image": "images/logos/adyen.png", "description": "Adyen offers a platform that integrates gateway, risk management, processing, acquiring, and settlement of payments.", "attributes": {"Funding to Date ($ in millions)": 226, "Employee Count": "501-1000", "Year Founded": 2006}, "socials": {"url": "https://www.adyen.com/", "linkedin": "https://www.linkedin.com/company/adyen/", "crunchbase": "https://www.crunchbase.com/organization/adyen", "g2": "https://www.g2.com/products/adyen/reviews"}};

vendorInfo["NS8"] = {"image": "images/logos/ns8.jpg", "description": "NS8, now Avolin Protect, is a fraud prevention platform that combines behavioral analytics and real-time scoring to help businesses minimize risk.", "attributes": {"Funding to Date ($ in millions)": 157.9, "Employee Count": "101-250", "Year Founded": 2016}, "socials": {"url": "https://www.avolin.com/products/ecommerce-and-retail/avolin-protect/", "linkedin": "https://www.linkedin.com/company/ns8/", "crunchbase": "https://www.crunchbase.com/organization/ns8-inc", "g2": "https://www.g2.com/products/ns8-protect/reviews"}};

vendorInfo["Avalara"] = {"image": "images/logos/avalara.png", "description": "Avalara develops a platform that automates the major steps of tax compliance, all in the cloud.", "attributes": {"Funding to Date ($ in millions)": 341, "Employee Count": "1001-5000", "Year Founded": 2004}, "socials": {"url": "https://www.avalara.com/", "linkedin": "https://www.linkedin.com/company/avalara/", "crunchbase": "https://www.crunchbase.com/organization/avalara", "g2": "https://www.g2.com/products/avalara/reviews"}};

vendorInfo["Vertex"] = {"image": "images/logos/vertex.png", "description": "Acquired by Jack Henry & Associates, Vertex provides a comprehensive suite of software and consulting services for both income and transaction taxes.", "attributes": {"Employee Count": "501-1000", "Year Founded": 1978}, "socials": {"url": "https://www.vertexinc.com/", "linkedin": "https://www.linkedin.com/company/vertex-inc./", "crunchbase": "https://www.crunchbase.com/organization/vertex", "g2": "https://www.g2.com/products/vertex-inc-vertex/reviews"}};

vendorInfo["Chargebee"] = {"image": "images/logos/chargebee.png", "description": "Chargebee provides subscription and recurring billing systems for SaaS and e-commerce businesses.", "attributes": {"Funding to Date ($ in millions)": 218.2, "Employee Count": "501-1000", "Year Founded": 2011}, "socials": {"url": "https://www.chargebee.com/", "linkedin": "https://www.linkedin.com/company/chargebee/", "crunchbase": "https://www.crunchbase.com/organization/chargebee", "g2": "https://www.g2.com/products/chargebee/reviews"}};

vendorInfo["Constructor.io"] = {"image": "images/logos/constructorio.png", "description": "AI-first search and product discovery that increases conversions and revenue.", "attributes": {"Funding to Date ($ in millions)": 6.1, "Employee Count": "11-50", "Year Founded": 2015, "MACH Certified": true}, "socials": {"url": "https://constructor.io/", "linkedin": "https://www.linkedin.com/company/constructor-io/", "crunchbase": "https://www.crunchbase.com/organization/constructor-io", "g2": "https://www.g2.com/products/constructor-io/reviews"}};

vendorInfo["Coveo"] = {"image": "images/logos/coveo.png", "description": "Coveo designs intelligent enterprise search and predictive insights platforms for businesses.", "attributes": {"Funding to Date ($ in millions)": 339.4, "Employee Count": "251-500", "Year Founded": 2005}, "socials": {"url": "https://www.coveo.com/", "linkedin": "https://www.linkedin.com/company/coveo/", "crunchbase": "https://www.crunchbase.com/organization/coveo", "g2": "https://www.g2.com/products/coveo/reviews"}};

vendorInfo["LucidWorks"] = {"image": "images/logos/lucidworks.png", "description": "Lucidworks offers the Connected Experience Cloud to some of the world's largest brands.", "attributes": {"Funding to Date ($ in millions)": 209, "Employee Count": "251-500", "Year Founded": 2007}, "socials": {"url": "https://lucidworks.com/", "linkedin": "https://www.linkedin.com/company/lucidworks/", "crunchbase": "https://www.crunchbase.com/organization/lucidworks", "g2": "https://www.g2.com/products/lucidworks-fusion/reviews"}};

vendorInfo["Attraqt"] = {"image": "images/logos/attraqt.png", "description": "Providing Onsite Search, Online Merchandising and ecommerce Personalization for global retailers & brands", "attributes": {"Employee Count": "101-250", "Year Founded": 2003}, "socials": {"url": "https://www.attraqt.com/", "linkedin": "https://www.linkedin.com/company/attraqt/", "crunchbase": "https://www.crunchbase.com/organization/locayta", "g2": "https://www.g2.com/products/attraqt/reviews"}};

vendorInfo["Bazaarvoice"] = {"image": "images/logos/bazaarvoice.png", "description": "Bazaarvoice helps brands capture, analyze and act upon social data, and enables authentic customer-powered marketing.", "attributes": {"Funding to Date ($ in millions)": 130.6, "Employee Count": "501-1000", "Year Founded": 2005}, "socials": {"url": "https://www.bazaarvoice.com/", "linkedin": "https://www.linkedin.com/company/bazaarvoice/", "crunchbase": "https://www.crunchbase.com/organization/bazaarvoice", "g2": "https://www.g2.com/products/bazaarvoice/reviews"}};

vendorInfo["Trustpilot"] = {"image": "images/logos/trustpilot.png", "description": "Trustpilot is an independent review platform for free and open to all to every company and consumer everywhere.", "attributes": {"Funding to Date ($ in millions)": 199.7, "Employee Count": "501-1000", "Year Founded": 2007}, "socials": {"url": "https://www.trustpilot.com/", "linkedin": "https://www.linkedin.com/company/trustpilot/", "crunchbase": "https://www.crunchbase.com/organization/trustpilot", "g2": "https://www.g2.com/products/trustpilot/reviews"}};

vendorInfo["7Learnings"] = {"image": "images/logos/7learnings.png", "description": "7Learnings helps retailers optimize their pricing with our predictive pricing software. Our solution uses advanced machine learning models to forecast demand for different price points with high accuracy.", "attributes": {"Employee Count": "1-10", "Year Founded": 2019}, "socials": {"url": "https://7learnings.com/", "linkedin": "https://www.linkedin.com/company/7learnings/", "crunchbase": "https://www.crunchbase.com/organization/7learnings", "g2": "https://www.g2.com/products/7learnings-7learnings/reviews"}};

vendorInfo["Talon.One"] = {"image": "images/logos/talonone.png", "description": "Placeholder for company description - fill in later.", "attributes": {"Funding to Date ($ in millions)": 3.4, "Employee Count": "11-50", "Year Founded": 2015, "MACH Certified": true}, "socials": {"url": "https://www.talon.one/", "linkedin": "https://www.linkedin.com/company/talon.one/", "crunchbase": "https://www.crunchbase.com/organization/talon-one", "g2": "https://www.g2.com/products/talon-one/reviews"}};

vendorInfo["XCCommerce"] = {"image": "images/logos/xccommerce.png", "description": "XCCommerce is a leader in transformative, state-of-the-art, cross channel, promotion solutions. XCCommerce’s suite of products support retailers’ omni-channel initiatives by providing an integrated platform with rich, full function applications that enable the setup, maintenance, and execution of complex promotions across all channels.", "attributes": {"Employee Count": "11-50", "Year Founded": 2012}, "socials": {"url": "https://xccommerce.com/", "linkedin": "https://www.linkedin.com/company/xccommerce/", "crunchbase": "https://www.crunchbase.com/organization/xccommerce"}};

vendorInfo["Voucherify"] = {"image": "images/logos/voucherify.png", "description": "Placeholder for company description - fill in later.", "attributes": {"Employee Count": "11-50", "Year Founded": 2015, "MACH Certified": true}, "socials": {"url": "https://www.voucherify.io/", "linkedin": "https://www.linkedin.com/company/voucherifyio/", "crunchbase": "https://www.crunchbase.com/organization/voucherify", "g2": "https://www.g2.com/products/voucherify/reviews"}};

vendorInfo["Tribe"] = {"image": "images/logos/tribe.png", "description": "TRIBE is a technology platform that enables digital marketers to quickly and cost-effectively source branded content from creators.", "attributes": {"Funding to Date ($ in millions)": 12.3, "Employee Count": "51-100", "Year Founded": 2015}, "socials": {"url": "https://www.tribegroup.co/solution/retail-and-ecommerce", "linkedin": "https://www.linkedin.com/company/tribe/", "crunchbase": "https://www.crunchbase.com/organization/tribe-3", "g2": "https://www.g2.com/products/tribe-group-tribe/reviews"}};

vendorInfo["Voyado"] = {"image": "images/logos/voyado.png", "description": "Voyado is an AI powered marketing automation and CRM platform.", "attributes": {"Employee Count": "101-250", "Year Founded": 2005}, "socials": {"url": "https://voyado.com/", "linkedin": "https://www.linkedin.com/company/voyadoab/", "crunchbase": "https://www.crunchbase.com/organization/voyado", "g2": "https://www.g2.com/products/voyado/reviews"}};

vendorInfo["Antavo"] = {"image": "images/logos/antavo.png", "description": "Antavo is the leading customer loyalty technology for fashion and retail.", "attributes": {"Funding to Date ($ in millions)": 1.9, "Employee Count": "11-50", "Year Founded": 2012}, "socials": {"url": "https://antavo.com/", "linkedin": "https://www.linkedin.com/company/antavo/", "crunchbase": "https://www.crunchbase.com/organization/antavo", "g2": "https://www.g2.com/products/antavo/reviews"}};

vendorInfo["trbo"] = {"image": "images/logos/trbo.jpg", "description": "trbo is a onsite Personalization, optimization and testing Platform.", "attributes": {"Funding to Date ($ in millions)": 2.5, "Employee Count": "11-50", "Year Founded": 2013}, "socials": {"url": "https://www.trbo.com/en/", "linkedin": "https://www.linkedin.com/company/trbo-com/", "crunchbase": "https://www.crunchbase.com/organization/trbo", "g2": "https://www.g2.com/products/trbo/reviews"}};

vendorInfo["Dynamic Yield"] = {"image": "images/logos/dynamicyield.jpg", "description": "Dynamic Yield helps companies quickly deliver and test personalized, optimized, and synchronized digital customer interactions.", "attributes": {"Funding to Date ($ in millions)": 105.3, "Employee Count": "251-500", "Year Founded": 2011}, "socials": {"url": "https://www.dynamicyield.com/", "linkedin": "https://www.linkedin.com/company/dynamic-yield/", "crunchbase": "https://www.crunchbase.com/organization/dynamic-yield", "g2": "https://www.g2.com/products/dynamic-yield/reviews"}};

vendorInfo["Rich Relevance"] = {"image": "images/logos/richrelevance.png", "description": "RichRelevance is the world’s leading personalization provider.", "attributes": {"Funding to Date ($ in millions)": 95.8, "Employee Count": "101-250", "Year Founded": 2006}, "socials": {"url": "https://richrelevance.com/", "linkedin": "https://www.linkedin.com/company/richrelevance/", "crunchbase": "https://www.crunchbase.com/organization/richrelevance", "g2": "https://www.g2.com/products/richrelevance/reviews"}};

vendorInfo["Apptus"] = {"image": "images/logos/apptus.png", "description": "Apptus helps online retailers develop, manage, and optimise their merchandising strategies.", "attributes": {"Employee Count": "51-100", "Year Founded": 2000}, "socials": {"url": "https://www.apptus.com/", "linkedin": "https://www.linkedin.com/company/apptus-technologies-ab/", "crunchbase": "https://www.crunchbase.com/organization/apptus", "g2": "https://www.g2.com/products/apptus-esales/reviews"}};

vendorInfo["Emarsys"] = {"image": "images/logos/emarsys.png", "description": "Emarsys enables brands around the world to deliver truly personal customer interactions across email, mobile, social, and web – at scale.", "attributes": {"Funding to Date ($ in millions)": 55.3, "Employee Count": "501-1000", "Year Founded": 2000}, "socials": {"url": "https://emarsys.com/", "linkedin": "https://www.linkedin.com/company/emarsys/", "crunchbase": "https://www.crunchbase.com/organization/emarsys", "g2": "https://www.g2.com/products/emarsys/reviews"}};

vendorInfo["Fluent Commerce"] = {"image": "images/logos/fluent.png", "description": "Achieve the perfect balance between customer experience and profitability. Exceptional customer experiences. The only cloud-native Distributed Order Management platform that can be fully customized to fit your unique omnichannel strategy.", "attributes": {"Funding to Date ($ in millions)": 28.8, "Employee Count": "51-100", "Year Founded": 2015, "MACH Certified": true}, "socials": {"url": "https://fluentcommerce.com/", "linkedin": "https://www.linkedin.com/company/fluent-commerce/", "crunchbase": "https://www.crunchbase.com/organization/fluent-retail", "g2": "https://www.g2.com/products/fluent-commerce/reviews"}};

vendorInfo["fulfillmenttools"] = {"image": "images/logos/fulfillmenttools.png", "description": "We connect your store network and eCommerce! Optimize your omnichannel fulfillment through leaner and more efficient processes with the fulfillmenttools platform. At the same time, you create the basis for ship-from-store, click & collect, and all other delivery or collection models – thus improving customer satisfaction.", "attributes": {"Employee Count": "11-50", "Year Founded": 2020}, "socials": {"url": "https://fulfillmenttools.com/", "linkedin": "https://www.linkedin.com/company/fulfillmenttools/"}};

vendorInfo["Manhattan Associates"] = {"image": "images/logos/manhattanassociates.jpg", "description": "Manhattan Associates is a producer of supply chain omni-channel products.", "attributes": {"Employee Count": "5001-10000", "Year Founded": 1990}, "socials": {"url": "https://www.manh.com/", "linkedin": "https://www.linkedin.com/company/manhattan-associates/", "crunchbase": "https://www.crunchbase.com/organization/manhattan-associates", "g2": "https://www.g2.com/products/manhattan-order-management/reviews"}};

vendorInfo["Sterling"] = {"image": "images/logos/sterling.jpg", "description": "Now acquired by IBM, Sterling Commerce offers B2B integration, secure file transfer, and multichannel selling and fulfillment for enterprises to find customers.", "attributes": {"Employee Count": "5001-10000", "Year Founded": 1975}, "socials": {"url": "https://www.ibm.com/supply-chain/sterling", "linkedin": "https://www.linkedin.com/company/sterling-commerce-an-at&t-company/", "crunchbase": "https://www.crunchbase.com/organization/sterling-commerce", "g2": "https://www.g2.com/products/ibm-sterling-order-management/reviews"}};

vendorInfo["Riversand"] = {"image": "images/logos/riversand.jpg", "description": "Now acquired by Syndigo, Riversand is a provider of MDM Solutions which enable global enterprises to manage multi-domain master data.", "attributes": {"Funding to Date ($ in millions)": 45, "Employee Count": "51-100", "Year Founded": 2001}, "socials": {"url": "https://www.riversand.com/", "linkedin": "https://www.linkedin.com/company/riversand/", "crunchbase": "https://www.crunchbase.com/organization/riversand", "g2": "https://www.g2.com/products/riversand-platform/reviews"}};

vendorInfo["inRiver"] = {"image": "images/logos/inriver.png", "description": "InRiver offers a product information management (PIM) solution that helps businesses to drive online sales.", "attributes": {"Funding to Date ($ in millions)": 49.9, "Employee Count": "101-250", "Year Founded": 2007}, "socials": {"url": "https://www.inriver.com/", "linkedin": "https://www.linkedin.com/company/inriver-ab/", "crunchbase": "https://www.crunchbase.com/organization/inriver", "g2": "https://www.g2.com/products/inriver-pim/reviews"}};

vendorInfo["Pimcore"] = {"image": "images/logos/pimcore.png", "description": "Award winning open-source software platform which delivers business value through seamless data and customer experience management.", "attributes": {"Funding to Date ($ in millions)": 3.5, "Employee Count": "51-100", "Year Founded": 2010}, "socials": {"url": "https://pimcore.com/", "linkedin": "https://www.linkedin.com/company/pimcore/", "crunchbase": "https://www.crunchbase.com/organization/pimcore", "g2": "https://www.g2.com/products/pimcore/reviews"}};

vendorInfo["Salsify"] = {"image": "images/logos/salsify.jpg", "description": "Salsify empowers brands by providing tools to track and analyze inventories, presentation, and sales of goods on digital shelves.", "attributes": {"Funding to Date ($ in millions)": 252.6, "Employee Count": "251-500", "Year Founded": 2012}, "socials": {"url": "https://www.salsify.com/", "linkedin": "https://www.linkedin.com/company/salsify/", "crunchbase": "https://www.crunchbase.com/organization/salsify", "g2": "https://www.g2.com/products/salsify-commerce-experience-management-platform/reviews"}};

vendorInfo["Productsup"] = {"image": "images/logos/productsup.png", "description": "Productsup empowers brands and retailers reach more customers on more channels and maximize sales.", "attributes": {"Funding to Date ($ in millions)": 20, "Employee Count": "101-250", "Year Founded": 2010}, "socials": {"url": "https://www.productsup.com/", "linkedin": "https://www.linkedin.com/company/productsup/", "crunchbase": "https://www.crunchbase.com/organization/productsup", "g2": "https://www.g2.com/products/productsup/reviews"}};

vendorInfo["VTEX"] = {"image": "images/logos/vtex.jpg", "description": "VTEX focuses on e-commerce strategies for major retailers and consumer brands.", "attributes": {"Funding to Date ($ in millions)": 365, "Employee Count": "1001-5000", "Year Founded": 2000, "MACH Certified": true, "Gartner/Forrester Industry Leader": true}, "socials": {"url": "https://vtex.com/", "linkedin": "https://www.linkedin.com/company/vtex/", "crunchbase": "https://www.crunchbase.com/organization/vtex", "g2": "https://www.g2.com/products/vtex-commerce-platform/reviews"}};

vendorInfo["Mirakl"] = {"image": "images/logos/mirakl.png", "description": "Mirakl is the leading enterprise marketplace solution, empowering brands and retailers to launch and grow an enterprise marketplace at scale", "attributes": {"Funding to Date ($ in millions)": 393, "Employee Count": "251-500", "Year Founded": 2011}, "socials": {"url": "https://www.mirakl.com/", "linkedin": "https://www.linkedin.com/company/mirakl/", "crunchbase": "https://www.crunchbase.com/organization/mirakl", "g2": "https://www.g2.com/products/mirakl-inc/reviews"}};

vendorInfo["SendGrid"] = {"image": "images/logos/sendgrid.png", "description": "Now acquired by Twilio, SendGrid is a cloud-based customer communication platform that drives engagement and business growth.", "attributes": {"Funding to Date ($ in millions)": 80.4, "Employee Count": "251-500", "Year Founded": 2009}, "socials": {"url": "https://sendgrid.com/", "linkedin": "https://www.linkedin.com/company/sendgrid/", "crunchbase": "https://www.crunchbase.com/organization/sendgrid", "g2": "https://www.g2.com/products/twilio-sendgrid-email-api/reviews"}};

vendorInfo["Twilio"] = {"image": "images/logos/twilio.png", "description": "Twilio is a cloud communication company that enables users to use standard web languages to build voice, VoIP, and SMS apps via a web API.", "attributes": {"Funding to Date ($ in millions)": 236.2, "Employee Count": "1001-5000", "Year Founded": 2008}, "socials": {"url": "https://www.twilio.com/", "linkedin": "https://www.linkedin.com/company/twilio-inc-/", "crunchbase": "https://www.crunchbase.com/organization/twilio", "g2": "https://www.g2.com/products/twilio/reviews"}};

vendorInfo["Postmark"] = {"image": "images/logos/postmark.png", "description": "Postmark is an email service provider focused exclusively on transactional email delivery. By not allowing bulk promotional email, Postmark maintains one of the best delivery reputations in the industry.", "attributes": {"Employee Count": "11-50", "Year Founded": 1946}, "socials": {"url": "https://postmarkapp.com/", "linkedin": "https://www.linkedin.com/company/postmarkapp/", "crunchbase": "https://www.crunchbase.com/organization/postmark", "g2": "https://www.g2.com/products/postmark/reviews"}};

vendorInfo["Mailchimp"] = {"image": "images/logos/mailchimp.png", "description": "Mailchimp provides marketing automation for e-commerce businesses.", "attributes": {"Employee Count": "501-1000", "Year Founded": 2001}, "socials": {"url": "https://mailchimp.com/", "linkedin": "https://www.linkedin.com/company/mailchimp/", "crunchbase": "https://www.crunchbase.com/organization/mailchimp", "g2": "https://www.g2.com/products/mailchimp/reviews"}};

vendorInfo["Apollo"] = {"image": "images/logos/apollo.png", "description": "Apollo is the GraphQL company. Its Data Graph Platform helps developers, startups, and enterprises get the most out of GraphQL.", "attributes": {"Funding to Date ($ in millions)": 53.2, "Employee Count": "11-50", "Year Founded": 2011}, "socials": {"url": "https://www.apollographql.com/", "linkedin": "https://www.linkedin.com/company/apollo-graphql/", "crunchbase": "https://www.crunchbase.com/organization/meteor", "g2": "https://www.g2.com/products/apollo-apps/reviews"}};

vendorInfo["Auth0"] = {"image": "images/logos/auth0.png", "description": "Now acquired by Okta, Auth0 is an identity management platform for web, mobile, IoT, and internal applications.", "attributes": {"Funding to Date ($ in millions)": 332.3, "Employee Count": "501-1000", "Year Founded": 2013}, "socials": {"url": "https://auth0.com/", "linkedin": "https://www.linkedin.com/company/auth0/", "crunchbase": "https://www.crunchbase.com/organization/auth0", "g2": "https://www.g2.com/products/auth0/reviews"}};

vendorInfo["Azure Active Directory"] = {"image": "images/logos/azureactivedirectory.png", "description": "The Azure Active Directory (Azure AD) enterprise identity service provides single sign-on and multi-factor authentication to help protect your users from 99.9 percent of cybersecurity attacks.", "attributes": {"Employee Count": "101-250", "Year Founded": 2010}, "socials": {"url": "https://azure.microsoft.com/en-us/services/active-directory/", "crunchbase": "https://www.crunchbase.com/organization/azure", "g2": "https://www.g2.com/products/microsoft-azure-active-directory/reviews"}};

vendorInfo["Vamp.io"] = {"image": "images/logos/vamp.png", "description": "Now acquired by CircleCI, Vamp is a smart and stress free canary testing and releasing for modern cloud platforms.", "attributes": {"Funding to Date ($ in millions)": 3.6, "Employee Count": "11-50", "Year Founded": 2013}, "socials": {"url": "https://vamp.io/", "linkedin": "https://www.linkedin.com/company/vamp-io/", "crunchbase": "https://www.crunchbase.com/organization/vamp-io", "g2": "https://www.g2.com/products/vamp/reviews"}};

// commented out because I could not find the right company
// vendorInfo["Ashiba"] = {"image": "images/logos/ashiba.png", "description": "Placeholder for company description - fill in later.", "attributes": {"Funding to Date ($ in millions)": , "Employee Count": "", "Year Founded": }, "socials": {"url": "", "linkedin": "", "crunchbase": "", "g2": ""}};

vendorInfo["Pipe17"] = {"image": "images/logos/pipe17.png", "description": "Pipe17 provides a cloud-based service connecting businesses to platforms, marketplaces, financial systems, and SaaS applications.", "attributes": {"Funding to Date ($ in millions)": 8, "Employee Count": "11-50", "Year Founded": 2019}, "socials": {"url": "https://pipe17.com/", "linkedin": "https://www.linkedin.com/company/pipe-17/", "crunchbase": "https://www.crunchbase.com/organization/pipe17", "g2": "https://www.g2.com/products/pipe17/reviews"}};

vendorInfo["Workato"] = {"image": "images/logos/workato.png", "description": "Workato is an enterprise automation platform that helps organizations work faster and smarter without compromising governance and security.", "attributes": {"Funding to Date ($ in millions)": 215, "Employee Count": "251-500", "Year Founded": 2013}, "socials": {"url": "https://www.workato.com/", "linkedin": "https://www.linkedin.com/company/workato/", "crunchbase": "https://www.crunchbase.com/organization/workato", "g2": "https://www.g2.com/products/workato/reviews"}};

// Attributes that appear in filter panel
var filterTypes = ["Funding to Date ($ in millions)", "Employee Count", "MACH Certified", "Gartner/Forrester Industry Leader"];

// image paths for social icons
var socialIcons = {"url": "images/icons/internet.png", "crunchbase": "images/icons/crunchbase.png", "linkedin": "images/icons/linkedin.png", "g2": "images/icons/g2.png"};

// attribute:type dictionary (e.g., "Regions Served": "array")
var attributeTypes = {};
for(let company in vendorInfo) {
  for(let attribute in vendorInfo[company]["attributes"]) {
    if(!(attribute in attributeTypes)) {
      if(Array.isArray(vendorInfo[company]["attributes"][attribute])) {
        attributeTypes[attribute] = "array";
      } else {
        attributeTypes[attribute] = "string";
      }
    }
  }
}

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
