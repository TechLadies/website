import Head from 'next/head';
import Gallery from '../components/Gallery';
import NavLink from '../components/NavLink';

import clsx from 'clsx';

import styles from './index.module.scss';
import programs from '../data/programs';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TechLadies</title>
      </Head>
      <main>
        <div className="container">
          <div className="pt-6 pb-6">
            <div className="row gy-6">
              <div className="col-lg-5 offset-lg-2 col-md-5 offset-md-1 order-md-last">
                <img alt="REPLACE ME" src="/img/swing.svg" />
              </div>
              <div className="col-lg-5 col-md-6 order-md-first">
                <h1 className="mb-4">
                  Kickstart or advance your career in tech
                </h1>
                <p className="mb-4">
                  TechLadies is a community that provides women with
                  connections, education and mentorships in the tech industry.
                </p>
                <div className="mb-3">
                  <label
                    htmlFor="hero-email"
                    className="form-label font-weight-bold"
                  >
                    Stay updated with our latest news
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="hero-email"
                    placeholder="E-mail address"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.quoteBackground}>
                <h2 className="mb-0">
                  Technology is meant to be accessible by all
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pt-6 pb-6 pl-lg-6 pr-lg-6">
                <div className="mb-4">
                  <img
                    className="thumbnail"
                    alt="X thumbnail"
                    src="https://i.pravatar.cc/128?img=1"
                  />
                  <img
                    className="thumbnail"
                    alt="X thumbnail"
                    src="https://i.pravatar.cc/128?img=2"
                  />
                  <img
                    className="thumbnail"
                    alt="X thumbnail"
                    src="https://i.pravatar.cc/128?img=3"
                  />
                  <img
                    className="thumbnail"
                    alt="X thumbnail"
                    src="https://i.pravatar.cc/128?img=4"
                  />
                </div>
                <p className="mb-4">
                  TechLadies is run by volunteers in the tech industry who are
                  passionate about bringing more women into tech.
                </p>
                <a className="font-weight-bold" href="#">
                  Learn more about us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="pt-6 pb-6">
            <div className="row gy-5">
              <div className="col-md-4">
                <h2 className="text-purple">12</h2>
                <p>
                  Ladies getting technical internships or hired in technical
                  roles.
                </p>
              </div>
              <div className="col-md-4">
                <h2 className="text-red">500+</h2>
                <p>Ladies taught technical skills in Singapore and Malaysia.</p>
              </div>
              <div className="col-md-4">
                <h2 className="text-orange">4000+</h2>
                <p>Members across Asia in our community.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="pt-6 pb-6">
            <div className="row gy-5 text-center">
              <div className="col-md-12">
                <h2>What others are saying</h2>
              </div>
              <div className="col-md-4">Her World Logo Placeholder</div>
              <div className="col-md-4">The Straits Time Logo Placeholder</div>
              <div className="col-md-4">e27 Logo Placeholder</div>
            </div>
          </div>
        </div>
        <div className={styles.programsSection}>
          <div className="container">
            <div className="pt-6 pb-6">
              <div className="row gy-5">
                <div className="col-md-6">
                  <h3 className="mb-4">
                    We have a range of programs for women of all levels of
                    technical skills
                  </h3>
                  <p className="mb-4">
                    Whether you are curious about the industry, looking to learn
                    technical skills, or levelling up your career, we have
                    something for you!
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
                          <h5 className="card-title mb-4">{title}</h5>
                          <p className="card-text">{description}</p>
                          <a className="font-weight-bold" href="#">
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
        </div>
      </main>
    </div>
  );
}
