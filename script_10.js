const FormSY10_1 = document.getElementById("FormSY10_1");
FormSY10_1.addEventListener('submit', function(sub1_SY10) {
    sub1_SY10.preventDefault();

    const Group_SY10 = document.getElementById("Group_SY10").value;
    const Lesson_SY10 = document.getElementById("Lesson_SY10").value;

    document.getElementById("span2_SY10").innerHTML = Group_SY10;
    document.getElementById("span3_SY10").innerHTML = Lesson_SY10;
});

const FormSY10_2 = document.getElementById("FormSY10_2");
FormSY10_2.addEventListener('submit', function(sub2_SY10) {
    sub2_SY10.preventDefault();

    const Topic_SY10 = document.getElementById("Topic_SY10").value;
    const Name1_SY10 = document.getElementById("Name1_SY10").checked;
    const Name2_SY10 = document.getElementById("Name2_SY10").checked;
    const Name3_SY10 = document.getElementById("Name3_SY10").checked;

    document.getElementById("span1_SY10").innerHTML = Topic_SY10;

    if (Name1_SY10 == true) {
        document.getElementById("span4_SY10").innerHTML = 'Present';
    } else {
        document.getElementById("span4_SY10").innerHTML = 'No';
    }

    if (Name2_SY10 == true) {
        document.getElementById("span5_SY10").innerHTML = 'Present';
    } else {
        document.getElementById("span5_SY10").innerHTML = 'No';
    }

    if (Name3_SY10 == true) {
        document.getElementById("span6_SY10").innerHTML = 'Present';
    } else {
        document.getElementById("span6_SY10").innerHTML = 'No';
    }
});