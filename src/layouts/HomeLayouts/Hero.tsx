import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Hero: React.FC = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(hero.jpg)",
            }}
        >
            <div className="hero-overlay bg-opacity-80 bg-black"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">
                        The Best Streaming Experience
                    </h1>
                    <p className="mb-5 w">
                        StreamVibe is the best streaming experience for watching
                        your favorite movies and shows on demand, anytime,
                        anywhere. With StreamVibe, you can enjoy a wide variety
                        of content, including the latest blockbusters, classic
                        movies, popular TV shows, and more. You can also create
                        your own watchlists, so you can easily find the content
                        you want to watch.
                    </p>
                    <button className="btn btn-error">
                        <PlayArrowIcon />
                        Start Watching Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
