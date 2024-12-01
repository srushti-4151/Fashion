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
            image: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYxOEU3RUQ0NUFGOTExRUJBQ0Y3OTlBRTE0QzZGNUMzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYxOEU3RUQzNUFGOTExRUJBQ0Y3OTlBRTE0QzZGNUMzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRThDODk3NzQzNDcxMUVCOUY4Q0JBRUExQ0M3NDI2RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRThDODk3ODQzNDcxMUVCOUY4Q0JBRUExQ0M3NDI2RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYI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",
        },
        {
            quote:
                "Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and",
            name: "Jane Doe",
            image: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZENTQ5NUJDNUFGOTExRUI4QTJGOTU4RjlFNDdBOUI2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZENTQ5NUJCNUFGOTExRUI4QTJGOTU4RjlFNDdBOUI2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRThDODk3NzQzNDcxMUVCOUY4Q0JBRUExQ0M3NDI2RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRThDODk3ODQzNDcxMUVCOUY4Q0JBRUExQ0M3NDI2RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYI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",
        },
        {
            quote:
                "Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and",
            name: "Nina Doe",
            image: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgwM0UyMjVCNUI5ODExRUJCQzQ0ODc4OTJGODFFN0IzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgwM0UyMjVBNUI5ODExRUJCQzQ0ODc4OTJGODFFN0IzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM1OThBNzdBN0VBMTExRTk4RjY3Q0M0REE2RDQ1QUFBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM1OThBNzdCN0VBMTExRTk4RjY3Q0M0REE2RDQ1QUFBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJ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",
        },
    ];

    return (
        <div className="w-full overflow-hidden relative bg-transparent flex justify-start items-center" data-aos-duration="1000" data-aos="zoom-in-up">
            <Slider {...settings} className="w-full max-w-xl">
                {quotes.map((item, index) => (
                    <div key={index} className="py-6">
                        <div className="bg-white p-4 shadow-lg flex flex-col gap-6">
                          
                            <blockquote className="text-gray-500 italic text-lg leading-relaxed text-center">
                                "{item.quote}"
                            </blockquote>

                            <div className="flex items-center justify-center gap-4">
                                <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 rounded-full shadow-md object-cover"
                                />
                                <p className="font-sans font-semibold text-gray-900 uppercase">- {item.name}</p>
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
        <div className="m-auto overflow-hidden">
        <div
            className="bg-gray-100 py-16 pt-20 mt-10"
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
        </div>
    );
};

export default ClientQuote;

