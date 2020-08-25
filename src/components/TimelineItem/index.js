import styles from './index.module.scss';

import clsx from 'clsx';

function TimelineItem({ children, isLast, number, position = 'left' }) {
  return (
    <li className="row">
      <div
        className={clsx('col-10', 'col-md-5', {
          'order-last': position === 'left',
          'order-md-first': position === 'left',
          'text-md-right': position === 'left',
          'order-md-last': position === 'right',
          'text-md-left': position === 'right',
        })}
      >
        {children}
      </div>
      <div
        className={clsx(
          'col-2',
          'order-first',
          'text-center',
          { 'order-md-last': position === 'left' },
          { 'order-md-first': position === 'right' },
          { 'offset-md-5': position === 'right' },
        )}
      >
        <div
          className={clsx(
            'd-flex',
            'flex-column',
            'text-center',
            styles.container,
          )}
        >
          <div>
            <span className={styles.number}>{number}</span>
          </div>
          {!isLast && (
            <div className="flex-grow-1">
              <div className={styles.line} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default TimelineItem;
