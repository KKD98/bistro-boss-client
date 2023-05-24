import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-10 my-20'>
             <SectionTitle  heading={"Featured Item"} subHeading={"Check It Out"}></SectionTitle>
             <div className='lg:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36 '>
             <div>
                <img src={featuredImg} alt="" />
             </div>
             <div className='lg:ml-10'>
                <p>Aug 20, 2023</p>
                <p className='uppercase'>Where can I get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolores est voluptatem delectus, officiis blanditiis, omnis possimus asperiores illum fugit inventore pariatur natus tempora eius reiciendis aspernatur temporibus quam mollitia. Maxime error alias est fugiat, tenetur excepturi itaque animi optio aliquam ab natus, culpa neque dolor illo cumque, facilis a.</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
             </div>
             </div>
        </div>
    );
};

export default Featured;