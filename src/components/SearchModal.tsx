import React from "react";

const SearchModal: React.FC = () => {
    return (
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box bg-base-200 flex justify-center   ">
                <div className="join">
                    <div>
                        <div>
                            <input
                                className="input input-bordered join-item"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <button className="btn join-item btn-primary">
                        Search
                    </button>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default SearchModal;
