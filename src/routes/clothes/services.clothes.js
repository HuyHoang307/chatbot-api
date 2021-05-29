import ClothesModels from "./models.clothes";


export const clothesService = {
    searchClothes: async (filter) => {
        const data = await ClothesModels.searchClothes(filter);
        return data;
    },
    searchPriceRange: async (filer) => {
        const data = await ClothesModels.searchPriceRange(filer);
        return data;
    },
    getProductByMaterial: async ({material, color, type, name}) => {
        const data = await ClothesModels.searchClothes({material, color, type, name});
        return data;
    },
    getProductByOrigin: async ({origin, color, type, name}) => {
        const data = await ClothesModels.searchClothes({origin, color, type, name});
        return data;
    }
}