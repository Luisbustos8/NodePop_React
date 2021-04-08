import React, { useEffect } from 'react'
import {getLatestAdverts} from '../api/adverts'
import Layout from './layout/Layout';
import './advertPage.css'



const AdvertsPage = ({ ...props}) => {

    const [adverts, setAdverts] = React.useState([]);

    
    const [filteredAdvert, setFilteredAdverts] = React.useState([]);

    const [search, SetSearch] = React.useState('');
    
    
    React.useEffect(() => {
        getLatestAdverts().then(setAdverts);
    }, [])
    
    console.log(adverts)


    
    const items = adverts.map(advert => 
        <div className='box'>
            <h1 className='titleAdvert' key={advert.id}> {advert.name}</h1>
            <h3 className='price' key={advert.id}>{advert.price}€</h3>
            <h3 key={advert.id}>Estado: { advert.sale ? 'Vendo' : 'Compro' } </h3>
            <h3 className='tags' key={advert.id}>{advert.tags}</h3>
            <h6 key={advert.id}>{advert.createdAt}</h6>
        </div>)

    useEffect(() => {
        setFilteredAdverts(
            adverts.filter((advert) => 
            advert.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, adverts]);
  
    return (
        <Layout title="Busca, compra y vende en NodePop" {...props}>
            <input 
            type='text'
            placeholder='Qué estás buscando?'
            onChange={(advert) => SetSearch(advert.name)}
            />
                <div className='advertsP' {...props}>
                    <div>
                        {items}
                    </div>
                </div>
        
       
        </Layout>
    );
};

export default AdvertsPage;