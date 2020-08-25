import Head from 'next/head';
import NavLink from '../components/NavLink';

import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Timeline | TechLadies</title>
      </Head>
      <main>
        <div className="container py-6">
          <Timeline>
            <TimelineItem>
              <h3 className="h5 text-red mb-3">4 July, 11am (SGT)</h3>
              <h4 className="h6 mb-3">Info Session & Application Opens</h4>
              <p className="pb-3">
                We will share with you more about the application process, and
                explain the participants will get to learn. Women interested in
                the TechLadies Bootcamp #6 should join this meeting. RSVP here.
              </p>
            </TimelineItem>
            <TimelineItem>
              <h3 className="h5 text-red mb-3">4 July, 11am (SGT)</h3>
              <h4 className="h6 mb-3">Info Session & Application Opens</h4>
              <p className="pb-3">
                We will share with you more about the application process, and
                explain the participants will get to learn. Women interested in
                the TechLadies Bootcamp #6 should join this meeting. RSVP here.
              </p>
            </TimelineItem>
            <TimelineItem>
              <h3 className="h5 text-red mb-3">4 July, 11am (SGT)</h3>
              <h4 className="h6 mb-3">Info Session & Application Opens</h4>
              <p className="pb-3">
                We will share with you more about the application process, and
                explain the participants will get to learn. Women interested in
                the TechLadies Bootcamp #6 should join this meeting. RSVP here.
              </p>
            </TimelineItem>
            <TimelineItem>
              <h3 className="h5 text-red mb-3">4 July, 11am (SGT)</h3>
              <h4 className="h6 mb-3">Info Session & Application Opens</h4>
              <p className="pb-3">
                We will share with you more about the application process, and
                explain the participants will get to learn. Women interested in
                the TechLadies Bootcamp #6 should join this meeting. RSVP here.
              </p>
            </TimelineItem>
            <TimelineItem>
              <h3 className="h5 text-red mb-3">4 July, 11am (SGT)</h3>
              <h4 className="h6 mb-3">Info Session & Application Opens</h4>
              <p className="pb-3">
                We will share with you more about the application process, and
                explain the participants will get to learn. Women interested in
                the TechLadies Bootcamp #6 should join this meeting. RSVP here.
              </p>
            </TimelineItem>
          </Timeline>
        </div>
      </main>
    </div>
  );
}
