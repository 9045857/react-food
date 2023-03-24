import {CategoryItem} from './CategoryItem'

export const CategoriesList = ({categories=[]})=>{
    return<div className='list'>
        {categories.map(category=>(<CategoryItem key={category.idCategory} {...category}/>))}
    </div>
} 