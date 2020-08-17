import clsx from 'clsx';
import { ArrowRight } from 'react-feather';

import styles from './index.module.scss';

function DonationCard({
  amount,
  amountClass,
  title,
  description,
  buttonClass,
  url,
}) {
  return (
    <div className={clsx('card', styles.card)}>
      <div className={clsx('card-body', styles.cardBody)}>
        <h3 className={clsx('mt-3 mb-4', amountClass)}>${amount}</h3>
        <h6 className="mb-3">{title}</h6>
        <p className="mb-4">{description}</p>
        <a
          aria-label="Go to donation page"
          className={clsx('btn', 'btn-sm', 'rounded-circle', buttonClass)}
          href={url}
        >
          <ArrowRight color="#fff" size={24} />
        </a>
      </div>
      <a className={styles.cardHover} href={url}>
        <h3 className={amountClass}>
          Contribute
          <br />${amount}
        </h3>
      </a>
    </div>
  );
}

export default DonationCard;
