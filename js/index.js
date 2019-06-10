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
logo.setAttribute('src', siteContent["nav"]["img-src"]);







const ctaPic = document.getElementById('cta-img');
ctaPic.setAttribute('src', siteContent["cta"]["img-src"]);

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const nav = document.querySelectorAll('nav');
const item1 = nav[0]["childNodes"][0];
const item2 = nav[0]["childNodes"][2];
const item3 = nav[0]["childNodes"][4];
const item4 = nav[0]["childNodes"][6];
const item5 = nav[0]["childNodes"][8];
const item6 = nav[0]["childNodes"][10];

item1.textContent = siteContent["nav"]["nav-item-1"];
item2.textContent = siteContent["nav"]["nav-item-2"];
item3.textContent = siteContent["nav"]["nav-item-3"];
item4.textContent = siteContent["nav"]["nav-item-4"];
item5.textContent = siteContent["nav"]["nav-item-5"];
item6.textContent = siteContent["nav"]["nav-item-6"];

item1.style.textContent.color = "green";
item2.style.textContent.color = "green";
item3.style.textContent.color = "green";
item4.style.textContent.color = "green";
item5.style.textContent.color = "green";
item6.style.textContent.color = "green";



const button1 = document.querySelectorAll('.button');
button1[0].textContent = siteContent["cta"]["button"]


const ctaHandle = document.getElementsByClassName('.cta-text');
ctaHandle.textContent = siteContent["cta"]["h1"];

//-----------------------------------Extra nav tag
const newNav = document.createElement('a');
newNav.textContent = "Coupons";

nav[0].appendChild(newNav);



