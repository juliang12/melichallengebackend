import { calculateSoldQuantity } from "../helpers/calculateSoldQuantity.js";

export const categoriesMap = (items, filters) => {
    let categories = [];

        items.forEach(item => {
            const allFilters = filters.filter((f) => f.name == 'Categorías');

            if (allFilters) {
                allFilters.forEach((cat) => {
                    cat.values.forEach((catVal) => {
                        if (!categories.includes(catVal.name)){
                            catVal.path_from_root.forEach((ctg) => {
                                categories.push(ctg.name);
                            })
                        }
                    })
                })
            }
        });

        return categories;
}


export const itemsAdapter = (items) => {
    const results = items?.map(
        ({
          id,
          title,
          price,
          currency_id,
          thumbnail,
          thumbnail_id,
          condition,
          shipping: { free_shipping },
          category_id
        }) => ({
          id,
          title,
          categoryId: category_id,
          price: {
            currency: currency_id,
            amount: Math.floor(price).toString(),
            decimals: ((price % 1) * 100).toFixed(0),
          },
          thumbnail,
          picture: `http://http2.mlstatic.com/D_${thumbnail_id}-L.jpg`,
          condition,
          free_shipping,
        })
      );
      return results
} 

export const itemMap = (item, descriptionResult) => {
    return {
        id: item.id,
        title: item.title,
        category: {
            id: item.category_id,
        },
        price: {
            currency: item.currency_id,
            amount: item.price,
        },
        picture: item.thumbnail.replace('-I.jpg', '-O.jpg'),
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: calculateSoldQuantity(item),
        description: descriptionResult.plain_text
    };
}

export const categoryMap = (categoryBody) => {
    let dataCategories = [];

    categoryBody.path_from_root.forEach((category) => {
        dataCategories.push(category.name);
    });

    return {
        id: categoryBody.id,
        name: categoryBody.name,
        nested_categories: dataCategories
    };
}

export const authorMap = () => {
    return { name: 'Julian', lastname: 'Garcia' }
 }

export const searchMap = (searchData, filters) => {
    let mappedSearch = {
        author: {},
        categories: {},
        items: {},
    };

    mappedSearch.author = authorMap();
    mappedSearch.categories = categoriesMap(searchData, filters);
    mappedSearch.items = itemsAdapter(searchData);

    return mappedSearch;
}