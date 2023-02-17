const slider = document.getElementById("length-slider");
const lengthValue = document.getElementById("length-value");
const generateBtn = document.getElementById("generate-btn");
const password = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");

generateBtn.addEventListener("click", function () {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>/?";
    let generatedPassword = "";

    for (let i = 0; i < slider.value; i++) {
        generatedPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    password.value = generatedPassword;
});

slider.addEventListener("input", function () {
    lengthValue.textContent = slider.value;
});

copyBtn.addEventListener("click", function () {
    password.select();
    document.execCommand("copy");
});
