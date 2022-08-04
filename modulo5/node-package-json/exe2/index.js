const operation = process.argv[2]
const firstNumber = Number(process.argv[3])
const secondNumber = Number(process.argv[4])

switch (operation) {
    case "soma":
        console.log(`A soma dos dois número é: ${firstNumber + secondNumber}`)
        break;
    case "subt":
        console.log(`A subtração dos dois número é: ${firstNumber - secondNumber}`)
        break;
    case "mult":
        console.log(`A multiplicação dos dois número é: ${firstNumber * secondNumber}`)
        break;
    case "div":
        console.log(`A divisão dos dois número é: ${firstNumber / secondNumber}`)
        break;
    default:
        console.log("Digite *soma* para somar, *subt* para subtrair, *mult* para multiplicação ou *div* para divisão.")
}