import Head from 'next/head';

import clsx from 'clsx';

import Accordion from '../components/Accordion';

import programsFAQ from '../data/programs-faq.js';
import donations from '../data/donations.js';
import volunteerInitiatives from '../data/volunteer-initiatives';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bootcamp #6 | TechLadies</title>
      </Head>
      <main>
        <div className="container py-6">
          <div className="row gy-6">
            <h1 className="mb-4 h3 text-center">
              BOOTCAMP #6 - APPLICATIONS CLOSED
            </h1>
            <p className="mb-4 text-body">
              The TechLadies Bootcamp #6 is a 14-week part-time accelerated
              learning program designed to help women with basic programming
              background become professional programmers. You will be guided by
              industry experts, creating products for non-profit organizations.
              <br />
              <br />
              Due to COVID-19, most of the meetings and coaching sessions during
              the Bootcamp #6 will be conducted online using Zoom. We will
              revert to face-to-face learning once it is safe to do so.
              <br />
              <br />
              This program will take place in Singapore from 12 Sep to 12 Dec
              2020 and costs SGD550. Full scholarships are provided for people
              with financial difficulties. We welcome women of all backgrounds
              and nationalities to apply, and only 8 ladies will be selected for
              this program. These ladies will work in teams of 4.
              <br />
              <br />
              If you are selected to participate in the TechLadies Bootcamp #6,
              you are required to:
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
                  write a technical article (on a topic of your choice) for the
                  TechLadies blog;
                </li>
                <li>
                  do a team presentation on your assigned project at the
                  TechLadies Graduation Party in Jan/Feb 2020.
                </li>
              </ul>
            </p>
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
      </main>
    </div>
  );
}
