import { ListItem } from "./ListItem";

export const List = ({ items, type }) => {
    return (
        <>
            <h5 className='caption-page teal-text text-darken-3'>All {type}</h5>

            <table className={type !== "ingredients" ? "centered" : ""}>
                <tbody>
                    {items.map((item) => {
                        switch (type) {
                            case "categories":
                                return (
                                    <ListItem
                                        type={type}
                                        key={item.strCategory}
                                        name={item.strCategory}
                                        to={`/category/${item.strCategory}`}
                                    />
                                );

                            case "areas":
                                return (
                                    <ListItem
                                        type={type}
                                        key={item.strArea}
                                        name={item.strArea}
                                        to={`/area/${item.strArea}`}
                                    />
                                );

                            case "ingredients":
                                return (
                                    <ListItem
                                        type={type}
                                        key={item.idIngredient}
                                        name={item.strIngredient}
                                        to={`/ingredient/${item.strIngredient}`}
                                        image={`https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png`}
                                    />
                                );

                            default:
                                return null;
                        }
                    })}
                </tbody>
            </table>
        </>
    );
};
