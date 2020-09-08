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
        <div className="container-fluid p-6 bg-purple">
          <div className="row gy-6">
            <h1 className="mb-4 h3 text-center">
              MENTORSHIP #2 - APPLICATIONS CLOSED
            </h1>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row">
              <p className="mb-4">
                <h2 className="text-center">
                  TechLadies Mentorship - Program Details
                </h2>
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
                <br />
                <br />
                Mentees Program Requirements
                <br />
                <br />
                <ul>
                  <li>
                    Have a clear goal for what you'll like to achieve from this
                    program
                  </li>
                  <li>
                    Commit to bi-weekly meetings (offline/virtual) with their
                    mentors from Jun 2020 - Aug 2020
                  </li>
                  <li>
                    Fill out a bi-weekly report to feedback your progress with
                    your mentor
                  </li>
                  <li>Present a final project at the end of the program</li>
                  <li>Submit a short progress report on a bi-weekly cadence</li>
                </ul>
                <br />
                Application Fees
                <br />
                <br />
                Our Mentorship program is free. However, to ensure full
                commitment and a fruitful experience for you, we will be
                collecting a fully refundable SGD$100* upon your confirmed
                placement in the program, which you will receive in full once
                the program is completed upon satisfaction of the above program
                requirements.
                <br />
                <br />
                *Drop-outs will not be eligible for refunds. Any other reasons
                for discontinuation will be assessed on a case-by-case basis.
              </p>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h2 className="text-center mb-5">Why join us as a Mentee?</h2>
              <p>
                Grow your career in tech: One of the best ways to advance in the
                work you do is to learn from a mentor, someone who has a wealth
                of experience and is able to give you the guidance, feedback,
                and institutional knowledge. In a mentorship, you can also
                develop a better awareness of your strengths and weaknesses to
                reach your specific career goals.
                <br />
                <br />
                Expand your professional network: Working with a mentor is also
                a great chance to be introduced to networks, companies and
                individuals which you previously never had access to. The
                benefits of an expanded network is abundant, ranging from
                broadened perspectives, new collaborations or even employment
                opportunities!
                <br />
                <br />
                Structured program: We know how difficult it can be to find a
                mentor that is right for you and develop a relationship from
                there. The TechLadies Mentorship team has designed a structured
                program that has helped make the journey of mentorship fruitful
                and enjoyable for both mentors and mentees! In our program, we
                will be matching you with experienced and passionate mentors
                from the TechLadies community! Check out our mentors below!
                <br />
                <br />
                <div className="row gy-3 mb-4">
                  <div className="col-md-2">
                    <img
                      className="thumbnail thumbnail-lg"
                      alt={'https://i.pravatar.cc/128?img=8' + ' image'}
                      src={'https://i.pravatar.cc/128?img=8'}
                    />
                  </div>

                  <div className="col-md-10">
                    <p>
                      “I thought the overall organisation by TechLadies was
                      great. Clear communication and enough guidance to keep us
                      on track, without being overly prescriptive. The kickoff
                      session was good too -- it set clear expectations on both
                      mentor and mentee, and that was very useful.” - Jill Quek,
                      TechLadies Mentor (2019)
                    </p>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray">
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
                {productManagement.map(
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
        </div>

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
      </main>
    </div>
  );
}
