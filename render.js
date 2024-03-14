import { fetchAndRender, registerUser } from "./api.js";
import { commentsElementListeners, likesButtonListeners, comments, addSubmitListener, addComListener } from "./main.js"
import { renderLogComponent } from "./components/log-component.js";

export const preloader = document.querySelector('.preload'); 
export const addNameElement = document.getElementById("addName");
export const addTextElement = document.getElementById("addText");
export const buttonElement = document.getElementById("addComment");
const listElement = document.getElementById("list");
export let token = "Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";
token = null;

export const renderReg = () => {
  const appEl = document.getElementById("app");
  const commentsHtml = comments.map((comment, index) => {
    const likeClass = comment.isLike ? '-active-like' : '';
    return `<li class="comment">
        <div class="comment-header">
          <div>${comment.name}</div>
          <div>${comment.time}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text" dat
          a-index="${index}"> 
            ${comment.comment}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">
              <div>${comment.like}</div>
            </span>
            <button class="like-button ${likeClass}" data-index="${index}">
            <div></div>
            </button>
          </div>
        </div>
      </li>`
  }).join('');
  const appHtml = `
   <div class="container">
   <ul id="list" class="comments">
     ${commentsHtml}     
   </ul>
   <p>Чтобы добавить комментарий, <span class="add-autho" id="toggle-button2">авторизуйтесь</span></p>
 </div>`
 appEl.innerHTML = appHtml;
 likesButtonListeners();


 document.getElementById("toggle-button2").addEventListener('click', () => {
  renderLogComponent({ appEl: document.getElementById("app"), setToken: (newToken) => {
    token = newToken;
    fetchAndRender();
  },
  });
});
};


export const renderComments = () => { 
  const appEl = document.getElementById("app"); 
  if (!token) { 
    renderReg();
    return; 
  }

// добавили для сохранения имени + строка 108 ${userName}" 
const storedUser = localStorage.getItem('user');
const userName = storedUser ? JSON.parse(storedUser).name : '';


const commentsHtml = comments.map((comment, index) => {
  const likeClass = comment.isLike ? '-active-like' : '';
  return `<li class="comment">
      <div class="comment-header">
      <div>${comment.name}</div>
        <div>${comment.time}</div>
      </div>
      <div class="comment-body">
        <div class="comment-text" data-index="${index}"> 
          ${comment.comment}
        </div>
      </div>
      <div class="comment-footer">
        <div class="likes">
          <span class="likes-counter">
            <div>${comment.like}</div>
          </span>
          <button class="like-button ${likeClass}" data-index="${index}">
          <div></div>
          </button>
        </div>
      </div>
    </li>`
}).join('');
// const appEl = document.getElementById("app");

const appHtml = `
<div class="container">
<ul id="list" class="comments">
   <!--список рендерится из js-->
   ${commentsHtml}
</ul>
<form id="myForm">
<div class="add-form">
  <input
    type="text" id="addName" value="${userName}" 
    class="add-form-name"
    placeholder="Введите ваше имя"
  />
  <textarea
    type="textarea" id="addText"
    class="add-form-text"
    placeholder="Введите ваш комментарий"
    rows="4"
  ></textarea>
  <div class="add-form-row">
    <button id="addComment" value="" class="add-form-button" type="button">Написать</button>
  </div>
</div>
</form>
</div>
`;
appEl.innerHTML = appHtml;
likesButtonListeners();
commentsElementListeners();
addSubmitListener();
addComListener();
};







