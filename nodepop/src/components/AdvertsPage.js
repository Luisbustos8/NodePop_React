import React, { useEffect } from 'react'
import {getLatestAdverts, filteredAdverts} from '../api/adverts'
import Layout from './layout/Layout';
import './advertPage.css';
import FilterForm from './FilterForm';
import Button from './shared/Button';
import {Link}  from 'react-router-dom';


const AdvertsPage = ({ onFilteredAdvert, history, ...props}) => {

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

    
    const advertDetail = adverts.map(advert => advert.id)


    return (
        <Layout title="Busca, compra y vende en NodePop" {...props}>
            <FilterForm onSubmit={handleFilterSubmit}/>
            
            <div className='advertsP' {...props}  >
                <div history={advertDetail} > 
                    {adverts.length  ?
                     adverts.map(advert => 
                        <Link key={advert.id} style={{ textDecoration: 'none' }} to={`/advert/${advert.id}`} history={advertDetail}>
                        <div className='box'  history={advert.id}>
                            <h1 className='titleAdvert'> {advert.name}</h1>
                            <h3 className='price'>{advert.price}€</h3>
                            <h3 >Estado: { advert.sale ? 'Vendo' : 'Compro' } </h3>
                            <h3 className='tags'>{advert.tags}</h3>
                            <h6 >{advert.createdAt}</h6>
                         </div> </Link>) : <EmptyList/>}
                       
                        </div>
                </div>
            
        </Layout>
    );
};

export default AdvertsPage;