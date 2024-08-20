const FormSY5 = document.getElementById("FormSY5");
FormSY5.addEventListener('submit', function(sub1_SY5) {
    sub1_SY5.preventDefault();

        const quastionSY5 = document.getElementById("quastionSY5").value;
        const correctSY5 = document.getElementById("correctSY5").value;
        const wrongSY5 = document.getElementById("wrongSY5").value;

        if (document.getElementById("quastionSY5").value == '') {
            alert("Введите вопрос");
            return false;
        } else if (document.getElementById("correctSY5").value == '') {
            alert("Введите правильный ответ");
            return false;
        } else if (document.getElementById("wrongSY5").value == '') {
            alert("Введите неправильный ответ");
            return false;
        } else {
            document.getElementById("span1_SY5").innerHTML = quastionSY5;
            document.getElementById("span2_SY5").innerHTML = correctSY5;
            document.getElementById("span3_SY5").innerHTML = wrongSY5;
        }
});