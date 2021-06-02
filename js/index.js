const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav bar edits
const navBar = document.querySelectorAll("nav > a");
navBar[0].textContent=siteContent.nav["nav-item-1"];
navBar[1].textContent=siteContent.nav["nav-item-2"];
navBar[2].textContent=siteContent.nav["nav-item-3"];
navBar[3].textContent=siteContent.nav["nav-item-4"];
navBar[4].textContent=siteContent.nav["nav-item-5"];
navBar[5].textContent=siteContent.nav["nav-item-6"];

//cta section
const ctaTextH1 = document.querySelector(".cta-text h1");
const ctaTextButton = document.querySelector(".cta-text button");
const ctaImage = document.querySelector("#cta-img");

ctaTextH1.textContent=siteContent["cta"]["h1"];
ctaTextButton.textContent=siteContent["cta"]["button"];
ctaImage.setAttribute("src",siteContent["cta"]["img-src"]);


//main-content
mainContentHeaders=document.querySelectorAll(".text-content h4");
mainContentText=document.querySelectorAll(".text-content p");
mainContentImage=document.getElementById("middle-img");

const headersForMain = siteContent["main-content"];
mainContentHeaders[0].textContent=headersForMain["features-h4"];
mainContentHeaders[1].textContent=headersForMain["about-h4"];
mainContentHeaders[2].textContent=headersForMain["services-h4"];
mainContentHeaders[3].textContent=headersForMain["product-h4"];
mainContentHeaders[4].textContent=headersForMain["vision-h4"];

const textContentForMain = siteContent["main-content"];
mainContentText[0].textContent=textContentForMain["features-content"];
mainContentText[1].textContent=textContentForMain["about-content"];
mainContentText[2].textContent=textContentForMain["services-content"];
mainContentText[3].textContent=textContentForMain["product-content"];
mainContentText[4].textContent=textContentForMain["vision-content"];


mainContentImage.setAttribute("src", siteContent["main-content"]["middle-img-src"])

//contact content
const contactContentHeader = document.querySelector(".contact h4")
const contactContentParagraph = document.querySelectorAll(".contact p")
console.log(contactContentHeader, contactContentParagraph);

const contactStrings = siteContent["contact"];
contactContentHeader.textContent = contactStrings["contact-h4"];
contactContentParagraph[0].textContent=contactStrings["address"];
contactContentParagraph[1].textContent=contactStrings["phone"];
contactContentParagraph[2].textContent=contactStrings["email"];

//footer content
const footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];

