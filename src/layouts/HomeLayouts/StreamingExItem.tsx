import React from "react";

interface StreamingExItemProps {
    Icon: any;
    name: string;
    description: string;
}

const StreamingExItem: React.FC<StreamingExItemProps> = ({
    Icon,
    name,
    description,
}) => {
    return (
        <div className="bg-base-200 max-w-[350px] min-h-[200px] p-6 space-y-2">
            <div className="flex space-x-3 items-center">
                <span className="btn btn-circle bg-base-300">
                    {<Icon className="text-error " />}
                </span>
                <h1 className="text-white font-bold text-xl">{name}</h1>
            </div>
            <p className="font-regular">{description}</p>
        </div>
    );
};

export default StreamingExItem;
