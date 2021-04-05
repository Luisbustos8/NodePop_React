import React from 'react';

function SelectForm({className, handleChange, name}){

    const handleSelectChange = (event) => {
        handleChange(event);
    }

    return (
        <div>
            <select  name={name} className={className} onChange={(event) => handleSelectChange(event)} >
                <option defaultValue value={true} label='Venta'/>
                <option value={false} label='Compra'/>
            </select>
        </div>
    )
}
export default SelectForm;