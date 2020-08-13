import clsx from "clsx";

import styles from "./index.module.scss";

export default function Testimonials({ data, delay = 0, duration = 50000 }) {
  return (
    <div className={styles.testimonials}>
      <div
        className={styles.track}
        style={{
          animationDelay: `${delay}ms`,
          animationDuration: `${duration}ms`
        }}
      >
        {[...data, ...data].map(
          ({ image, thumbnail, name, message }, index) => (
            <div class="text-center" key={name + index}>
              <div className={clsx("card", styles.card)}>
                <img
                  alt={name + " message"}
                  src={image}
                  className={clsx("card-img-top", styles.bannerImage)}
                />
                <div class="card-body">
                  {thumbnail && (
                    <img
                      className={clsx(
                        "thumbnail thumbnail-large mb-3",
                        styles.thumbnail
                      )}
                      alt={name + " thumbnail"}
                      src={thumbnail}
                    />
                  )}
                  <p className={styles.message}>{message}</p>
                  <h5>{name}</h5>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
