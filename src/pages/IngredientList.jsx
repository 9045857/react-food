import {useParams}from 'react-router-dom'
import { useEffect } from "react";
import { getAllIngredientsList } from "../api";
import { List } from "../components/List";

import { Preloader } from "../components/Preloader";
import { Panigation } from "../components/Panigation";

import { useContext } from "react";
import { PanigationContext } from "../hooks/context";

export const IngredientList = () => {
    const {
        items = [],
        setList,
        sortedItems,
        selectNumber,
        setShortList,
        setSelectPageNumber,
    } = useContext(PanigationContext);
    
    const { number } = useParams();


    useEffect(
        () => {
            getAllIngredientsList().then((data) =>
                setList(data.meals, data.meals.length)
            );

            setSelectPageNumber(Number(number));
        },
        //eslint-disable-next-line
        []
    );

    useEffect(
        () => setShortList(selectNumber),
        //eslint-disable-next-line
        [selectNumber, items]
    );

    return (
        <>
            {!items.length ? (
                <Preloader />
            ) : (
                <>
                    <List
                        items={sortedItems}
                        type='ingredients'
                    />

                    <Panigation />
                </>
            )}
        </>
    );
};
