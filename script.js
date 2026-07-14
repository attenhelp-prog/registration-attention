document.addEventListener('DOMContentLoaded', function() {

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('passwordConfirm');
    const policyCheck = document.getElementById('policyCheck');
    const registerBtn = document.getElementById('registerBtn');

    function checkForm() {
        const isUsername = username.value.trim().length >= 2;
        const isEmail = email.value.trim().includes('@') && email.value.trim().includes('.');
        const isPassword = password.value.length >= 6;
        const isPasswordMatch = password.value === passwordConfirm.value && password.value.length > 0;
        const isPolicyChecked = policyCheck.checked;

        registerBtn.disabled = !(isUsername && isEmail && isPassword && isPasswordMatch && isPolicyChecked);
    }

    username.addEventListener('input', checkForm);
    email.addEventListener('input', checkForm);
    password.addEventListener('input', checkForm);
    passwordConfirm.addEventListener('input', checkForm);
    policyCheck.addEventListener('change', checkForm);

    registerBtn.addEventListener('click', function() {
        if (this.disabled) return;

        const userData = {
            username: username.value.trim(),
            email: email.value.trim(),
            password: password.value
        };

        this.textContent = '⏳ Регистрация...';
        this.disabled = true;

        setTimeout(() => {
            console.log('📝 Данные пользователя:', userData);
            alert('✅ Регистрация выполнена! (пока локально)');
            // window.location.href = 'index.html';
        }, 1500);
    });

});