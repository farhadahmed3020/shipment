import React, { useContext } from 'react';
//import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
     const {name} = props.product

    //const category = useContext(CategoryContext);
    
    return (
        <div>
            <h4> this   is categoryDetail</h4>
            <h5> Selected  Products:{name} </h5>
            
        </div>
    );
};

export default CategoryDetail;