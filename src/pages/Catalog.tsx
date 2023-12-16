import React from "react";
import Content from "../components/Content";
import CatalogHero from "../components/CatalogHero";

const Catalog: React.FC = () => {
    return (
        <div className="px-4 m-auto max-w-[1400px] pb-[100px] space-y-28">
            <CatalogHero />
            {/* movies */}
            <div className="rounded-lg border-primary border-[1px] p-4">
                <div className="bg-error w-[100px] flex justify-center items-center p-2 rounded-lg mb-6 bottom-9 relative">
                    Movies
                </div>
                <div className="space-y-28">
                    <Content heading="Now playing" />
                    <Content heading="Our Genres" />
                    <Content heading="Trending Now" />
                    <Content heading="Popular Top" />
                    <Content heading="Our Genres" />
                </div>
            </div>
            {/* tv shows */}
            <div className="rounded-lg border-primary border-[1px] p-4">
                <div className="bg-error w-[100px] flex justify-center items-center p-2 rounded-lg mb-6 bottom-9 relative">
                    TV Shows
                </div>
                <div className="space-y-28">
                    <Content heading="Airing Today" />
                    <Content heading="Trending Now" />
                    <Content heading="Popular Top" />
                    <Content heading="Our Genres" />
                </div>
            </div>
        </div>
    );
};

export default Catalog;
