import React from "react";

interface ContentItemProps {
    index?: number;
    image_url: string;
    badge?: string;
    duration?: string;
    rating?: number;
    released?: string;
    heading: string;
}

const ContentItem: React.FC<ContentItemProps> = ({
    index,
    image_url,
    heading,
}) => {
    return (
        <div className="card h-[250px] max-md:h-[200px] max-md:w-[200px] w-[250px] bg-base-100 shadow-xl image-full">
            <figure>
                <img src={image_url} alt="Shoes" />
            </figure>
            <div className="card-body p-4 flex justify-end">
                <div className="card-actions justify-end items-baseline">
                    <button className="btn btn-primary btn-ghost">
                        {index}. {heading}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContentItem;
