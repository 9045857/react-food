import { PanigationItem } from "./PanigationItem";

import { useContext } from "react";
import { PanigationContext } from "../hooks/context";

import { Link } from "react-router-dom";

export const Panigation = () => {
    const { selectNumber, pageNumber, pagesCount, setSelectPageNumber } =
        useContext(PanigationContext);

    return (
        <>
            <ul className='pagination'>
                <li
                    className={
                        pagesCount === 1 || selectNumber === 1
                            ? "disabled"
                            : "waves-effect"
                    }
                    onClick={() => {
                        if (pagesCount !== 1 && selectNumber !== 1)
                            setSelectPageNumber(selectNumber - 1);
                    }}
                >
                    <Link
                        to={`/ingredients/${
                            selectNumber === 1 ? 1 : selectNumber - 1
                        }`}
                    >
                        <i className='material-icons'>chevron_left</i>
                    </Link>
                </li>
                {pageNumber.map((number) => (
                    <PanigationItem
                        key={number}
                        number={number}
                    />
                ))}
                <li
                    className={
                        pagesCount === 1 || selectNumber === pagesCount
                            ? "disabled"
                            : "waves-effect"
                    }
                >
                    <Link
                        to={`/ingredients/${
                            selectNumber === pagesCount
                                ? pagesCount
                                : selectNumber + 1
                        }`}
                        onClick={() => {
                            if (pagesCount !== 1 && selectNumber !== pagesCount)
                                setSelectPageNumber(selectNumber + 1);
                        }}
                    >
                        <i className='material-icons'>chevron_right</i>
                    </Link>
                </li>
            </ul>
        </>
    );
};
