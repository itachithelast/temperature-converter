const units = document.querySelectorAll("a")
const input = document.querySelector("input")
const convertBtn = document.querySelector("#convert-btn")


convertBtn.addEventListener("click",null)

input.addEventListener("beforeinput",changeObserver)

units.forEach(unit=>{
    unit.addEventListener("click",e=>handleUnitSelection(e))
})

function handleUnitSelection(e){
    const unit = e.target.textContent
    const div = e.target.closest(".dropdown")
    div.querySelector("button").textContent = unit
    changeObserver()
}

function changeObserver(){
    const from = cleanedString(document.querySelector("#btn-from").textContent)
    const to = cleanedString(document.querySelector("#btn-to").textContent)
    const input = parseFloat(cleanedString(document.querySelector("input").value))
    if (from!=="From Unit" && to!=="To Unit" && input){
        convertBtn.classList.remove("disabled")
    }
}

function cleanedString(str){
    return str.replace(/\n/g,'').trim()
}