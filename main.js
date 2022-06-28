let form = document.getElementById("form");
let text = document.getElementById("text");
let msg = document.getElementById("msg");
let post = document.getElementById("post");

form.addEventListener("submit", (x) => {
  x.preventDefault();
  console.log("button clicked");
  validaton();
});

let validaton = () => {
  if (text.value === "") {
    msg.innerHTML = "Can't be blank!";
    console.log("No message!");
  } else {
    console.log("success!");
    msg.innerHTML = "";
    inputData();
  }
};

let data = {};

let inputData = () => {
  data["y"] = text.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  post.innerHTML += `<div class="box">
      <p>${data.y}</p>
        <span>
        <i onClick="ommit(this)" class='bx bx-check-square'></i>
        </span>
    </div>`;
  text.value = "";
};

let ommit = (e) => {
  e.parentElement.parentElement.remove();
};
