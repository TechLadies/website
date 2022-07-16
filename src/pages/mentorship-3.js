import { useState } from "react"
import Head from "next/head"

import { mentorsData } from "../data/mentorship-3-mentors"

import Accordion from "../components/Accordion"
import Timeline from "../components/Timeline"
import TimelineItem from "../components/TimelineItem"
import MentorsCard from "../components/MentorsCard"
import Gallery from "../components/Gallery"
import TestimonialCard from "../components/TestimonialCard"

import mentorshipTimeline from "../data/mentorship-timeline-3"
import programsFAQ from "../data/mentorship-faq.js"
import mentorshipTestimonials from "../data/mentorship-testimonials.js"

import Modal from "../components/Modal"

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
        <title>Mentorship #3 | TechLadies</title>
      </Head>
      <main>
        <div className="container py-6">
          <div className="row gy-6">
            <div className="col-md-6">
              <h1 class="large-line-height">TechLadies Mentorship 2022</h1>
              <p className="mb-4 text-body large-line-height">
                TechLadies Mentorship provides women
                with personal career guidance from experienced industry
                practitioners as they grow their career in Software Engineering,
                UI/UX Design, Data Science/Engineering/Analysis, Product
                Management.
                <br />
                <br />
                If you are interested in contributing your expertise to mentor junior professionals or recent graduates, we would love for you to join us!
              </p>
              <div className="row">
                <div className="col-md-6">
                  <a
                    className="btn btn-primary"
                    target="_blank"
                    href="https://forms.gle/uiuY13fE7d1nvpq2A"
                  >
                    Sign up as Mentor!
                  </a>
                </div>
                <div className="col-md-6">
                  <a
                    className="btn btn-primary"
                    target="_blank"
                    href="https://forms.gle/PjFKJLU3XForvXkRA"
                  >
                    Sign up as Mentee!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5  offset-md-1">
              <img
                alt="mentorship illustration"
                className="img-fluid"
                src="/illustrations/illus_mentorship.png"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row">
              <h2 className="text-center mb-5">Mentorship Focus Areas</h2>
              <div className="col-md-3 text-center">
                <img
                  className="thumbnail thumbnail-xl mb-2 "
                  alt="data science engineering"
                  src="/icons/icon_datascience.png"
                />
                <h6>Data Science / Engineering</h6>
              </div>
              <div className="col-md-3 text-center">
                <img
                  className="thumbnail thumbnail-xl mb-2 "
                  alt="product management"
                  src="/icons/icon_productmanagement.png"
                />
                <h6>Product Management</h6>
              </div>
              <div className="col-md-3 text-center">
                <img
                  className="thumbnail thumbnail-xl mb-2 "
                  alt="software engineering"
                  src="/icons/icon_softwaredevelopment.png"
                />
                <h6>Software Engineering</h6>
              </div>
              <div className="col-md-3 text-center">
                <img
                  className="thumbnail thumbnail-xl mb-2 "
                  alt="UI UX"
                  src="/icons/icon_UIUX.png"
                />
                <h6>UI / UX</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row">
            <h2 className="text-center mb-5">Why join us as a Mentor?</h2>
            <div className="container">
              <img
                className="container mb-6"
                alt="mentorship growth"
                src="/photos/team2.jpg"
              />
            </div>
            <div className="col-md-3 text-center">
                <img
                  className="thumbnail thumbnail-lg mb-2 "
                  alt="product management"
                  src="/img/paper-plane.svg"
                />
              <h6>You are passionate about empowering others to succeed in their career.</h6>
            </div>
            <div className="col-md-3 text-center">
                <img
                  className="thumbnail thumbnail-md mb-2 "
                  alt="product management"
                  src="/img/paper-plane.svg"
                />
              <h6>You desire to make a difference for aspiring women in Tech.</h6>
            </div>
            <div className="col-md-3 text-center">
                <img
                  className="thumbnail thumbnail-lg mb-2 "
                  alt="product management"
                  src="/img/paper-plane.svg"
                />
              <h6>You believe mentoring is a two-way learning - for you and your mentees.</h6>
            </div>
            <div className="col-md-3 text-center">
                <img
                  className="thumbnail thumbnail-md mb-2 "
                  alt="product management"
                  src="/img/paper-plane.svg"
                />
              <h6>You want to contribute to the Tech community with your time and expertise.</h6>
            </div>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <h2 className="mb-5 text-center">Program Timeline 2022</h2>
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
          <h2 className="mb-5 text-center">Testimonials</h2>
          <div className="row gy-4">
            <Gallery>
              {mentorshipTestimonials.map(
                ({ image, thumbnail, name, message }) => (
                  <TestimonialCard
                    image={image}
                    key={name}
                    thumbnail={thumbnail}
                    name={name}
                    message={message}
                  />
                )
              )}
            </Gallery>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row">
              <h2 className="text-center mb-5">Meet Our TechLadies Mentorship Core Team 2022</h2>
              <div className="col-md-3 text-center">
                <img
                  className="thumbnail thumbnail-xl mb-2 "
                  alt="diya"
                  src="/team/bootdiya.png"
                />
              </div>
              <div className="col-md-3 text-center">
                <img
                  className="thumbnail thumbnail-xl mb-2 "
                  alt="xuqian"
                  src="/team/evexuqian.png"
                />
              </div>
              <div className="col-md-3 text-center">
                <img
                  className="thumbnail thumbnail-xl mb-2 "
                  alt="ena"
                  src="/team/coreteam2022/ment_ena.jpeg"
                />
              </div>
              <div className="col-md-3 text-center">
                <img
                  className="thumbnail thumbnail-xl mb-2 "
                  alt="ruhani"
                  src="/team/coreteam2022/ment_ruhani.jpg"
                />
              </div>
            </div>
          </div>
        </div>


        <div className="container py-6">
          <div className="row">
            <h2 className="mb-4 text-center">Mentors from 2021</h2>
            <div className="row gy-4">
              <MentorsCard
                dataMessage="software"
                handleViewMentors={handleViewMentors}
                mentors={mentorsData["software"]}
                icon="/icons/icon_softwaredevelopment.png"
              />
              <MentorsCard
                dataMessage="ux"
                handleViewMentors={handleViewMentors}
                mentors={mentorsData["ux"]}
                icon="/icons/icon_UIUX.png"
              />
              <MentorsCard
                dataMessage="data"
                handleViewMentors={handleViewMentors}
                mentors={mentorsData["data"]}
                icon="/icons/icon_datascience.png"
              />
              <MentorsCard
                dataMessage="product"
                handleViewMentors={handleViewMentors}
                mentors={mentorsData["product"]}
                icon="/icons/icon_productmanagement.png"
              />
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
              <h3 className="mb-4 h4">Have a question?</h3>
              <p>
                Do drop us an email via the link below and we'll get back to you
                soon.
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

        {selectedTopic && (
          <Modal
            isShown={showMentorsModal}
            onClose={() => setShowMentorsModal(false)}
            title={mentorsData[selectedTopic].title}
          >
            <div className="container">
              <div className="row">
                {mentorsData[selectedTopic].mentors.map(
                  ({ image, title, link, description }) => (
                    <div className="row gy-3 mb-4" key={title}>
                      <div className="col-md-2">
                        <img
                          className="thumbnail thumbnail-lg"
                          alt={title + " image"}
                          src={image}
                        />
                      </div>

                      <div className="col-md-10">
                        <h6 className="mb-3">
                          {title} (
                          <a href={link} target="_blank">
                            LinkedIn
                          </a>
                          )
                        </h6>
                        <p>{description}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </Modal>
        )}
      </main>
    </div>
  )
}
