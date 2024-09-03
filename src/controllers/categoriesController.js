import { categoryMap } from "../adapters/items.adapters.js";
import { getCategoriesById } from "../services/items-services.js";

export const getCategoryByIdController = async (req, res) => {
    const categoryId = req.params.id

    console.log(categoryId)

    if (!categoryId)
        return res.status(404).json({
            statusCode: 404,
            message: 'Category not found!'
        });

    try {
        const {data} = await getCategoriesById(categoryId)
        console.log(data)
        const dataMapping = categoryMap(data)

        return res.status(200).json(dataMapping);

    } catch (error) {
        return res.status(500).json({
            message: 'Meli API error!',
            error: error.message
        });
    }
}