import { useState, useEffect } from "react";
import { getAllCategoriesList } from "../api";
import { List } from "../components/List";

import { Preloader } from "../components/Preloader";

export const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategoriesList().then((data) => setCategories(data.meals));
    }, []);

    return (
        <>
            {!categories.length ? (
                <Preloader />
            ) : (
                <List
                    items={categories}
                    type='categories'
                />
            )}
        </>
    );
};
