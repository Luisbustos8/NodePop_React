import React from 'react'
import {getLatestAdds} from '../api/adverts'
import Layout from './layout/Layout';



const AdvertsPage = ({...props}) => {

    const [adverts, setAdverts] = React.useState([])
    const items = adverts.map( advert => <li key={advert.id}>{advert.content}</li>)

    React.useEffect(() => {
        getLatestAdds().then(response => console.log("BUSE", response))
    }, [])
    return (
        <Layout title="Busca, compra y vende en NodePop" {...props}>
        <div className="advertsPage">
            <ul>{items}</ul>
        </div>
        </Layout>
    );
};

export default AdvertsPage