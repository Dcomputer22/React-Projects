import { data } from './data.js';
import './Accordion.scss';
import { useState } from 'react';

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultitSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(cpyMultiple);
  };

  return (
    <div className={'wrapper'}>
      <button onClick={() => setEnableMultiSelection(!enableMultitSelection)}>
        Enable Multi Selection
      </button>
      <div className={'wrapper_accordion-wrapper'}>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className={'wrapper_accordion-wrapper_item'}>
              <div
                onClick={
                  enableMultitSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className={'wrapper_accordion-wrapper_item_title'}
              >
                <h3>{item.question}</h3>
                {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                  <span>-</span>
                ) : (
                  <span>+</span>
                )}
              </div>
              {enableMultitSelection
                ? multiple.indexOf(item.id) !== -1 && <div>{item.answer}</div>
                : selected === item.id && <div>{item.answer}</div>}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
