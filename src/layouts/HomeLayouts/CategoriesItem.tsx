import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CategoriesItem: React.FC = () => {
    return (
        <div className="card h-[250px] w-[250px] bg-base-100 shadow-xl image-full">
            <figure>
                <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body p-3 flex justify-end">
                <div className="card-actions justify-end items-baseline">
                    <button className="btn btn-primary btn-ghost">
                        Buy Now <ArrowForwardIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CategoriesItem;
