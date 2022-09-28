import { DataSource } from "typeorm";
import { User } from "./entities/User"
import { Departament } from "./entities/Departament";

export const AppDataSource = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "0709",
        database: "crudorm",
        synchronize: true,
        logging: true,
        entities: [User, Departament],
});