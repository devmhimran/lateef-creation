import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({title}) => {
    return (
        <Helmet>
        <title className='capitalize'>{title} - Lateef Creation</title>
      </Helmet>
    );
};

export default PageTitle;