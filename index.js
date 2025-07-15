const allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const trimmedCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let btnEl = document.getElementById("generate-btn")
let passOneEl = document.getElementById("pass-one")
let passTwoEl = document.getElementById("pass-two")
let passCharsEl = document.getElementById("pass-chars")

function generateRandomPassword () {
    let charOptions = 0
    let randNum = ""
    let pass = ""
    
    //"exclude symbols" checked
    if (passCharsEl.checked) {
        charOptions = trimmedCharacters.length
                for (let i = 0; i < 15; i++) {
                        randNum = Math.floor( Math.random() * charOptions)
                        pass += trimmedCharacters[randNum]
                    }
    }
    //"exclude symbols" uncecked
    else {
        charOptions = allCharacters.length
        for (let i = 0; i < 15; i++) {
                randNum = Math.floor( Math.random() * charOptions)
                pass += allCharacters[randNum]
            }
    }
        

    

    return pass
}

btnEl.addEventListener("click", function() {
    console.log("clicked")
    passOneEl.textContent = generateRandomPassword()
    passTwoEl.textContent = generateRandomPassword()
})