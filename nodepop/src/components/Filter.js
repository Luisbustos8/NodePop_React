import React, { useState } from 'react';

 

const Adverts = ( items, ...props) => {

    
    return (
        <div className='advertsP' {...props}>
                    <div>
                        {items}
                    </div>
                </div>
    )
    
}
export default Adverts;