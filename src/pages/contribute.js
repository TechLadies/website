import Head from "next/head"

import { useState } from "react"

import clsx from "clsx"
import styles from "./contribute.module.scss"

import Accordion from "../components/Accordion"
import DonationCard from "../components/DonationCard"

import volunteeringFAQ from "../data/volunteering-faq.js"
import donations from "../data/donations.js"
import volunteerInitiatives from "../data/volunteer-initiatives"

import Modal from "../components/Modal"
import { NextSeo } from "next-seo"
import { VolunteerSeo } from "../data/seo.js"

export default function Home() {
  const [showMoreModal, setShowMoreModal] = useState(null)
  const [selectedTopic, setSelectedTopic] = useState(null)

  const handleViewMore = (e) => {
    setSelectedTopic(e.target.dataset.message)
    setShowMoreModal(true)
  }

  return (
    <div>
      <NextSeo {...VolunteerSeo} />
      <main>
        <div className="container py-6">
          <div className="row gy-6">
            <div className="col-md-6">
              <img
                alt="Contribute to TechLadies"
                className="contribute-image mb-4"
                src="/illustrations/illus_contribute.png"
              />
            </div>
            <div className="col-md-6">
              <h1>We need your help to increase our impact</h1>
              <p className="mb-3 text-primary font-weight-bold"></p>
              <p className="mb-4 text-body large-line-height">
                We have built an amazing international community in Asia and
                empowered women to switch careers into tech, but we need help.
                <br />
                <br />
                Join us in our mission to increase women&apos;s participation in the
                tech industry!
              </p>
              <a
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSe2A6vuoZFhTkoW75kVtI8d5Ftg-Q0_6KP8ZWgCSy2mZmu-bQ/viewform"
              >
                Volunteer with TechLadies
              </a>
            </div>
          </div>
        </div>
        <div className="container py-6">
          <div className="col-md-9 order-md-first d-flex flex-column justify-content-center">
            <h3 className="mb-4">Ways you can volunteer</h3>
            <p className="text-primary font-weight-bold">
              TechLadies is led by a group of core team leaders and supported by
              a larger group of ad hoc helpers. Join us if you&apos;re passionate
              about gender diversity in tech, want to learn new skills, and meet
              like-minded peers!
              <br />
              <br />
              We are currently recruiting volunteers for 2024. If you are able to dedicate at least 4-5 hours a month and want to volunteer, we want you! Please apply by 15th
              Nov 2023 if you are interested.
            </p>
          </div>

          <div className="row gy-4 pt-5">
            {volunteerInitiatives.map(({ image, title, description }) => (
              <div className="col-lg-3 col-sm-6" key={title}>
                <img
                  className="thumbnail thumbnail-xl mb-4 center-image"
                  alt={title + " image"}
                  src={image}
                />
                <h6 className="mb-3">{title}</h6>
                <div>{description}</div>
                <div className={clsx(styles.viewMore)} key={title}>
                  <button
                    type="button"
                    onClick={handleViewMore}
                    data-message={title}
                    className="btn btn-link text-primary p-0"
                  >
                    See Role Descriptions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray">
          <div className="container py-6">
            <div className="row gy-6">
              <div className="col-md-5 offset-md-1 order-md-last">
                <img
                  alt="Partner with TechLadies"
                  className="img-fluid"
                  src="/partners/partner_stage.png"
                />
              </div>
              <div className="col-md-6 order-md-first d-flex flex-column justify-content-center">
                <h2 className="mb-4">Be our Corporate Partner</h2>
                <p className="mb-4">
                  We are looking for partner companies that provide speakers,
                  mentors, coaches, and venue or financial sponsorship. Do reach
                  out to{" "}
                  <a href=" mailto:lillian@techladies.co">
                    lillian@techladies.co
                  </a>{" "}
                  to start a conversation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row gy-5 text-center">
            <div className="col-md-4 col-sm-6">
              <img
                alt="Microsoft"
                className="mb-4 partner-logo-horizontal"
                src="/partners/logos/microsoft.png"
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <img
                alt="Rakuten"
                className="mb-4 partner-logo-horizontal"
                src="/partners/logos/rakuten.png"
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <img
                alt="ThoughtWorks"
                className="mb-4 partner-logo-horizontal"
                src="/partners/logos/thoughtworks.png"
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <img
                alt="ZenDesk"
                className="mb-4 partner-logo-square"
                src="/partners/logos/zendesk.png"
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <img
                alt="Carousell"
                className="mb-4 partner-logo-square"
                style={{ marginTop: -10 }}
                src="/partners/logos/carousell.png"
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <img
                alt="Kiat SG"
                className="mb-4 partner-logo-horizontal"
                style={{ marginTop: 6 }}
                src="/partners/logos/kiatsg_logo.png"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row mb-4">
              <div className="col-md-6">
                <h3 id="donate">Donate to TechLadies</h3>
                <p>
                  Your one-time donation enable us to continue our activities at
                  TechLadies, including online tools and logistics.
                </p>
              </div>
            </div>
            <div className="row gy-3 mb-4">
              {donations.map((donation) => (
                <div className="col-sm-6 col-lg-3" key={donation.amount}>
                  <DonationCard {...donation} />
                </div>
              ))}
            </div>
            <div className="row">
              <small>
                Clicking Contribute will bring you to make a donation securely
                via PayPal, where you can donate with all major credit cards.
                TechLadies finances are managed by Learnemy Pte Ltd. As we are
                not a registered non-profit, we cannot send an invoice for tax
                purposes.
              </small>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h3 className="text-center mb-5">Volunteering FAQ</h3>
              <Accordion data={volunteeringFAQ} />
            </div>
          </div>
        </div>

        <Modal
          isShown={showMoreModal}
          onClose={() => {
            setShowMoreModal(false)
          }}
          title={selectedTopic}
        >
          {selectedTopic === "TechLadies Bootcamp" && (
            <>
              <img
                className="thumbnail thumbnail-xxl center-image display-block"
                alt="TechLadies Bootcamp"
                src="/icons/icon_TLbootcamp.png"
              ></img>

              <p>
                Help create our most impactful program! We&apos;ve seen Bootcamp
                grads switching careers into tech who were previously pet
                groomer, air stewardess, and customer service rep etc. To
                continue this program in 2023, we are looking for{" "}
                <b>8-10 Coaches.</b>
              </p>

              <h5>Coaches Team: 8-10 Coaches</h5>
              <p>
                You are part of the team that teaches the Bootcamp participants
                valuable skills to help them kickstart their journey in tech.
                You will pair-program with the participants, follow a curriculum
                set by the Tech Lead, and provide feedback to both the
                participants and Tech Lead.
              </p>
              <p>
                <b>
                  <i>Ideal profile:</i>
                </b>{" "}
                You are a JS developer and want to gain coaching experiences.
                You will spend around 2 hours per month before the Bootcamp
                starts, and 6 - 8 hours per month when the Bootcamp is running.
                You can also take on more responsibilities by being a Lead Coach
                for a team or commit less by being an assistant Coach.
              </p>

              <a
                className="btn btn-primary cta-button"
                target="_blank"
                rel="noreferrer"
                href="https://forms.gle/yPAibeKXEbiN98qg9"
              >
                Volunteer for TechLadies Bootcamp
              </a>
            </>
          )}
          {selectedTopic === "TechLadies Mentorship" && (
            <>
              <img
                className="thumbnail thumbnail-xxl center-image display-block"
                alt="TechLadies Mentorship"
                src="/icons/icon_TLmentorship.png"
              ></img>

              <p>
                Kickstart and grow women&apos;s careers in tech! Through TechLadies
                Mentorship, we have helped women raise their visibility in tech,
                build their portfolios, and ace their job interviews. To
                continue this program in 2023, we are looking for{" "}
                <b>
                  3 - 4 Mentorship Leads and ~30 Mentors in Software
                  Engineering, Product Management, Data Science, and UI/UX
                  Design.
                </b>
              </p>

              <h5>Core Team: 3 - 4 Mentorship Leads</h5>
              <p>
                Lead the TechLadies Mentorship program by planning and executing
                on this program, including sourcing mentors, recruiting mentees,
                and running the mentorship program (including any associated
                events). We have a playbook for you to work off from, but you
                have the autonomy to shape this program!
              </p>
              <p>
                <b>
                  <i>Ideal profile:</i>
                </b>{" "}
                You have good project management skills and is able to commit about
                6 hours per month.
              </p>

              <h5>Ad Hoc: ~30 Mentors</h5>
              <p>
                As a mentor, we will pair you with a mentee to provide her with
                personal career guidance as she grow her career in technology.
                Your mentee will come up with an outcome she needs your help
                with, such as resume writing, interview prep, or building a
                portfolio.
              </p>
              <p>
                <b>
                  <i>Ideal profile:</i>
                </b>{" "}
                You have at least 3 years of experience in either software
                engineering, data science/engineering, product management, or
                UI/UX. You can expect to spend about 3 hours per month during
                the program in mentorship and taking part in ancillary
                get-togethers and feedback sessions. Prior mentorship
                experiences are preferred, but not compulsory. :)
              </p>

              <a
                className="btn btn-primary cta-button"
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSe2A6vuoZFhTkoW75kVtI8d5Ftg-Q0_6KP8ZWgCSy2mZmu-bQ/viewform"
              >
                Volunteer for TechLadies Mentorship
              </a>
            </>
          )}
          {selectedTopic === "TechLadies Community" && (
            <>
              <img
                className="thumbnail thumbnail-xxl center-image display-block"
                alt="TechLadies Meet"
                src="/icons/icon_TLmeet.png"
              ></img>

              <p>
                Create amazing events every quarter that connect and share
                insights on the tech industry with our community. We are looking for{" "}
                <b>3 - 4 Community Leads. </b>
              </p>

              <h5>Core Team: 3 - 4 Community Leads</h5>
              <p>
                Connect and grow the TechLadies community in Asia! Community Leads plan and create amazing TechLadies events! You plan
                the events calendar, run quarterly in-person and online events,
                source logistics vendors and partnerships for in-person events,
                and inviting speakers.
              </p>
              <p>
                <b>
                  <i>Ideal profile:</i>
                </b>{" "}
                You have experiences organising mid to large size events
                (community events count!), passionate about designing event
                experiences for women in tech, and can commit 5 hours every
                month.
              </p>

              <a
                className="btn btn-primary cta-button"
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSe2A6vuoZFhTkoW75kVtI8d5Ftg-Q0_6KP8ZWgCSy2mZmu-bQ/viewform"
              >
                Volunteer for TechLadies Community
              </a>
            </>
          )}
          {selectedTopic === "TechLadies Communication" && (
            <>
              <img
                className="thumbnail thumbnail-xxl center-image display-block"
                alt="TechLadies Community"
                src="/icons/icon_TLcommunity.png"
              ></img>

              <p>
                Strategise and develop content for our social media, website and newsletter! This team
                manages our monthly newsletter Tech List, social media and website. We are looking for{" "}
                <b>3 -4 Communication Leads & Communication Lead (Website).</b>
              </p>

              <h5>Core Team: 3 - 4 Communication Leads</h5>
              <p>
                TechLadies is a community - and this role is the heart of it!
                You will grow and engage with the community via our social media
                channels, monthly newsletter Tech List, and our website. You are also empowered to come up with new creative
                ideas and have the resources to execute on them!
              </p>
              <p>
                <b>
                  <i>Ideal profile:</i>
                </b>{" "}
                You should be comfortable with digital marketing and community
                engagement, including maintaining a Facebook page, Facebook
                group, Twitter, Instagram, and creating newsletters. You will
                spend roughly 5 hours every month.

                People look to the TechLadies website and social media for information on
                programming, our activities, and discover stories of awesome
                women in tech. You will help create these amazing content! We
                are also looking for people who
                know their way around Photoshop, Illustrator, or just good&apos;ol
                Canva to help us with our marketing collaterals.

                For Communication Lead (Website), you should also be comfortable with HTML, GitHub and CSS.

                
              </p>

              <a
                className="btn btn-primary cta-button"
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSe2A6vuoZFhTkoW75kVtI8d5Ftg-Q0_6KP8ZWgCSy2mZmu-bQ/viewform"
              >
                Volunteer for TechLadies Communication
              </a>
            </>
          )}
        </Modal>
      </main>
    </div>
  )
}
