import { db } from "../../config/configDB"

const ClothesModels = {
    searchClothes : async ({type, name, size, color, material, origin}) => {
        let query = db('clothes')
        if (type) query.where('type', 'ilike', `%${type.toUpperCase()}%`)
        if (name) query.where('name', 'ilike', `%${name.toUpperCase()}%`)
        if (size) query.where('size', 'ilike', `%${size.toUpperCase()}%`)
        if (color) query.where('color', 'ilike', `%${color.toUpperCase()}%`)
        if (material) query.where('material', 'ilike', `%${material.toUpperCase()}%`)
        if (origin) query.where('origin', 'ilike', `%${origin.toUpperCase()}%`)
        return await query.select('*');
    },
    searchPriceRange: async ({type, name, minPrice, maxPrice}) => {
        let query = db('clothes')
        if (type) query.where('type', 'ilike', `%${type.toUpperCase()}%`)
        if (name) query.where('name', 'ilike', `%${name.toUpperCase()}%`)
        if (minPrice) query.where('price', '>=', minPrice)
        if (maxPrice) query.where('price', '<=', maxPrice)
        return await query.select([
            'name',
            'type',
            'material',
            'price',
            'color',
            db.raw('array_agg(size) as sizes')
        ]).groupBy(['name', 'type', 'material', 'price', 'color']).limit(10);
    },
    searchOrder: async (name, size, color) => {
        return await db('clothes').where('name', 'ilike', name)
        .where('size', 'ilike', `%${size.toUpperCase()}%`)
        .where('color', 'ilike', `%${color.toUpperCase()}%`)
        .select(['id', 'total', 'price']).first();
    },
    updateItem: async (id, item) => {
        return await db('clothes').where('id', id).update(item);
    },
}

export default ClothesModels;