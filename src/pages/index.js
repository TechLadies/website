import { useEffect } from 'react';
import Gallery from '../components/Gallery';
import NavLink from '../components/NavLink';
import clsx from 'clsx';
import styles from './index.module.scss';
import programs from '../data/programs';
import preloadImages from '../utils/preloadImages';
import EmailSubscription from '../components/EmailSubscription'

export default function Home () {

  useEffect(() => {
    preloadImages(programs.map((program) => program.image));
  }, [programs]);

  return (
    <main>
      <div className="container py-6">
        <div className="row gy-6">
          <div className="col-lg-5 offset-lg-2 col-md-5 offset-md-1 order-md-last">
            <img
              alt="Join the TechLadies Community"
              className="img-fluid"
              src="/illustrations/illus_home.png"
            />
          </div>
          <div className="col-lg-5 col-md-6 order-md-first">
            <h1 className="mb-4">
              Start and grow your career in tech
              </h1>
            <p className="mb-4 text-body large-line-height">
              TechLadies is a community in Asia that supports women with the network, education, and mentorship for their careers in technical roles.
              </p>
            <div className="mb-3">
              <label
                htmlFor="hero-email"
                className="form-label font-weight-bold"
              >
                Get updates on our activities
                </label>
              <EmailSubscription />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={styles.quoteBackground}>
              <h2 className="mb-0 text-center">
                Technology should be inclusive and accessible by all.
                </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="pt-6 pb-6 pl-lg-6 pr-lg-6">
              <div className="mb-4">
                <img
                  className="thumbnail"
                  alt="Angel"
                  src="/team/angel.png"
                />
                <img
                  className="thumbnail"
                  alt="Chor Yi"
                  src="/team/choryi.jpeg"
                />
                <img
                  className="thumbnail"
                  alt="Tejasvita"
                  src="/team/tejasvita.jpeg"
                />
                <img
                  className="thumbnail"
                  alt="Anna"
                  src="/team/anna.jpeg"
                />
              </div>
              <p className="mb-4 text-emphasis">
                TechLadies is managed by volunteers passionate about increasing gender diversity in the tech industry.
                </p>
              <a className="font-weight-bold" href="#">
                Learn More About Us
                </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-6">
        <div className="row gy-5">
          <div className="col-md-4">
            <h1 className="text-orange mb-3">4200+</h1>
            <p className="text-body">
              Community members in Asia interested in growing or starting their careers in tech
              </p>
          </div>
          <div className="col-md-4">
            <h1 className="text-red mb-3">500+</h1>
            <p className="text-body">
              Ladies trained in technical and soft skills vital in the tech industry
              </p>
          </div>
          <div className="col-md-4">
            <h1 className="text-purple mb-3">10+</h1>
            <p className="text-body">
              Ladies successfully switched careers into technical roles through our programs
              </p>
          </div>
        </div>
      </div>
      <div className="container py-6">
        <div className="row gy-5 text-center">
          <div className="col-md-8 offset-md-2">
            <h3 className="large-line-height mb-4">Featured on</h3>
            <img
              alt="Press Coverage"
              className="img-fluid"
              src="/media/press.png"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray">
        <div className="container py-6">
          <div className="row gy-5">
            <div className="col-md-6 d-flex flex-column align-items-start justify-content-center">
              <img
                className="mb-4"
                height="260"
                src="/illustrations/illus_programmes.png"
              />
              <h2 className="mb-4">
                Find a range of programs for women of all technical abilities
                </h2>
              <p className="text-body mb-4">
                Whether you are curious about the industry, looking to learn technical skills, or levelling up your career, TechLadies is for you!
                </p>
              <NavLink href="/our-programs/">
                <a className="btn btn-primary">See Our Programs</a>
              </NavLink>
            </div>
            <div className="col-md-5 offset-md-1">
              <Gallery>
                {programs.map(({ image, title, description }) => (
                  <div className="card" key="title">
                    <img
                      alt={title + ' image'}
                      src={image}
                      className={clsx(
                        'card-img-top',
                        styles.programsCardImage,
                      )}
                    />
                    <div className="card-body">
                      <h3 className="card-title mb-3">{title}</h3>
                      <p className="card-text mb-3">{description}</p>
                      <a className="font-weight-bold" href="/our-programs">
                        Learn More
                        </a>
                    </div>
                  </div>
                ))}
              </Gallery>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
