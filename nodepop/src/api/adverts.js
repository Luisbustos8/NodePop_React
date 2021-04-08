import client from './client';

const advertBaseUrl = '/api/v1';


export const getLatestAdverts = () => {
    
    const url = `${advertBaseUrl}/adverts`;
    return client.get(url);
}

export const publishAdvert = advertData => {
    const url = `${advertBaseUrl}/adverts`;
    return client.post(url, advertData);
}