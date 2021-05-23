import ClothesModels from "./models.clothes";


export const clothesService = {
    searchClothes: async (filter) => {
        const data = await ClothesModels.searchClothes(filter);
        return data;
    },
    searchPriceRange: async (filer) => {
        const data = await ClothesModels.searchPriceRange(filer);
        return data;
    }
}