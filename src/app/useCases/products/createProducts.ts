import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function createProduct(req: Request, res: Response) {
    try{
        const {
            name, 
            description, 
            price,
            ingredients,
            category
        } = req.body;

        const imagePath = req.file?.filename;
        
        const product = await Product.create({
            name,
            description, 
            imagePath, 
            price: Number(price),
            ingredients: JSON.parse(ingredients), 
            category 
        });

        res.status(201).json(product);
        console.log(req.body)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}
