import { useState } from 'react';
import Head from 'next/head';
import clsx from 'clsx';
import Accordion from '../components/Accordion';
import bootcampFAQ from '../data/bootcamp-faq.js';

import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import BootcampBuilders from '../components/BootcampBuilders'
import bootcampTimeline from '../data/bootcamp-timeline';
import bootcampBuilders from '../data/bootcamp-6-builders';
import EmailSubscription from '../components/EmailSubscription'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Bootcamp #6 | TechLadies</title>
      </Head>
      <main>
        <div className="container p-6">
          <div className="row gy-6">
            <div className="col-md-5">
              <img
                alt="TODO: REPLACE ME"
                className="img-fluid"
                src="/illustrations/Illus_astronaut.png"
              />
            </div>
            <div className="col-md-7">
              <p className="mb-4">
                <h3>TechLadies Bootcamp 2020</h3>
                <br />
                <br />
                The TechLadies Bootcamp #6 is a 14-week part-time accelerated
                learning program designed to help women with basic programming
                background become professional programmers. You will be guided
                by industry experts, creating products for non-profit
                organizations.
                <br />
                <br />
                Applications to the TechLadies Bootcamp 2020 has concluded. To stay updated on when our 2021 season opens for applications, please sign up for our newsletter below.
              </p>
              <label
                htmlFor="hero-email"
                className="form-label font-weight-bold"
              >
                Get updates on our activities
              </label>
              <EmailSubscription />
            </div>

          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row">
              <div className="col-md-6">
                <img
                  alt="TODO: REPLACE ME"
                  src="/img/bg_PLACEHOLDER_REMOVE_ME.png"
                  height="120"
                  width="100%"
                  className="mb-4"
                />
                <p>
                  To apply to the TechLadies Bootcamp #6, you need to complete an application form AND a simple technical task that will help us evaluate your technical capabilities.
                  <br /><br />
                  The details on the technical task will be available in July through a repository on Github.
                  <br /><br />
                  Applications open on 4 July and close on 15 Aug.
                </p>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <p className="mb-4">
                      Receive updates on Info Session and Pre-Bootcamp Workshops by leaving your email address below
                    </p>
                    <EmailSubscription />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row">
            <div className="col-md-6">
              <img
                alt="TODO: REPLACE ME"
                src="/img/bg_PLACEHOLDER_REMOVE_ME.png"
                height="196"
                width="100%"
                className="mr-2"
              />
              <h3 className="my-4">
                This program will take place in Singapore from 12 Sep to 12 Dec 2020 and cost SGD550.
              </h3>
              <p>Full scholarships are provided for people with financial difficulties. We welcome women of all backgrounds and nationalities to apply, and only 8 ladies will be selected for this program. These ladies will work in teams of 4.
              </p>
            </div>
            <div className="col-md-6">
              <h4 className="mb-3 h6">Registration and Selection</h4>
              <div className="d-inline-flex">
                <img
                  alt="TODO: REPLACE ME"
                  src="/img/bg_PLACEHOLDER_REMOVE_ME.png"
                  height="32"
                  width="32"
                  className="mr-2 mt-1"
                />
                <p>Submit an application form AND a simple technical task for us to evaluate your technical capabilities. Task details will be available in July in a repository on Github.</p>
              </div>
              <h4 className="mb-3 h6">During the Bootcamp, you are required to:</h4>
              <div className="flex-column">
                <div className="d-inline-flex">
                  <img
                    alt="TODO: REPLACE ME"
                    src="/img/bg_PLACEHOLDER_REMOVE_ME.png"
                    height="32"
                    width="32"
                    className="mr-2 mt-1"
                  />
                  <p>Put in at least 15 hours each week, inclusive of attending coding sessions.</p>
                </div>
                <div className="d-inline-flex">
                  <img
                    alt="TODO: REPLACE ME"
                    src="/img/bg_PLACEHOLDER_REMOVE_ME.png"
                    height="32"
                    width="32"
                    className="mr-2 mt-1"
                  />
                  <p>Attend all workshops conducted and at least 80% of coding sessions on every Saturday. (9am - 4pm)</p>
                </div>
              </div>
              <h4 className="mb-3 h6">After the Bootcamp:</h4>
              <div className="flex-column">
                <div className="d-inline-flex">
                  <img
                    alt="TODO: REPLACE ME"
                    src="/img/bg_PLACEHOLDER_REMOVE_ME.png"
                    height="32"
                    width="32"
                    className="mr-2 mt-1"
                  />
                  <p>Do a written interview and a technical article (on a topic of your choice) for the TechLadies blog.</p>
                </div>
                <div className="d-inline-flex">
                  <img
                    alt="TODO: REPLACE ME"
                    src="/img/bg_PLACEHOLDER_REMOVE_ME.png"
                    height="32"
                    width="32"
                    className="mr-2 mt-1"
                  />
                  <p>With your team, present on your assigned project at the TechLadies Graduation Party in Jan/Feb 2020.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row">
            <h3 className="mb-3">Don't worry if it sounds scary, we’ve programs to help with the technical tasks! 💪💪💪</h3>
            <div className="col-md-6">
              <h5 className="text-blue font-weight-bold">July / August</h5>
              <div className="font-weight-bold my-2">Javascript and CSS Workshops 1 - 3 (Optional)</div>
              <p>
                3 pre-bootcamp workshops will be conducted to equip women with basic programming skills to code complete the technical task for their application. These workshops are open to all women. It is not obligatory to sign up for the Bootcamp to attend these workshops
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="text-blue font-weight-bold">8 August</h5>
              <div className="font-weight-bold my-2">Code Clinic (Optional)</div>
              <p>
                Women interested in completing the technical task can attend this session to ask questions & get help for their submission apps.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <h2 className="mb-4 text-center">Program Timeline</h2>
            <div className="row">
              <Timeline>
                {bootcampTimeline.map(({ date, title, description }) => (
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

        <BootcampBuilders data={bootcampBuilders} />

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h2 className="text-center mb-5">Frequently Asked Questions</h2>
                <Accordion data={bootcampFAQ} />
              </div>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row gy-6">
            <div className="col-md-5">
              <img
                alt="TODO: REPLACE ME"
                className="img-fluid"
                src="../photos/bootcamp_stage.jpg"
              />
            </div>
            <div className="col-md-6 offset-md-1 d-flex flex-column align-items-start justify-content-center">
              <h2 className="mb-4 h4">
                Have a burning question? Please contact us at the link down
                below
              </h2>
              <a
                className="btn btn-primary"
                href="mailto:mentorship@techladies.co"
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
