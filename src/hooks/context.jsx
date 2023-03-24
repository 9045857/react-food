import React, { createContext, useState } from "react";

export const PanigationContext = createContext();

export const ContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [sortedItems, setSortedItems] = useState([]);
    const [pageNumber, setPageNumber] = useState([]);
    const [selectNumber, setSelectNumber] = useState(1);

    const setSelectPageNumber = (number) => {
        setSelectNumber(number);
    };

    const itemsCountOnPage = 30;

    const setList = (data, dataCount) => {
        setItems(data);

        let countPages;

        if (dataCount <= itemsCountOnPage) {
            countPages = 1;
        } else {
            countPages = (dataCount - 1) / itemsCountOnPage + 1;
        }

        setPageNumber(() => {
            let content = [];
            for (let i = 1; i <= countPages; i++) {
                content.push(i);
            }
            return content;
        });
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
        sortedItems,
        pageNumber,
        setShortList,
        setSelectPageNumber,
        selectNumber,
    };

    return (
        <PanigationContext.Provider value={value}>
            {children}
        </PanigationContext.Provider>
    );
};
