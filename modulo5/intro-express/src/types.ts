export type User = {
    id: string,
    name: string,
    phone: string,
    email:string,
    website: string
}


export type Posts = {
    id: string,
    title: string,
    body: string,
    userId: string
}