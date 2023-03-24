import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Preloader } from "../components/Preloader";
import { MealsList } from "../components/MealsList";
import {
    getFilterByCategory,
    getFilterByArea,
    getFilterByMainIngredient,
} from "../api";
import { GoBack } from "../components/GoBack";

export function Meals() {
    const [meals, setMeals] = useState([]);

    const { category, area, ingredient } = useParams();

    useEffect(() => {
        const response = category
            ? getFilterByCategory(category)
            : area
            ? getFilterByArea(area)
            : getFilterByMainIngredient(ingredient);

        response.then((data) => setMeals(data.meals));
    }, [category, area, ingredient]);

    const { goBack } = useHistory();

    return (
        <>
            {!meals.length ? (
                <Preloader />
            ) : (
                <>
                    <GoBack
                        goBack={goBack}
                        name={category ? category : area ? area : ingredient}
                    />
                    <MealsList meals={meals} />
                </>
            )}
        </>
    );
}
