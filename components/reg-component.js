
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

