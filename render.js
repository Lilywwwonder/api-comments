import { commentsElementListeners, likesButtonListeners, comments, addSubmitListener, addComListener} from "./main.js"

export const preloader = document.querySelector('.preload'); // перенесли в api
export const addNameElement = document.getElementById("addName");
export const addTextElement = document.getElementById("addText");
export const buttonElement = document.getElementById("addComment");
const listElement = document.getElementById("list");


export const renderComments = () => {
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
// перенесли все формы из index.html
// const appEl = document.getElementById("app");

const appHtml = `
<div class="container">
<ul id="list" class="comments">
   <!--список рендерится из js-->
   ${commentsHtml}
</ul>
<!-- добавили строку для авторизации!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
<p>Чтобы добавить комментарий, <span class="autho">авторизуйтесь</span></p>
<form id="myForm">
<div class="add-form">
  <input
    type="text" id="addName" value=""
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
<!-- создаем форму входа!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
<form id="myForm">
<div class="add-form">
  <span class="loginForm"><b>Форма входа</b></span>
  <input
    type="text" id="addLogin" value=""
    class="add-form-login"
    placeholder="Введите логин"
  />
  <input
    type="text" id="addPassword"
    class="add-form-password"
    placeholder="Введите пароль"
  />
  <div class="add-form-longRow">
    <button id="addLog" value="" class="add-log-button" type="button">Войти</button>
  </div>
  <span class="register"><b>Зарегистироваться</b></span>
</div>
</form>


<!-- создаем форму регистрации!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!--> 
<form id="myForm">
<div class="add-form">
  <span class="registerForm"><b>Форма регистрации</b></span>
  <input
    type="text" id="addLogin" value=""
    class="add-form-nameRegister"
    placeholder="Введите имя"
  />
  <input
    type="text" id="addLogin" value=""
    class="add-form-login"
    placeholder="Введите логин"
  />
  <input
    type="text" id="addPassword"
    class="add-form-password"
    placeholder="Введите пароль"
  />
  <div class="add-form-longRow">
    <button id="addLog" value="" class="add-log-button" type="button">Зарегистрироваться</button>
  </div>
  <span class="register"><b>Войти</b></span>
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

