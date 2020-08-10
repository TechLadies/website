import Head from 'next/head';
import NavLink from '../components/NavLink';

import clsx from 'clsx';

import styles from './index.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <div className="mt-6 mb-6">
            <div className="row gy-6">
              <div className="col-lg-5 offset-lg-2 col-md-5 offset-md-1 order-md-last">
                <img alt="Lady on swing" src="/img/swing.svg" />
              </div>
              <div className="col-lg-5 col-md-6 order-md-first">
                <h1>Kickstart or advance your career in tech</h1>
                <p>
                  TechLadies is a community that provides women with
                  connections, education and mentorships in the tech industry.
                </p>
                <div className="mb-3">
                  <label htmlFor="hero-email" className="form-label">
                    <strong>Stay updated with our latest news</strong>
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
        <div className="container-fluid">
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
                    className={styles.thumbnail}
                    alt="X thumbnail"
                    src="https://i.pravatar.cc/128?img=1"
                  />
                  <img
                    className={styles.thumbnail}
                    alt="X thumbnail"
                    src="https://i.pravatar.cc/128?img=2"
                  />
                  <img
                    className={styles.thumbnail}
                    alt="X thumbnail"
                    src="https://i.pravatar.cc/128?img=3"
                  />
                  <img
                    className={styles.thumbnail}
                    alt="X thumbnail"
                    src="https://i.pravatar.cc/128?img=4"
                  />
                </div>
                <h3 className="mb-4">
                  TechLadies is run by volunteers in the tech industry who are
                  passionate about bringing more women into tech.
                </h3>
                <a href="#">Learn more about us</a>
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
                <div className="col-md-4">
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
                <div className="col-md-6 offset-md-2">
                  <div className={styles.programsCardScroller}>
                    <div className={styles.programsCardContainer}>
                      <div className={clsx('card', styles.programsCard)}>
                        <img
                          alt="Program Image"
                          src="https://picsum.photos/400/300"
                          className={clsx(
                            'card-img-top',
                            styles.programsCardImage,
                          )}
                        />
                        <div class="card-body">
                          <h5 class="card-title">TechLadies Bootcamp</h5>
                          <p class="card-text">
                            Looking to be professional programmer? This is a
                            part-time accelerated learning program guided by
                            industry experts to create a product. 30% of the
                            TechLadies Bootcamp graduates found software-related
                            jobs and internships.
                          </p>
                          <a href="#">Learn More</a>
                        </div>
                      </div>
                    </div>
                    <div className={styles.programsCardContainer}>
                      <div className={clsx('card', styles.programsCard)}>
                        <img
                          alt="Program Image"
                          src="https://picsum.photos/400/300"
                          className={clsx(
                            'card-img-top',
                            styles.programsCardImage,
                          )}
                        />
                        <div class="card-body">
                          <h5 class="card-title">TechLadies Bootcamp</h5>
                          <p class="card-text">
                            Looking to be professional programmer? This is a
                            part-time accelerated learning program guided by
                            industry experts to create a product. 30% of the
                            TechLadies Bootcamp graduates found software-related
                            jobs and internships.
                          </p>
                          <a href="#">Learn More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
