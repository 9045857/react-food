import { useState, useEffect } from "react";
import { getAllAreasList } from "../api";
import { List } from "../components/List";
import { Preloader } from "../components/Preloader";

export const AreaList = () => {
    const [areas, setAreas] = useState([]);

    useEffect(() => {
        getAllAreasList().then((data) => setAreas(data.meals));
    }, []);

    return (
        <>
            {!areas.length ? (
                <Preloader />
            ) : (
                <List
                    items={areas}
                    type='areas'
                />
            )}
        </>
    );
};
