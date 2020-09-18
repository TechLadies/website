import Head from 'next/head';

import clsx from 'clsx';

import {
  softwareEngineering,
  uiuxDesign,
  productManagement,
  dataScience,
} from '../data/mentorship-2-mentors';

import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';

import mentorshipTimeline from '../data/mentorship-timeline';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mentorship #2 | TechLadies</title>
      </Head>
      <main>
        <div className="container py-6">
          <div className="row gy-6">
            <div className="col-md-6">
              <p className="mb-4">
                <h3>TechLadies Mentorship (June to Sept 2020)</h3>
                <br />
                <br />
                TechLadies Mentorship is a 12-week program, running from late
                Jun - Sep 2020, to provide women with personal career guidance
                from experienced industry practitioners as they grow their
                career in technology.
                <br />
                <br />
                Our mentorship program will kick off on Monday, 22nd June 2020,
                with one mentor matched to each mentee. There are the 4 fields
                we focus on: Software Engineering, UI/UX Design, Data
                Science/Engineering/Analysis, Product Management.
                <br />
                <br />
                Ideal mentees are women with existing careers in the above roles
                and want to level up in their careers, or women (including fresh
                grads) with existing domain knowledge in the above roles and are
                looking for employment opportunities.
              </p>
            </div>
            <div className="col-md-5  offset-md-1">
              <img
                alt="TODO: REPLACE ME"
                className="img-fluid"
                src="/img/img1_PLACEHOLDER_REMOVE_ME.png"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row">
              <div className=" col-md-10">
                <h3>Application Fees</h3>
                <p>
                  Full scholarships are provided for people with financial
                  difficulties. We welcome women of all backgrounds and
                  nationalities to apply, and only 8 ladies will be selected for
                  this program. These ladies will work in teams of 4.
                </p>

                <a
                  className="btn btn-primary"
                  href="mailto:bootcamp@techladies.co"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row">
            <h2 className="text-center mb-5">Mentees Program Requirements</h2>
            <div className="col-md-4">
              <img
                className="thumbnail thumbnail-sm"
                alt="TODO: REPLACE ME"
                src="https://i.pravatar.cc/128?img=1"
              />
              <h6>Goal Setting</h6>
              <p>
                Have a clear goal for what you'll like to achieve from this
                program
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="thumbnail thumbnail-sm"
                alt="TODO: REPLACE ME"
                src="https://i.pravatar.cc/128?img=1"
              />
              <h6>Bi-weekly commitments</h6>
              <p>
                Commit to bi-weekly meetings (offline/virtual) with their
                mentors from Jun 2020 - Aug 2020
                <br />
                Reports to feedback your progress with your mentor and a short
                progress report
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="thumbnail thumbnail-sm"
                alt="TODO: REPLACE ME"
                src="https://i.pravatar.cc/128?img=1"
              />
              <h6>Final Presentation</h6>
              <p>Present a final project at the end of the program</p>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row">
            <h2 className="text-center mb-5">Why join us as a Mentee?</h2>
            <div className="col-md-4">
              <img
                className="thumbnail thumbnail-sm"
                alt="TODO: REPLACE ME"
                src="https://i.pravatar.cc/128?img=1"
              />
              <h6>Grow your career in tech</h6>
              <p>
                One of the best ways to advance in the work you do is to learn
                from a mentor, someone who has a wealth of experience and is
                able to give you the guidance, feedback, and institutional
                knowledge. In a mentorship, you can also develop a better
                awareness of your strengths and weaknesses to reach your
                specific career goals.
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="thumbnail thumbnail-sm"
                alt="TODO: REPLACE ME"
                src="https://i.pravatar.cc/128?img=1"
              />
              <h6>Expand your professional network</h6>
              <p>
                Working with a mentor is also a great chance to be introduced to
                networks, companies and individuals which you previously never
                had access to. The benefits of an expanded network is abundant,
                ranging from broadened perspectives, new collaborations or even
                employment opportunities!
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="thumbnail thumbnail-sm"
                alt="TODO: REPLACE ME"
                src="https://i.pravatar.cc/128?img=1"
              />
              <h6>Structured program</h6>
              <p>
                {' '}
                We know how difficult it can be to find a mentor that is right
                for you and develop a relationship from there. The TechLadies
                Mentorship team has designed a structured program that has
                helped make the journey of mentorship fruitful and enjoyable for
                both mentors and mentees! In our program, we will be matching
                you with experienced and passionate mentors from the TechLadies
                community! Check out our mentors below!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row text-center">
              <img
                className="thumbnail thumbnail-sm"
                alt="TODO: REPLACE ME"
                src="https://i.pravatar.cc/128?img=1"
              />
              <p>
                “I thought the overall organisation by TechLadies was great.
                Clear communication and enough guidance to keep us on track,
                without being overly prescriptive. The kickoff session was good
                too -- it set clear expectations on both mentor and mentee, and
                that was very useful.”
              </p>
              <p>
                <b>Jill Quek, TechLadies Mentor (2019)</b>
              </p>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row">
            <h2 className="mb-4 text-center">Mentors for 2020</h2>
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body card-body-sm">
                    <img
                      className="img-fluid"
                      alt="Software Engineering icon"
                      src="/icons/icon_softwaredevelopment.png"
                    />
                    <h6 className="card-title">Software Engineering</h6>
                    <div className="mb-3">
                      <img
                        className="thumbnail thumbnail-sm"
                        alt="TODO: REPLACE ME"
                        src="https://i.pravatar.cc/128?img=1"
                      />
                      <img
                        className="thumbnail thumbnail-sm"
                        alt="TODO: REPLACE ME"
                        src="https://i.pravatar.cc/128?img=2"
                      />
                      <img
                        className="thumbnail thumbnail-sm"
                        alt="TODO: REPLACE ME"
                        src="https://i.pravatar.cc/128?img=3"
                      />
                      <img
                        className="thumbnail thumbnail-sm"
                        alt="TODO: REPLACE ME"
                        src="https://i.pravatar.cc/128?img=4"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body card-body-sm">
                    <img
                      className="img-fluid"
                      alt="UI/UX Design icon"
                      src="/icons/icon_UIUX.png"
                    />
                    <h6 className="card-title">UI/UX Design</h6>
                    <div className="mb-3">
                      <img
                        className="thumbnail thumbnail-sm"
                        alt="TODO: REPLACE ME"
                        src="https://i.pravatar.cc/128?img=1"
                      />
                      <img
                        className="thumbnail thumbnail-sm"
                        alt="TODO: REPLACE ME"
                        src="https://i.pravatar.cc/128?img=2"
                      />
                      <img
                        className="thumbnail thumbnail-sm"
                        alt="TODO: REPLACE ME"
                        src="https://i.pravatar.cc/128?img=3"
                      />
                      <img
                        className="thumbnail thumbnail-sm"
                        alt="TODO: REPLACE ME"
                        src="https://i.pravatar.cc/128?img=4"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body card-body-sm">
                    <img
                      className="img-fluid"
                      alt="Data Science icon"
                      src="/icons/icon_datascience.png"
                    />
                    <h6 className="card-title">Data Science</h6>
                    <div className="mb-3">
                      <img
                        className="thumbnail thumbnail-sm"
                        alt="TODO: REPLACE ME"
                        src="https://i.pravatar.cc/128?img=1"
                      />
                      <img
                        className="thumbnail thumbnail-sm"
                        alt="TODO: REPLACE ME"
                        src="https://i.pravatar.cc/128?img=2"
                      />
                      <img
                        className="thumbnail thumbnail-sm"
                        alt="TODO: REPLACE ME"
                        src="https://i.pravatar.cc/128?img=3"
                      />
                      <img
                        className="thumbnail thumbnail-sm"
                        alt="TODO: REPLACE ME"
                        src="https://i.pravatar.cc/128?img=4"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body card-body-sm">
                    <img
                      className="img-fluid"
                      alt="Product Management icon"
                      src="/icons/icon_productmanagement.png"
                    />
                    <h6 className="card-title">Product Management</h6>
                    <div className="mb-3">
                      <img
                        className="thumbnail thumbnail-sm"
                        alt="TODO: REPLACE ME"
                        src="https://i.pravatar.cc/128?img=1"
                      />
                      <img
                        className="thumbnail thumbnail-sm"
                        alt="TODO: REPLACE ME"
                        src="https://i.pravatar.cc/128?img=2"
                      />
                      <img
                        className="thumbnail thumbnail-sm"
                        alt="TODO: REPLACE ME"
                        src="https://i.pravatar.cc/128?img=3"
                      />
                      <img
                        className="thumbnail thumbnail-sm"
                        alt="TODO: REPLACE ME"
                        src="https://i.pravatar.cc/128?img=4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row">
            <h2 className="mb-4 text-center">Mentors for 2020</h2>
            <div className="row">
              <h4>Software Engineering</h4>
              {softwareEngineering.map(
                ({ image, title, link, description }) => (
                  <div className="row gy-3 mb-4" key={title}>
                    <div className="col-md-2">
                      <img
                        className="thumbnail thumbnail-lg"
                        alt={title + ' image'}
                        src={image}
                      />
                    </div>

                    <div className="col-md-10">
                      <h6 className="mb-3">
                        {title} (<a src={link}>LinkedIn</a>)
                      </h6>
                      <p>{description}</p>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="row">
              <h4>UI/UX Design</h4>
              {uiuxDesign.map(({ image, title, link, description }) => (
                <div className="row gy-3 mb-4" key={title}>
                  <div className="col-md-2">
                    <img
                      className="thumbnail thumbnail-lg"
                      alt={title + ' image'}
                      src={image}
                    />
                  </div>

                  <div className="col-md-10">
                    <h6 className="mb-3">
                      {title} (<a src={link}>LinkedIn</a>)
                    </h6>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="row">
              <h4>Product Management</h4>
              {productManagement.map(({ image, title, link, description }) => (
                <div className="row gy-3 mb-4" key={title}>
                  <div className="col-md-2">
                    <img
                      className="thumbnail thumbnail-lg"
                      alt={title + ' image'}
                      src={image}
                    />
                  </div>

                  <div className="col-md-10">
                    <h6 className="mb-3">
                      {title} (<a src={link}>LinkedIn</a>)
                    </h6>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="row">
              <h4>Data Science</h4>
              {dataScience.map(({ image, title, link, description }) => (
                <div className="row gy-3 mb-4" key={title}>
                  <div className="col-md-2">
                    <img
                      className="thumbnail thumbnail-lg"
                      alt={title + ' image'}
                      src={image}
                    />
                  </div>

                  <div className="col-md-10">
                    <h6 className="mb-3">
                      {title} (<a src={link}>LinkedIn</a>)
                    </h6>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <Timeline>
              {mentorshipTimeline.map(({ date, title, description }) => (
                <TimelineItem key={title}>
                  <h3 className="h5 text-red mb-3">{date}</h3>
                  <h4 className="h6 mb-3">{title}</h4>
                  <p className="pb-3">{description}</p>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>

        <div className="container py-6">
          <div className="row gy-6">
            <div className="col-md-5">
              <img
                alt="TODO: REPLACE ME"
                className="img-fluid"
                src="/img/bg_PLACEHOLDER_REMOVE_ME.png"
              />
            </div>
            <div className="col-md-6 offset-md-1 d-flex flex-column align-items-start justify-content-center">
              <h2 className="mb-4 h4">
                Have a burning question? Please contact us at the link down
                below
              </h2>
              <a
                className="btn btn-primary"
                href="mailto:bootcamp@techladies.co"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
