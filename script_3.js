const FormSY3 = document.getElementById("FormSY3");
FormSY3.addEventListener('submit', function(sub3) {
    sub3.preventDefault();

    const firstnameSY3 = document.getElementById("firstnameSY3").value;
    const lastnameSY3 = document.getElementById("lastnameSY3").value;
    const birthdaySY3 = document.getElementById("birthdaySY3").value;
    const genderSY3 = document.getElementById("genderSY3").value;
    const countrySY3 = document.getElementById("countrySY3").value;
    const skillsSY3 = document.getElementById("skillsSY3").value;

    if (document.getElementById("firstnameSY3").value == ''){
        alert ('Введите имя');
        return false;
    } else {
        document.getElementById("span1").innerHTML = firstnameSY3;
    }
    if (document.getElementById("lastnameSY3").value == ''){
        alert ('Введите фамилию');
        return false;
    } else {
        document.getElementById("span2").innerHTML = lastnameSY3;
    }
    if (document.getElementById("birthdaySY3").value == ''){
        alert ('Выберите дату рождения');
        return false;
    } else {
        document.getElementById("span3").innerHTML = birthdaySY3;
    }
    document.getElementById("span4").innerHTML = genderSY3;
    document.getElementById("span5").innerHTML = countrySY3;
    document.getElementById("span6").innerHTML = skillsSY3;
});