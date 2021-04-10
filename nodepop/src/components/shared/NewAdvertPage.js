import React from 'react';
import { publishAdvert } from '../../api/adverts';

import Layout from '../layout/Layout';
import NewAdvertForm from './NewAdvertForm';


const NewAdvertPage = ({ onPublishAdvert,   ...props}) => {

    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async advertData => {
        try {
            setIsLoading(true);
            await publishAdvert(advertData);
            onPublishAdvert(); 
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <Layout title= "Sube tu producto y vendelo rapidísimo" {...props}>
            <NewAdvertForm  onSubmit={handleSubmit}/>
        </Layout>
    );
};

export default NewAdvertPage;