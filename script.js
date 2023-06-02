const celsiusElem=document.querySelector("#celsius");
const degree=document.querySelector("#degree");
const convertBtn=document.querySelector("#convert-btn");
const tempType=document.querySelector("#temp-type");
window.addEventListener("load",() => {
    degree.value = "";
    celsiusElem.innerHTML = "";
});
convertBtn.addEventListener("click",(e) => {
    e.preventDefault();
    convertToCelsius();
});
function convertToCelsius() {
    let inputValue = degree.value;
    if(tempType.value === "fahrenheit"){
        
        celsiusElem.innerHTML=(inputValue - 32) * (5/9);

    }
    else if(tempType.value === "kelvin"){
        
        celsiusElem.innerHTML=(inputValue - 273.15) ;
    }
}