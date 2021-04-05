import React from 'react';
import { publishAdvert } from '../../api/adverts';

import Layout from '../layout/Layout';
import NewAdvertForm from './NewAdvertForm';


const NewAdvertPage = props => {

    const [error, setError] = React.useState(null);
    

    const handleSubmit =  async advertData => {
        console.log(advertData)
        try {
            setError(null);
            await publishAdvert(advertData)
        } catch (error) {
            setError(error)
        }
    }


    return (
        <Layout title= "Sube tu producto y vendelo rapidísimo" {...props}>
            <NewAdvertForm onSubmit={handleSubmit}/>
        </Layout>
    );
};

export default NewAdvertPage;