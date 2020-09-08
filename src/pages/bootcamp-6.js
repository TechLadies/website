import Head from 'next/head';

import clsx from 'clsx';

import Accordion from '../components/Accordion';

import programsFAQ from '../data/programs-faq.js';
import donations from '../data/donations.js';
import volunteerInitiatives from '../data/volunteer-initiatives';

import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';

import bootcampTimeline from '../data/bootcamp-timeline';
import bootcamp6Builders from '../data/bootcamp-6-builders';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bootcamp #6 | TechLadies</title>
      </Head>
      <main>
        <div className="container-fluid p-6  bg-purple">
          <div className="row gy-6">
            <h1 className="mb-4 h3 text-center">
              BOOTCAMP #6 - APPLICATIONS CLOSED
            </h1>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row">
              <p className="mb-4">
                The TechLadies Bootcamp #6 is a 14-week part-time accelerated
                learning program designed to help women with basic programming
                background become professional programmers. You will be guided
                by industry experts, creating products for non-profit
                organizations.
                <br />
                <br />
                Due to COVID-19, most of the meetings and coaching sessions
                during the Bootcamp #6 will be conducted online using Zoom. We
                will revert to face-to-face learning once it is safe to do so.
                <br />
                <br />
                This program will take place in Singapore from 12 Sep to 12 Dec
                2020 and costs SGD550. Full scholarships are provided for people
                with financial difficulties. We welcome women of all backgrounds
                and nationalities to apply, and only 8 ladies will be selected
                for this program. These ladies will work in teams of 4.
                <br />
                <br />
                If you are selected to participate in the TechLadies Bootcamp
                #6, you are required to:
                <br />
                <br />
                <ul>
                  <li>
                    work on your assigned project at least 15 hours each week,
                    inclusive of attending coding sessions;
                  </li>
                  <li>
                    attend at least 80% of coding sessions happening on every
                    Saturday (between 26 Sep 2020 to 12 Dec 2020), between 9am -
                    4pm;
                  </li>
                  <li>
                    attend at least 80% of all workshops (between 12 Sep 2020 to
                    12 Dec 2020);
                  </li>
                  <li>
                    after the bootcamp, participate in a written interview and
                    write a technical article (on a topic of your choice) for
                    the TechLadies blog;
                  </li>
                  <li>
                    do a team presentation on your assigned project at the
                    TechLadies Graduation Party in Jan/Feb 2020.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="container py-6">
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

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h2 className="text-center mb-5">Frequently Asked Questions</h2>
                <Accordion data={programsFAQ} />
              </div>
            </div>
          </div>
        </div>

        <div className="container py-6">
          <div className="row">
            <h2 className="mb-4 text-center">Bootcamp Builders</h2>
            <div className="row">
              {bootcamp6Builders.map(({ image, title, description }) => (
                <div className="row gy-3 mb-4" key={title}>
                  <div className="col-md-2">
                    <img
                      className="thumbnail thumbnail-lg"
                      alt={title + ' image'}
                      src={image}
                    />
                  </div>

                  <div className="col-md-10">
                    <h6 className="mb-3">{title}</h6>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
