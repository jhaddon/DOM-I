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

// Images
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let header = document.getElementById("cta-img");
header.setAttribute('src', siteContent["cta"]["img-src"]);

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// NAV

let navigation = document.querySelectorAll("a");
for(let i = 0; i < navigation.length; i++){
  navigation[i].textContent = siteContent["nav"]["nav-item-"+(i+1)];
  navigation[i].style.color = "green";
}

// Task 3 - New Nav Items

const nav = document.querySelector("nav");

const before = document.createElement("a");
before.href = "#";
before.textContent = "Start";
before.style.color = "green";
nav.prepend(before);

const after = document.createElement("a");
after.href = "#";
after.textContent = "End";
after.style.color = "green";
nav.appendChild(after);

// CTA 

let ctaLeft = document.querySelector(".cta .cta-text h1");
ctaLeft.innerHTML ="DOM <br> IS<br>AWESOME"; 
document.querySelector(".cta .cta-text button").textContent = siteContent["cta"]["button"];


// Content
let h4 = document.querySelectorAll("h4");
let p = document.querySelectorAll("p");

//  Above Image

h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];

p[0].textContent = siteContent["main-content"]["features-content"];
p[1].textContent = siteContent["main-content"]["about-content"];

// Below Image

h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];

p[2].textContent = siteContent["main-content"]["services-content"];
p[3].textContent = siteContent["main-content"]["product-content"];
p[4].textContent = siteContent["main-content"]["vision-content"];

// Footer 

h4[5].textContent = siteContent["contact"]["contact-h4"];
p[5].textContent = siteContent["contact"]["address"];
p[6].textContent = siteContent["contact"]["phone"];
p[7].textContent = siteContent["contact"]["email"];
p[8].textContent = siteContent["footer"]["copyright"];