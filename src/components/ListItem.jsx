import { Link } from "react-router-dom";

export const ListItem = ({ type, image, name, to = "" }) => {
    const handleOnError = (e) => {
        e.target.src = "https://via.placeholder.com/50x50?text=";
    };

    return (
        <>
            {type === "ingredients" ? (
                <tr className='ingredient'>
                    <td className='ingredient'>
                        <Link
                            to={to}
                            className='ingredient-item blue-grey-text text-darken-4'
                        >
                            <img
                                className='ingredient-image'
                                src={image}
                                alt={name}
                                onError={handleOnError}
                            />
                            <span className='ingredient-name'>{name}</span>
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
