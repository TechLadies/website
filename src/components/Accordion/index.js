import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'react-feather';

import clsx from 'clsx';

import styles from './index.module.scss';

const ICON_SIZE = 20;

function Accordion({ data }) {
  const [selected, setSelected] = useState(null);

  return (
    <ul className="list-group">
      {data.map(({ item, details }, index) => {
        const isSelected = selected === index;

        return (
          <>
            <li
              className={clsx('list-group-item', styles.listItem)}
              key={index}
              onClick={() => {
                setSelected(isSelected ? null : index);
              }}
            >
              <button
                aria-label="Toggle question display"
                className={clsx(
                  'btn',
                  'btn-link',
                  'btn-sm',
                  styles.iconContainer,
                )}
              >
                {isSelected ? (
                  <ChevronDown size={ICON_SIZE} />
                ) : (
                  <ChevronRight size={ICON_SIZE} />
                )}
              </button>
              {item}
            </li>
            {isSelected && (
              <li className="list-group-item" key={index + '-detail'}>
                {details}
              </li>
            )}
          </>
        );
      })}
    </ul>
  );
}

export default Accordion;
