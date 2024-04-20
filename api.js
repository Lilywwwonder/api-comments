import { renderComments, renderReg, preloader, addNameElement, addTextElement, buttonElement, token } from "./render.js";
import { setComments } from "./main.js";
const host = "https://wedev-api.sky.pro/api/v2/atolykova-lily/comments";

// let password = prompt('Введите пароль');
// export let token = "Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";
// token = null;

export function fetchAndRender() {
const fetchPromise = fetch(host, {
method: "GET",
headers: {
  Authorization: token,
},
});
fetchPromise
.then((response) => {
  if (response.status === 500) {
    throw new Error("Сервер сломался");
  }
  // добавили обработку 401 ошибки--------------------------------
  if (response.status === 401) {
    // password = prompt('Введите верный пароль');
    fetchAndRender();
    throw new Error("Нет авторизации");
  }
  return response.json();
})
.then((responseData) => {
  const comments = responseData.comments.map((comment) => {
    return { 
      name: comment.author.name 
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&nbsp;/g, " "),
      time: new Date(comment.date).toLocaleTimeString('sm', {day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit'}), 
      comment: comment.text 
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&nbsp;/g, " "),
      like: comment.likes, 
      isLike: false, 
    }; 
  });
  setComments(comments); // вызвали функцию
}) 
.then(() => { 
  renderReg(); // render обернули в then
  preloader.classList.add('hide'); 
})
.then(() => { 
  renderComments(); // render обернули в then
  preloader.classList.add('hide'); 
})
.catch((error) => {
  if (error.message === "Сервер сломался") {
    alert("Сервер сломался, попробуй позже");
    return;
  }
});
}

//отключение интернета
function handleOffline() {
  alert("Отсутствует интернет-соединение. Пожалуйста, проверьте подключение и попробуйте снова");
};
//подключение интернета
function handleOnline() {
  alert("Интернет-соединение восстановлено");
}
// обработчики событий 
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);


export function postComment({nameValue, textValue}) {
  const addNameElement = document.getElementById("addName");
  const addTextElement = document.getElementById("addText");
const buttonElement = document.getElementById("addComment");
// const nameValue = addNameElement.value;
// const textValue = addTextElement.value;

// загрузка. textContent = innerHTML (аналог)
// отключаем кнопку
buttonElement.disabled = true;
buttonElement.textContent = 'Комментарий добавляется...';

  fetch(host, {
      method: "POST",
      body: JSON.stringify({
        name: nameValue 
        .replaceAll("<", "&lt")
        .replaceAll(">", "&gt")
        .replaceAll("&", "&amp;")
        .replaceAll('"', "&quot;")
        .replaceAll(" ", "&nbsp;"),
        text: textValue 
        .replaceAll("<", "&lt")
        .replaceAll(">", "&gt")
        .replaceAll("&", "&amp;")
        .replaceAll('"', "&quot;")
        .replaceAll(" ", "&nbsp;"),
        //forceError: true // вызов 500 ошибки
      }),
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
    if (response.status === 400 && (nameValue.length < 3 || textValue.length < 3)) { // обрабатываем ошибку 400
    throw new Error("Некорректный запрос");
     }
    if (response.status === 500) {
      throw new Error("Сервер сломался");
    } 
    // 401 ошибка ----------------------------------
    if (response.status === 401) {
      // password = prompt('Введите верный пароль');
      fetchAndRender();
      throw new Error("Нет авторизации");
    } else {
      return response.json();
    }
    })
    .then((responseData) => {
      fetchAndRender();
      addNameElement.value = '';
      addTextElement.value = '';
    })
    // включаем кнопку, добавили .then(data)
    .then((data) => {
      buttonElement.disabled = false;
      buttonElement.textContent = 'Написать';
    })
    .catch((error) => {
      if (error.message === "Сервер сломался") {
      alert("Сервер сломался, попробуй позже");
      addNameElement.value = nameValue;
      addTextElement.value = textValue;
      return;
    } if (error.message === "Некорректный запрос") {
      alert("Имя и комментарий должны быть не короче 3 символов");
       addNameElement.value = nameValue;
       addTextElement.value = textValue;
    }
     if (error instanceof TypeError) {
     alert("Кажется, у вас сломался интернет, попробуйте позже");
     return;
    }
    console.log(error);
    })
    .finally(() => {
    buttonElement.disabled = false;
    buttonElement.textContent = 'Написать';
  });
}
    

// для входа (логина)
export function loginUser({ login, password }) {
  if (login.trim().length === 0 || password.trim().length === 0) {
    alert("Введенные символы не должны состоять только из пробелов");
    return;
  }
  // const buttonElement = document.getElementById('addLog');
  // buttonElement.disabled = true;
  return fetch("https://wedev-api.sky.pro/api/user/login", {
        method: "POST",
        body: JSON.stringify({
          login,
          password
        }),
      })
      .then((response) => {
        if (response.status === 400) {
          throw new Error("Неверный логин или пароль");
        } 
        return response.json();
    });
  }

  // для регистрации
export function registerUser({ name, login, password }) {
  if (name.trim().length === 0 || login.trim().length === 0 || password.trim().length === 0) {
    alert("Введенные символы не должны состоять только из пробелов");
    return;
  }
   return fetch("https://wedev-api.sky.pro/api/user", {
        method: "POST",
        body: JSON.stringify({
          name,
          login,
          password
        }),
      })

  //второй способ
  .then((response) => {
    if (response.status === 400 || (name.length < 3 || login.length < 3 || password.length < 3)) {
      throw new Error("Некорректный запрос");
    } 
    return response.json();
})    
.catch((error) => {
  if (error.message === "Некорректный запрос") {
      alert("Проверьте корректность введенных данных: \n1. Пользователь с таким именем уже существует.\n2. Имя, логин или пароль должны быть не короче 3 символов");
      return;
  } 
  console.log(error);
});
}


// preloader.textContent = "Загрузка комментариев не удалась, обновите страницу или проверьте интернет-соединение";
 