import { Request, Response } from "express";

import { Category } from "../../models/Category";

export async function createCategories(req: Request, res: Response) {
    const { name, icon } = req.body;
    
    const category = await Category.create({ name, icon });

    res.json(category);
}
