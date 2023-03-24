// в этом файле создадим методы обращения к API. Получать параметры и выдавать json с API
import { API_URL } from "./config";

//будем делать ассинхронные функции async - await
const getMealById = async (mealId) => {
    const response = await fetch(API_URL + "lookup.php?i=" + mealId).then();
    return await response.json();
};

const getListAllCategories = async () => {
    const response = await fetch(API_URL + "categories.php");
    return await response.json();
};

const getFilterByArea = async (area) => {
    const response = await fetch(API_URL + "filter.php?a=" + area);
    return await response.json();
};

const getFilterByCategory = async (categoryName) => {
    const response = await fetch(API_URL + "filter.php?c=" + categoryName);
    return await response.json();
};

const getFilterByMainIngredient = async (ingredientName) => {
    const response = await fetch(API_URL + "filter.php?i=" + ingredientName);
    return await response.json();
};

const getAllCategoriesList = async () => {
    const response = await fetch(API_URL + "list.php?c=list");
    return await response.json();
};

const getAllAreasList = async () => {
    const response = await fetch(API_URL + "list.php?a=list");
    return await response.json();
};

const getAllIngredientsList = async () => {
    const response = await fetch(API_URL + "list.php?i=list");
    return await response.json();
};

export {
    getAllIngredientsList,
    getAllAreasList,
    getAllCategoriesList,
    getMealById,
    getListAllCategories,
    getFilterByCategory,
    getFilterByArea,
    getFilterByMainIngredient,
};
