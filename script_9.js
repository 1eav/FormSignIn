const FormSY9 = document.getElementById("FormSY9");
FormSY9.addEventListener('submit', function(sub1_SY9) {
    sub1_SY9.preventDefault();

    const Book_SY9 = document.getElementById("Book_SY9").value;
    const Quantity_SY9 = document.getElementById("Quantity_SY9").value;
    const Name_SY9 = document.getElementById("Name_SY9").value;
    const Address_SY9 = document.getElementById("Address_SY9").value;
    const Date_SY9 = document.getElementById("Date_SY9").value;
    const Comment_SY9 = document.getElementById("Comment_SY9").value;

    document.getElementById("span1_SY9").innerHTML = Book_SY9;
    document.getElementById("span2_SY9").innerHTML = Quantity_SY9;
    document.getElementById("span3_SY9").innerHTML = Name_SY9;
    document.getElementById("span4_SY9").innerHTML = Address_SY9;
    document.getElementById("span5_SY9").innerHTML = Date_SY9;
    document.getElementById("span6_SY9").innerHTML = Comment_SY9;
});