type usuario = {
    name: string;
    email: string;
    role: string;
};

const persons: usuario[] =
    [
        { name: "Rogério", email: "roger@email.com", role: "user" },
        { name: "Ademir", email: "ademir@email.com", role: "admin" },
        { name: "Aline", email: "aline@email.com", role: "user" },
        { name: "Jéssica", email: "jessica@email.com", role: "user" },
        { name: "Adilson", email: "adilson@email.com", role: "user" },
        { name: "Carina", email: "carina@email.com", role: "admin" }
    ] 


    const filtrarEmailAdmin = (emailAdmin: usuario[]): string[] =>{
        const email: string[] = emailAdmin.filter((x) => x.role === "admin"
        ).map((y)=> y.email)
        return email
    }

    console.log(filtrarEmailAdmin(persons))