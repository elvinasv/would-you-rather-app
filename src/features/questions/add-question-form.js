import React from 'react';

export default function AddQuestionForm() {
  return (
    <div className="container mw-500">
      <h2 className="text-center">Add a new question</h2>
      <div className="card">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title mb-3">Would you rather...</h5>
          <input
            type="text"
            className="form-control mb-2"
            id="poll-option-one"
            placeholder="Enter first option"
          />
          <p className="text-center mb-2">or</p>
          <input
            type="text"
            className="form-control mb-3"
            id="poll-option-two"
            placeholder="Enter second option"
          />
          <button
            type="button"
            className="btn btn-primary my-3 px-5 align-self-center"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
