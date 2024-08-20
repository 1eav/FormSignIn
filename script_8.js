document.getElementById("applyStylesButton").addEventListener("click", function() {
    let textArea = document.getElementById("message");
    let isBold = document.getElementById("boldCheckbox").checked;
    let isItalic = document.getElementById("italicCheckbox").checked;
    let isUnderline = document.getElementById("underlineCheckbox").checked;
    let alignment = document.querySelector('input[name="alignment"]:checked').value;

    textArea.style.fontWeight = isBold ? 'bold' : 'normal';
    textArea.style.fontStyle = isItalic ? 'italic' : 'normal';
    textArea.style.textDecoration = isUnderline ? 'underline' : 'none';
    textArea.style.textAlign = alignment;

    document.getElementById("span1_SY8").innerHTML = `<div style="${textArea.style.cssText}">${textArea.value}</div>`;
});