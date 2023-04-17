import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getAllIngredientsList } from "../api";
import { List } from "../components/List";

import { Preloader } from "../components/Preloader";
import { Panigation } from "../components/Panigation";
import { Search } from "../components/Search";

import { useContext } from "react";
import { PanigationContext } from "../hooks/context";

export const IngredientList = () => {
    const {
        items = [],
        itemsPage = [],
        selectNumber = 1,
        ingridientsSearched,
        setSearchedIngridients,
        setList,
        setShortList,
        setSelectPageNumber,
    } = useContext(PanigationContext);

    const { number } = useParams();

    useEffect(
        () => {
            getAllIngredientsList().then((data) => setList(data.meals));

            setSelectPageNumber(Number(number));
        },
        //eslint-disable-next-line
        []
    );

    useEffect(
        () => {
            setShortList(selectNumber);
        },
        //eslint-disable-next-line
        [selectNumber, items]
    );

    const handleSearch = (str) => {
        setSearchedIngridients(str);
    };

    return (
        <>
            {!ingridientsSearched ? (
                <Preloader />
            ) : (
                <>
                    <Search cb={handleSearch} />

                    <List
                        items={itemsPage}
                        type='ingredients'
                    />

                    <Panigation />
                </>
            )}
        </>
    );
};
