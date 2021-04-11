
import React from 'react';

import {getAdvertDetail} from '../api/adverts';
import Layout from './layout/Layout';
import './advertDetailPage.css';



const AdvertDetailPage = ({onGetAdvertDetail, history, ...props}) => {

    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [advertDetail, setAdvertDetail] = React.useState([]);

    

    let advertId = history.location.pathname;
    let advertsPageId = advertId.slice(8)
    console.log(advertsPageId)

    React.useEffect( () => {
        getAdvertDetail(advertsPageId).then(setAdvertDetail)
    },[])

    console.log(advertDetail)
    console.log(advertDetail.name)

    return (
        <Layout >
            <div handleAdvertId>
                <div className='card'>
                    <div className='cardPhoto'>
                        <img src={advertDetail.photo === null ? '../assets/unnamed.png' : advertDetail.photo}/>
                    </div>
                    <h1 className='title'> {advertDetail.name} </h1>
                    <h3 className='Precio'>{advertDetail.price} € </h3>
                    <h3> Estado: {advertDetail.sale ? 'Vendo' : 'Compro'}</h3>
                    <h5>{advertDetail.tags}</h5>

                </div>
                
            </div>
        </Layout>
    )
}
export default AdvertDetailPage;

/*
<div class="card">
                    <div class="card-image">
                        <img src={advertDetail}>
                        <span class="card-title">Card Title</span>
                    </div>
                    <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                </div>
*/