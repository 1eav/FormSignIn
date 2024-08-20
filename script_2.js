const FormSY2 = document.getElementById("FormSY2");
FormSY2.addEventListener('submit', function(sub2) {
    sub2.preventDefault();

    const emailSY2 = document.getElementById("emailSY2").value;
    const nameSY2 = document.getElementById("nameSY2").value;
    const passwordSY2 = document.getElementById("passwordSY2").value;
    const repeatPasswordSY2 = document.getElementById("repeatPasswordSY2").value;
    if (document.getElementById("emailSY2").value == ''){
        alert ('Введите адрес электронной почты');
        return false;
    }
    if (document.getElementById("nameSY2").value == ''){
        alert ('Введите логин');
        return false;
    }
    if (document.getElementById("passwordSY2").value == ''){
        alert ('Введите пароль');
        return false;
    }
    if (passwordSY2 == repeatPasswordSY2) {
        alert(`На вашу электронную почту "` + emailSY2 + `" отправлено письмо с подтверждением`);
    } else {
        alert(`Пароли не совпадают`);
    }
});