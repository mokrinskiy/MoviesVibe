import React from "react";
import StreamingEx from "../components/Home/StreamingEx";
import Questions from "../components/Home/Questions";
import Contact from "../components/Home/Contact";
import Hero from "../components/Home/Hero";
import Content from "../components/Content";

const Home: React.FC = () => {
    return (
        <div className="space-y-28">
            <Hero />
            <div className="px-4 m-auto max-w-[1400px] space-y-52 pb-[100px]">
                <Content
                    heading="Explore our wide variety of categories"
                    paragraph="Whether you're looking for a comedy to make you laugh, a
                        drama to make you think, or a documentary to learn
                        something new"
                />
                <StreamingEx />
                <Questions />
                <Contact />
            </div>
        </div>
    );
};

export default Home;
