import Head from "next/head"
import NavLink from "../components/NavLink"

import Timeline from "../components/Timeline"
import TimelineItem from "../components/TimelineItem"

import bootcampTimeline from "../data/bootcamp-timeline"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Timeline | TechLadies</title>
      </Head>
      <main>
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
      </main>
    </div>
  )
}
