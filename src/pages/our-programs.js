import Head from 'next/head';

import Accordion from '../components/Accordion';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import TestimonialCard from '../components/TestimonialCard';

import clsx from 'clsx';

import bootcampTestimonials from '../data/bootcamp-testimonials.js';
import mentorshipTestimonials from '../data/mentorship-testimonials.js';
import programsFAQ from '../data/programs-faq.js';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Our Programs | TechLadies</title>
      </Head>
      <div className="container">
        <div className="pt-6 pb-6">
          <div className="row gy-6">
            <div className="col-md-6">
              <img alt="REPLACE ME" className="mb-3" src="/img/swing.svg" />
              <h2 className="mb-4">Which programs suits me?</h2>
              <p className="mb-4">
                Take a short quiz to discover which program would be the best
                fit for you!
              </p>
            </div>
            <div className="col-md-5 offset-md-1">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="mb-4">
                      <label
                        htmlFor="role"
                        className="form-label font-weight-bold"
                      >
                        I am a
                      </label>
                      <select id="role" className="form-select">
                        <option>Tech Professional</option>
                        <option>Tech Professional</option>
                        <option>Tech Professional</option>
                        <option>Tech Professional</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="purpose"
                        className="form-label font-weight-bold"
                      >
                        who wants to
                      </label>
                      <select id="purpose" className="form-select">
                        <option>Know more people</option>
                        <option>Know more people</option>
                        <option>Know more people</option>
                        <option>Know more people</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="duration"
                        className="form-label font-weight-bold"
                      >
                        and I am available for
                      </label>
                      <select id="duration" className="form-select">
                        <option>3 hours a week</option>
                        <option>3 hours a week</option>
                        <option>3 hours a week</option>
                        <option>3 hours a week</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6 pb-6">
        <div className="container">
          <div className="row gy-5">
            <div className="col-md-6 offset-md-1 order-md-last">
              <img
                alt="REPLACE ME"
                className="thumbnail thumbnail-lg mb-3"
                src="https://i.pravatar.cc/128?img=11"
              />
              <h2 className="mb-3">TechLadies Bootcamp</h2>
              <p className="mb-3">Duration: 14 weeks</p>
              <p>
                A part-time accelerated learning program designed for women who
                wish to be professional programmers. You'll be guided by
                industry experts to create a product. 30% of the TechLadies
                Bootcamp graduates found software-related jobs and internships.
              </p>
            </div>
            <div className="col-md-5 order-md-first">
              <Gallery>
                {bootcampTestimonials.map(
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
      </div>
      <div className="pt-6 pb-6">
        <div className="container">
          <div className="row gy-5">
            <div className="col-md-6">
              <img
                alt="REPLACE ME"
                className="thumbnail thumbnail-lg mb-3"
                src="https://i.pravatar.cc/128?img=10"
              />
              <h2 className="mb-3">TechLadies Mentorship</h2>
              <p className="mb-3">Duration: 14 weeks</p>
              <p>
                A part-time accelerated learning program designed for women who
                wish to be professional programmers. You'll be guided by
                industry experts to create a product. 30% of the TechLadies
                Bootcamp graduates found software-related jobs and internships.
              </p>
            </div>
            <div className="col-md-5 offset-md-1">
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
      </div>
      <div className="pt-6 pb-6">
        <div className="container text-center">
          <div className="row gy-6">
            <div className="col-md-6">
              <img
                alt="REPLACE ME"
                className="thumbnail thumbnail-lg mb-3"
                src="https://i.pravatar.cc/128?img=8"
              />
              <h3 className="mb-4">TechLadies Meet</h3>
              <p className="mb-3">
                Meet fellow TechLadies through in-person or online technical
                talks, panel/roundtable discussions, study groups and more!
                TechLadies Meet is open to women of all levels of technical
                skills.
              </p>
              <a className="btn btn-primary">See our Events</a>
            </div>
            <div className="col-md-6">
              <img
                alt="REPLACE ME"
                className="thumbnail thumbnail-lg mb-3"
                src="https://i.pravatar.cc/128?img=9"
              />
              <h3 className="mb-4">TechLadies Community</h3>
              <p className="mb-3">
                Beyond programs and events, TechLadies is a community. Join us
                online for the latest industry news, highlights on awesome women
                in tech, and get support on your journey in tech.
              </p>
              <a className="btn btn-primary">Join us on Facebook</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="pt-6 pb-6">
          <div className="row gy-6">
            <div className="col-md-5 offset-md-1 order-md-last">
              <img alt="REPLACE ME" src="/img/swing.svg" />
            </div>
            <div className="col-md-6 order-md-first">
              <h2 className="mb-4">Want to be a Coach?</h2>
              <p className="mb-4">
                We are also on the lookout for awesome people to be a coach for
                our programs. Connect with many others and contribute to the
                tech scene.
              </p>
              <a className="btn btn-primary">I'm interested!</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="pt-6 pb-6">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h2 className="text-center mb-4">Frequently Asked Questions</h2>
              <Accordion data={programsFAQ} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
