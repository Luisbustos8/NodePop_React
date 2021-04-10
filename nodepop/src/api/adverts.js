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
    const  filterAdvertURL = '/adverts?'
    const filterName = 'name=${filterAdvert.name}'
    const filterPrice = '&price=${filterAdvert.price}'
    const filterSale = '&sale=${filterAdvert.sale}'
    const filterTags = '&tags=${filterAdvert.tags}'
    console.log('tufilterpapi', filterAdvert)
    
    if (!filterAdvert.name == "") {
        filterAdvertURL.concat(filterName)
    } if (filterAdvert.price >= 0) {
        filterAdvertURL.concat(filterPrice)
    } if (filterAdvert.sale === true || false) {
        filterAdvertURL.concat(filterSale)
    }if (filterAdvert.tags.length > 0 ) {
        filterAdvertURL.concat(filterTags)
    }
    console.log('holi', filterAdvertURL)
    const url = `${advertBaseUrl}`;
    return client.get(url, filterAdvertURL);
} 