import { useState } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

// This component is not a11y-friendly due to time constraints :(
function Accordion({ data }) {
  const [selected, setSelected] = useState(null);

  return (
    <ul className="list-group">
      {data.map(({ item, details }, index) => (
        <>
          <li
            className={clsx('list-group-item', styles.listItem)}
            key={index}
            onClick={() => {
              setSelected(index);
            }}
          >
            {item}
          </li>
          {selected === index && (
            <li className="list-group-item" key={index + '-detail'}>
              {details}
            </li>
          )}
        </>
      ))}
    </ul>
  );
}

export default Accordion;
