import client from './client';

const advertBaseUrl = '/api/v1';


export const getLatestAdverts = () => {
    const url = `${advertBaseUrl}/adverts`;
    return client.get(url);
}

export const publishAdvert = advertData => {
    const url = `${advertBaseUrl}/adverts`;
    const formData = new FormData();
    for (let item in advertData) {
        formData.append(item, advertData[item]);
    }
    return client.post(url, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
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