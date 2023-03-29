import React from 'react';

const SidebarTitle = ({title}) => {
    return (
        <div>
        <div className="heading">
            <h1 className='text-4xl font-bold mb-3 text-gray-100'>{title}</h1>
        </div>
        <div className="divider w-full">
            <hr />
        </div>
    </div>
    );
};

export default SidebarTitle;