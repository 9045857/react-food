import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

export const PanigationContext = createContext();

export const ContextProvider = ({ children }) => {
    const [originalData, setOriginalData] = useState([]);

    const [items, setItems] = useState([]);
    const [itemsPage, setItemsPage] = useState([]);
    const [pageNumber, setPageNumber] = useState([]);
    const [selectNumber, setSelectNumber] = useState(1);
    const [pagesCount, setPagesCount] = useState(1);
    const [ingridientsSearched, setIngridientsSearched] = useState(false);

    const history = useHistory();

    function deepClone(item) {
        if (!item) {
            // если item пустой или null, вернуть его
            return item;
        }

        // если item - массив, склонировать его элементы с помощью map()
        if (Array.isArray(item)) {
            return item.map(deepClone);
        }

        // если item - объект, склонировать его свойства с помощью Object.assign() и вызвать deepClone() для каждого вложенного свойства
        if (typeof item === "object") {
            const cloned = Object.assign({}, item);
            Object.keys(cloned).forEach((key) => {
                cloned[key] = deepClone(cloned[key]);
            });
            return cloned;
        }

        // если item не является массивом или объектом, вернуть его
        return item;
    }

    const setOriginalDataList = (data) => {
        let shortList = data.map(deepClone);
        setItems(shortList);
        setPagesParams(shortList.length);

        setOriginalData(() => data);
    };

    const setSearchedIngridients = (str) => {
        let shortList = originalData.map(deepClone);

        if (str !== "") {
            shortList = shortList.filter((item) =>
                item.strIngredient.toLowerCase().includes(str.toLowerCase())
            );

            if (!shortList.length) {
                shortList = [];
            }
        }

        setItems(shortList);

        setPagesParams(shortList.length);

        setSelectPageNumber(1);

        history.push("/ingredients/1");
    };

    const setSelectPageNumber = (number) => {
        setSelectNumber(() => number);
        console.log(selectNumber);
    };

    const itemsCountOnPage = 30;

    const setPagesParams = (arrayLenght) => {
        if (!arrayLenght) {
            setPagesCount(1);
            setPageNumber(() => {
                return [1];
            });

            setIngridientsSearched(true);
            return;
        }

        let countPages;

        if (arrayLenght <= itemsCountOnPage) {
            countPages = 1;
        } else {
            countPages = Math.floor((arrayLenght - 1) / itemsCountOnPage + 1);
        }

        setPagesCount(Number(countPages));

        setPageNumber(() => {
            let content = [];
            for (let i = 1; i <= countPages; i++) {
                content.push(i);
            }
            return content;
        });

        setIngridientsSearched(true);
    };

    const setList = (data) => {
        setIngridientsSearched(false);
        console.log("dat: " + data.length);

        setOriginalDataList(data);

        console.log("originalData: " + originalData.length);

        setIngridientsSearched(true);
    };

    const setShortList = (number) => {
        const beginIndex = (number - 1) * itemsCountOnPage;

        const endIndex =
            beginIndex + 1 + itemsCountOnPage <= items.length
                ? beginIndex + itemsCountOnPage
                : items.length - 1;

        const shortList = items.filter(
            (el, index) => index >= beginIndex && index <= endIndex
        );

        setItemsPage(shortList);
    };

    const value = {
        items,
        setList,
        itemsPage,
        pageNumber,
        pagesCount,
        ingridientsSearched,
        setShortList,
        setSelectPageNumber,
        selectNumber,
        setSearchedIngridients,
    };

    return (
        <PanigationContext.Provider value={value}>
            {children}
        </PanigationContext.Provider>
    );
};
