import { useState } from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
    const [isMenuShow, setIsMenushow] = useState(false);

    const handleMenuShow = () => {
        setIsMenushow(!isMenuShow);
    };

    return (
        <>
            <i
                className='icon-menu blue-grey-text text-lighten-5 small material-icons'
                onClick={handleMenuShow}
            >
                menu
            </i>
            <div
                className='block-menu'
                onClick={handleMenuShow}
                hidden={!isMenuShow}
            />

            <div className={`list-menu ${isMenuShow ? "" : "hide-menu"}`}>
                <div
                    className='close-menu'
                    onClick={handleMenuShow}
                >
                    <i className=' blue-grey-text text-darken-2 material-icons'>
                        close
                    </i>
                </div>

                <ul className={`collection ${isMenuShow ? "" : "hide-menu"}`}>
                    <Link
                        className='collection-item'
                        onClick={handleMenuShow}
                        to='/categories'
                    >
                        <i className='material-icons teal-text text-darken-3'>apps</i>{"  "}
                        <span className='menu-list-icons'>List all Categories</span>
                    </Link>
                    <Link
                        className='collection-item'
                        onClick={handleMenuShow}
                        to='/areas'
                    >
                        <i className='material-icons teal-text text-darken-3'> language</i>{"  "}
                        <span className='menu-list-icons'>List all Area</span>
                    </Link>
                    <Link
                        className='collection-item'
                        onClick={handleMenuShow}
                        to='/ingredients/1'
                    >
                        <i className='material-icons teal-text text-darken-3'> restaurant</i>{"  "}
                        <span className='menu-list-icons'>List all Ingredients</span>
                    </Link>
                </ul>
            </div>
        </>
    );
};
