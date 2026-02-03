function add1(el) {
    obj = document.getElementById(el)
    obj.textContent = Number(obj.textContent) + 1
}

function add2(el) {
    obj = document.getElementById(el)
    obj.textContent = Number(obj.textContent) + 2
}

function add3(el) {
    obj = document.getElementById(el)
    obj.textContent = Number(obj.textContent) + 3
}

function restart() {
    obj = document.getElementById('home-score')
    obj.textContent = 0
    obj = document.getElementById('guest-score')
    obj.textContent = 0
}