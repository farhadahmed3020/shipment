import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Transport = () => {
 const [category,setCategory]   = useContext(CategoryContext)
    return (
        <div>
            <h1> this is Transport </h1>
            <button onClick ={() => setCategory(category + 1)}>Increment</button>
        </div>
    );
};

export default Transport;