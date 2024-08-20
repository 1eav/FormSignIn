const FormSY7 = document.getElementById("FormSY7");
FormSY7.addEventListener('submit', function(sub1_SY7) {
    sub1_SY7.preventDefault();

    const questSY7_1 = document.getElementById("questSY7_1").value;
    const questSY7_2 = document.getElementById("questSY7_2").value;
    var point = 0;

    if (document.getElementById("questSY7_1").value == 'que1') {
        point++;
        alert("На 1-ый вопрос: Верно!");
    } else if (document.getElementById("questSY7_1").value == 'que2') {
        alert("На 1-ый вопрос: Неверно!");
    }

    if (document.getElementById("questSY7_2").value == 'que1') {
        alert("На 2-ой вопрос: Неверно!");
    } else if (document.getElementById("questSY7_2").value == 'que2') {
        point++;
        alert("На 2-ой вопрос: Верно!");
    }
    alert("Result: " + point + " correct answer to 2 questions");
});