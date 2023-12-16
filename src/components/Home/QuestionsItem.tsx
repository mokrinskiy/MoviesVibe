import React from "react";

interface QuestionsItemProqs {
    index: number;
    question: string;
    answer: string;
}

const QuestionsItem: React.FC<QuestionsItemProqs> = ({
    index,
    question,
    answer,
}) => {
    return (
        <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
                {index + 1}. {question}
            </div>
            <div className="collapse-content">
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default QuestionsItem;
