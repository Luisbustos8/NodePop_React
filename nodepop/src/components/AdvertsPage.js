import React, { useEffect } from 'react'
import {getLatestAdverts, filteredAdverts} from '../api/adverts'
import Layout from './layout/Layout';
import './advertPage.css';
import FilterForm from './FilterForm';



const AdvertsPage = ({ onFilteredAdvert, ...props}) => {

    const [adverts, setAdverts] = React.useState([]);
    const [filterAdverts, setFilterAdverts] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const resetError = () => setError(null);

   


    React.useEffect(() => {
        if (handleFilterSubmit){
            getLatestAdverts().then(setAdverts);
        } else {
            filteredAdverts().then(setFilterAdverts)
        }
        //filteredAdverts().then(setFilterAdverts)
    }, []);

    const handleFilterSubmit = async filterAdvert => {
            
        try {
            setIsLoading(true);
            setError(null);
            await filteredAdverts(filterAdvert);
            onFilteredAdvert(); 
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }     
    };
    


    
    
    return (
        <Layout title="Busca, compra y vende en NodePop" {...props}>
            <FilterForm onSubmit={handleFilterSubmit}/>
            
            <div className='advertsP' {...props}  >
                    <div> 
                        { adverts.map(advert => 
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