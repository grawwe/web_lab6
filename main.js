const optBlock1 = document.querySelector(".optBlock:nth-child(1)")
const optBlock2 = document.querySelector(".optBlock:nth-child(2)")
const optBlock3 = document.querySelector(".optBlock:nth-child(3)")
const optBlock4 = document.querySelector(".optBlock:nth-child(4)")
const res = document.querySelector(".res")
optBlock1.addEventListener("click", function () {
    res.innerText=+num1.value+ +num2.value
})
optBlock2.addEventListener("click", function () {
    res.innerText=+num1.value - +num2.value
})
optBlock3.addEventListener("click", function () {
    res.innerText=Math.round(+num1.value / +num2.value*10)/10
})
optBlock4.addEventListener("click", function () {
    res.innerText=+num1.value * +num2.value
})
res.addEventListener('click', function () {
    res.innerHTML=(Math.round(Math.sqrt(res.innerHTML)*10)/10).toString()
})