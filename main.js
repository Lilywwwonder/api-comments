import { fetchAndRender, postComment } from "./api.js";
import { renderComments } from "./render.js"; 

"use strict";
const addTimeElement = document.getElementById("addTime");
const likesButtonElement = document.querySelectorAll('.like-button');

export let comments = [];

export const setComments = (value) => { // заполнили массив
  comments = value;
}

// что правильнне render или fetch ????
// fetchAndRender(); //сменили на рендер
renderComments();

export function addComListener() {
  const addNameElement = document.getElementById("addName");
  const addTextElement = document.getElementById("addText");
  const buttonElement = document.getElementById("addComment");
  if (buttonElement) {
  buttonElement.addEventListener('click', () => {
addNameElement.classList.remove("error");
addTextElement.classList.remove("error");
if (addNameElement.value.trim() === "") {
addNameElement.classList.add("error");
return;
}
if (addTextElement.value.trim() === "") {
addTextElement.classList.add("error");
return;
}
renderComments();
postComment({nameValue: addNameElement.value, textValue: addTextElement.value}); // добавили
addNameElement.value = '';
addTextElement.value = '';
  });
}
}


export const likesButtonListeners = () => {
const likesButtonElement = document.querySelectorAll('.like-button');
for (const likeButton of likesButtonElement) {
    likeButton.addEventListener('click', event => {
      event.stopPropagation();
      const index = likeButton.dataset.index;
      if (comments[index].isLike === false) { 
        comments[index].isLike = true; 
        comments[index].like++; 
    } else { 
        comments[index].isLike = false; 
        comments[index].like--; 
  }
  renderComments();
 });
}
}



export const commentsElementListeners = () => {
const commentsElement = document.querySelectorAll('.comment-text');

for (const commentText of commentsElement) {
commentText.addEventListener('click', (event) => {
  event.preventDefault();
  const index = commentText.dataset.index;
  //alert(`привет`);
  const comment = `${comments[index].name}:${comments[index].comment}`;
  addTextElement.value = comment;
  renderComments();
});
}
}

// очищаем форму после отправки заполненного комментария
 export function addSubmitListener () {
  const form = document.getElementById('myForm');
  form.addEventListener('submit', (e) => {
  e.preventDefault(); // добавили, чтобы не перезагружалась страница
  e.target.reset();
  renderComments();
});

}

console.log("It works!");



// first----------------------------------------
// buttonElement.addEventListener("click", () => {
// addNameElement.classList.remove("error");
// addTextElement.classList.remove("error");
// if (addNameElement.value.trim() === "") {
// addNameElement.classList.add("error");
// return;
// }
// if (addTextElement.value.trim() === "") {
// addTextElement.classList.add("error");
// return;
// }
// postComment(); // добавили
// });

// second(double)---------------------------------
// if (buttonElement) {
//   buttonElement.addEventListener('click', () => {
//     //addNameElement.style.backgroundColor = ""; альтернатива инлайн - не рек
//     addNameElement.classList.remove("error");
//     addTextElement.classList.remove("error");
//     if (addNameElement.value.trim() === "") {
//       //addNameElement.style.backgroundColor = "red"; альтернатива инлайн - не рек
//       addNameElement.classList.add("error");
//       return;
//     } 
//     if (addTextElement.value.trim() === "") {
//       addTextElement.classList.add("error");
//       return;
//     };
//     renderComments();
//     postComment(); // добавили
//     addNameElement.value = '';
//     addTextElement.value = '';
//   });
//   }


// second----------------------------------------------
// if (buttonElement) {
// buttonElement.addEventListener('click', () => {
//   //addNameElement.style.backgroundColor = ""; альтернатива инлайн - не рек
//   addNameElement.classList.remove("error");
//   addTextElement.classList.remove("error");
//   if (addNameElement.value.trim() === "") {
//     //addNameElement.style.backgroundColor = "red"; альтернатива инлайн - не рек
//     addNameElement.classList.add("error");
//     return;
//   } 
//   if (addTextElement.value.trim() === "") {
//     addTextElement.classList.add("error");
//     return;
//   };
//   renderComments();
//   // postComment(); // добавили
//   addNameElement.value = '';
//   addTextElement.value = '';
// });
// }