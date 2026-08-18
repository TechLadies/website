import Head from "next/head"

import { useEffect } from "react"

import Accordion from "../components/Accordion"
import EventCard from "../components/EventCard"
import Gallery from "../components/Gallery"
import TestimonialCard from "../components/TestimonialCard"
import Quiz from "../components/Quiz"
import NavLink from "../components/NavLink"

import preloadImages from "../utils/preloadImages"
import prefix from "../utils/prefix"

import bootcampTestimonials from "../data/bootcamp-testimonials.js"
import events from "../data/events.js"
import mentorshipTestimonials from "../data/mentorship-testimonials.js"
import programsFAQ from "../data/programs-faq.js"
import quiz from "../data/quiz.js"

export default function Home() {
  const upcomingEvents = events.filter(({ status }) => status === "upcoming")
  const pastEvents = events.filter(({ status }) => status === "past")

  useEffect(() => {
    preloadImages(bootcampTestimonials.map((testimonial) => testimonial.image))
    preloadImages(
      mentorshipTestimonials.map((testimonial) => testimonial.image),
    )
  }, [bootcampTestimonials, mentorshipTestimonials])

  return (
    <div>
      <Head>
        <title>Our Programs | TechLadies</title>
      </Head>
      <div className="container py-6">
        <div className="row gy-6">
          <div className="col-lg-5 col-md-6">
            <img
              alt="Learn about TechLadies' programs"
              className="img-fluid mb-4"
              src={`${prefix}/illustrations/illus_programmes.png`}
            />
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-6">
            <h1 className="mb-4 h3">
              Discover TechLadies&apos; various programs
            </h1>
            <p className="text-body mb-4 large-line-height">
              Here&apos;s what&apos;s coming up. Come say hello at our next
              event!
            </p>
            {/* <Quiz data={quiz} /> */}
          </div>
        </div>
      </div>
      {upcomingEvents.length > 0 && (
        <div id="events" className="bg-gray">
          <div className="container py-6">
            <h2 className="text-center mb-5">Upcoming events</h2>
            <div className="row gy-4 justify-content-center">
              {upcomingEvents.map((event) => (
                <div className="col-lg-10" key={event.url}>
                  <EventCard wide {...event} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {pastEvents.length > 0 && (
        <div className="bg-gray">
          <div className="container py-6">
            <h2 className="text-center mb-5">Past events</h2>
            <div className="row gy-4">
              {pastEvents.map((event) => (
                <div className="col-md-4" key={event.url}>
                  <EventCard {...event} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="container py-6">
        <h2 className="text-center mb-5">In a gist</h2>
        <div className="row gy-5 text-center">
          <div className="col-md-4">
            <img
              alt="#techladiesgather"
              className="thumbnail thumbnail-xxl mb-3"
              src={`${prefix}/icons/programs/icon_techladiesgather.png`}
            />
            <h4 className="mb-3">#techladiesgather</h4>
            <p className="text-body">
              Networking and support to foster a feeling of community
            </p>
          </div>
          <div className="col-md-4">
            <img
              alt="#techladieslearn"
              className="thumbnail thumbnail-xxl mb-3"
              src={`${prefix}/icons/programs/icon_techladieslearn.png`}
            />
            <h4 className="mb-3">#techladieslearn</h4>
            <p className="text-body">
              Peer-to-peer learning, hands-on and soft skills workshops
            </p>
          </div>
          <div className="col-md-4">
            <img
              alt="#techladiestry"
              className="thumbnail thumbnail-xxl mb-3"
              src={`${prefix}/icons/programs/icon_techladiestry.png`}
            />
            <h4 className="mb-3">#techladiestry</h4>
            <p className="text-body">
              A wildcard social event - yoga/food/games and all things tech,
              under the sun!
            </p>
          </div>
        </div>
      </div>
      {/* <div className="bg-gray">
        <div className="container py-6">
          <div id="mentorship" className="row gy-5">
            <div className="col-lg-6 col-md-5">
              <img
                alt="TechLadies Mentorship"
                className="thumbnail thumbnail-xl mb-4"
                src={`${prefix}/icons/icon_TLmentorship.png`}
              />
              <h3 className="mb-4 h4">TechLadies Mentorship</h3>
              <p className="mb-4">Duration: 12 weeks</p>
              <p className="mb-4">
                A 3-month mentorship program that pairs women who are
                transitioning into or establishing themselves in the tech
                industry with industry practitioners.
              </p>

              <button className="btn btn-primary" disabled>
                Coming Soon!
              </button>
            </div>
            <div className="col-lg-5 col-md-6 offset-md-1">
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
                  ),
                )}
              </Gallery>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container py-6 text-center">
        <div id="skill-events" className="row gy-5 justify-content-center">
          <div className="col-md-6">
            <img
              alt="Skill Based Events"
              className="thumbnail thumbnail-xl mb-4"
              src={`${prefix}/icons/programs/icon_skill_events.png`}
            />
            <h3 className="mb-4 h4">Skill Based Events</h3>
            <p className="mb-4">
              Planned Byte sized events for the community to come together for
              enhancing soft skills and mentorship
            </p>

            <button className="btn btn-primary" disabled>
              Coming Soon!
            </button>
          </div>
        </div>
      </div>
      <div className="container py-6 text-center">
        <div className="row gy-6">
          <div id="meet" className="col-md-5 offset-md-1">
            <img
              alt="TechLadies Meet"
              className="thumbnail thumbnail-xl mb-4"
              src={`${prefix}/icons/icon_TLmeet.png`}
            />
            <h3 className="mb-4 h4">TechLadies Meet</h3>
            <p className="mb-4">
              Meet fellow TechLadies through in-person or online technical
              talks, roundtable discussions, study groups and more! TechLadies
              Meet is open to women of all levels of technical skills.
            </p>
            <a
              className="btn btn-primary"
              href="https://luma.com/user/usr-kXtH2e6ihZuXcEd"
              target="_blank"
              rel="noreferrer"
            >
              See our Events on Luma
            </a>
          </div>
          <div id="community" className="col-md-5">
            <img
              alt="TechLadies Community"
              className="thumbnail thumbnail-xl mb-4"
              src={`${prefix}/icons/icon_TLcommunity.png`}
            />
            <h3 className="mb-4 h4">TechLadies Community</h3>
            <p className="mb-4">
              Beyond programs and events, TechLadies is a community. Join us
              online for the latest industry news, highlights on awesome women
              in tech, and get support on your journey in tech.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <a
                className="btn btn-primary"
                href="https://www.instagram.com/techladiescode/"
                target="_blank"
                rel="noreferrer"
              >
                Join us on Instagram
              </a>
              <a
                className="btn btn-primary"
                href="https://www.linkedin.com/company/techladies"
                target="_blank"
                rel="noreferrer"
              >
                Join us on LinkedIn
              </a>
            </div>
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
    </div>
  )
}
