import styles from "./index.module.scss"
import clsx from "clsx"

function MentorsCard(props) {
  const { handleViewMentors, dataMessage, mentors, icon } = props
  return (
    <div className="col-lg-3 col-md-6">
      <div className="card">
        <div className="card-body card-body-sm">
          <img
            className="thumbnail thumbnail-lg mx-auto d-block space-bottom-10"
            alt="Mentors"
            src={icon}
          />
          <h6 className="text-center my-4">{mentors.title}</h6>
          <div className="d-flex flex-row flex-wrap justify-content-center">
            <img
              className="thumbnail thumbnail-md"
              alt="Denise"
              src={mentors.mentors[0].image}
            />
            <img
              className="thumbnail thumbnail-md"
              alt="Archanaa"
              src={mentors.mentors[1].image}
            />
            <img
              className="thumbnail thumbnail-md"
              alt="waihon"
              src={mentors.mentors[2].image}
            />
          </div>
          <div className={clsx(styles.viewMentors)}>
            <button
              type="button"
              className="btn btn-link"
              onClick={handleViewMentors}
              data-message={dataMessage}
            >
              View All {mentors.mentors.length} Mentors
            </button>
          </div>
          <div className={clsx(styles.whiteTransparent)}></div>
        </div>
      </div>
    </div>
  )
}

export default MentorsCard
