import { NextSeo } from "next-seo"
import Accordion from "../components/Accordion"
import bootcampFAQ from "../data/bootcamp-faq.js"
import Timeline from "../components/Timeline"
import TimelineItem from "../components/TimelineItem"
import BootcampBuilders from "../components/BootcampBuilders"
import bootcampTimeline from "../data/bootcamp-7-timeline"
import bootcampBuilders from "../data/bootcamp-7-builders"
import EmailSubscription from "../components/EmailSubscription"
import { BootcampPageSeo } from "../data/seo.js"

const REGISTRATION_OPEN = true
const SHOW_NEWSLETTER_SIGNUP = false

export default function Home() {
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
              The TechLadies Bootcamp #8 offers 5 weekend part-time workshops to help women come into TECH. 
              </p>
              <p className="mb-4 text-body large-line-height">
              Regardless of your technical background, you will be taught by industry experts on how
              to get started with various coding languages and software development.
              </p>
              {REGISTRATION_OPEN && (
                <a
                  className="btn btn-primary"
                  href="https://forms.gle/ZtmtuGau7b5dL8wb8"
                  target="blank"
                  rel="noopener"
                >
                  Apply Now
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
                        Applications to the TechLadies Bootcamp will begin in
                        July 2021. To stay updated, please sign up for our
                        newsletter below.
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
                This program will take place in Singapore from Aug 2022 to Oct 2022.
                </h4>
                <p>
                  Full scholarships are provided for people with financial
                  difficulties. We welcome women of all backgrounds and
                  nationalities to apply.
                </p>
              </div>
              <div className="col-md-6">
                <h4 className="mb-3 h6">Registration:</h4>
                <div className="d-inline-flex mb-4">
                  <img
                    alt="Checkbox"
                    src="/icons/check-square.svg"
                    height="32"
                    width="32"
                    className="mr-2"
                  />
                  <p>
                  Submit your application form. Slot for each session is given on a first come first serve basis.
                  </p>
                </div>
                <div className="d-inline-flex mb-4">
                  <img
                    alt="Checkbox"
                    src="/icons/check-square.svg"
                    height="32"
                    width="32"
                    className="mr-2"
                  />
                  <p>
                  For beginners in Tech, you are encourage to attend all sessions to have a comprehensive understanding of Web App development.
                  </p>
                </div>
                <div className="d-inline-flex mb-4">
                  <img
                    alt="Checkbox"
                    src="/icons/check-square.svg"
                    height="32"
                    width="32"
                    className="mr-2"
                  />
                  <p>
                  Each session is SGD$40. Sign up for all 5 sessions at a discounted rate of SGD$160 (i.e the fifth session is FREE!)
                  </p>
                </div>
                <h4 className="mb-3 h6">
                  Workshops:
                </h4>
                <div className="flex-column">
                  <div className="d-inline-flex">
                    <img
                      alt="Checkbox"
                      src="/icons/check-square.svg"
                      height="32"
                      width="32"
                      className="mr-2"
                    />
                    <p>
                     Attend the workshops.
                    </p>
                  </div>
                  <div className="d-inline-flex mb-4">
                    <img
                      alt="Checkbox"
                      src="/icons/check-square.svg"
                      height="32"
                      width="32"
                      className="mr-2"
                    />
                    <p>
                    Practise is key! Put in at least 15 hours each week, inclusive of attending the workshops. 
                    Additional time practising is definitely needed to pick up coding skills. 
                    </p>
                  </div>
                </div>
                <h4 className="mb-3 h6">Post Workshops:</h4>
                <div className="flex-column">
                  <div className="d-inline-flex">
                    <img
                      alt="Checkbox"
                      src="/icons/check-square.svg"
                      height="32"
                      width="32"
                      className="mr-2"
                    />
                    <p>
                      Continue to push code, learn new languages and build your portfolio. Reach out to the TechLadies Community 
                      to learn more about technical interviews and interview skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container py-6">
          <div className="row">
            <h3 className="mb-4">
              Don't worry if it sounds scary, we’ve programs to help with the
              technical tasks! 💪💪💪
            </h3>
            <div className="col-md-6">
              <h5 className="text-blue font-weight-bold">July / August</h5>
              <div className="font-weight-bold my-2">
                Pre-Bootcamp Workshops 1 - 4 (Optional)
              </div>
              <p>
                4 pre-bootcamp workshops are conducted to equip women with basic
                programming skills to code complete the technical task for their
                application. These workshops are open to all women. It is not
                obligatory to sign up for the Bootcamp to attend these
                workshops.
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="text-blue font-weight-bold">
                14 August & 4 September
              </h5>
              <div className="font-weight-bold my-2">
                Code Clinics (Optional)
              </div>
              <p>
                Women interested in completing the technical task can attend
                these sessions to ask questions & get help for their technical
                task.
              </p>
            </div>
          </div>
        </div> */}

        <div className="bg-gray">
          <div className="container py-6">
            <h2 className="mb-4 text-center">Workshop Schedule</h2>
            <div className="row">
              <Timeline>
                {bootcampTimeline.map(
                  ({ date, title, description, cta = null }) => (
                    <TimelineItem key={title}>
                      <h3 className="h5 text-red mb-3">{date}</h3>
                      <h4 className="h6 mb-3">{title}</h4>
                      <p className="pb-3">{description}</p>
                      {REGISTRATION_OPEN && cta}
                    </TimelineItem>
                  )
                )}
              </Timeline>
            </div>
          </div>
        </div>

        {/* <BootcampBuilders data={bootcampBuilders} /> */}

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
              <h3 className="mb-4 h4">Have a question?</h3>
              <p>
                Do drop us an email via the link below and we'll get back to you
                soon.
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
  )
}
