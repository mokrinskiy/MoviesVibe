import React from "react";
import Hero from "../layouts/HomeLayouts/Hero";
import Categories from "../layouts/HomeLayouts/Categories";
import StreamingEx from "../layouts/HomeLayouts/StreamingEx";
import Questions from "../layouts/HomeLayouts/Questions";
import Contact from "../layouts/HomeLayouts/Contact";

const Home: React.FC = () => {
    return (
        <div className="space-y-28">
            <Hero />
            <div className="px-4 m-auto max-w-[1400px] space-y-52 pb-[100px]">
                <Categories />
                <StreamingEx />
                <Questions />
                <Contact />
            </div>
        </div>
    );
};

export default Home;
