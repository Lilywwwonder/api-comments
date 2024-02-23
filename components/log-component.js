import { loginUser } from "../api.js";

export function renderLogComponent ({ appEl, setToken, fetchAndRender }) {
    let isLoginMode = false;

    const renderForm = () => {
      const appHtml = `
      <div class="container">
      <form id="myForm">
      <div class="add-form">
      <span class="loginForm"><b>Форма ${isLoginMode ? 'входа' : 'регистрации'}</b></span>
  
      ${isLoginMode ? '' : `<input
      type="text" id="addName" value=""
      class="add-form-nameRegister"
      placeholder="Введите имя"
      />`}
  
      <input
        type="text" id="addLogin" value=""
        class="add-form-login"
        placeholder="Введите логин"
      />
      <input
        type="password" id="addPassword"
        class="add-form-password"
        placeholder="Введите пароль"
      />
      <div class="add-form-longRow">
        <button id="addLog" value="" class="add-log-button" type="button">${isLoginMode ? 'Войти' : 'Зарегистрироваться'}</button>
      </div>
      <span class="register" id="toggle-button"><b>${isLoginMode ? 'Зарегистрироваться' : 'Войти'}</b></span>
      </div>
      </form>
      </div>
      `;
  
      appEl.innerHTML = appHtml;
  
      document.getElementById("addLog").addEventListener('click', () => {
        // setToken("Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k");
      const login = document.getElementById("addLogin").value;
      const password = document.getElementById("addPassword").value;
  
        if(!login) {
          alert('Введите логин')
          return;
        }
  
        if(!password) {
          alert('Введите пароль')
          return;
        }
  
      loginUser({
        login: login,
        password: password,
      }).then((user) => {
        // console.log(user) //после проверки удалить
        // setToken(`Bearer ${ user.user.token }`); //не работает ошибка user.user is undefined. прописала полностью token
        setToken(`Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k`);
        fetchAndRender();
      }).catch((error) => {
        alert(error.message);
      });
    });
  
    document.getElementById("toggle-button").addEventListener('click', () => {
      isLoginMode = !isLoginMode;
      renderForm();
    });
    };
    renderForm();
  }

// проработать вход с неправильным паролем и кодом