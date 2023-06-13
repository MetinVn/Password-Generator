const input = document.getElementById("password");
const passwordLength = 13;
const upperCases = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCases = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "1234567890";
const specialChars = "@#$%^&*()_+~|{}[]<>/-="; 
const allCharacters = upperCases + lowerCases + numbers + specialChars;

function generatePass(){
    let password = "";
    password += upperCases[Math.floor(Math.random() * upperCases.length)];
    password += lowerCases[Math.floor(Math.random()*lowerCases.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += specialChars[Math.floor(Math.random()*specialChars.length)];

    while(passwordLength > password.length){
        password += allCharacters[Math.floor(Math.random()*allCharacters.length)];
    }
    input.value = password;
}

function copyPass(){
    input.select();
    document.execCommand("copy");
}
