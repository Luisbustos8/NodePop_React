import client, { configureClient } from './client';

const advertBaseUrl = '/api/v1';


export const getLatestAdverts = () => {
    
    const url = `${advertBaseUrl}/adverts`;
    return client.get(url);
}

export const publishAdvert = () => {
    const url = `${advertBaseUrl}/adverts`;
    return client.post(url);
}