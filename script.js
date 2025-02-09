const units = document.querySelectorAll("a")
const input = document.querySelector("input")
const convertBtn = document.querySelector("#convert-btn")
const output = document.querySelector(".text-success")


convertBtn.addEventListener("click",()=>{
    const result = convert()
    if (result){
        output.textContent = result
    }else{
        output.textContent = "Kidding right!?"
    }
})

input.addEventListener("input",changeObserver)

units.forEach(unit=>{
    unit.addEventListener("click",e=>handleUnitSelection(e))
})

function handleUnitSelection(e){
    const unit = e.target.textContent
    const div = e.target.closest(".dropdown")
    div.querySelector("button").textContent = unit
    changeObserver()
}

function convert(){
    const from = cleanedString(document.querySelector("#btn-from").textContent)
    const to = cleanedString(document.querySelector("#btn-to").textContent)
    const input = parseFloat(cleanedString(document.querySelector("input").value))
    if (from==="Fahrenheit" && to === "Celsius"){
        return `${input} ${from} is ${((input-32)* (5/9)).toFixed(2)} ${to}`
    }else if (from==="Fahrenheit" && to === "Kelvin"){
        return `${input} ${from} is ${(((input-32)* (5/9))+273.15).toFixed(2)} ${to}`
    }else if (from==="Celsius" && to === "Fahrenheit"){
        return `${input} ${from} is ${((input*9/5) + 32).toFixed(2)} ${to}`
    }else if (from==="Celsius" && to === "Kelvin"){
        return `${input} ${from} is ${(input+273.15).toFixed(2)} ${to}`
    }else if (from==="Kelvin" && to === "Celsius"){
        return `${input} ${from} is ${(input-273.15).toFixed(2)} ${to}`
    }else if (from==="Kelvin" && to === "Fahrenheit"){
        return `${input} ${from} is ${(((input-273.15)* 9/5)+32).toFixed(2)} ${to}`
    }else{return false}
}


function changeObserver(){
    const from = cleanedString(document.querySelector("#btn-from").textContent)
    const to = cleanedString(document.querySelector("#btn-to").textContent)
    const input = parseFloat(cleanedString(document.querySelector("input").value))
    if (from!=="From Unit" && to!=="To Unit" && input!==NaN){
        convertBtn.classList.remove("disabled")
    }
}

function cleanedString(str){
    return str.replace(/\n/g,'').trim()
}