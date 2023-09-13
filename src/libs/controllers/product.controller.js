import Product from "../models/Product.model.js";

const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.send(products);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    const myId = parseInt(id);
    try {
        const product = await Product.findByPk(myId);
        res.send(product);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

const createProduct = async (req, res) => {
    const { name, price, description } = req.body;
    try {
        const product = await Product.create({
            name,
            price,
            description,
        });
        res.status(201).send(product);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const product = await Product.update(data, {
            where: {
                id,
            },
        });
        res.send(product);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export { getProducts, getProductById, createProduct, updateProduct };
