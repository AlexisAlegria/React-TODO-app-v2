import React, { useState } from "react";
import { FaGlasses } from "react-icons/fa";

function TareaForm(props) {
    const [inputText, setInputText] = useState("");
    const [validacion, setValidacion] = useState(true);

    const handleInput = (e) => {
        setInputText(e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        if (inputText.trim() !== "") {
            props.addTodo(inputText);
            setInputText("");
            setValidacion(true);
        } else {
            setValidacion(false);
        }
    };
    return (
        <div className="container px-0">
            <div className="row">
                <form className="form d-flex flex-column justify-content-between mb-3" onSubmit={submit}>
                    <div className="col-12">
                        <input
                            className="form-control main-input"
                            value={inputText}
                            onChange={handleInput}
                            placeholder="What's new to be done today?"
                        />
                    </div>
                    <div className="col d-flex">
                        <button type="submit" className="btn btn-dark">
                            Add task
                        </button>
                    </div>
                </form>
                {!validacion && (
                    <div
                        className="alert alert-warning alert-dismissible fade show d-flex flex-row justify-content-center align-items-center"
                        role="alert"
                    >
                        <div className="glasses">
                            <FaGlasses />
                        </div>
                        <div>Add a new task, please!</div>
                        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                    </div>
                )}
            </div>
        </div>
    );
}
export default TareaForm;