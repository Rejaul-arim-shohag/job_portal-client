import React from 'react';
import "./Category.css"
const Categories = () => {
    const fakeData = [
        {
            id: 1,
            name: "Accounting/Finance",
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/377/380/small/line-icon-for-web-develop-vector.jpg",
            position: 1
        },
        {
            id: 2,
            name: "Marketing",
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/377/380/small/line-icon-for-web-develop-vector.jpg",
            position: 1
        },
        {
            id: 3,
            name: "Design",
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/377/380/small/line-icon-for-web-develop-vector.jpg",
            position: 1
        },
        {
            id: 4,
            name: "Development",
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/377/380/small/line-icon-for-web-develop-vector.jpg",
            position: 1
        },
        {
            id: 5,
            name: "Project Management",
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/377/380/small/line-icon-for-web-develop-vector.jpg",
            position: 1
        },
        {
            id: 6,
            name: "Human Resource",
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/377/380/small/line-icon-for-web-develop-vector.jpg",
            position: 1
        },
        {
            id: 7,
            name: "Customer Service",
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/377/380/small/line-icon-for-web-develop-vector.jpg",
            position: 1
        },
        {
            id: 8,
            name: "Health care",
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/377/380/small/line-icon-for-web-develop-vector.jpg",
            position: 1
        },
        {
            id: 9,
            name: "Automotive jobs",
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/377/380/small/line-icon-for-web-develop-vector.jpg",
            position: 1
        }


    ]
    return (
        <div className="my-5 pt-2 pb-3">
            <div className="container">
                <div className="title my-5">
                    <h2 className="text-center  mt-5">Popular Job Categories</h2>
                    <h6 className="text-center  mt-3">2020 jobs live – 293 added today. </h6>
                </div>
                <div className="row">
                    {
                        fakeData.map((item, index) => {
                            return (
                                <div key={index} className="col-md-4 col-lg-4 col-12 " style={{boxSizing:"border-box"}}>
                                    <div className="category shadow-sm  px-4 py-4 my-3 d-flex justify-content-start border rounded" >
                                        <div className="icon px-2 bg-white px-4 py-3 rounded">
                                            <img className="" src={item.icon} style={{ width: "40px" }} alt="" />
                                        </div>
                                        <div className="">
                                            <h6 className="px-3">{item.name}</h6>
                                            <p className="px-3">({item.position} open positions)</p>
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