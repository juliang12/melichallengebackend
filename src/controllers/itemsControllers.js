import axios from 'axios';
import { getItem, getItemDescription } from '../services/items-services.js';
import { itemMap } from '../adapters/items.adapters.js';

// Controlador para obtener detalles del item
export const getItemDetails = async (req, res) => {
  const itemId = req.params.id;
  console.log(req.params.id)

  if (!itemId)
    return response.status(404).json({
        statusCode: 404,
        message: 'Item not found!'
    });

  try {
    const {data} = await getItem(itemId)
    const {data: description} = await getItemDescription(itemId);
    const result = itemMap(data, description)

    res.status(200).json(result);
  } catch (error) {
    res.status(500).send('Error en la obtención de detalles del item');
  }
};
