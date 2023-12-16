import React from "react";
import ContentItem from "./ContentItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface ContentProps {
    heading: string;
    paragraph?: string;
}

const Content: React.FC<ContentProps> = ({ heading, paragraph }) => {
    return (
        <div className="space-y-12">
            {/* description */}
            <div>
                <div className="space-y-3">
                    <h1 className="font-bold text-3xl">{heading}</h1>
                    <p className="font-regular text-sm text-primary max-w-[900px]">
                        {paragraph}
                    </p>
                </div>
            </div>
            {/* content */}
            <Swiper
                breakpoints={{
                    1280: {
                        slidesPerView: 5,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    640: {
                        slidesPerView: 2.5,
                    },
                    500: {
                        slidesPerView: 2,
                    },
                }}
                slidesPerView={1.5}
                navigation={true}
                modules={[Navigation]}
                spaceBetween={30}
                className="mySwiper"
            >
                <SwiperSlide>
                    <ContentItem
                        image_url="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        heading="Buy Now"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ContentItem
                        image_url="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        heading="Buy Now"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ContentItem
                        image_url="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        heading="Buy Now"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ContentItem
                        image_url="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        heading="Buy Now"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ContentItem
                        image_url="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        heading="Buy Now"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ContentItem
                        image_url="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        heading="Buy Now"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <ContentItem
                        image_url="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        heading="Buy Now"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ContentItem
                        image_url="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        heading="Buy Now"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ContentItem
                        image_url="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        heading="Buy Now"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ContentItem
                        image_url="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        heading="Buy Now"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Content;
