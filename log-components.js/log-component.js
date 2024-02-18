// // appEl.innerHTML = appHtml;









// // дз 2.12 и 2.14
// // function fetchAndRender() {
// // const fetchPromise = fetch("https://wedev-api.sky.pro/api/v1/atolykova-lily/comments", {
// // method: "GET",
// // });

// // fetchPromise
// // .then((response) => {
// //   if (response.status === 500) {
// //     throw new Error("Сервер сломался");
// //   }
// //   return response.json();
// // })
// // .then((responseData) => {
// //   comments = responseData.comments.map((comment) => {
// //     return { 
// //       name: comment.author.name //возвращаем спецсимволы обратно
// //       .replace(/&lt;/g, "<")
// //       .replace(/&gt;/g, ">")
// //       .replace(/&amp;/g, "&")
// //       .replace(/&quot;/g, '"')
// //       .replace(/&nbsp;/g, " "),
// //       time: new Date(comment.date).toLocaleTimeString('sm', {day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit'}), 
// //       comment: comment.text //возвращаем спецсимволы обратно
// //       .replace(/&lt;/g, "<")
// //       .replace(/&gt;/g, ">")
// //       .replace(/&amp;/g, "&")
// //       .replace(/&quot;/g, '"')
// //       .replace(/&nbsp;/g, " "),
// //       like: comment.likes, 
// //       isLike: false, 
// //     }; 
// //   });
// // }) 
// // .then(() => { 
// //   renderComments(); // render обернули в then
// //   preloader.classList.add('hide'); 
// // })
// // .catch((error) => {
// //   if (error.message === "Сервер сломался") {
// //     alert("Сервер сломался, попробуй позже");
// //     return;
// //   }
// // });
// // }




// // перенесли post в api.js
// //   const nameValue = addNameElement.value;
// //   const textValue = addTextElement.value;

// // // загрузка. textContent = innerHTML (аналог)
// // // отключаем кнопку
// // buttonElement.disabled = true;
// // buttonElement.textContent = 'Комментарий добавляется...';


// //     fetch("https://wedev-api.sky.pro/api/v2/atolykova-lily/comments", {
// //       method: "POST",
// //       body: JSON.stringify({
// //         name: nameValue 
// //         .replaceAll("<", "&lt")
// //         .replaceAll(">", "&gt")
// //         .replaceAll("&", "&amp;")
// //         .replaceAll('"', "&quot;")
// //         .replaceAll(" ", "&nbsp;"),
// //         text: textValue 
// //         .replaceAll("<", "&lt")
// //         .replaceAll(">", "&gt")
// //         .replaceAll("&", "&amp;")
// //         .replaceAll('"', "&quot;")
// //         .replaceAll(" ", "&nbsp;"),
// //         //forceError: true // вызов 500 ошибки
// //       }),
// //     })
// //     .then((response) => {
// //     if (response.status === 400 && (nameValue.length < 3 || textValue.length < 3)) { // обрабатываем ошибку 400
// //     throw new Error("Некорректный запрос");
// //      }
// //     if (response.status === 500) {
// //       throw new Error("Сервер сломался");
// //     } 
// //     else {
// //       return response.json();
// //     }
// //     })
// //     .then((responseData) => {
// //       fetchAndRender();
// //     })
// //     // включаем кнопку, добавили .then(data)
// //     .then((data) => {
// //       buttonElement.disabled = false;
// //       buttonElement.textContent = 'Написать';
// //     })
// //     .catch((error) => {
// //       if (error.message === "Сервер сломался") {
// //       alert("Сервер сломался, попробуй позже");
// //       addNameElement.value = nameValue;
// //       addTextElement.value = textValue;
// //       return;
// //     } if (error.message === "Некорректный запрос") {
// //       alert("Имя и комментарий должны быть не короче 3 символов");
// //        addNameElement.value = nameValue;
// //        addTextElement.value = textValue;
// //     }
// //      if (error instanceof TypeError) {
// //      alert("Кажется, у вас сломался интернет, попробуйте позже");
// //      return;
// //     }
// //     console.log(error);
// //     })
// //     .finally(() => {
// //     buttonElement.disabled = false;
// //     buttonElement.textContent = 'Написать';
// //   });



// //добавила индекс на строке comment-text
// // const renderComments = () => {
// // const commentsHtml = comments.map((comment, index) => {
// //   const likeClass = comment.isLike ? '-active-like' : '';
// //   return `<li class="comment">
// //       <div class="comment-header">
// //         <div>${comment.name}</div>
// //         <div>${comment.time}</div>
// //       </div>
// //       <div class="comment-body">
// //         <div class="comment-text" data-index="${index}"> 
// //           ${comment.comment}
// //         </div>
// //       </div>
// //       <div class="comment-footer">
// //         <div class="likes">
// //           <span class="likes-counter">
// //             <div>${comment.like}</div>
// //           </span>
// //           <button class="like-button ${likeClass}" data-index="${index}">
// //           <div></div>
// //           </button>
// //         </div>
// //       </div>
// //     </li>`
// // }).join('');

// // listElement.innerHTML = commentsHtml;
// // likesButtonListeners();
// // commentsElementListeners();
// // };


// <!-- создаем форму входа!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
// <form id="myForm">
// <div class="add-form">
//   <span class="loginForm"><b>Форма входа</b></span>
//   <input
//     type="text" id="addLogin" value=""
//     class="add-form-login"
//     placeholder="Введите логин"
//   />
//   <input
//     type="text" id="addPassword"
//     class="add-form-password"
//     placeholder="Введите пароль"
//   />
//   <div class="add-form-longRow">
//     <button id="addLog" value="" class="add-log-button" type="button">Войти</button>
//   </div>
//   <span class="register"><b>Зарегистироваться</b></span>
// </div>
// </form>


// <!-- создаем форму регистрации!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!--> 
// <form id="myForm">
// <div class="add-form">
//   <span class="registerForm"><b>Форма регистрации</b></span>
//   <input
//     type="text" id="addLogin" value=""
//     class="add-form-nameRegister"
//     placeholder="Введите имя"
//   />
//   <input
//     type="text" id="addLogin" value=""
//     class="add-form-login"
//     placeholder="Введите логин"
//   />
//   <input
//     type="text" id="addPassword"
//     class="add-form-password"
//     placeholder="Введите пароль"
//   />
//   <div class="add-form-longRow">
//     <button id="addLog" value="" class="add-log-button" type="button">Зарегистрироваться</button>
//   </div>
//   <span class="register"><b>Войти</b></span>
// </div>
// </form>




// пробник для main на клик
// export function addFormListener() {
//   const buttonElement = document.getElementById("addComment");
//   if (buttonElement) {
//   buttonElement.addEventListener('click', () => {
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
// renderComments();
// postComment(); // добавили
// addNameElement.value = '';
// addTextElement.value = '';
//   });
// }
// }