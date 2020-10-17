import Head from 'next/head';

import clsx from 'clsx';

import Accordion from '../components/Accordion';
import DonationCard from '../components/DonationCard';

import programsFAQ from '../data/programs-faq.js';
import donations from '../data/donations.js';
import volunteerInitiatives from '../data/volunteer-initiatives';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contribute | TechLadies</title>
      </Head>
      <main>
        <div className="container py-6">
          <div className="row gy-6">
            <div className="col-md-6">
              <img
                alt="TODO: REPLACE ME"
                className="img-fluid mb-4"
                src="/illustrations/illus_contribute.png"
              />
              <h1 className="h3">
                We need your help to increase the impact of our work
              </h1>
            </div>
            <div className="col-md-5 offset-md-1">
              <p className="mb-3 text-primary font-weight-bold">
                Join us in our mission to increase women's participation in the tech industry.
              </p>
              <p className="mb-4 text-body">
                We have built an amazing international community in Asia and
                empowered women to switch careers into tech, but we need help. 
                <br />
                <br />
                Support us to make a difference in tech and gain new skills & connections while at it! 
              </p>
              <a className="btn btn-primary" href="#">
                Volunteer with TechLadies
              </a>
            </div>
          </div>
        </div>
        <div className="container py-6">
          <h2 className="text-center mb-5">Ways you can Volunteer</h2>
          <div className="row gy-4 pt-5">
            {volunteerInitiatives.map(({ image, title, description }) => (
              <div className="col-lg-3 col-sm-6" key={title}>
                <img
                  className="thumbnail thumbnail-xl mb-4 center-image"
                  alt={title + ' image'}
                  src={image}
                />
                <h6 className="mb-3">{title}</h6>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray">
          <div className="container py-6">
            <div className="row gy-6">
              <div className="col-md-5 offset-md-1 order-md-last">
                <img
                  alt="TODO: REPLACE ME"
                  className="img-fluid"
                  src="/partners/partner_stage.png"
                />
              </div>
              <div className="col-md-6 order-md-first d-flex flex-column justify-content-center">
                <h2 className="mb-4 h4">Be our Corporate Partner</h2>
                <p className="mb-4">
                  TechLadies is looking for corporations to partner with us,
                  providing speakers, mentors, and coaches, as well as venue or
                  financial sponsorships. Do reach out to{' '}
                  <a href=" mailto:elisha@techladies.co">
                    elisha@techladies.co
                  </a>{' '}
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
                alt="TODO: REPLACE ME"
                className="mb-4 partner-logo"
                src="/partners/logos/microsoft.png"
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <img
                alt="TODO: REPLACE ME"
                className="mb-4 partner-logo"
                src="/partners/logos/rakuten-logo.gif"
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <img
                alt="TODO: REPLACE ME"
                className="mb-4 partner-logo"
                src="/partners/logos/thoughtworks.png"
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <img
                alt="TODO: REPLACE ME"
                className="mb-4 partner-logo"
                src="/partners/logos/zendesk.png"
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <img
                alt="TODO: REPLACE ME"
                className="mb-4 partner-logo"
                src="/partners/logos/carousell.png"
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <img
                alt="TODO: REPLACE ME"
                className="mb-4 partner-logo"
                src="/partners/logos/kiatsg_logo.png"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray">
          <div className="container py-6">
            <div className="row mb-4">
              <div className="col-md-6">
                <h3 className="h4">
                  Your donations help fund our events and subscription services
                  (such as EventBrite, SendGrid)
                </h3>
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
              <div className="text-center">
                <small>
                  Clicking "Contribute" will bring you to make a donation
                  securely via PayPal, where you can donate with all major
                  credit cards. TechLadies' finances are managed by Learnemy Pte
                  Ltd. As we are not a registered non-profit, we cannot send an
                  invoice for tax purposes.
                </small>
              </div>
            </div>
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
