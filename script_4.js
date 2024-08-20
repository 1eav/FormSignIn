function colors() {
    const red = document.getElementById('red').value;
    const green = document.getElementById('green').value;
    const blue = document.getElementById('blue').value;
    const colors = 'rgb(' + red + ',' + green + ',' + blue + ')';
    
    document.body.style.backgroundColor = colors;
    document.getElementById('result').value = colors;
    document.getElementById("spanColor1").innerHTML = colors;
}

document.getElementById('red').addEventListener('input', colors);
document.getElementById('green').addEventListener('input', colors);
document.getElementById('blue').addEventListener('input', colors);