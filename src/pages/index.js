import { useEffect, useState } from 'react';
import Head from 'next/head';
import Gallery from '../components/Gallery';
import NavLink from '../components/NavLink';
import clsx from 'clsx';
import styles from './index.module.scss';
import programs from '../data/programs';
import preloadImages from '../utils/preloadImages';
import { useForm } from 'react-hook-form'
import Modal from '../components/Modal'

export default function Home () {
  const { register, handleSubmit, reset } = useForm()
  const [addContactFeedback, setAddContactFeedback] = useState(null)

  const handleAddEmail = data => {
    fetch('./api/addContact/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: data.email })
    }).then(function (res) {
      if (res.ok) {
        setAddContactFeedback('Thank you, your email is added to our list')
        reset()
      } else {
        setAddContactFeedback('Something went wrong. Your email was not added')
      }
    })
  }

  useEffect(() => {
    preloadImages(programs.map((program) => program.image));
  }, [programs]);

  return (
    <div>
      <Head>
        <title>TechLadies</title>
      </Head>
      <main>
        <div className="container py-6">
          <div className="row gy-6">
            <div className="col-lg-5 offset-lg-2 col-md-5 offset-md-1 order-md-last">
              <img
                alt="TODO: REPLACE ME"
                className="img-fluid"
                src="/illustrations/illus_home.png"
              />
            </div>
            <div className="col-lg-5 col-md-6 order-md-first">
              <h1 className="mb-4 h2">
                Start and grow your career in tech
              </h1>
              <p className="mb-4 text-body">
                TechLadies is a community in Asia that supports women with the network, education and mentorship for their careers in technical roles.
              </p>
              <div className="mb-3">
                <label
                  htmlFor="hero-email"
                  className="form-label font-weight-bold"
                >
                  Get updates on our activities
                </label>
                <form onSubmit={handleSubmit(handleAddEmail)}>
                  <div className="input-group">
                    <input
                      name="email"
                      className={clsx('form-control', styles.emailTextfieldWithRightButton)}
                      placeholder="E-mail address"
                      required={true}
                      type="email"
                      ref={register}
                    />
                    <button className={clsx(styles.paperPlaneButton)} type="submit"><div className={styles.paperPlaneSvg}></div></button>
                  </div>
                </form>
                {
                  addContactFeedback && (<div>{addContactFeedback}</div>)
                }
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.quoteBackground}>
                <h2 className="mb-0 text-center">
                  Technology should be inclusive and accessible by all
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pt-6 pb-6 pl-lg-6 pr-lg-6">
                <div className="mb-4">
                  <img
                    className="thumbnail"
                    alt="TODO: REPLACE ME"
                    src="/team/angel.png"
                  />
                  <img
                    className="thumbnail"
                    alt="TODO: REPLACE ME"
                    src="/team/choryi.jpeg"
                  />
                  <img
                    className="thumbnail"
                    alt="TODO: REPLACE ME"
                    src="/team/tejasvita.jpeg"
                  />
                  <img
                    className="thumbnail"
                    alt="TODO: REPLACE ME"
                    src="/team/anna.jpeg"
                  />
                </div>
                <p className="mb-4 text-emphasis">
                  TechLadies is managed by volunteers who are passionate about increasing gender diversity in the tech industry, particularly in software engineering, product management, product design and data roles!
                </p>
                <a className="font-weight-bold" href="#">
                  Learn more about us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-6">
          <div className="row gy-5">
            <div className="col-md-4">
              <h2 className="text-purple mb-3">10+</h2>
              <p className="text-body">
                Ladies switching careers into technical roles
              </p>
            </div>
            <div className="col-md-4">
              <h2 className="text-red mb-3">500+</h2>
              <p className="text-body">
                Ladies trained in technical skills
              </p>
            </div>
            <div className="col-md-4">
              <h2 className="text-orange mb-3">4000+</h2>
              <p className="text-body">Community members in Asia</p>
            </div>
          </div>
        </div>
        <div className="container py-6">
          <div className="row gy-5 text-center">
            <div className="col-md-10 offset-md-1">
              <h2>What others are saying</h2>
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
                  className="mb-4 center-image"
                  height="260"
                  src="/illustrations/illus_programmes.png"
                />
                <h3 className="mb-4 h4">
                  Find a range of programs for women of all levels of technical skills
                </h3>
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
                        <h5 className="card-title mb-3">{title}</h5>
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
    </div>
  );
}
