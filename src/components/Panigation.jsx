import { PanigationItem } from "./PanigationItem";

import { useContext } from "react";
import { PanigationContext } from "../hooks/context";

export const Panigation = () => {
    const { pageNumber } = useContext(PanigationContext);

    return (
        <>
            <ul className='pagination'>
                <li className='disabled'>
                    <a href='#!'>
                        <i className='material-icons'>chevron_left</i>
                    </a>
                </li>
                {pageNumber.map((number) => (
                    <PanigationItem
                        key={number}
                        number={number}
                    />
                ))}
                <li className='waves-effect'>
                    <a href='#!'>
                        <i className='material-icons'>chevron_right</i>
                    </a>
                </li>
            </ul>
        </>
    );
};
