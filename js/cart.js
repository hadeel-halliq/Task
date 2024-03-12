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

// Start content
let titleDiv = document.querySelector(".title");
let h2 = document.createElement("h2");
h2.textContent = "My Cart";
h2.className = "hTiltle";
titleDiv.appendChild(h2);
// End content

let res = document.querySelector(".res");
let resOne = document.createElement("div");
resOne.className = "resOne";
let imgOne = document.createElement("img");
imgOne.src = "../imgs/picture (1).jpg";
resOne.appendChild(imgOne);
let resTwo = document.createElement("div");
resTwo.className = "resTwo";
let imgTwo = document.createElement("img");
imgTwo.src = "../imgs/picture (3).jpg";
resTwo.appendChild(imgTwo);
let resThree = document.createElement("div");
resThree.className = "resThree";
let imgThree = document.createElement("img");
imgThree.src = "../imgs/picture (2).jpg";
resThree.appendChild(imgThree);
let resFour = document.createElement("div");
resFour.className = "resFour";
let imgFour = document.createElement("img");
imgFour.src = "../imgs/picture (3).jpg";
resFour.appendChild(imgFour);


let divOne = document.createElement("div");
let divTwo = document.createElement("div");
let divThree = document.createElement("div");
let divFour = document.createElement("div");
divOne.innerHTML =
`<h3>Product</h3>
</br>
<h2>Audi</h2>
<p>Code: #716537</p>
<p>Engine Copacity: 6000cc</p>
</br>
<span>Price : <span>$ 240.55
</br>
</br>
<span>Color :</span> Yellow`;

divTwo.innerHTML = 
`<h3>Product</h3>
</br>
<h2>Honda</h2>
<p>Code: #716537</p>
<p>Engine Copacity: 6000cc</p>
</br>
<span>Price : <span>$ 240.55
</br>
</br>
<span>Color :</span> Red
`;
divThree.innerHTML = 
`<h3>Product</h3>
</br>
<h2>BMW</h2>
<p>Code: #716537</p>
<p>Engine Copacity: 6000cc</p>
</br>
<span>Price : <span>$ 240.55
</br>
</br>
<span>Color :</span> Black
`;
divFour.innerHTML = 
`<h3>Product</h3>
</br>
<h2>Volvo</h2>
<p>Code: #716537</p>
<p>Engine Copacity: 6000cc</p>
</br>
<span>Price : <span>$ 240.55
</br>
</br>
<span>Color :</span> White
`;
resOne.appendChild(divOne);
res.appendChild(resOne);
resTwo.appendChild(divTwo);
res.appendChild(resTwo);
resThree.appendChild(divThree);
res.appendChild(resThree);
resFour.appendChild(divFour);
res.appendChild(resFour);

//
let deletOne = document.querySelector(".delet-one");
let firstRow = document.querySelector(".first-row")
deletOne.onclick = function () {
  firstRow.remove()
}

let deletTwo = document.querySelector(".delet-two");
let secondRow = document.querySelector(".second-row")
deletTwo.onclick = function () {
  secondRow.remove()
}

let deletThree = document.querySelector(".delet-three");
let thirdRow = document.querySelector(".third-row")
deletThree.onclick = function () {
  thirdRow.remove()
}

let deletFour = document.querySelector(".delet-four");
let fourthRow = document.querySelector(".fourth-row")
deletFour.onclick = function () {
  fourthRow.remove()
}
