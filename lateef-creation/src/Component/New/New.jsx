import React, { useEffect, useState } from 'react';

const New = () => {
    const [inputFields, setInputFields] = useState([
        { firstName: '', lastName: '' },
        { firstName: '', lastName: '' },
    ]);
    // setData()

    return (

        <div>
            {
            inputFields.map((inputField, index) => (
                <p key={index}>Lorem ipsum dolor sit amet.</p>

            ))
            }
        </div>
    );
};

export default New;
