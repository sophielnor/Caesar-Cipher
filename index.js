const encode = document.getElementById("encode")
const decode = document.getElementById("decode")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const cipherValue = document.getElementById("ciphervalue");
const operation = document.getElementById("operation");
const textInput = document.getElementById("inputtext");
const textOutput = document.getElementById("outputtext");

encode.addEventListener("click", () => {
  if (encode.classList.contains("active")) {
    return;
  }
  decode.classList.remove("active");
  encode.classList.add("active");
});

decode.addEventListener("click", () => {
  if (decode.classList.contains("active")) {
    return;
  }
  encode.classList.remove("active");
  decode.classList.add("active");
});

plus.addEventListener("click", () => {
  if (plus.classList.contains("active")) {
    return;
  }
  minus.classList.remove("active");
  plus.classList.add("active");
  operation.innerText = "+";
});

minus.addEventListener("click", () => {
  if (minus.classList.contains("active")) {
    return;
  }
  plus.classList.remove("active");
  minus.classList.add("active");
  operation.innerText = "-";
});

function shiftText() {
    const inputText = textInput.value;
    const ciphernum = parseInt(cipherValue.value) || 0;
  
    const isForwardShift = (
      (operation.textContent === "+" && encode.classList.contains("active")) ||
      (operation.textContent === "-" && decode.classList.contains("active"))
    );
  
    let resultText = "";
  
    for (let char of inputText) {
      let code = char.charCodeAt(0);
  
      if (char >= "a" && char <= "z") {
        if (isForwardShift) {
          code = ((code - 97 + ciphernum) % 26) + 97;
        } else {
          code = ((code - 97 - ciphernum + 26) % 26) + 97;
        }
        resultText += String.fromCharCode(code);
  
      } else if (char >= "A" && char <= "Z") {
        if (isForwardShift) {
          code = ((code - 65 + ciphernum) % 26) + 65;
        } else {
          code = ((code - 65 - ciphernum + 26) % 26) + 65;
        }
        resultText += String.fromCharCode(code);
  
      } else {
        // Non-alphabetic characters stay the same
        resultText += char;
      }
    }
  
    textOutput.value = resultText;
  }
 
textInput.addEventListener("input", shiftText);
cipherValue.addEventListener("input", shiftText);
plus.addEventListener("click", shiftText);
minus.addEventListener("click", shiftText);
encode.addEventListener("click", shiftText);
decode.addEventListener("click", shiftText);