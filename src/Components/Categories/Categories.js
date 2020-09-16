import React, { useContext, useEffect, useState} from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';


const allProducts = [
    {name:'Lenovo',category:'laptop'},
    {name:'Dell',category:'laptop'},
    {name:'Hp',category:'laptop'},
    {name:'Samsung',category:'mobile'},
    {name:'Nokia',category:'mobile'},
    {name:'Apple',category:'mobile'},
    {name:'Cannon',category:'camera'},
    {name:'Nikko',category:'camera'},
    {name:'Sony',category:'camera'},
    
];
const Categories = () => { 
     
    const [category] = useContext(CategoryContext);
    const [products,setProducts] = useState([]);
    useEffect(() =>{
    console.log({category});
const matchedProducts = allProducts.filter(pd => pd.category === category.toLowerCase());
setProducts (matchedProducts)
    },[category])

    return (
        <div>
            <h3> this is categories: {category}</h3>
            
            { 
                products.map(pd => <CategoryDetail product={pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;