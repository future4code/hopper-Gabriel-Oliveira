import { User } from "./types";
import { Posts } from "./types";


 export const users: User[] =[

    {
        id: "1",
        name: "Gabriel",
        phone: "723672637263",
        email:"gabriel@gmail.com",
        website: "www.gabriel.com"

    },
    {
        id: "2",
        name: "Bárbara",
        phone: "9893193724180",
        email:"barbara@gmail.com",
        website: "www.barbara.com"
    },
    {
        id: "3",
        name: "Maurício",
        phone: "93289037148712",
        email:"mauricio@gmail.com",
        website: "www.mauricio.com"
    },
    {
        id: "4",
        name: "Caio",
        phone: "83683619418463",
        email:"caio@gmail.com",
        website: "www.caio.com"
    },
    {
        id: "5",
        name: "Alice",
        phone: "02837218370812",
        email:"alice@gmail.com",
        website: "www.alice.com"
    },
    {
        id: "6",
        name: "Arthur",
        phone: "773548712542784",
        email:"arthur@gmail.com",
        website: "www.arthur.com"
    },
    {
        id: "7",
        name: "Larissa",
        phone: "07340827508247",
        email:"larissa@gmail.com",
        website: "www.larissa.com"
    }

]


export const posts: Posts[] =[
    {
        id: '1',
        title: 'Miranha',
        body: 'Olha o Miranha ai gente.',
        userId: '6'
    },
    {
        id: '2',
        title: 'Capitão da Espanha',
        body: 'O novo capitão da espanha é Sérgio Ramos.',
        userId: '12'
    },
    {
        id: '3',
        title: 'Paris Saint-Germain',
        body: 'Neymar x Mbappé: reunião com diretoria do PSG apara arestas entre craques',
        userId: '18'
    }
]