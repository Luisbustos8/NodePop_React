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

export const filteredAdverts = filterAdvert => {
    let filterAdvertsUrl = '/adverts'
    let isFirstParam = false

    Object.keys(filterAdvert).forEach(filter => {
        const operator = !isFirstParam ? '?' : '&'

        if(filterAdvert[filter] && filterAdvert[filter].length > 0) {
            filterAdvertsUrl += `${operator}${filter}=${filterAdvert[filter]}`
            if (!isFirstParam) isFirstParam = true
        }
    })

    const url = `${advertBaseUrl}${filterAdvertsUrl}`
    return client.get(url);
}