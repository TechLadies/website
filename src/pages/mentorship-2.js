import { useState } from 'react';
import Head from 'next/head';

import { mentorsData } from '../data/mentorship-2-mentors';

import Accordion from '../components/Accordion';
import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import MentorsCard from '../components/MentorsCard'

import mentorshipTimeline from '../data/mentorship-timeline';
import programsFAQ from '../data/mentorship-faq.js';

import Modal from '../components/Modal';

export default function Home() {
  const [showMentorsModal, setShowMentorsModal] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState(null)

  const handleViewMentors = (e) => {
    setSelectedTopic(e.target.dataset.message)
    setShowMentorsModal(true)
  }

  return (
    <div>
      <Head>
        <title>Mentorship #2 | TechLadies</title>
      </Head>
      <main>
        <div className="container py-6">
          <div className="row gy-6">
            <div className="col-md-6">
              <h3>TechLadies Mentorship 2020</h3>
              <p className="mb-4">
                <br />
                <br />
                TechLadies Mentorship is a 12-week program that provides women with personal career guidance
                from experienced industry practitioners as they grow their
                career in Software Engineering, UI/UX Design, Data
                Science/Engineering/Analysis, Product Management.
                <br />
                <br />
                The TechLadies Mentorship 2020 has concluded. To stay updated on when our 2021 season opens for applications, please sign up for our newsletter below.
              </p>
              <label
                htmlFor="hero-email"
                className="form-label font-weight-bold"
              >
                Get updates on our activities
              </label>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  alert('TODO: POST email to API');
                }}
              >
                <input
                  className="form-control"
                  placeholder="E-mail address"
                  required={true}
                  type="email"
                />
              </form>

            </div>
            <div className="col-md-5  offset-md-1">
              <img
                alt="TODO: REPLACE ME"
                className="img-fluid"
                src="/illustrations/illus_mentorship.png"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row">
              <h2 className="text-center mb-5">Mentees Program Requirements</h2>
              <div className="col-md-4">
                <img
                  className="thumbnail thumbnail-lg mx-auto d-block space-bottom-10 "
                  alt="TODO: REPLACE ME"
                  src="/icons/mentorship/goalsetting.jpg"
                />
                <h6 class="center-text">Goal Setting</h6>
                <p>
                  Have a clear goal for what you'll like to achieve from this
                  program
                </p>
              </div>
              <div className="col-md-4">
                <img
                  className="thumbnail thumbnail-lg mx-auto d-block space-bottom-10 "
                  alt="TODO: REPLACE ME"
                  src="/icons/mentorship/biweekly.jpg"
                />
                <h6 class="center-text">Bi-weekly commitments</h6>
                <p>
                  Commit to bi-weekly meetings (offline/virtual) with their
                  mentors from Jun 2020 - Aug 2020. Provide feedback on your progress with your mentor via a short report
                </p>
              </div>
              <div className="col-md-4">
                <img
                  className="thumbnail thumbnail-lg mx-auto d-block space-bottom-10 "
                  alt="TODO: REPLACE ME"
                  src="/icons/mentorship/presentation.jpg"
                />
                <h6 class="center-text">Final Presentation</h6>
                <p>Present a final project at the end of the program</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row">
            <h2 className="text-center mb-5">Why join us as a Mentee?</h2>
            <div className="col-md-4">
              <img
                className="thumbnail thumbnail-lg mx-auto d-block space-bottom-10 "
                alt="TODO: REPLACE ME"
                src="/icons/mentorship/growth.jpg"
              />
              <h6 class="center-text">Grow your career in tech</h6>
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
                className="thumbnail thumbnail-lg mx-auto d-block space-bottom-10 "
                alt="TODO: REPLACE ME"
                src="/icons/mentorship/network.jpg"
              />
              <h6 class="center-text">Expand your professional network</h6>
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
                className="thumbnail thumbnail-lg mx-auto d-block space-bottom-10 "
                alt="TODO: REPLACE ME"
                src="/icons/mentorship/programs.jpg"
              />
              <h6 class="center-text">Structured program</h6>
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
              <div className="col-lg-2 col-md-3">
                <img
                  className="thumbnail thumbnail-lg"
                  alt="Jill Quek, Mentor 2019"
                  src="../team/jill.png"
                />
              </div>
              <div className="col-lg-10 col-md-9">
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
        </div>

        <div className="container py-6">
          <div className="row">
            <h2 className="mb-4 text-center">Mentors for 2020</h2>
            <div className="row gy-4">
              <MentorsCard dataMessage='software' handleViewMentors={handleViewMentors} mentors={mentorsData['software']} />
              <MentorsCard dataMessage='ux' handleViewMentors={handleViewMentors} mentors={mentorsData['ux']} />
              <MentorsCard dataMessage='data' handleViewMentors={handleViewMentors} mentors={mentorsData['data']} />
              <MentorsCard dataMessage='product' handleViewMentors={handleViewMentors} mentors={mentorsData['product']} />
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
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h2 className="text-center mb-5">Frequently Asked Questions</h2>
              <Accordion data={programsFAQ} />
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row gy-6">
            <div className="col-md-5">
              <img
                alt="TODO: REPLACE ME"
                className="img-fluid"
                src="/photos/mentorship2.jpg"
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


        {
          selectedTopic && (
            <Modal isShown={showMentorsModal} onClose={() => setShowMentorsModal(false)} title={mentorsData[selectedTopic].title}>
              <div className="container">
                <div className="row">
                  {mentorsData[selectedTopic].mentors.map(
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
                            {title} (<a href={link} target="_blank">LinkedIn</a>)
                      </h6>
                          <p>{description}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </Modal>
          )
        }
      </main>
    </div>
  );
}
