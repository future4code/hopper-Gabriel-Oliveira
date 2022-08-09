const tasks = [
    "Lavar a louça",
    "Comprar leite",
    "Programar",
    "Ir ao Dentista"

]

const addTask = (task) => {
    tasks.push(task)
    console.log(`Suas tarefas diárias são: ${tasks.join(', ')}.`)
}

addTask(process.argv[2])