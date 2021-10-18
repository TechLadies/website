import clsx from "clsx"

import styles from "./index.module.scss"
import Image from "next/image"

export default function TestimonialCard({ image, thumbnail, name, message }) {
  return (
    <div className="text-center">
      <div className={clsx("card", styles.card)}>
        <Image
          alt={name + " message"}
          src={image}
          className={clsx("card-img-top", styles.bannerImage)}
        />
        <div className="card-body">
          {thumbnail && (
            <Image
              className={clsx("thumbnail thumbnail-lg mb-3", styles.thumbnail)}
              alt={name + " thumbnail"}
              src={thumbnail}
            />
          )}
          <p className={clsx("text-emphasis")}>{message}</p>
          <h5>{name}</h5>
        </div>
      </div>
    </div>
  )
}
