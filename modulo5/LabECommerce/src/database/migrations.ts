import connection from "./connection";

const criarTabelaLabeUsers = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS labecommerce_users (
            id VARCHAR(100)PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
            );
        `)

        console.log("Tabela labecommerce_users criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela labecommerce_users.")
        console.log(error.sqlMessage)
    }
}

async function popularTabelaLabeUsers() {
    try {
        await connection.raw(`
            INSERT INTO labecommerce_users (id, name, email, password)
            VALUES 
            ("1", "Gabriel", "gabriel@gmail.com", "14253hduwidh7"),
            ("2", "Bárbara", "barbara@gmail.com", "12qert567"),
            ("3", "Maurício", "mauri@gmail.com", "86864ahsgasgkj"),
            ("4", "Yuri", "yuri@gmail.com", "7t713uduw"),
            ("5", "Igor", "igor@gmail.com", "pihiph71553");
        `)
        
        console.log("Tabela labecommerce_users populada com sucesso.")
    } catch (error) {
        console.log("Erro ao popular labecommerce_users Produtos.")
        console.log(error.sqlMessage)
    }
}



const criarTabelaLabeProducts = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS labecommerce_products (
            id VARCHAR(100) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price DOUBLE NOT NULL,
            image_url VARCHAR(2000) NOT NULL
            );
        `)

        console.log("Tabela labecommerce_products criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela labecommerce_products.")
        console.log(error.sqlMessage)
    }
}

async function popularTabelaLabeProducts() {
    try {
        await connection.raw(`
            INSERT INTO labecommerce_products (id, name, price, image_url)
            VALUES 
            ("1", "Processador AMD Ryzen 5 5600X", "1239.99", "https://images.kabum.com.br/produtos/fotos/129451/processador-amd-ryzen-9-5950x-cache-72mb-3-4ghz-4-9ghz-max-turbo-am4-100-100000065box_1602603581_gg.jpg"),
            ("2", "Processador AMD Ryzen 7 5700X", "1599.99", "https://images.kabum.com.br/produtos/fotos/129451/processador-amd-ryzen-9-5950x-cache-72mb-3-4ghz-4-9ghz-max-turbo-am4-100-100000065box_1602603581_gg.jpg"),
            ("3", "Processador AMD Ryzen 5 4500", "979.99", "https://images.kabum.com.br/produtos/fotos/333154/processador-amd-ryzen-5-4500-cache-11mb-3-6ghz-4-1ghz-max-turbo-am4-sem-video-100-100000644box_1652381901_gg.jpg"),
            ("4", "Processador AMD Ryzen 9 5900X", "2649.99", "https://images.kabum.com.br/produtos/fotos/129460/processador-amd-ryzen-9-5900x-cache-70mb-3-8ghz-4-7ghz-max-turbo-am4-100-100000061wof_1604585280_gg.jpg"),
            ("5", "Processador AMD Ryzen 7 5700G", "1629.99", "https://images.kabum.com.br/produtos/fotos/129460/processador-amd-ryzen-9-5900x-cache-70mb-3-8ghz-4-7ghz-max-turbo-am4-100-100000061wof_1604585280_gg.jpg");
        `)
        
        console.log("Tabela labecommerce_products populada com sucesso.")
    } catch (error) {
        console.log("Erro ao popular labecommerce_products.")
        console.log(error.sqlMessage)
    }
}


const criarTabelaLabePurchases = async () => {
    try {
        await connection.raw(`
        CREATE TABLE IF NOT EXISTS labecommerce_purchases (
            id VARCHAR(255) PRIMARY KEY NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
            product_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (product_id) REFERENCES labecommerce_products(id),
            quantity INT NOT NULL,
            total_price DECIMAL (8 , 2) NOT NULL
            );
        `)

        console.log("Tabela labecommerce_purchases criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela labecommerce_purchases.")
        console.log(error.sqlMessage)
    }
}

async function popularTabelaLabePurchases() {
    try {
        await connection.raw(`
            INSERT INTO labecommerce_purchases (id, user_id, product_id, quantity, total_price)
            VALUES 
            ("255444678", "1", "4", 2, 5299.98),
            ("255444677", "2", "1", 1, 1239.99),
            ("255444676", "3", "5", 3, 4889.97),
            ("255444675", "4", "2", 4, 6399.96),
            ("255444674", "5", "3", 2, 1959.98);
        `)
        
        console.log("Tabela labecommerce_purchases populada com sucesso.")
    } catch (error) {
        console.log("Erro ao popular labecommerce_purchases Produtos.")
        console.log(error.sqlMessage)
    }
}









criarTabelaLabePurchases()
.then(() => popularTabelaLabePurchases())
.finally(() => process.exit())
