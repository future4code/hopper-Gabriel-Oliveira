const myString = (name: string, date: string) => {
    const dataSeparada = date.split("/")
    return `Olá me chamo ${name}, nasci no dia ${dataSeparada[0]} do mês de ${dataSeparada[1]} do ano de ${dataSeparada[2]}.`
} 


console.log(myString("Gabriel", "27/09/1999"))