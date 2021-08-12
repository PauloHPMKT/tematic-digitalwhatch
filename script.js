let main = document.querySelector('#main')
const clock = document.querySelector('#time')
let span = document.querySelector('#grettings')


function loadClock() {

    setInterval(() => {
        const data = new Date()
        const currentTime = [data.getHours(), data.getMinutes(), data.getSeconds()]
            .map((valor) => `0${valor}`.slice(-2)).join(':')


        clock.innerText = currentTime

        if (data.getHours() >= 0 && data.getHours() < 12) {
            span.innerHTML = 'Bom dia'
            main.style.backgroundImage = 'url(./img/daylight.jpg)'
        } else if (data.getHours() >= 12 && data.getHours() < 18) {
            span.innerHTML = 'Boa tarde'
            main.style.backgroundImage = 'url(./img/afternoon2.jpg)'
        } else {
            span.innerHTML = 'Boa noite'
            main.style.backgroundImage = 'url(./img/night-picture.jpg)'
        }

    }, 1000)


}