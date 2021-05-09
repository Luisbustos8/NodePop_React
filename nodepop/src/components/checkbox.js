
import React from 'react';

function checkbox({ handleChange }){

    const handleCheckChange = (event) => {
        handleChange(event.target.checked);
    }

    return (
        <label>
            <input type="checkbox" onChange={handleCheckChange}></input>
            Recuerdame
        </label>
    )
}
export default checkbox;