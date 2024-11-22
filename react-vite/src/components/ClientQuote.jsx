import React from "react";
import Slider from "react-slick";

const QuoteSlider = () => {
    const settings = {
        dots: true, 
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        appendDots: dots => (
            <div style={{ marginTop: "20px" }}>
                <ul style={{ display: "flex", gap: "5px" }}>{dots}</ul>
            </div>
        ),
        customPaging: () => (
            <div
                style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "white",
                    border: "2px solid white",
                    cursor: "pointer",
                }}
            />
            ),
    };

    const quotes = [
        {
            quote:
                "Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and",
            name: "John Smith",
            image: "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2013.8563c402e3536c77b372.jpeg",
        },
        {
            quote:
                "Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and",
            name: "Jane Doe",
            image: "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2013.8563c402e3536c77b372.jpeg",
        },
        {
            quote:
                "Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and",
            name: "Nina Doe",
            image: "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2013.8563c402e3536c77b372.jpeg",
        },
    ];

    return (
        <div className="relative bg-transparent flex justify-start items-center">
            <Slider {...settings} className="w-full max-w-xl">
                {quotes.map((item, index) => (
                    <div key={index} className="py-6 pr-6 pl-1">
                        <div className="bg-white p-4 shadow-lg flex flex-col gap-6">
                          
                            <blockquote className="text-gray-700 italic text-lg leading-relaxed text-center">
                                "{item.quote}"
                            </blockquote>

                            <div className="flex items-center justify-center gap-4">
                                <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 rounded-full shadow-md object-cover"
                                />
                                <p className="font-semibold text-gray-900 text-lg">- {item.name}</p>
                            </div>
                        </div>
                   </div>
                ))}
            </Slider>
        </div>
    );
};

const ClientQuote = () => {
    return (
        <div
            className="bg-gray-100 py-16 pt-20"
            style={{
                backgroundImage: `url('https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2041.055bcfacd1e21f3978b9.jpeg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "580px",
            }}
        >
            <div className="container mx-auto px-4 lg:px-8 flex flex-col items-start">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Client's Quote</h2>
                <p className="text-white mt-4 text-lg">
                    Travelling salesman and above it there hung a picture
                </p>
                <div className="mt-8 w-full lg:w-2/3">
                    <QuoteSlider />
                </div>
            </div>
        </div>
    );
};

export default ClientQuote;

