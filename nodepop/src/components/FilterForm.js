import React, { useState, useEffect } from 'react';
import Checkbox from './shared/Checkbox';
import Button from './shared/Button';


 
function FilterForm({onSubmit, className}){
    
    const [filterAdvert, setFilterAdvert] = React.useState({
        name: '',
        tags: [],
        sale: null, 
        price: 0,
    });
    
    const handleFilterByName = event => {
        const newFilterAdvert = { 
            ...filterAdvert, 
            name: event.target.value };
        setFilterAdvert(newFilterAdvert);
    };

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

    console.log(filterAdvert)

    const {name, tags, sale, price} = filterAdvert;
    const checkboxList = [
        'lifestyle', 
        'mobile',
        'motor',
        'work'
    ]

    return (
        <form onSubmit={handleSubmit}>
            <input
                className='filterName' 
                type='text'
                placeholder='¿Qué estás buscando?'
                value={name}
                onChange={handleFilterByName} 
             />
            {checkboxList.map(label => {return (
                    <Checkbox
                className={className}
                name={label}
                value={tags}
                label={label}
                handleChange={setTag}
                />
            )})}
            <Button
            type='submit'
            className='login-button'
            variant='primary'
            >
            Filtrar 
            </Button>     
        </form>
            
    )
}

export default FilterForm;