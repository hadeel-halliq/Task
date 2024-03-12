// Header
let container = document.querySelector(".container");
let land = document.querySelector(".landing-page");
let nav = document.querySelector(".nav");
let logo = document.querySelector(".logo");
let img = document.querySelector("img");
img.src = "../imgs/Logo.jpg";
logo.appendChild(img);

let div = document.querySelector(".headerr");
let liItems = ["Home", "Catalogue", "Contact US", "Help"];
let add = liItems.map((e) => {
  let liEle = document.createElement("li");
  let a = document.createElement("a");
  let text = document.createTextNode(`${e}`);
  liEle.appendChild(a);
  a.appendChild(text);
  div.appendChild(liEle);
});

// nav.appendChild(div);

// Register
let register = document.querySelector(".register");
let button = document.createElement("button");
button.className = "button";
let span = document.createElement("span");
span.textContent = "Register";
button.appendChild(span);
register.appendChild(button);

// let clickCart = document.querySelector(".click");
// console.log(clickCart)
register.onclick = function () {
  window.open("http://127.0.0.1:5500/cart.html", "_blank")
};

// End Header

// Start Home

let home = document.querySelector(".home");
let homeText = document.querySelector(".home-text");
let p1 = document.createElement("p");
p1.className = "title";
p1.textContent = "arriving summer 2019";
homeText.appendChild(p1);
let h2 = document.createElement("h2");
h2.textContent = "make every day legendary.";
homeText.appendChild(h2);
let p2 = document.createElement("p");
p2.className = "description";
p2.textContent =
  "The culmimination of comfort,luxury,and powerful living is embodied in the First BMWX7-the bigest bmw built ";
homeText.appendChild(p2);
let button2 = document.createElement("button");
button2.className = "home-button";
let span2 = document.createElement("span");
span2.textContent = "explore";
button2.appendChild(span2);
homeText.appendChild(button2);
home.appendChild(homeText);
container.appendChild(home);
let homeimg = document.createElement("img");
homeimg.src = "../imgs/r.jpg";
homeimg.className = "mainImg";

home.appendChild(homeimg);

//End home

//Start section type

let headImg = document.querySelector(".headImg");
let carImges = document.querySelector(".carImges");
let h3 = document.createElement("h3");
h3.className = "hSection";
h3.textContent = "Find by Car Type";
headImg.appendChild(h3);

let imgOne = document.createElement("img");
let imgTwo = document.createElement("img");
let imgThree = document.createElement("img");
let imgFour = document.createElement("img");

imgOne.src = "../imgs/Rectangle 14.jpg";
imgOne.className = "imageOne";
imgTwo.src = "../imgs/ferrari.jpg";
imgThree.src = "../imgs/bmw.jpg";
imgThree.className = "imageThree";
imgFour.src = "../imgs/Audi.jpg";

carImges.appendChild(imgOne);
carImges.appendChild(imgTwo);
carImges.appendChild(imgThree);
carImges.appendChild(imgFour);

// End section type

// Start section categories

let catHead = document.querySelector(".cat-head");
let hCat = document.createElement("h3");
hCat.className = "hCat";
hCat.textContent = "Top Categories";
catHead.appendChild(hCat);

let catGroup = document.querySelector(".cat-group");

// Car 1
let divC = document.querySelector(".div-c");
let imgCars = document.createElement("img");
imgCars.src = "../imgs/picture (1).jpg";
let hCar = document.createElement("h3");
hCar.textContent = "AUDI";
hCar.className = "audi";
let divDe = document.createElement("div");
divDe.className = "div-de";

let iOne = document.createElement("i");
iOne.innerHTML = '<i class="fa fa-check-square-o" aria-hidden="true"></i>';
let pOne = document.createElement("p");
pOne.textContent = "4 Sector";
divDe.appendChild(iOne);
divDe.appendChild(pOne);
let iTwo = document.createElement("i");
iTwo.innerHTML = '<i class="fa fa-circle-thin" aria-hidden="true"></i>';
let pTwo = document.createElement("p");
pTwo.textContent = "Manual";
divDe.appendChild(iTwo);
divDe.appendChild(pTwo);
let iThree = document.createElement("i");
iThree.innerHTML = '<i class="fa fa-clock-o" aria-hidden="true"></i>';
let pThree = document.createElement("p");
pThree.textContent = "5KM/1-It";
divDe.appendChild(iThree);
divDe.appendChild(pThree);
let pEle = document.createElement("P");
pEle.textContent = "Starting at $500/Day";
let dButtonOne = document.createElement("button");
dButtonOne.textContent = "Detailes >";
dButtonOne.className = "detailes";
let buyButtonOne = document.createElement("button");
buyButtonOne.textContent = "Buy Now";
divC.appendChild(imgCars);
divC.appendChild(hCar);
divC.appendChild(divDe);
divC.appendChild(pEle);
divC.appendChild(dButtonOne);
divC.appendChild(buyButtonOne);

// Car 2
let divcT = document.querySelector(".div-c2");
let imgCarsT = document.createElement("img");
imgCarsT.src = "../imgs/picture (3).jpg";
let hCarT = document.createElement("h3");
hCarT.textContent = "Honda";
hCarT.className = "honda";
let divdeT = document.createElement("div");
divdeT.className = "div-det";

let iOnee = document.createElement("i");
iOnee.innerHTML = '<i class="fa fa-check-square-o" aria-hidden="true"></i>';
let pOnee = document.createElement("p");
pOnee.textContent = "4 Sector";
divdeT.appendChild(iOnee);
divdeT.appendChild(pOnee);
let iTwoo = document.createElement("i");
iTwoo.innerHTML = '<i class="fa fa-circle-thin" aria-hidden="true"></i>';
let pTwoo = document.createElement("p");
pTwoo.textContent = "Manual";
divdeT.appendChild(iTwoo);
divdeT.appendChild(pTwoo);
let iThreee = document.createElement("i");
iThreee.innerHTML = '<i class="fa fa-clock-o" aria-hidden="true"></i>';
let pThreee = document.createElement("p");
pThreee.textContent = "5KM/1-It";
divdeT.appendChild(iThreee);
divdeT.appendChild(pThreee);
let pEleT = document.createElement("P");
pEleT.textContent = "Starting at $500/Day";
let ButtonTwo = document.createElement("button");
ButtonTwo.textContent = "Detailes >";
ButtonTwo.className = "detailes";
let buyTwo = document.createElement("button");
buyTwo.textContent = "Buy Now";
divcT.appendChild(imgCarsT);
divcT.appendChild(hCarT);
divcT.appendChild(divdeT);
divcT.appendChild(pEleT);
divcT.appendChild(ButtonTwo);
divcT.appendChild(buyTwo);

// Car 3
let divTh = document.querySelector(".div-c3");
let imgCarsTh = document.createElement("img");
imgCarsTh.src = "../imgs/picture (3).jpg";
let hCarTh = document.createElement("h3");
hCarTh.textContent = "VOLVO";
hCarTh.className = "volvo";
let divThr = document.createElement("div");
divThr.className = "div-thr";

let iOneT = document.createElement("i");
iOneT.innerHTML = '<i class="fa fa-check-square-o" aria-hidden="true"></i>';
let pOneT = document.createElement("p");
pOneT.textContent = "4 Sector";
divThr.appendChild(iOneT);
divThr.appendChild(pOneT);
let iTwoT = document.createElement("i");
iTwoT.innerHTML = '<i class="fa fa-circle-thin" aria-hidden="true"></i>';
let pTwoT = document.createElement("p");
pTwoT.textContent = "Manual";
divThr.appendChild(iTwoT);
divThr.appendChild(pTwoT);
let iThreeT = document.createElement("i");
iThreeT.innerHTML = '<i class="fa fa-clock-o" aria-hidden="true"></i>';
let pThreeT = document.createElement("p");
pThreeT.textContent = "5KM/1-It";
let pTh = document.createElement("P");
pTh.textContent = "Starting at $500/Day";
let ButtonThree = document.createElement("button");
ButtonThree.textContent = "Detailes >";
ButtonThree.className = "detailes";
let buyThree = document.createElement("button");
buyThree.textContent = "Buy Now";
divThr.appendChild(iThreeT);
divThr.appendChild(pThreeT);
divTh.appendChild(imgCarsTh);
divTh.appendChild(hCarTh);
divTh.appendChild(divThr);
divTh.appendChild(pTh);
divTh.appendChild(ButtonThree);
divTh.appendChild(buyThree);

//car 4
let divF = document.querySelector(".div-c4");
let imgCarsF = document.createElement("img");
imgCarsF.src = "../imgs/picture (2).jpg";
let hCarF = document.createElement("h3");
hCarF.textContent = "BMW";
hCarF.className = "bmw";
let divDeF = document.createElement("div");
divDeF.className = "div-def";

let iOneF = document.createElement("i");
iOneF.innerHTML = '<i class="fa fa-check-square-o" aria-hidden="true"></i>';
let pOneF = document.createElement("p");
pOneF.textContent = "4 Sector";
divDeF.appendChild(iOneF);
divDeF.appendChild(pOneF);
let iTwoF = document.createElement("i");
iTwoF.innerHTML = '<i class="fa fa-circle-thin" aria-hidden="true"></i>';
let pTwoF = document.createElement("p");
pTwoF.textContent = "Manual";
divDeF.appendChild(iTwoF);
divDeF.appendChild(pTwoF);
let iThreeF = document.createElement("i");
iThreeF.innerHTML = '<i class="fa fa-clock-o" aria-hidden="true"></i>';
let pThreeF = document.createElement("p");
pThreeF.textContent = "5KM/1-It";
let pFour = document.createElement("P");
pFour.textContent = "Starting at $500/Day";
let ButtonFour = document.createElement("button");
ButtonFour.textContent = "Detailes >";
ButtonFour.className = "detailes";
let buyFour = document.createElement("button");
buyFour.textContent = "Buy Now";
divDeF.appendChild(iThreeF);
divDeF.appendChild(pThreeF);
divF.appendChild(imgCarsF);
divF.appendChild(hCarF);
divF.appendChild(divDeF);
divF.appendChild(pFour);
divF.appendChild(ButtonFour);
divF.appendChild(buyFour);

let det = document.querySelectorAll(".detailes");
for (let i = 0; i < 4; i++) {
  det[i].onclick = function () {
    window.open("http://127.0.0.1:5500/details.html", "_blank");
 };
}
// End section categories
