import React, { createContext, useState } from "react";

export const PanigationContext = createContext();

export const ContextProvider = ({ children }) => {
    const [originalData, setOriginalData] = useState([]);

    const [items, setItems] = useState([]);
    const [sortedItems, setSortedItems] = useState([]);
    const [pageNumber, setPageNumber] = useState([]);
    const [selectNumber, setSelectNumber] = useState(1);
    const [pagesCount, setPagesCount] = useState(1);
    //const [searchedItems, setSearchedItems] = useState([]);
    //   const [searchStr, setSearchStr] = useState("");

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

    const setSearchedIngridients = (data, str) => {
        // const data = originalData;

        console.log("data in ing:" + data.length);

        let shortList = data.map(deepClone);

        if (str !== "") {
            shortList = shortList.filter((item) =>
                item.strIngredient.toLowerCase().includes(str.toLowerCase())
            );

            // console.log("click" + str);
        }

        setItems(shortList);

        setPagesParams(shortList.length);
    };

    const setSelectPageNumber = (number) => {
        setSelectNumber(number);
    };

    const itemsCountOnPage = 30;

    const setPagesParams = (arrayLenght) => {
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
    };

    const setOD = (data) => {
        setOriginalData(() => data);
    };

    const setList = (data, dataCount) => {
        //TODO check on null
        //setItems(data);
        console.log("dat: " + data.length);

        setOriginalData(() => data);

        console.log("originalData: " + originalData.length);

        setSearchedIngridients(data, "");

        // console.log("here: " + originalData.length);

        setPagesParams(dataCount);
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

        setSortedItems(shortList);
    };

    const value = {
        items,
        setList,
        sortedItems, //TODO rename on pageItems.
        pageNumber,
        pagesCount,
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
