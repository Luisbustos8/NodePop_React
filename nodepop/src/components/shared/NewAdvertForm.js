import React from 'react';
import '../LoginPage.css';
import FormField from '../FormField';
import Button from '../shared/Button';
import Checkbox from './Checkbox';
import SelectForm from './SelectForm';
import T from 'prop-types';


function NewAdvertForm({onSubmit}) {

    const [advertData, setAdvertData] = React.useState({
        name: '',
        sale: 'true',
        price: '',
        tags : [],
        photo:  '',
    });

    const handleChangeAdvertData = event => {
        setAdvertData(oldAdvertData => {
            const newAdvertData = {
                ...oldAdvertData,
                [event.target.name] : event.target.value,
            };
            if (advertData.photo){
                oldAdvertData.append(file)
            }
            
            return newAdvertData;
        })   
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const photo = file;
     
        const data = {
            sale: advertData.sale === 'true' ? true : false,
            name: advertData.name,
            price: advertData.price, 
            tags : advertData.tags,
            photo: photo, 
        }
        if (advertData.photo) {
            data['photo'] = advertData.photo

        }
       console.log(data);
        onSubmit(data)
       
    }
    
     const checkboxList = [
        'lifestyle', 
        'mobile',
        'motor',
        'work'
    ]

   
    const [file, setFile] = React.useState();

    const handleChange = event => {
        
        const file = event.target.files[0].name;
        setFile(file);
    }
    

    

    
   
    const setTag = event => {
        const tags = advertData.tags
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
        setAdvertData({...advertData, tags});
       
    };

    const {name, sale, price, tags, photo} = advertData;


    return (
        <form className="loginForm" onSubmit={handleSubmit} encType='content-type'>
            <FormField
            type="text"
            name="name"
            label="Nombre del producto"
            className='loginForm-field'
            value={name}
            onChange={handleChangeAdvertData}
            />

            <SelectForm 
            className='select-form'
            name='sale'
            value={sale}
            handleChange={handleChangeAdvertData}
            />
            
            <FormField
            type='number'
            name="price"
            min="0"
            label="Precio"
            value={price}
            onChange={handleChangeAdvertData}
            />

            <h5 className='h5-title'> Selecciona el campo de tu producto...</h5>

            {checkboxList.map(label => {return (
                <Checkbox
            className='checkbox-form'
            name={label}
            value={tags}
            label={label}
            handleChange={setTag}
            />
            )})}
          
            <FormField
            className='file-form'
            type="file"
            name="photo"
            
            value={advertData.photo}
            onChange={handleChange}
            
            />

            <Button
            type='submit'
            className='login-button'
            variant='primary'
            disabled = { !name  || !price || !tags }
            
            > Subir Anuncio </Button>
        </form>
    )
}

NewAdvertForm.propTypes = {
    onSubmit: T.func.isRequired,
};

export default NewAdvertForm;