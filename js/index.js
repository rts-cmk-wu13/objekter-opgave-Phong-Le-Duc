
// slå dig løs her... 

let header = document.querySelector(".header");
let heroElm = document.querySelector(".hero")
let heroImg = document.createElement("figure");
let heroInfo = document.createElement("div");
let servicesElm = document.querySelector(".services")

// ------HEADER-------------
let headerNav = document.createElement("nav")
headerNav.classList.add("header-nav")
header.appendChild(headerNav);

let leftIcon = document.createElement("div")
leftIcon.classList.add("left-icon")
headerNav.append(leftIcon);


let rightIcon = document.createElement("div")
rightIcon.classList.add("right-icon")
headerNav.append(rightIcon);


// ----------------HERO---------------------

heroImg.classList.add("hero-img")
heroImg.innerHTML = `
<img src="${hero.image}" alt="">
`

heroInfo.classList.add("hero-info")
heroInfo.innerHTML = `
<h1>${hero.headline}</h1>
<p>${hero.copy}</p>
<a class="hero-info__btn" href="#">
    <img src="${hero.icon}" alt="">
    <span>Explore</span>
</a>
`
heroElm.append(heroImg, heroInfo);


// ----------------SERVICES -----------------------




services.forEach(function (service) {
    let serviceArticle = document.createElement("article");
    serviceArticle.classList.add("service-article")
    serviceArticle.innerHTML = `
    <img src="${service.illustration}" alt="">
    <h1>${service.headline}</h1>
    <p>${service.text}</p>
    <a href="#">${service.linktext}</a>
    `
    servicesElm.append(serviceArticle)

});



// -----------FACILITIES ----------------------

let facilitiesElm = document.querySelector(".facilities")
let facilityContainer = document.createElement("div");
facilityContainer.classList.add("facilities-container");

facilitiesElm.innerHTML = `
<h2>${facilities.headline}</h2>
`

facilities.options.forEach(function(facility) {
    let facilitiesArticle = document.createElement("article");
    facilitiesArticle.classList.add("facilities-article");
    facilitiesArticle.innerHTML = `
 <img src="${facility.icon}" alt="">
    <h3>${facility.headline}</h3>
    <p>${facility.text}</p>  
`
    facilityContainer.append(facilitiesArticle);
});

facilitiesElm.append(facilityContainer);

// ---------------SITES---------------------

let sitesElm = document.querySelector(".sites")
let sitesContainer = document.createElement("div");
sitesContainer.classList.add("sites-container");

sitesContainer.innerHTML = `
 <h3>${sites.headline}</h3>
    <p>${sites.text}</p>
    <a href="#"><img src="${sites.btnicon}" alt="">start</a>  
`
sitesElm.append(sitesContainer);



sites.places.forEach(function (place) {
    sitesArticle = document.createElement("article");
    sitesArticle.classList.add("sites-articles");
    sitesArticle.innerHTML = `
   <img src="${place.img}" alt="">
             <h4>${place.name}</h4>
       <a href="#">${place.city}</a> 
    `
    sitesElm.append(sitesArticle);
});

// ---------ADVANTAGES-----------


let advantagesElm = document.querySelector(".advantages")
let advantagesContainer = document.createElement("div");
advantagesContainer.classList.add("advantages-container");

advantagesElm.innerHTML = `
<h2>Our Advantages</h2>
`
advantages.forEach(function(advantage) {
    let advantagesArticle = document.createElement("article");
    advantagesArticle.classList.add("advantages-article");
    advantagesArticle.innerHTML = `
    <img src="${advantage.icon}" alt="">
       <h3>${advantage.headline}</h3>
       <p>${advantage.text}</p>  
   `
advantagesContainer.append(advantagesArticle);

});

advantagesElm.append(advantagesContainer);


// ------------FOOTER-------------------

let footerElm = document.querySelector(".footer")
let footerContainer = document.createElement("div");
footerContainer.classList.add("footer-container");
let footerSlogan = document.createElement("div");
footerSlogan.classList.add("footer-slogan");

footerSlogan.innerHTML = `<h3>${footer.text}</h3>
<p class="text-large">${footer.headline}</p>

`

footerContainer.append(footerSlogan);


// footerNavigations = document.createElement("ul");
// footerNavigations.classList.add("footer-nav")

footer.footerNavs.forEach(function(footerNav) {
    footerList = document.createElement("ul") ;
    footerList.classList.add("footer-list");
    footerList.innerHTML = `
    <li>${footerNav.headline}</li>
    <li>${footerNav.list1}</li>
    <li>${footerNav.list2}</li>
    <li>${footerNav.List3}</li>
    <li>${footerNav.list4}</li>
    `

footerContainer.append(footerList);
})


footerElm.append(footerContainer);


let footerBottom = document.createElement("div");
footerBottom.classList.add("footer-bottom");

footerBottom.innerHTML = `
<div class="all_rights">
    <p>EazyCamper. All rights reserved.</p>
    <ul class="bottom-nav">
        <li><a href="#">About</a></li>
        <li><a href="#">Site Map</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Privacy policy</a></li>
        <li><a href="#">Teams</a></li>
    </ul>
    
    </div>
`
footerElm.append(footerBottom);












//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach(service => console.log(service.headline))
