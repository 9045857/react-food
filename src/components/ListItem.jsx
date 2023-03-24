import { Link } from "react-router-dom";

export const ListItem = ({ type, image, name, to = "" }) => {
    return (
        <>
            {type === "ingredients" ? (
                <tr className="ingredient">
                    {/* <td className='ingredient-image'>
                        <img
                            src={image}
                            alt={name}
                        />
                    </td> */}
                    <td className="ingredient">
                        <Link
                            to={to}
                            className='ingredient-item blue-grey-text text-darken-4'
                        >
                            <img
                                className='ingredient-image'
                                src={image}
                                alt={name}
                            />
                            <span className="ingredient-name">{name}</span>
                        </Link>
                    </td>
                </tr>
            ) : (
                <tr>
                    <td>
                        <Link
                            to={to}
                            className='blue-grey-text text-darken-4'
                        >
                            {name}
                        </Link>
                    </td>
                </tr>
            )}
        </>
    );
};
