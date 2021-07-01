import { NextSeo } from 'next-seo'
import Accordion from '../components/Accordion';
import bootcampFAQ from '../data/bootcamp-faq.js';
import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import BootcampBuilders from '../components/BootcampBuilders'
import bootcampTimeline from '../data/bootcamp-7-timeline';
import bootcampBuilders from '../data/bootcamp-7-builders';
import EmailSubscription from '../components/EmailSubscription'
import { BootcampPageSeo } from '../data/seo.js'

const REGISTRATION_OPEN = true;
const SHOW_NEWSLETTER_SIGNUP = false;

export default function Home () {
  return (
    <div>
      <NextSeo {...BootcampPageSeo} />
      <main>
        <div className="container py-6">
          <div className="row">
            <div className="col-md-5">
              <img
                alt="TechLadies Bootcamp #7"
                className="img-fluid"
                src="/illustrations/Illus_astronaut.png"
              />
            </div>
            <div className="col-md-6 offset-md-1">
              <h1 className="large-line-height mt-4">TechLadies Bootcamp</h1>
              <p className="mb-4 text-body large-line-height">
                The TechLadies Bootcamp #7 is a 15-week part-time accelerated
                learning program designed to help women with basic programming
                background become professional programmers.
              </p>
              <p className="mb-4 text-body large-line-height">
                You will be guided by industry experts, and get hands-on experience building multiple projects.
              </p>
              {REGISTRATION_OPEN && (
                <a
                  className="btn btn-primary"
                  href="https://www.eventbrite.sg/e/bootcamp-7-information-session-tickets-159836732971"
                  target="blank"
                  rel="noopener"
                >
                  Register Now
                </a>
              )}
            </div>
          </div>
        </div>

        {SHOW_NEWSLETTER_SIGNUP && (
          <div className="bg-gray">
            <div className="container py-6">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <div className="card">
                    <div className="card-body">
                      <img
                        alt="TecLadies Bootcamp #6"
                        src="/icons/icon_TLbootcamp.png"
                        className="thumbnail thumbnail-xl mb-4 center-image display-block"
                      />
                      <p className="mb-4">
                        Applications to the TechLadies Bootcamp will begin  in July 2021. To stay updated, please sign up for our newsletter below.
                      </p>
                      <EmailSubscription />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row">
              <div className="col-md-6">
                <img
                  alt="TODO: REPLACE ME"
                  className="img-fluid"
                  src="../photos/bootcamp_stage.jpg"
                />
                <h4 className="my-4">
                  This program will take place in Singapore from 9 Oct 2021 to 29 Jan 2022 and cost SGD550.
                </h4>
                <p>Full scholarships are provided for people with financial difficulties. We welcome women of all backgrounds and nationalities to apply.
                </p>
              </div>
              <div className="col-md-6">
                <h4 className="mb-3 h6">Registration and Selection:</h4>
                <div className="d-inline-flex mb-4">
                  <img
                    alt="Checkbox"
                    src="/icons/check-square.svg"
                    height="32"
                    width="32"
                    className="mr-2"
                  />
                  <p>Submit an application form AND a simple technical task for us to evaluate your technical capabilities. Task details will be available in July in a repository on Github. Each selected participant will be paired with a Coach.</p>
                </div>
                <h4 className="mb-3 h6">During the Bootcamp, you are required to:</h4>
                <div className="flex-column">
                  <div className="d-inline-flex">
                    <img
                      alt="Checkbox"
                      src="/icons/check-square.svg"
                      height="32"
                      width="32"
                      className="mr-2"
                    />
                    <p>Put in at least 15 hours each week, inclusive of attending coding sessions.</p>
                  </div>
                  <div className="d-inline-flex mb-4">
                    <img
                      alt="Checkbox"
                      src="/icons/check-square.svg"
                      height="32"
                      width="32"
                      className="mr-2"
                    />
                    <p>Attend all workshops conducted and at least 80% of coding sessions on every Saturday. (10am - 3pm)</p>
                  </div>
                </div>
                <h4 className="mb-3 h6">After the Bootcamp:</h4>
                <div className="flex-column">
                  <div className="d-inline-flex">
                    <img
                      alt="Checkbox"
                      src="/icons/check-square.svg"
                      height="32"
                      width="32"
                      className="mr-2"
                    />
                    <p>Do a written interview and a technical article (on a topic of your choice) for the TechLadies blog.</p>
                  </div>
                  <div className="d-inline-flex">
                    <img
                      alt="Checkbox"
                      src="/icons/check-square.svg"
                      height="32"
                      width="32"
                      className="mr-2"
                    />
                    <p>Present your portfolio at the TechLadies Graduation Party in Jan 2022.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row">
            <h3 className="mb-4">Don't worry if it sounds scary, we’ve programs to help with the technical tasks! 💪💪💪</h3>
            <div className="col-md-6">
              <h5 className="text-blue font-weight-bold">July / August</h5>
              <div className="font-weight-bold my-2">Javascript and CSS Workshops 1 - 3 (Optional)</div>
              <p>
                3 pre-bootcamp workshops are conducted to equip women with basic programming skills to code complete the technical task for their application. These workshops are open to all women. It is not obligatory to sign up for the Bootcamp to attend these workshops.
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="text-blue font-weight-bold">21 August</h5>
              <div className="font-weight-bold my-2">Code Clinic (Optional)</div>
              <p>
                Women interested in completing the technical task can attend this session to ask questions & get help for their technical task.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <h2 className="mb-4 text-center">Program Timeline</h2>
            <div className="row">
              <Timeline>
                {bootcampTimeline.map(({ date, title, description, cta = null }) => (
                  <TimelineItem key={title}>
                    <h3 className="h5 text-red mb-3">{date}</h3>
                    <h4 className="h6 mb-3">{title}</h4>
                    <p className="pb-3">{description}</p>
                    {REGISTRATION_OPEN && cta}
                  </TimelineItem>
                ))}
              </Timeline>
            </div>
          </div>
        </div>

        <BootcampBuilders data={bootcampBuilders} />

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h3 className="text-center mb-5">Frequently Asked Questions</h3>
                <Accordion data={bootcampFAQ} />
              </div>
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
