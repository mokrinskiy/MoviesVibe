import React from "react";
import CategoriesItem from "./CategoriesItem";

const Categories: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* description */}
            <div>
                <div className="space-y-3">
                    <h1 className="font-bold text-2xl">
                        Explore our wide variety of categories
                    </h1>
                    <p className="font-regular text-sm text-primary max-w-[900px]">
                        Whether you're looking for a comedy to make you laugh, a
                        drama to make you think, or a documentary to learn
                        something new
                    </p>
                </div>
            </div>
            {/* content */}
            <div className="flex space-x-5">
                <CategoriesItem />
            </div>
        </div>
    );
};

export default Categories;
