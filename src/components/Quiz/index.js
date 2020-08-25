import { useState } from 'react';
import { ArrowRight } from 'react-feather';

import Modal from '../Modal';

function Question({ type, nodes }) {
  const { id, type: questionType, title, options } = type;
  const [value, setSelectedValue] = useState('');
  const nextNode = (() => {
    return nodes.find(({ value: nodeValue }) => value === nodeValue);
  })();
  const [showModal, setShowModal] = useState(false);

  if (questionType === 'result') {
    return (
      <>
        <button
          aria-label="Submit"
          className="btn btn-primary btn-sm rounded-circle"
          onClick={() => {
            setShowModal(true);
          }}
          type="button"
        >
          <ArrowRight size={32} />
        </button>
        <Modal isShown={showModal} onClose={() => setShowModal(false)}>
          <div className="text-center">
            <h2>{options[nodes[0].value]}</h2>
          </div>
        </Modal>
      </>
    );
  }

  return (
    <>
      <div className="mb-4">
        <label htmlFor={id} className="form-label font-weight-bold">
          {title}
        </label>
        <select
          id={id}
          className="form-select"
          onChange={(event) => {
            setSelectedValue(event.target.value);
          }}
          value={value}
        >
          <option value="">Select an option</option>
          {nodes.map(({ value, next }) => {
            const label = options[value];
            return (
              <option key={value} value={value}>
                {label}
              </option>
            );
          })}
        </select>
      </div>
      {nextNode != null && nextNode.next != null && (
        <Question type={nextNode.next.type} nodes={nextNode.next.nodes} />
      )}
    </>
  );
}

function Quiz({ data }) {
  const { type, nodes } = data;
  return (
    <div className="card">
      <div className="card-body">
        <Question type={type} nodes={nodes} />
      </div>
    </div>
  );
}

export default Quiz;
