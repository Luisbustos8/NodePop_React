import React from 'react';
import { publishAdvert } from '../../api/adverts';
import { Redirect } from 'react-router';
import Layout from '../layout/Layout';
import NewAdvertForm from './NewAdvertForm';




const NewAdvertPage = ({ onPublishAdvert,  ...props}) => {

    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [newAdvert, setNewAdvert] = React.useState(false);


    const handleSubmit = async advertData => {
        try {
            setIsLoading(true);
            await publishAdvert(advertData);
            setNewAdvert(true);
            onPublishAdvert();
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    if (newAdvert){
        return <Redirect to='/' />
    }

    return (
        <Layout title= "Sube tu producto y vendelo rapidísimo" {...props}>
            <NewAdvertForm  onSubmit={handleSubmit} />
        </Layout>
    );
};

export default NewAdvertPage;


