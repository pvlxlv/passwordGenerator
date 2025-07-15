const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btnEl = document.getElementById("generate-btn")
let passOneEl = document.getElementById("pass-one")
let passTwoEl = document.getElementById("pass-two")

function generateRandomPassword () {
    let charoptions = characters.length
    let randNum = ""
    let pass = ""

    for (let i = 0; i < 15; i++) {
        randNum = Math.floor( Math.random() * charoptions)
        pass += characters[randNum]
    }

    return pass
}

btnEl.addEventListener("click", function() {
    console.log("clicked")
    passOneEl.textContent = generateRandomPassword()
    passTwoEl.textContent = generateRandomPassword()
})