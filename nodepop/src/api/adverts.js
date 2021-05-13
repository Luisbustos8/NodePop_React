import client from './client';

const advertBaseUrl = '/api/v1';


export const getLatestAdverts = () => {
    const url = `${advertBaseUrl}/adverts`;
    return client.get(url);
}

export const publishAdvert = advertData => {
   const axios = ({
        method: 'post',
        url:  `${advertBaseUrl}/adverts`,
        data: advertData,
        headers: { "Content-Type": "multipart/form-data" },
    })
    
    return client.post(axios.url, axios.data, axios.headers)


    // return client.post(url, advertData);
}

export const filteredAdverts = filterAdvert => {
    let filterAdvertsUrl = '/adverts'
    let isFirstParam = false

    Object.keys(filterAdvert).forEach(filter => {
        let operator = !isFirstParam ? '?' : '&'
    
        if(filterAdvert[filter] && filterAdvert[filter].length > 0) {
            if (Array.isArray(filterAdvert[filter])){
                
                for (const element of filterAdvert[filter]) {
                    operator =  !isFirstParam ? '?' : '&'
                    filterAdvertsUrl += `${operator}${filter}=${element}`
                     if (!isFirstParam) isFirstParam = true
                }
                
            } else {
                filterAdvertsUrl += `${operator}${filter}=${filterAdvert[filter]}`
                if (!isFirstParam) isFirstParam = true
            }
        }
    })

    const url = `${advertBaseUrl}${filterAdvertsUrl}`
    return client.get(url);
}

export const getAdvertDetail = advertPageId => {
    const url = `${advertBaseUrl}/adverts/${advertPageId}`
    return client.get(url)
}

export const deleteAdvert = advertPageId => {
     const url = `${advertBaseUrl}/adverts/${advertPageId}`
     return client.delete(url)
}