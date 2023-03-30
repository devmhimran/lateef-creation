import React from 'react';

const TableData = ({ data }) => {
    const { _id, name, thumbnail, category, previewInputData } = data

    const handleDelete = (id) => {
        const proceed = window.confirm('Are your sure?');
        if (proceed) {

            const url = `http://localhost:5000/portfolio/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remainingService = products.filter(products => products._id !== id);
                    setProducts(remainingService);
                    console.log(data);
                })
        }
    }
    return (
        
    );
};

export default TableData;