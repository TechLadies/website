import clsx from 'clsx';

import styles from './index.module.scss';

export default function TestimonialCard({ image, thumbnail, name, message }) {
  return (
    <div className="text-center">
      <div className={clsx('card', styles.card)}>
        <img
          alt={name + ' message'}
          src={image}
          className={clsx('card-img-top', styles.bannerImage)}
        />
        <div className="card-body">
          {thumbnail && (
            <img
              className={clsx('thumbnail thumbnail-lg mb-3', styles.thumbnail)}
              alt={name + ' thumbnail'}
              src={thumbnail}
            />
          )}
          <p className={styles.message}>{message}</p>
          <h5>{name}</h5>
        </div>
      </div>
    </div>
  );
}
