
import {  searchItem } from '../services/items-services.js';
import { searchMap } from '../adapters/items.adapters.js';

export const getSearchItem = async (req, res) => {
  const { q } = req.query;

  try {
    // Petición a la API de Mercado Libre
    const { data: itemsData } = await searchItem(q)
    
    // Verificación de la estructura de datos
    const { results, filters } = itemsData;
    if (!results || !Array.isArray(results)) {
      throw new Error('Unexpected results format');
    }
    
    const items = searchMap(results, filters)
    console.log(itemsData);
    console.log(items)

    res.status(200).json(items);
  } catch (error) {
    console.error('Error en la búsqueda de items:', error.response ? error.response.data : error.message);
    res.status(500).send('Error en la búsqueda de items');
  }
};

