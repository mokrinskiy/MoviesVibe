import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Contact: React.FC = () => {
    return (
        <div
            className="w-full flex justify-center items-center h-[300px] bg-base-200 border-base-200 border-[3px] rounded-lg"
            style={{
                backgroundImage: "url(contact.png)",
            }}
        >
            <div className="hero-overlay flex justify-around items-center bg-opacity-80 bg-black">
                <div className="flex flex-col justify-center space-y-5">
                    <TwitterIcon style={{ height: "100px", width: "100px" }} />

                    <p className="text-3xl font-bold flex justify-center items-center">
                        Twitter
                    </p>
                </div>
                <div className="flex flex-col justify-center space-y-5">
                    <AlternateEmailIcon
                        style={{ height: "100px", width: "100px" }}
                    />
                    <p className="text-3xl font-bold flex justify-center items-center">
                        Mail
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
