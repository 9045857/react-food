import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Preloader } from "../components/Preloader";
import { MealInfo } from "../components/MealInfo";
import { getMealById } from "../api";

function Meal() {
    const [meal, setMeal] = useState({});

    const { id } = useParams();

    useEffect(() => {
        getMealById(id).then((data) => setMeal(data.meals[0])); 
    }, [id]);

    return <>{JSON.stringify(meal)==='{}' ? <Preloader /> : <MealInfo meal={meal}/>}</>;
}

export { Meal };
