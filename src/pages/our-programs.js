import Head from 'next/head';

import { useEffect } from 'react';
import { ArrowRight } from 'react-feather';

import clsx from 'clsx';

import Accordion from '../components/Accordion';
import Gallery from '../components/Gallery';
import TestimonialCard from '../components/TestimonialCard';

import preloadImages from '../utils/preloadImages';

import bootcampTestimonials from '../data/bootcamp-testimonials.js';
import mentorshipTestimonials from '../data/mentorship-testimonials.js';
import programsFAQ from '../data/programs-faq.js';

export default function Home() {
  useEffect(() => {
    preloadImages(bootcampTestimonials.map((testimonial) => testimonial.image));
    preloadImages(
      mentorshipTestimonials.map((testimonial) => testimonial.image),
    );
  }, [bootcampTestimonials, mentorshipTestimonials]);

  return (
    <div>
      <Head>
        <title>Our Programs | TechLadies</title>
      </Head>
      <div className="container py-6">
        <div className="row gy-6">
          <div className="col-lg-6 col-md-5">
            <img alt="TODO: REPLACE ME" className="mb-4" src="/img/swing.svg" />
            <h1 className="mb-4 h3">Which programs suits me?</h1>
            <p className="mb-4">
              Take a short quiz to discover which program would be the best fit
              for you!
            </p>
          </div>
          <div className="col-lg-5 offset-lg-1 col-md-7">
            <div className="card">
              <div className="card-body">
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    alert('TODO: Show modal!');
                  }}
                >
                  <div className="mb-4">
                    <label
                      htmlFor="role"
                      className="form-label font-weight-bold"
                    >
                      I am a
                    </label>
                    <select id="role" className="form-select">
                      <option>Tech Professional</option>
                      <option>Designer</option>
                      <option>Software Engineer</option>
                      <option>Product Manager</option>
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
                      <option>Improve my skills</option>
                      <option>Give back to the community</option>
                      <option>Change of career</option>
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
                      <option>4 hours a week</option>
                      <option>5 hours a week</option>
                      <option>6 hours a week</option>
                    </select>
                  </div>
                  <button
                    aria-label="Submit"
                    className="btn btn-primary btn-sm rounded-circle"
                    type="submit"
                  >
                    <ArrowRight size={32} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray">
        <div className="container py-6">
          <div className="row gy-5">
            <div className="col-md-5 offset-md-1 col-lg-6 offset-lg-1 order-md-last">
              <img
                alt="TODO: REPLACE ME"
                className="thumbnail thumbnail-lg mb-4"
                src="https://i.pravatar.cc/128?img=11"
              />
              <h3 className="mb-4 h4">TechLadies Bootcamp</h3>
              <p className="text-body mb-4">Duration: 14 weeks</p>
              <p className="text-body mb-4">
                A part-time accelerated learning program designed for women who
                wish to be professional programmers. You'll be guided by
                industry experts to create a product. 30% of the TechLadies
                Bootcamp graduates found software-related jobs and internships.
              </p>
              <button className="btn btn-primary">I'm Interested!</button>
            </div>
            <div className="col-md-6 col-lg-5 order-md-first">
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
      <div className="container py-6">
        <div className="row gy-5">
          <div className="col-lg-6 col-md-5">
            <img
              alt="TODO: REPLACE ME"
              className="thumbnail thumbnail-lg mb-4"
              src="https://i.pravatar.cc/128?img=10"
            />
            <h3 className="mb-4 h4">TechLadies Mentorship</h3>
            <p className="text-body mb-4">Duration: 14 weeks</p>
            <p className="text-body mb-4">
              A part-time accelerated learning program designed for women who
              wish to be professional programmers. You'll be guided by industry
              experts to create a product. 30% of the TechLadies Bootcamp
              graduates found software-related jobs and internships.
            </p>
            <button className="btn btn-primary">I'm Interested!</button>
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
      <div className="container py-6 text-center">
        <div className="row gy-6">
          <div className="col-md-5 offset-md-1">
            <img
              alt="TODO: REPLACE ME"
              className="thumbnail thumbnail-lg mb-4"
              src="https://i.pravatar.cc/128?img=8"
            />
            <h3 className="mb-4 h4">TechLadies Meet</h3>
            <p className="mb-4">
              Meet fellow TechLadies through in-person or online technical
              talks, panel/roundtable discussions, study groups and more!
              TechLadies Meet is open to women of all levels of technical
              skills.
            </p>
            <a className="btn btn-primary">See our Events</a>
          </div>
          <div className="col-md-5">
            <img
              alt="TODO: REPLACE ME"
              className="thumbnail thumbnail-lg mb-4"
              src="https://i.pravatar.cc/128?img=9"
            />
            <h3 className="mb-4 h4">TechLadies Community</h3>
            <p className="mb-4">
              Beyond programs and events, TechLadies is a community. Join us
              online for the latest industry news, highlights on awesome women
              in tech, and get support on your journey in tech.
            </p>
            <a className="btn btn-primary">Join us on Facebook</a>
          </div>
        </div>
      </div>
      <div className="bg-gray">
        <div className="container py-6">
          <div className="row gy-6">
            <div className="col-md-5 offset-md-1 order-md-last">
              <img alt="TODO: REPLACE ME" src="/img/swing.svg" />
            </div>
            <div className="col-md-6 order-md-first">
              <h2 className="mb-4 h4">Want to be a Coach?</h2>
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
      <div className="container py-6">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2 className="text-center mb-5">Frequently Asked Questions</h2>
            <Accordion data={programsFAQ} />
          </div>
        </div>
      </div>
    </div>
  );
}
