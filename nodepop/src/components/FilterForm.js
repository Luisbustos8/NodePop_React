import React, { useState, useEffect } from 'react';
import Checkbox from './shared/Checkbox';
import Button from './shared/Button';
import './filterForm.css'


 
function FilterForm({onSubmit}){
    
    const [filterAdvert, setFilterAdvert] = useState({
        name: '',
        tags: [],
        sale: '', 
        price: [],
    });
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    const getPrices = (minPrice, maxPrice) => {
        let newPrices = [];
    if (minPrice > 0 && maxPrice > 0) {
        newPrices = [minPrice, maxPrice]
        
    } else if (minPrice > 0 && maxPrice == 0) {
       newPrices = [minPrice]
        
    } else if (maxPrice > 0 && minPrice > 0) {
        newPrices = [maxPrice]
    } 
    return newPrices;
    }

    useEffect(() => {

    setFilterAdvert({...filterAdvert, price: getPrices(minPrice, maxPrice)})
    }, [minPrice, maxPrice]);

    const handleSubmit = event => {
    event.preventDefault();
    onSubmit(filterAdvert);
    };

    
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
            //price: event.target.value,
            price: [...filterAdvert.price, Number(event.target.value)]
            
        };
        setFilterAdvert(newFilterAdvert);
    };

    

    const handleFilterBySale = event => {
        const newFilterAdvert = {
            ...filterAdvert,
             sale: event.target.value
        }
        setFilterAdvert(newFilterAdvert)
    }

    

    const addTag = (tags, selectedTag) => {
        return tags.concat([selectedTag])
    };

    const removeTag = (tags, selectedTag) => {
        return tags.filter(tag => tag !== selectedTag)
    };


    const setTag = event => {
        const tags = filterAdvert.tags
        const tagName = event.target.name
        if(event.target.checked) {
            if(!tags.includes(tagName)){
                const newTags = addTag(tags, tagName)
                setFilterAdvert({...filterAdvert, tags:newTags})
            }
        } else {
            const index = tags.indexOf(tagName);
            if(index >= 0){
                const newTags = removeTag(tags, tagName)
                setFilterAdvert({...filterAdvert, tags:newTags})
            }
        }
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
                placeholder='Precio mínimo'
                min={0}

                onChange={(event) => setMinPrice(Number(event.target.value))} 
             />
             <input
                className='filterPrice' 
                type= 'number'
                placeholder='Precio máximo'
                min={0}
                onChange={(event) => setMaxPrice(Number(event.target.value))} 
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