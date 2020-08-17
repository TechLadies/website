import { useState, Fragment } from 'react';
import { ChevronDown, ChevronRight } from 'react-feather';

import clsx from 'clsx';

import styles from './index.module.scss';

const ICON_SIZE = 20;

function Accordion({ data }) {
  const [selected, setSelected] = useState(null);

  return (
    <ul className="list-group">
      {data.map(({ key, item, details }, index) => {
        const isSelected = selected === index;

        return (
          <Fragment key={key}>
            <li
              className={clsx('list-group-item', 'd-flex', styles.listItem)}
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
              <div>{item}</div>
            </li>
            {isSelected && <li className="list-group-item">{details}</li>}
          </Fragment>
        );
      })}
    </ul>
  );
}

export default Accordion;
