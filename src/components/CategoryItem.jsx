import {Link} from 'react-router-dom'

export const CategoryItem = (props) => {
    const {
        image = props.strCategoryThumb,
        title = props.strCategory,
        description = props.strCategoryDescription,
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
                <p>{description.slice(0,60)}...</p>
            </div>
            <div className='card-action'>
                <Link to={`/category/${title}`}>Watch {title}</Link>
            </div>
        </div>
    );
};
