import { useState, useEffect } from "react";
import { getListAllCategories } from "../api";
import { Preloader } from "../components/Preloader";
import { CategoriesList } from "../components/CategoriesList";
import { Search } from "../components/Search";
import { useLocation, useHistory } from "react-router-dom";

export const Home = () => {
    const [catalog, setCatalog] = useState([]);
    const [fieldCatalog, setFilteredCatalog] = useState([]);

    const { pathname, search } = useLocation();
    const { push } = useHistory();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );

        str
            ? push({
                  pathname,
                  search: `?search=${str}`,
              })
            : push({
                  pathname,
              });
    };

    useEffect(() => {
        getListAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(
                search
                    ? data.categories.filter((item) =>
                          item.strCategory
                              .toLowerCase()
                              .includes(search.split("=")[1].toLowerCase())
                      )
                    : data.categories
            );
        });
    }, [search]);

    return (
        <>
            {!catalog.length ? (
                <Preloader />
            ) : (
                <>
                    <Search cb={handleSearch} />

                    {fieldCatalog.length ? (
                        <>
                            <h6 className='go-back'>Categories</h6>
                            <CategoriesList categories={fieldCatalog} />
                        </>
                    ) : (
                        <h1 className='product-description'>
                            Nothing searched
                        </h1>
                    )}
                </>
            )}
        </>
    );
};
