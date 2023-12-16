import React from "react";
import StreamingExItem from "./StreamingExItem";
import { platforms } from "../../utils/constants";

const StreamingEx: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* description */}
            <div>
                <div className="space-y-3">
                    <h1 className="font-bold text-2xl">
                        We Provide you streaming experience across various
                        devices.
                    </h1>
                    <p className="font-regular text-sm text-primary max-w-[900px]">
                        With StreamVibe, you can enjoy your favorite movies and
                        TV shows anytime, anywhere. Our platform is designed to
                        be compatible with a wide range of devices, ensuring
                        that you never miss a moment of entertainment.
                    </p>
                </div>
            </div>
            {/* content */}
            <div className="w-full flex justify-center items-center">
                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10">
                    {platforms.map((item) => (
                        <StreamingExItem
                            key={item.name}
                            Icon={item.icon}
                            name={item.name}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StreamingEx;
