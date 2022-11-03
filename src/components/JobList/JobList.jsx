import React, { useState } from 'react';
import "./jobList.css"
import { BiSearch } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { GiOfficeChair } from "react-icons/gi";
import notFound from "../../Assets/images/notFound.jpg"

import { MdBusinessCenter } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { readCategories, readJobs, readLocations, readTypes } from '../../ApiRequest/APIRequest';
import ScaleLoader from "react-spinners/ScaleLoader";
import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';
const JobList = () => {
    const [searchParams] = useSearchParams();
    const searchString = searchParams.get('searchString')
    const location_Id = searchParams.get('location')
    const category_id = searchParams.get('category_id')

    const [isLoading, setIsLoading] = useState(false);
    const [jobList, setJobList] = useState([]);
    const [count, setCount] = useState(0);

    const [categoryList, setCategoryList] = useState([]);
    const [typeList, setTypeList] = useState([]);

    const [perPage, setPerPage] = useState(10);
    const [searchKeyword, setSearchKeyword] = useState(searchString);
    const [selectedLocation, setSelectedlocation] = useState(location_Id);
    const [selectedCategory, setSelectedCategory] = useState(category_id);
    const [selectedType, setSelectedType] = useState(null);
    const [sortBy, setSortBy] = useState(-1);

    

    //all jobs


    useEffect(() => {
        setIsLoading(true);
        readJobs(perPage, searchKeyword, selectedLocation, selectedCategory, selectedType, sortBy, 1)
            .then((result) => {
                setIsLoading(false);
                setJobList(result[0]?.Rows)
                setCount(result[0]?.total[0]?.count)
            })

    }, [selectedLocation, selectedCategory, selectedType, perPage])

    const handleFindJob = () => {
        setIsLoading(true);
        readJobs(perPage, searchKeyword, selectedLocation, selectedCategory, selectedType, sortBy, 1)
            .then((result) => {
                setIsLoading(false);
                setJobList(result[0]?.Rows)
                setCount(result[0]?.total[0]?.count)
            })
    }

    const handlePageClick = (e) => {
        readJobs(perPage, searchKeyword, selectedLocation, selectedCategory, selectedType, sortBy, e.selected + 1)
            .then((result) => {
                setJobList(result[0]?.Rows)
                setCount(result[0]?.total[0]?.count)
            })
        window.scrollTo(0, 0)
    }



    useEffect(() => {
        readCategories()
            .then((result) => {
                setCategories(result)
            });
        readLocations()
            .then((result) => {
                setLocations(result)
            });
        readTypes()
            .then((result) => {
                setTypes(result)
            });
    }, [])
    const [categories, setCategories] = useState([]);
    const [types, setTypes] = useState([]);
    const [locations, setLocations] = useState([]);

    return (
        <div className="bg-white my-5 py-5">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 px-4 py-4 rounded" style={{ background: "#F5F7FC" }}>
                        <div>
                            <h6>Search by Keywords </h6>
                            <div className="search_keywords input-group mt-3">
                                <input onChange={(e) => setSearchKeyword(e.target.value)} className="form-control  px-5 inputShadowNone" placeholder='Job Title, Keywords...' type="text" />
                                <BiSearch className="JobSearchIcon" style={{ fontSize: "20px" }} />
                                <button onClick={handleFindJob} className="btn btn-primary job_search_btn">Search</button>
                            </div>

                        </div>

                        <div className="mt-5">
                            <h6>Location</h6>
                            <div className="search_location mt-3">
                                <select onChange={(e) => setSelectedlocation(e.target.value)} className="form-select py-2 px-5 inputShadowNone" placeholder="City" type="text" >
                                    <option>Select Location</option>
                                    {
                                        locations.map((item, index) => {
                                            return (
                                                <option key={index} value={item._id}>{item.location_name}</option>
                                            )
                                        })
                                    }
                                </select>
                                <ImLocation className="locationSearchIcon" style={{ fontSize: "20px" }} />
                            </div>
                        </div>

                        <div className="mt-5">
                            <h6>Category</h6>
                            <div className="Category_search mt-3 position-relative">
                                <select onChange={(e) => setSelectedCategory(e.target.value)} className="form-select py-2 px-5 inputShadowNone" aria-label="Default select example">
                                    <option>Select Category</option>
                                    {
                                        categories.map((item, index) => {
                                            return (
                                                <option key={index} value={item._id}>{item.category_name}</option>
                                            )
                                        })
                                    }

                                </select>
                                <BsFillBriefcaseFill className="CategorySearchIcon" style={{ fontSize: "18px" }} />

                            </div>
                        </div>

                        <div className="mt-5">
                            <h6>Job Type</h6>
                            <div className="Category_search mt-3 position-relative">
                                <select onChange={(e) => setSelectedType(e.target.value)} className="form-select py-2 px-5 inputShadowNone" aria-label="Default select example">
                                    <option>Select Type</option>
                                    {
                                        types.map((item, index) => {
                                            return (
                                                <option key={index} value={item._id}>{item.type_name}</option>
                                            )
                                        })
                                    }

                                </select>
                                <GiOfficeChair className="CategorySearchIcon" style={{ fontSize: "18px" }} />
                            </div>
                        </div>

                    </div>

                    <div className="col-md-8">
            

                        {
                            isLoading ? <div className="job_loader_div"><ScaleLoader color="#36d7b7" /></div> : <div className="row">
                                {
                                    jobList.map((item, index) => {
                                        return (
                                            <div key={index} className="col-md-12 col-lg-12 col-12 " style={{ boxSizing: "border-box" }}>
                                                <div className="px-4 py-4 my-3 border rounded single_Job">
                                                    <div className="d-flex justify-content-start">
                                                        <div className="icon px-1 bg-white company_Logo px-2 py-3 rounded">
                                                            <img className="" src={item?.profile_image} style={{ width: "50px" }} alt="" />
                                                        </div>
                                                        <div>
                                                            <Link to={`/Job/${item._id}`} className="job_title">
                                                                <h6 className="px-2 pt-3" style={{ fontWeight: "600" }}>{item?.job_title}</h6>
                                                            </Link>
                                                            <div className="details d-flex justify-content-start">
                                                                <div className="d-flex justify-content-between">
                                                                    <MdBusinessCenter className="mt-1 mx-1" style={{ fontSize: "15px" }} />
                                                                    <p>{item.categories}</p>
                                                                </div>

                                                                <div className="d-flex mx-1 justify-content-center">
                                                                    <ImLocation2 className="mt-1 mx-1" style={{ fontSize: "15px" }} />
                                                                    <p>{item.location}</p>
                                                                </div>
                                                                <div className="d-flex mx-1 justify-content-center">
                                                                    <TbCurrencyTaka className="mt-1 mx-1" style={{ fontSize: "15px" }} />
                                                                    <p>{item?.job_salary} /Monthly</p>
                                                                </div>

                                                                <div className="d-flex mx-1 justify-content-center">
                                                                    <GiOfficeChair className="mt-1 mx-1" style={{ fontSize: "15px" }} />
                                                                    <span className=" rounded-pill ">vacancy : {item?.no_of_vacancy}</span>
                                                                </div>

                                                            </div>
                                                            <div className="mx-auto text-center">
                                                                <div className="d-flex justify-content-start">
                                                                    <span className=" rounded-pill px-3 py-2 text-white mx-2" style={{ background: "#6c89ba" }}>{item?.type}</span>
                                                                    {
                                                                        item.isArgent == "true" ? <span className="bg-warning rounded-pill px-3 py-2 p-2 mx-2 text-white" >Argent</span> : ""
                                                                    }
                                                                    {/* <span className="bg-warning rounded-pill px-3 py-2 p-2 mx-2 text-white">{item.isArgent}</span> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        }
                        <div className="job_list_top_bar d-flex justify-content-start">
                            {/* <div className="job_count mx-2">
                                <p className="mt-2">Showing 1 – 10 of 18 results</p>
                            </div> */}
                            {/* <div className="mx-4">
                                <select className="form-select py-2 px-4 inputShadowNone" aria-label="Default select example">
                                    <option selected>Sort by (Default)</option>
                                    <option value="1">Newest</option>
                                    <option value="2">Oldest</option>
                                </select>
                            </div> */}
                            {/* <div className="mx-4">
                                <select onChange={(e)=>setPerPage(e.target.value)} className="form-select py-2 px-4 inputShadowNone" aria-label="Default select example">
                                    <option value="10" selected>10 Per Page</option>
                                    <option value="20">20 Per Page</option>
                                    <option value="30">30 Per Page</option>
                                </select>
                            </div> */}
                        </div>

                        <div className="col-12 mt-2">
                            {
                                count > 0 ? <nav aria-label="Page navigation example">
                                    <ReactPaginate
                                        previousLabel="<"
                                        nextLabel=">"
                                        pageClassName="page-item"
                                        pageLinkClassName="page-link"
                                        previousClassName="page-item"
                                        previousLinkClassName="page-link"
                                        nextClassName="page-item"
                                        nextLinkClassName="page-link"
                                        breakLabel="..."
                                        breakClassName="page-item"
                                        breakLinkClassName="page-link"
                                        pageCount={count / perPage}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={5}
                                        onPageChange={handlePageClick}
                                        containerClassName="pagination"
                                        activeClassName="active"
                                    />
                                </nav> : ""

                            }

                        </div>
                        {
                            jobList.length===0?<div className={isLoading ? "div_hide" : "div_block"} style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}><img src={notFound} alt="" style={{ width: "340px" }} /> </div>:""
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobList;