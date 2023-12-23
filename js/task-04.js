const formLogin = document.querySelector('.login-form');

const formUserData = (event) => {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value;
    const password = form.elements.password.value;

    if (!login || !password) {
        alert('All form fields must be filled in');
        return;
    }

    const userData = {};
    userData[form.elements.email.name] = login.trim();
    userData[form.elements.password.name] = password.trim();

    console.log(userData);

    formLogin.reset();
}

formLogin.addEventListener('submit', formUserData);