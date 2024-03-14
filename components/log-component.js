import { loginUser, registerUser, fetchAndRender } from "../api.js";
// import { loginUser, registerUser } from "../api.js"; ранее было - но ошибка в alert fetchAndRender is not a function


export function renderLogComponent ({ appEl, setToken }) {
  // export function renderLogComponent ({ appEl, setToken, fetchAndRender }) { ранее было но ошибка в alert fetchAndRender is not a function
  let isLoginMode = true;

    const renderForm = () => {
      const appHtml = `
      <div class="container">
      <form id="myForm">
      <div class="add-form">
      <span class="loginForm"><b>Форма ${isLoginMode ? 'входа' : 'регистрации'}</b></span>
  
      ${isLoginMode ? '' : `<input
      type="text" id="addRegName" value=""
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
      if(!isLoginMode) {
        const name = document.getElementById("addRegName").value;
        const login = document.getElementById("addLogin").value;
        const password = document.getElementById("addPassword").value;
        
        if(!name) {
          alert('Введите имя')
          return;
        }

        if(!login) {
          alert('Введите логин')
          return;
        }
  
        if(!password) {
          alert('Введите пароль')
          return;
        }
  
      registerUser({
        name: name,
        login: login,
        password: password,
      }).then((user) => {
        setToken(`Bearer ${ user.user.token }`);
        // setToken(`Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k`);
        fetchAndRender();
      }).catch((error) => {
        alert(error.message);
      });
      } else {
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
        localStorage.setItem('user', JSON.stringify(user.user));
        setToken(`Bearer ${ user.user.token }`);
        // setToken(`Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k`);
        fetchAndRender();
      }).catch((error) => {
        alert(error.message);
      });
      }
    });
    document.getElementById("toggle-button").addEventListener('click', () => {
      isLoginMode = !isLoginMode;
      renderForm();
    });
    };
    renderForm();
  }
