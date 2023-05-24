import React from 'react';

const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className='lg:w-4/12 mx-auto text-center my-4'>
            <p className='text-yellow-600 '>---{subHeading}---</p>
            <h3 className='text-3xl border-y-4 uppercase py-2 my-3'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;