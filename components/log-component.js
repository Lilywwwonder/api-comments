
import { token } from "./render.js";
import { fetchAndRender } from "./api.js";

export function renderLogComponent ({ appEl }) {
    const appHtml = `
    <div class="container">
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
    </div>
    `;

    appEl.innerHTML = appHtml;

    document.getElementById('addLog').addEventListener('click', () => {
    token = "Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";
    
    fetchAndRender();
    })
}