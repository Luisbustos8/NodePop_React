import React from 'react'
import {getLatestAdverts} from '../api/adverts'
import Layout from './layout/Layout';



const AdvertsPage = ({ ...props}) => {

    const [adverts, setAdverts] = React.useState([]);
    
    React.useEffect(() => {
        getLatestAdverts().then(setAdverts);
    }, [])
    
    const items = adverts.map( advert => <li key={advert.id}>{advert.name}{advert.sale}{advert.price}{advert.tags}</li>);

    return (
        <Layout title="Busca, compra y vende en NodePop" {...props}>
        <div className="advertsPage" {...props}>
            <ul>{items}</ul>
        </div>
        </Layout>
    );
};

export default AdvertsPage;