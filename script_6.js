const FormSY6 = document.getElementById("FormSY6");
FormSY6.addEventListener('submit', function(sub1_SY6) {
        sub1_SY6.preventDefault();

        let getDate = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const nameSY6 = document.getElementById("nameSY6").value;
        const messSY6 = document.getElementById("messSY6").value;

        if (document.getElementById("nameSY6").value == '') {
            document.getElementById("span1_SY6").innerHTML = 'Введите имя';
            return false;
        } else if (document.getElementById("messSY6").value == '') {
            document.getElementById("span2_SY6").innerHTML = 'Введите сообщение';
            return false;
        } else {
            document.getElementById("span1_SY6").innerHTML = nameSY6;
            document.getElementById("span2_SY6").innerHTML = messSY6;
            document.getElementById("span3_SY6").innerHTML = getDate.toLocaleDateString("ru-RU", options);
        }
});