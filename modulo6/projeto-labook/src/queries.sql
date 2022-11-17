-- Active: 1665681304438@@35.226.146.116@3306@Hopper-4313967-gabriel-oliveira

      DROP TABLE IF EXISTS labook_users, labook_posts, labook_friends;

      CREATE TABLE IF NOT EXISTS labook_users(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS labook_posts(
         id VARCHAR(255) PRIMARY KEY,
         photo VARCHAR(255) NOT NULL,
         description VARCHAR(255) NOT NULL,
         type ENUM("normal","event") DEFAULT "normal",
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         author_id VARCHAR(255),
         FOREIGN KEY (author_id) REFERENCES labook_users (id)
      );

      CREATE TABLE IF NOT EXISTS labook_friends(
         id_user VARCHAR(255) PRIMARY KEY,
         id_friend VARCHAR(255) NOT NULL,
         FOREIGN KEY (id_user) REFERENCES labook_users(id),
         FOREIGN KEY (id_friend) REFERENCES labook_users(id)
      );