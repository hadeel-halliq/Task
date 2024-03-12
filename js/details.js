// Start Header
let container = document.querySelector(".container");
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

// Register
let register = document.querySelector(".register");
let button = document.createElement("button");
button.className = "button";
let span = document.createElement("span");
span.textContent = "Register";
button.appendChild(span);
register.appendChild(button);

// End Header

// Start Content

// Left Div
let leftDiv = document.querySelector(".left-div");
let lineOne = document.createElement("p");
lineOne.innerHTML = "Type > Car > <span>Details</span>";
leftDiv.appendChild(lineOne);
let lineTwo = document.createElement("p");
lineTwo.textContent = "Honda - Civic Type R";
leftDiv.appendChild(lineTwo);
lineThree = document.createElement("P");
lineThree.textContent = "6000 cc";
leftDiv.appendChild(lineThree);
let deImg = document.createElement("img");
deImg.src = "../imgs/t.jpg";
deImg.className = "deImg";
leftDiv.appendChild(deImg);
let slider = document.createElement("div");
slider.className = "slider"
let inImgOne = document.createElement("img");
inImgOne.src = "../imgs/t1.jpg";
inImgOne.className = "slide";
let inImgTwo = document.createElement("img");
inImgTwo.src = "../imgs/t2.jpg";
inImgTwo.className = "slide";
let inImgThree = document.createElement("img");
inImgThree.src = "../imgs/t3.jpg";
inImgThree.className = "slide";
let inImgFour = document.createElement("img");
inImgFour.src = "../imgs/t4.jpg";
inImgFour.className = "slide";
slider.appendChild(inImgOne);
slider.appendChild(inImgTwo);
slider.appendChild(inImgThree);
slider.appendChild(inImgFour);
leftDiv.appendChild(slider);


// Right Div
let rightDiv = document.querySelector(".right-div");
let hOne = document.createElement("h3");
hOne.textContent = "Details";
rightDiv.appendChild(hOne);
let pOne = document.createElement("p");
pOne.textContent = "Rating And Review";
pOne.className = "star";
rightDiv.appendChild(pOne);

let hTwo = document.createElement("h3");
hTwo.textContent = "Desciption";
rightDiv.appendChild(hTwo);
let pTwo = document.createElement("p");
pTwo.textContent =
  "The culmimination of comfort,luxury,and powerful living is embodied in the first BMWX7 -the biggest BMW";
rightDiv.appendChild(pTwo);
let hThree = document.createElement("h3");
hThree.textContent = "Colors";
rightDiv.appendChild(hThree);
let spanC = document.createElement("span");
rightDiv.appendChild(spanC);
let priceDiv = document.createElement("div");
let pNum = document.createElement("P");
pNum.textContent = "1";
priceDiv.appendChild(pNum);
let priceNum = document.createElement("P");
priceNum.innerHTML = `<span> Price: </span> 250 $`;
priceDiv.appendChild(priceNum);
rightDiv.appendChild(priceDiv);
let buttonDiv = document.createElement("div");
let buttonAdd = document.createElement("button");
let buttonBuy = document.createElement("button");
buttonAdd.textContent = "Add To Cart";
buttonBuy.textContent = "Buy Now";
buttonDiv.appendChild(buttonAdd);
buttonDiv.appendChild(buttonBuy);
rightDiv.appendChild(buttonDiv);

// End Content

// Slider

let slides = document.querySelectorAll(".slide")
