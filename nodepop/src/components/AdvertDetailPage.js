
import React from 'react';
import {deleteAdvert, getAdvertDetail} from '../api/adverts';
import Layout from './layout/Layout';
import './advertDetailPage.css';
import placeHolder from '../assets/unnamed.png'
import Button from '../components/shared/Button';
import { Redirect } from 'react-router';
import {useParams} from "react-router-dom";
import swal from 'sweetalert';



const AdvertDetailPage = ({onGetAdvertDetail, history, ...props}) => {

    const [advertDetail, setAdvertDetail] = React.useState([]);
    const [advertDelete, setAdvertDelete ] = React.useState(false);
    const [error, setError] = React.useState(false);

    let {advertId} = useParams()
  

    React.useEffect( () => {
        getAdvertDetail(advertId).then(setAdvertDetail).catch(setError)
    },[])

    const handleClickDelete = async () => {
        const showConfirmation = () => {
            swal({
                title: 'Eliminar anuncio',
                text: '¿Estás seguro que quieres eliminar este anuncio?',
                buttons: ['No', 'Si']
            }).then(response => {
                if(response) {
                    swal({text: "El anuncio se ha borrado con éxito"})
                }
            })
        }
        await deleteAdvert(advertId)
        setAdvertDelete(true)
    }
   

    if (error && error.statusCode === 404){
        return <Redirect to="/404" />
    }

    if (advertDelete) {
        return <Redirect to='/' />
    }


 return (
        <Layout {...props} >
            <div handleAdvertId>             
                <div className='card'>
                    <div className='cardPhoto'>
                        <img className='img' src={advertDetail.photo || placeHolder}/>
                    </div>
                    <div className='cardtitle'>
                        <h1 className='title'> {advertDetail.name} </h1>
                        <h3 className='Precio'>{advertDetail.price} € </h3>
                        <h3 className='state'> Estado: {advertDetail.sale ? 'Vendo' : 'Compro'}</h3>
                        <h5 className='tag'>{advertDetail.tags}</h5> 
                        <Button className='delete' onClick={handleClickDelete} to='/'> Borrar Anuncio </Button>    
                    </div>
                </div>
                
                
            </div>
        </Layout>
    )
}
export default AdvertDetailPage;
