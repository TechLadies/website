import Head from 'next/head';

import clsx from 'clsx';

import Accordion from '../components/Accordion';

import bootcampFAQ from '../data/bootcamp-faq.js';
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
            
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row">
              <p className="mb-4">
                
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
          <div className="row">
            <h2 className="mb-4 text-center">Bootcamp Builders</h2>
            <div className="row">
              {bootcamp6Builders.map(({ image, name, title, description }) => (
                <div className="row col-md-4 gy-3 mb-4" key={title}>
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        className="thumbnail thumbnail-lg"
                        alt={title + ' image'}
                        src={image}
                      />
                    </div>
                    <div className="col-md-8">
                      <h4>{name}</h4>
                      <h6>{title}</h6>
                    </div>
                  </div>
                  <div className="row gy-3 mb-4">
                    <p className="align-top text-small">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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
