import React, { useEffect } from 'react'
import {getLatestAdverts} from '../api/adverts'
import Layout from './layout/Layout';
import './advertPage.css'
import Adverts from './Filter';



const AdvertsPage = ({  ...props}) => {

    const [adverts, setAdverts] = React.useState([]);

    
    const [filteredAdvert, setFilteredAdverts] = React.useState([]);

    const [search, SetSearch] = React.useState('');
    
    
    React.useEffect(() => {
        getLatestAdverts().then(setAdverts);
    }, [])
 /*
    const filteredAdvert = () => {
        getLatestAdverts().then(setAdverts);
    }
*/
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
            className='filterName' 
            type='text'
            placeholder='¿Qué estás buscando?'
            />
            <div className='advertsP' {...props}  >
                    <div> 
                        {adverts.map(advert => 
                            <div className='box'>
                                <h1 className='titleAdvert' key={advert.id}> {advert.name}</h1>
                                <h3 className='price' key={advert.id}>{advert.price}€</h3>
                                <h3 key={advert.id}>Estado: { advert.sale ? 'Vendo' : 'Compro' } </h3>
                                <h3 className='tags' key={advert.id}>{advert.tags}</h3>
                                <h6 key={advert.id}>{advert.createdAt}</h6>
                            </div>)}
                    </div>
                </div>,
            
        </Layout>
    );
};

export default AdvertsPage;