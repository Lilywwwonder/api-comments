
// форма регистрации дозаполнить
export function renderRegComponent({}) {
    const appHtml = `
    <div class="container">
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
}

// для кнопки авторизации
// document.getElementById("toggle-button2").addEventListener("click", () => {
//   renderLogComponent({ appEl, setToken: (newToken) => {
//     token = newToken;
//   }, 
//   fetchAndRender,
//   });
//   return
// });




// // ------------------------ПРОБНИК-------------------------
// if (!token) {
//   const appHtml = `
//   <div class="container">
//   <ul id="list" class="comments">
//      <!--список рендерится из js-->
//      ${commentsHtml}
//   </ul>
//    <p>Чтобы добавить комментарий,<span class="add-autho" id="toggle-button2">авторизуйтесь</span></p>
//   </div>
//   `;
  
//     appEl.innerHTML = appHtml;
//     document.getElementById(".toggle-button2").addEventListener("click", () => {
//       renderLogComponent({
//         appEl,
//         setToken: (newToken) => {
//           token = newToken;
//         },
//         fetchAndRender,
//       });
//     });
//     return;
//   }
//   // -----------------------------------------------------------------------------


// // <div class="container">
//   <ul id="list" class="comments">
//   ${commentsHtml}
// </ul>
// <p>Чтобы добавить комментарий,<span class="add-autho" id="toggle-button2">авторизуйтесь</span></p>
// </div>





// export const addRegElement = document.getElementById("toggle-button2");

// const appHtml = `
// <div class="container">
// <ul id="list" class="comments">
//    <!--список рендерится из js-->
//    ${commentsHtml}
// </ul>
//  <p>Чтобы добавить комментарий,<span class="add-autho" id="toggle-button2">авторизуйтесь</span></p>
// </div>
// `;



// export const renderReg = () => {
//   const appEl = document.getElementById("app");
// if (!token) {
//   const appHtml = `
//   <div class="container">
//   <ul id="list" class="comments">
//      <!--список рендерится из js-->
//      ${commentsHtml}
//   </ul>
//    <p>Чтобы добавить комментарий,<span class="add-autho" id="toggle-button2">авторизуйтесь</span></p>
//   </div>
//   `;
  
//     appEl.innerHTML = appHtml;
//     document.getElementById(".toggle-button2").addEventListener("click", () => {
//       renderLogComponent({
//         appEl,
//         setToken: (newToken) => {
//           token = newToken;
//         },
//         fetchAndRender,
//       });
//     });
//     return;
// }
// }


// document.getElementById("toggle-button2").addEventListener(click, () => {
//   if (!token) {
//     const appHtml = `
//     <div class="container">
//     <ul id="list" class="comments">
//        <!--список рендерится из js-->
//        ${commentsHtml}
//     </ul>
//      <p>Чтобы добавить комментарий,<span class="add-autho" id="toggle-button2">авторизуйтесь</span></p>
//     </div>
//     `;
    
//       appEl.innerHTML = appHtml;
//       document.getElementById(".toggle-button2").addEventListener("click", () => {
//         renderLogComponent({
//           appEl,
//           setToken: (newToken) => {
//             token = newToken;
//           },
//           fetchAndRender,
//         });
//       });
//       return;
//     }
// })
// ------------------------------------------------------------------




// -----------------------------------------------------------былоооооооооо
// export function renderReg () {
//   const appEl = document.getElementById("app");
// if (!token) {
//   const appHtml = `
//   <div class="container">
//   <ul id="list" class="comments">
//      <!--список рендерится из js-->
//      ${commentsHtml}
//   </ul>
//    <p>Чтобы добавить комментарий,<span class="add-autho" id="toggle-button2">авторизуйтесь</span></p>
//   </div>
//   `;
  
//     appEl.innerHTML = appHtml;
//     document.getElementById(".toggle-button2").addEventListener("click", () => {
//       renderLogComponent({
//         appEl,
//         setToken: (newToken) => {
//           token = newToken;
//         },
//         fetchAndRender,
//       });
//     });
//     return;
// }
// }

// --------------------------------------------------------------------------------------
// export const renderReg = () => {
//   const appEl = document.getElementById("app");
//   if (!token) {
//     const commentsHtml = comments.map((comment, index) => {
//       const likeClass = comment.isLike ? '-active-like' : '';
//       return `<li class="comment"> 
//                 <div class="comment-header"> 
//                   <div>${comment.name}</div> 
//                   <div>${comment.time}</div> 
//                 </div> 
//                 <div class="comment-body"> 
//                   <div class="comment-text" data-index="${index}"> ${comment.comment} </div> 
//                 </div> 
//                 <div class="comment-footer"> 
//                   <div class="likes"> 
//                     <span class="likes-counter"> 
//                       <div>${comment.like}</div> 
//                     </span> 
//                     <button class="like-button ${likeClass}" data-index="${index}"> 
//                       <div></div> 
//                     </button> 
//                   </div> 
//                 </div> 
//               </li>`;
//     }).join('');

//     const appHtml = `
//       <div class="container"> 
//         <ul id="list" class="comments"> 
//           ${commentsHtml} 
//         </ul> 
//         <p>Чтобы добавить комментарий,<span class="add-autho" id="toggle-button2">авторизуйтесь</span>
//         </p> 
//       </div>`;

//     appEl.innerHTML = appHtml;
//     document.getElementById("toggle-button2").addEventListener("click", () => {
//       renderLogComponent({
//         appEl,
//         setToken: (newToken) => {
//           token = newToken;
//         },
//         fetchAndRender,
//       });
//     });
//     return;
//   }
// }





// ----------------------------------------------------------NEWWWWWWWWWWW

// export const renderCommentsHtml = () => {
//   return comments.map((comment, index) => {
//       const likeClass = comment.isLike ? '-active-like' : '';
//       return `<li class="comment">
//           <div class="comment-header">
//               <div>${comment.name}</div>
//               <div>${comment.time}</div>
//           </div>
//           <div class="comment-body">
//               <div class="comment-text" data-index="${index}">${comment.comment}</div>
//           </div>
//           <div class="comment-footer">
//               <div class="likes">
//                   <span class="likes-counter">
//                       <div>${comment.like}</div>
//                   </span>
//                   <button class="like-button ${likeClass}" data-index="${index}">
//                       <div></div>
//                   </button>
//               </div>
//           </div>
//       </li>`;
//   }).join('');
// };

// export const renderReg = () => {
//   const appEl = document.getElementById("app");
//   if (!token) {
//       const appHtml = `
//           <div class="container">
//               <ul id="list" class="comments">
//                   ${renderCommentsHtml()}
//               </ul>
//               <p>Чтобы добавить комментарий,<span class="add-autho" id="toggle-button2">авторизуйтесь</span></p>
//           </div>
//       `;
//       appEl.innerHTML = appHtml;
//       document.getElementById("toggle-button2").addEventListener("click", () => {
//           renderLogComponent({
//               appEl,
//               setToken: (newToken) => {
//                   token = newToken;
//               },
//               fetchAndRender,
//           });
//       });
//       return;
//   }
// }

// -----------------------------------------------------






// export const renderCommentsList = () => {
//   const appEl = document.getElementById("app");
//   if(!token) {
//     renderLogComponent({ appEl, setToken: (newToken) => {
//       token = newToken;
//     }, 
//     fetchAndRender,
//     });
//     return;
//     }

//   const commentsHtml = comments.map((comment, index) => {
//     const likeClass = comment.isLike ? '-active-like' : '';
//     return `
//       <li class="comment">
//         <div class="comment-header">
//           <div>${comment.name}</div>
//           <div>${comment.time}</div>
//         </div>
//         <div class="comment-body">
//           <div class="comment-text" data-index="${index}">
//             ${comment.comment}
//           </div>
//         </div>
//         <div class="comment-footer">
//           <div class="likes">
//             <span class="likes-counter">
//               <div>${comment.like}</div>
//             </span>
//             <button class="like-button ${likeClass}" data-index="${index}">
//               <div></div>
//             </button>
//           </div>
//         </div>
//       </li>
//     `;
//   }).join('');

//   const appHtml = `
//     <div class="container">
//       <ul id="list" class="comments">
//         ${commentsHtml}
//       </ul>
//       <p>Чтобы добавить комментарий, <span class="add-autho" id="toggle-button2">авторизуйтесь</span></p>
//     </div>
//   `;
//   appEl.innerHTML = appHtml;
// };



// ------------------------------------------------------------------------------

// export const renderReg = () => {
//   const appEl = document.getElementById("app");
//   if (!token) {
//    const commentsHtml = comments.map((comment, index) => {
//     const likeClass = comment.isLike ? '-active-like' : '';
//     return `
//       <li class="comment">
//         <div class="comment-header">
//           <div>${comment.name}</div>
//           <div>${comment.time}</div>
//         </div>
//         <div class="comment-body">
//           <div class="comment-text" data-index="${index}">
//             ${comment.comment}
//           </div>
//         </div>
//         <div class="comment-footer">
//           <div class="likes">
//             <span class="likes-counter">
//               <div>${comment.like}</div>
//             </span>
//             <button class="like-button ${likeClass}" data-index="${index}">
//               <div></div>
//             </button>
//           </div>
//         </div>
//       </li>
//     `;
//   }).join('');

//   const appHtml = `
//   <div class="container">
//   <ul id="list" class="comments">
//      <!--список рендерится из js-->
//      ${commentsHtml}
//   </ul>
//    <p>Чтобы добавить комментарий,<span class="add-autho" id="toggle-button2">авторизуйтесь</span></p>
//   </div>
//   `;
    
//       appEl.innerHTML = appHtml;
//       // document.getElementById(".toggle-button2").addEventListener("click", () => {
//         renderLogComponent({
//           appEl,
//           setToken: (newToken) => {
//             token = newToken;
//           },
//           fetchAndRender,
//         });
//       });
//       return;
//     }
//  }

// export const renderReg = () => {
//   if (!token) {
//   const appHtml = `
//    <div class="container">
//    <ul id="list" class="comments">
//       <!--список рендерится из js-->
//       ${commentsHtml}
//    </ul>
//     <p>Чтобы добавить комментарий,<span class="add-autho" id="toggle-button2">авторизуйтесь</span></p>
//    </div>
//    `;
//    appEl.innerHTML = appHtml;
// }
// }

// ------------------------------------- 

// export function renderReg  ({}) {
//   const appHtml = `
//    <div class="container">
//    <ul id="list" class="comments">
//       <!--список рендерится из js-->
//       ${commentsHtml}
//    </ul>
//     <p>Чтобы добавить комментарий,<span class="add-autho" id="toggle-button2">авторизуйтесь</span></p>
//    </div>
//    `;
//    appEl.innerHTML = appHtml;
// };
