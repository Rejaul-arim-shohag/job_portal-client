import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { readCategories } from '../../ApiRequest/APIRequest';
import "./Category.css"
const Categories = () => {
    const [categories, setCategories]=useState([])
    let navigate = useNavigate()
    useEffect(()=>{
        readCategories()
        .then((result)=>{
            setCategories(result)
        })
    }, [])
    const handleJobFindByCategory = (e) => {
        navigate({
            pathname: '/JobList',
            search: `?category_id=${e}`,
        })
    }
    return (
        <div className="my-5 pt-2 pb-3">
            <div className="container">
                <div className="title my-5">
                    <h2 className="text-center  mt-5">Popular Job Categories</h2>
                    <h6 className="text-center  mt-3">2022 jobs live</h6>
                </div>
                <div className="row">
                    {
                        categories.map((item, index) => {
                            return (
                                <div onClick={()=>handleJobFindByCategory(item._id)} key={item._id} className="col-md-4 col-lg-4 col-12 " style={{boxSizing:"border-box"}}>
                                    <div className="category shadow-sm  px-4 py-4 my-3 d-flex justify-content-start border rounded" style={{background:"#F0F8FF"}}>
                                        <div className="icon px-2 bg-white px-3 py-3 rounded">
                                            <img className="" src={item.icon} style={{ width: "40px" }} alt="" />
                                        </div>
                                        <div className="">
                                            <h6 className="px-3">{item.category_name}</h6>
                                            <p className="px-3">({item.jobs.length} open positions)</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;