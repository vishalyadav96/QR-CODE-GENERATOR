const text = document.getElementById("text");
const darkColor = document.getElementById("darkColor");
const lightColor = document.getElementById("lightColor");
const size = document.getElementById("size");

const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const themeBtn = document.getElementById("themeBtn");

const qrDiv = document.getElementById("qrcode");

let qr = null;

// Generate QR
generateBtn.addEventListener("click", () => {

    if (text.value.trim() === "") {
        alert("Please enter text or URL.");
        return;
    }

    qrDiv.innerHTML = "";

    qr = new QRCode(qrDiv, {
        text: text.value,
        width: Number(size.value),
        height: Number(size.value),
        colorDark: darkColor.value,
        colorLight: lightColor.value,
        correctLevel: QRCode.CorrectLevel.H
    });

});

// Download QR
downloadBtn.addEventListener("click", () => {

    const img = qrDiv.querySelector("img");
    const canvas = qrDiv.querySelector("canvas");

    let url = "";

    if (img) {
        url = img.src;
    } else if (canvas) {
        url = canvas.toDataURL("image/png");
    } else {
        alert("Generate QR first.");
        return;
    }

    const a = document.createElement("a");
    a.href = url;
    a.download = "QRCode.png";
    a.click();

});

// Dark Mode
themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = "☀️ Light Mode";
    } else {
        themeBtn.innerHTML = "🌙 Dark Mode";
    }

});

// Press Enter to Generate
text.addEventListener("keypress", function(e){

    if(e.key==="Enter"){
        generateBtn.click();
    }

});