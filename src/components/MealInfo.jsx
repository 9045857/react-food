import { Link, useHistory } from "react-router-dom";
import { GoBack } from "./GoBack";

function MealInfo({ meal }) {
    const {
        name = meal.strMeal,
        category = meal.strCategory,
        area = meal.strArea,
        instruction = meal.strInstructions,
        image = meal.strMealThumb,
    } = meal;

    const { goBack } = useHistory();

    return (
        <div className='recipe '>
            <GoBack
                goBack={goBack}
                name={name}
            />

            <img
                src={image}
                alt={name}
                className='img-meal'
            />
            <div className='shot-info-meal product-description'>
                <p>
                    Category:{" "}
                    <Link to={`/category/${category}`}>{category}</Link>
                </p>

                {area ? (
                    <p>
                        Area: <Link to={`/area/${area}`}>{area}</Link>
                    </p>
                ) : null}

                <h1>{name}</h1>
            </div>

            <p className='instruction'>{instruction}</p>

            <table className='centered'>
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                </thead>

                <tbody>
                    {Object.keys(meal).map((key) => {
                        if (key.includes("Ingredient") && meal[key]) {
                            return (
                                <tr key={key}>
                                    <td>{meal[key]}</td>
                                    <td>
                                        {meal[`strMeasure${key.slice(13)}`]}
                                    </td>
                                </tr>
                            );
                        }
                        return null;
                    })}
                </tbody>
            </table>

            {meal.strYoutube ? (
                <div className='row'>
                    <h5 style={{ margin: "2rem 0 1.5rem" }}>Video Recipe</h5>
                    <iframe
                        title={name}
                        src={`https://www.youtube.com/embed/${meal.strYoutube.slice(
                            -11
                        )}`}
                        allowFullScreen
                    />
                </div>
            ) : null}
        </div>
    );
}

export { MealInfo };
