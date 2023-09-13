import { Sequelize } from "sequelize";
import supertest from "supertest";
import config from "../libs/configs/config.js";
import app from "../app.js";
const request = supertest(app);

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        port: config.dbPort,
        dialect: config.dialect,
        define: {
            underscored: true,
        },
        logging: false,
    }
);
beforeAll(async () => {
    await sequelize.authenticate();
});

afterAll(async () => {
    await sequelize.close();
});

describe("GET /products", () => {
    it("should return all products", async () => {
        const res = await request.get("/products");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

describe("GET /products/:id", () => {
    it("should return a product", async () => {
        const res = await request.get("/products/1");
        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe("iPhone 15");
    });
});

describe("POST /products", () => {
    it("should create a product", async () => {
        const res = await request.post("/products").send({
            name: "Product 3",
            price: 1009,
            description: "Description 3",
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe("Product 3");
    });
});

describe("PUT /products/:id", () => {
    it("should update a product", async () => {
        const res = await request.put("/products/2").send({
            name: "Product 4",
            price: 104,
            description: "Description 4",
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.price).toBe(104);
    });
});
