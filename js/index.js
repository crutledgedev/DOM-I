const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM <br/> Is <br/> Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//
const navA = document.querySelectorAll("nav a");
for (let i = 0; i < navA.length; i++) {
  navA[i].textContent = siteContent["nav"]["nav-item-" + i];
  console.log(i);
}
// navA[0].textContent = siteContent["nav"]["nav-item-1"];
// navA[1].textContent = siteContent["nav"]["nav-item-2"];
// navA[2].textContent = siteContent["nav"]["nav-item-3"];
// navA[3].textContent = siteContent["nav"]["nav-item-4"];
// navA[4].textContent = siteContent["nav"]["nav-item-5"];
// navA[5].textContent = siteContent["nav"]["nav-item-6"];

// const newContent = document.createElement("footer");
// console.log(newContent);

// // Item Creation Step 2: add some content to the newly created div
// newContent.textContent ="Website made by Christina Gorton";

// // Item Creation Step 3: prepend or append the element to an existing DOM node on the page
// const parentElement = document.querySelector('nav');

// parentElement.append(footer)

const ctaText = document.querySelector("cta-text, h1");
const ctaButton = document.querySelector("cta-text, button");
ctaText.innerHTML = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];

const mainFour = document.querySelectorAll("h4");

mainFour[0].textContent = siteContent["main-content"]["features-h4"];
mainFour[1].textContent = siteContent["main-content"]["about-h4"];
mainFour[2].textContent = siteContent["main-content"]["services-h4"];
mainFour[3].textContent = siteContent["main-content"]["product-h4"];
mainFour[4].textContent = siteContent["main-content"]["vision-h4"];
mainFour[5].textContent = siteContent["contact"]["contact-h4"];

const mainCont = document.querySelectorAll("p");
mainCont[0].textContent = siteContent["main-content"]["features-content"];
mainCont[1].textContent = siteContent["main-content"]["about-content"];
mainCont[2].textContent = siteContent["main-content"]["services-content"];
mainCont[3].textContent = siteContent["main-content"]["product-content"];
mainCont[4].textContent = siteContent["main-content"]["vision-content"];
mainCont[5].textContent = siteContent["contact"]["address"];
mainCont[6].textContent = siteContent["contact"]["phone"];
mainCont[7].textContent = siteContent["contact"]["email"];
mainCont[8].textContent = siteContent["footer"]["copyright"];

// const newContent = document.createElement("a");
// console.log(newContent);

// // Item Creation Step 2: add some content to the newly created div
// newContent.textContent ="OMG";

// // Item Creation Step 3: prepend or append the element to an existing DOM node on the page
const wtf = document.querySelector("nav a");
console.log(wtf);

wtf.prepend("Omg");
wtf.append("Bbq");

const green = document.querySelector("a");

const navList = document.querySelectorAll("nav a");
navList.forEach((element) => {
  element.style.color = "green";
});
