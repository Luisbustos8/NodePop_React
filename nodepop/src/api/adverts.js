import client from './client';

const advertBaseUrl = '/api/v1'

export const getLatestAdds = () => {
    const url = `${advertBaseUrl}/adverts`;
    return client.get(url);
}