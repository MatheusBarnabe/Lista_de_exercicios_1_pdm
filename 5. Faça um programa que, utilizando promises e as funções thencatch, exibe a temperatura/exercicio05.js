var prompt = require('prompt-sync')();
require('dotenv').config()
const axios = require ('axios')

const { PROTOCOL, BASE_URL, API_KEY, CELSIUS, FAHRENHEIT} = process.env

do {
    console.log(`1 - Digite a Latitude e Longitude \n2 - Sair`)

    var opcao = prompt()

    if(opcao == 1) {
        let lat = prompt('Digite a Latitude: ')
        let lon = prompt('Digite a Longitude: ')
        console.log(`\n1 - Celsius \n2 - Fahrenheit \n3 - Kelvin`)
        let temperatura = prompt()
        do {
            if (temperatura == 1) {
                const url = `${PROTOCOL}://${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${CELSIUS}`
                axios.get(url)
                .then(res => {
                    return res.data
                })
                .then(res => {
                    console.log(`local: ${res.name}`)
                    return res.main
                })
                .then(res => {
                    console.log(`temperatura atual: ${res.temp}`)
                    return res['list']
                })
            }
            else if (temperatura == 2) {
                const url = `${PROTOCOL}://${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${FAHRENHEIT}`
                axios.get(url)
                .then(res => {
                    return res.data
                })
                .then(res => {
                    console.log(`local: ${res.name}`)
                    return res.main
                })
                .then(res => {
                    console.log(`temperatura atual: ${res.temp}`)
                    return res['list']
                })
            }
            else if (temperatura == 3) {
                const url = `${PROTOCOL}://${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`
                axios.get(url)
                .then(res => {
                    return res.data
                })
                .then(res => {
                    console.log(`local: ${res.name}`)
                    return res.main
                })
                .then(res => {
                    console.log(`temperatura atual: ${res.temp}`)
                    return res['list']
                })
            }
            else {
                console.log(`valor inválido`)
            }
        }
        while (temperatura != 1 && temperatura != 2 && temperatura != 3)
    }
    else if (opcao == 2) {
        console.log(`Tchua`)
    }
    else {
        console.log(`opção inválida`)
    }
}
while (opcao != 2)
