const FormSY1 = document.getElementById("FormSY1");
FormSY1.addEventListener('submit', function(sub1) {
    sub1.preventDefault();

    const nameSY1 = document.getElementById("nameSY1").value;
    const passwordSY1 = document.getElementById("passwordSY1").value;
    const rememberMeSY1 = document.getElementById("rememberMeSY1").checked;

    if (document.getElementById("nameSY1").value == ''){
        alert ('Введите логин');
        return false;
    }
    if (document.getElementById("passwordSY1").value == ''){
        alert ('Введите пароль');
        return false;
    }
    if (rememberMeSY1 == true) {
        alert(`Здравствуйте, "`+ nameSY1 + `"! Ваш пароль был сохранен`);
    } else {
        alert(`Здравствуйте, "`+ nameSY1 + `"! Пароль не сохранен`);
    }
});