import React from 'react';
import NotFoundImage from "../Assets/images/notFound.jpg"
const NotFoundPage = () => {
    return (
        <div style={{background:"#FFFFFF"}}>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <img style={{width:"500px"}} src={NotFoundImage} alt="" />
            </div>
        </div>
    );
};

export default NotFoundPage;