import { Link } from "react-router-dom";

export const MealItem = (props) => {
    const {
        id = props.idMeal,
        image = props.strMealThumb,
        title = props.strMeal,
    } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img
                    src={image}
                    alt={title}
                />
            </div>
            <div className='card-content'>
                <span className='card-title black-text'>{title}</span>
            </div>
            <div className='card-action'>
                <Link to={`/meal/${id}`}>More</Link>
            </div>
        </div>
    );
};
