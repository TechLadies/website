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
import NavLink from '../components/NavLink';

export default function Home () {
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
              <h1 class="large-line-height">TechLadies Mentorship</h1>
              <p className="mb-4 text-body large-line-height">
                TechLadies Mentorship is a 12-week program that provides women with personal career guidance
                from experienced industry practitioners as they grow their
                career in Software Engineering, UI/UX Design, Data
                Science/Engineering/Analysis, Product Management.
                <br />
                <br />
                The TechLadies Mentorship 2020 has concluded. To stay updated on when our 2021 season opens for applications, please sign up for our newsletter below.
              </p>
              <a className="btn btn-primary" target="_blank" href="https://forms.gle/sg4C2eCByp7TCJPV7">
                  Register interest for 2021's program
              </a>
              <label
                className="form-label font-weight-bold">We will contact you as soon as we launch the program!</label>

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
                  className="thumbnail thumbnail-lg mb-2 "
                  alt="TODO: REPLACE ME"
                  src="/icons/mentorship/goalsetting.png"
                />
                <h6>Goal Setting</h6>
                <p>
                  Have a clear goal for what you'll like to achieve from this
                  program.
                </p>
              </div>
              <div className="col-md-4">
                <img
                  className="thumbnail thumbnail-lg mb-2 "
                  alt="TODO: REPLACE ME"
                  src="/icons/mentorship/biweekly.png"
                />
                <h6>Bi-weekly commitments</h6>
                <p>
                  Commit to bi-weekly meetings (offline/virtual) with their
                  mentors. Provide feedback on your progress with your mentor via a short report.
                </p>
              </div>
              <div className="col-md-4">
                <img
                  className="thumbnail thumbnail-lg mb-2 "
                  alt="TODO: REPLACE ME"
                  src="/icons/mentorship/presentation.png"
                />
                <h6>Final Presentation</h6>
                <p>Present a final project at the end of the program.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row">
            <h2 className="text-center mb-5">Why join us as a Mentee?</h2>
            <div className="col-md-4">
              <img
                className="thumbnail thumbnail-lg mb-2 "
                alt="TODO: REPLACE ME"
                src="/icons/mentorship/growth.jpg"
              />
              <h6>Grow your career in tech</h6>
              <p>
                One of the best ways to advance in the work you do is to learn
                from a mentor, someone who has a wealth of experience and is
                able to give you the guidance, feedback, and institutional
                knowledge. 
              </p>
              <p>
                In a mentorship, you can also develop a better
                awareness of your strengths and weaknesses to reach your
                specific career goals.
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="thumbnail thumbnail-lg mb-2 "
                alt="TODO: REPLACE ME"
                src="/icons/mentorship/network.jpg"
              />
              <h6>Expand your professional network</h6>
              <p>
                Working with a mentor is also a great chance to be introduced to
                networks, companies and individuals which you previously never
                had access to. 
              </p>
              <p>
                The benefits of an expanded network is abundant,
                ranging from broadened perspectives, new collaborations or even
                employment opportunities!
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="thumbnail thumbnail-lg mb-2 "
                alt="TODO: REPLACE ME"
                src="/icons/mentorship/programs.jpg"
              />
              <h6>Structured program</h6>
              <p>
                {' '}
                We know how difficult it can be to find a mentor that is right
                for you and develop a relationship from there. The TechLadies
                Mentorship team has designed a structured program that has
                helped make the journey of mentorship fruitful and enjoyable for
                both mentors and mentees! 
              </p>
              <p>
                In our program, we will be matching
                you with experienced and passionate mentors from the TechLadies
                community! Check out our mentors below!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row text-center">
              <div className="col-lg-2 col-md-3 offset-md-5">
                <img
                  className="thumbnail thumbnail-lg mb-2"
                  alt="Jill Quek, Mentor 2019"
                  src="../team/jill.png"
                />
              </div>
            </div>
            <div className="row text-center">
              <div className="col-lg-10 col-md-9 offset-md-1">
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
              <MentorsCard dataMessage='software' handleViewMentors={handleViewMentors} mentors={mentorsData['software']} icon='/icons/icon_softwaredevelopment.png' />
              <MentorsCard dataMessage='ux' handleViewMentors={handleViewMentors} mentors={mentorsData['ux']} icon='/icons/icon_UIUX.png' />
              <MentorsCard dataMessage='data' handleViewMentors={handleViewMentors} mentors={mentorsData['data']} icon='/icons/icon_datascience.png' />
              <MentorsCard dataMessage='product' handleViewMentors={handleViewMentors} mentors={mentorsData['product']} icon='/icons/icon_productmanagement.png' />
            </div>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <h2 className="mb-5 text-center">Program Timeline 2020</h2>
            <div className="row gy-4">
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
        </div>

        <div className="container py-6">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h3 className="text-center mb-5">Frequently Asked Questions</h3>
              <Accordion data={programsFAQ} />
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row gy-6">
            <div className="col-md-5">
              <img
                alt="Contact us"
                className="img-fluid"
                src="../illustrations/illus_contactus.png"
              />
            </div>
            <div className="col-md-6 offset-md-1 d-flex flex-column align-items-start justify-content-center">
              <h3 className="mb-4 h4">
                Have a question? 
              </h3>
              <p>
                Do drop us an email via the link below and we'll get back to you soon.
              </p>
              <a
                className="btn btn-primary"
                href="mailto:mentorship@techladies.co"
                target="_blank"
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
