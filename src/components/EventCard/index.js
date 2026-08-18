import clsx from "clsx"

import styles from "./index.module.scss"

export default function EventCard({ image, title, date, url, status, wide }) {
  const isUpcoming = status === "upcoming"

  return (
    <div className={clsx("card", styles.card)}>
      <div className={clsx("row g-0", wide && "align-items-center")}>
        <div className={wide ? "col-md-5" : "col-12"}>
          <img
            alt={title}
            className={clsx(styles.poster, !isUpcoming && styles.posterPast)}
            src={image}
          />
        </div>
        <div className={wide ? "col-md-7" : "col-12"}>
          <div className={clsx("card-body", !wide && "card-body-sm")}>
            <span
              className={clsx(
                "badge mb-3",
                isUpcoming ? "bg-purple" : "bg-secondary",
              )}
            >
              {isUpcoming ? "Upcoming" : "Past"}
            </span>
            <h4 className="mb-3">{title}</h4>
            <p className="text-body mb-4">{date}</p>
            {isUpcoming && (
              <a
                className="btn btn-primary"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                Sign up on Luma
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
