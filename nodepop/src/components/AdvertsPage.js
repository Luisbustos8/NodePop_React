import React from 'react'
import {getLatestAdds} from '../api/adverts'



const AdvertsPage = () => {

    const [adverts, setAdverts] = React.useState([])
    const items = adverts.map( advert => <li key={advert.id}>{advert.content}</li>)

    React.useEffect(() => {
        getLatestAdds().then(response => console.log("BUSE", response))
    }, [])
    return (
        <div className="advertsPage">
            <ul>{items}</ul>
        </div>
    );
};

export default AdvertsPage