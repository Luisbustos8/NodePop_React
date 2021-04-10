import React, { useEffect } from 'react'
import {getLatestAdverts, filteredAdverts} from '../api/adverts'
import Layout from './layout/Layout';
import './advertPage.css';
import FilterForm from './FilterForm';
import Button from './shared/Button';
import {Link}  from 'react-router-dom';


const AdvertsPage = ({ onFilteredAdvert, ...props}) => {

    const [adverts, setAdverts] = React.useState([]);

    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const resetError = () => setError(null);

    const EmptyList = () => (
        <div style={{ textAlign: 'center', fontFamily:'fantasy', color:'green',fontSize:'30px' }}>
        <p>¡Se el primero en subir un anuncio!</p>
        <Button as={Link} to="/advert" variant="primary">
            Nuevo anuncio
        </Button>
  </div>
);

   
    useEffect(() => {
        getAdverts()
    }, [])

    const getAdverts = async () => {
            const advertList = await getLatestAdverts();
            setAdverts(advertList);
        }

    const handleFilterSubmit = async filterAdvert => {
        try {
            setIsLoading(true);
            const filteredAdvertList = await filteredAdverts(filterAdvert);
            setAdverts(filteredAdvertList)
            setError(null);
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
                    { adverts.length  ?
                     adverts.map(advert => 
                        <div className='box' key={advert.id}>
                            <h1 className='titleAdvert'> {advert.name}</h1>
                            <h3 className='price'>{advert.price}€</h3>
                            <h3 key={advert.id}>Estado: { advert.sale ? 'Vendo' : 'Compro' } </h3>
                            <h3 className='tags'>{advert.tags}</h3>
                            <h6 key={advert.id}>{advert.createdAt}</h6>
                         </div>) : <EmptyList/>}
                    </div>
                </div>
            
        </Layout>
    );
};

export default AdvertsPage;