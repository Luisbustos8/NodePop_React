import React, { useState, useEffect } from 'react';
import Checkbox from './shared/Checkbox';
import Button from './shared/Button';
import SelectForm from './shared/SelectForm';
import './filterForm.css'

 
function FilterForm({onSubmit}){
    
    const [filterAdvert, setFilterAdvert] = React.useState({
        name: '',
        tags: [],
        sale: '', 
        price: 0,
    });
    
    const handleFilterByName = event => {
        const newFilterAdvert = { 
            ...filterAdvert, 
            name: event.target.value,
        };
        setFilterAdvert(newFilterAdvert);
    };
    const handleFilterByPrice = event => {
        const newFilterAdvert = { 
            ...filterAdvert, 
            price: event.target.value,
        };
        setFilterAdvert(newFilterAdvert);
    };

    const handleFilterBySale = event => {
        const newFilterAdvert = {
            ...filterAdvert,
             sale: event.target.value === 'true' ? true : false
        }
        setFilterAdvert(newFilterAdvert)
    }

    const handleSubmit = event => {
    event.preventDefault();
    onSubmit(filterAdvert);
    };

    const setTag = event => {
        const tags = filterAdvert.tags
        if(event.target.checked) {
            if(!tags.includes(event.target.name)){
                tags.push(event.target.name);
            }
        } else {
            const index = tags.indexOf(event.target.name);
            if(index >= 0){
                tags.splice(index, 1)
            }
        }
        setFilterAdvert({...filterAdvert, tags}); 
    };

    const {name, tags, sale, price} = filterAdvert;
    const checkboxList = [
        'lifestyle', 
        'mobile',
        'motor',
        'work'
    ]

    return (
        <form onSubmit={handleSubmit} className='filter'>
            <input
                className='filterName' 
                type='text'
                placeholder='¿Qué estás buscando?'
                value={name}
                onChange={handleFilterByName} 
             />
            <input
                className='filterPrice' 
                type= 'number'
                placeholder='Busca por precio'
                min="0"
                value={price}
                onChange={handleFilterByPrice} 
             />
             <select  name='sale' className='select-form1' onChange={handleFilterBySale} >
                <option defaultValue value={true} label='Venta'/>
                <option value={false} label='Compra'/>
            </select>
            
            {checkboxList.map(label => {return (
                    <Checkbox
                className='checkboxForm'
                name={label}
                value={tags}
                label={label}
                handleChange={setTag}
                />
            )})}
            <Button
            type='submit'
            className='login-button1'
            variant='primary'
            >
            Filtrar 
            </Button>     
        </form>
            
    )
}

export default FilterForm;