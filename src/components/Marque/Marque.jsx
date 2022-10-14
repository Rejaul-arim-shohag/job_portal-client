import React from 'react';
import Marquee from "react-easy-marquee";
const Marque = () => {
    const images = [
        { image: "https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/b7.jpg" },
        { image: "https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/b6.jpg" },
        { image: "https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/b4.jpg" },
        { image: "https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/b4.jpg" },
        { image: "https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/b7.jpg" },
        { image: "https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/b5.jpg" },
        { image: "https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/b7.jpg" },
        { image: "https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/b1.jpg" },
    ]
    return (
        <div>
            <Marquee duration={10000}
                background="#F9F8F8"
                height="150px"
                width="100%"
                axis="X"
                align="center"
                pauseOnHover={true}
                reverse={false}>
                {
                    images.map((item, index) => {
                        return (
                            <div key={index}>
                                <img src={item.image} alt="" />
                            </div>
                        )
                    })
                }

            </Marquee>
        </div>
    );
};

export default Marque;