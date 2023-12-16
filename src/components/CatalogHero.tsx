import React from "react";

const CatalogHero: React.FC = () => {
    return (
        <div
            className="hero min-h-screen bg-primary"
            style={{
                backgroundImage: `url()`,
            }}
        >
            <div className="hero-overlay bg-opacity-80 bg-black"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">LolKek</h1>
                    <p className="mb-5 w">
                        StreamVibe is the best streaming experience for watching
                        your favorite movies.
                    </p>
                    <button className="btn btn-error">
                        Start watching now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CatalogHero;
