let calculo1 
let calculo2

console.log('digite dois valores para calcular o MMC e o MDC');

process.stdin.on("data", function(data) {
    let input = +data.toString().trim()


    if(!calculo1) {

        calculo1 = input
    } else {
        calculo2 = input

        let i
        let maior
        let menor

        if(calculo1 > calculo2) {
            maior = calculo1
            menor = calculo2
        } else {
            maior = calculo2
            menor = calculo1
        }

        i = maior
        for (i; i <= calculo1 * calculo2; i += maior) {
            if(i % calculo1 == 0 && i % calculo2 == 0) {
                console.log("MMC: " + i)
                break
            }
        }

        i = menor

        for(i; i > 0; i--) {
            if(calculo1 % i == 0 && calculo2 % i ==0) {
                console.log("MDC: " + i)
                break;
            }
        }
        
        process.exit()


    }
})