import { useContext } from "react";
import { Link } from "react-router-dom";
import { PanigationContext } from "../hooks/context";

export const PanigationItem = ({ number }) => {
    const { selectNumber, setSelectPageNumber } = useContext(PanigationContext);
    
    return (
        <>
            <li
                className={selectNumber === number ? "active" : ""}
                onClick={() => setSelectPageNumber(number)}
            >
                <Link to={`/ingredients/${number}`}>{number}</Link>
            </li>
        </>
    );
};
