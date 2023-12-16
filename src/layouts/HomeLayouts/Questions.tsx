import React from "react";
import { questions } from "../../utils/constants";
import QuestionsItem from "./QuestionsItem";

const Questions: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* description */}
            <div>
                <div className="space-y-3 flex justify-between space-x-5 items-center">
                    <div>
                        <h1 className="font-bold text-2xl">
                            Frequently Asked Questions{" "}
                        </h1>
                        <p className="font-regular text-sm text-primary max-w-[900px]">
                            Got questions? We've got answers! Check out our FAQ
                            section to find answers to the most common questions
                            about StreamVibe.
                        </p>
                    </div>
                    <button className="btn-error btn max-md:btn-sm">Ask a question</button>
                </div>
            </div>
            {/* content */}
            <div className="max-lg:flex-col flex gap-10">
                {questions.map((item, index) => (
                    <QuestionsItem
                        index={index}
                        key={item.question}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </div>
    );
};

export default Questions;
