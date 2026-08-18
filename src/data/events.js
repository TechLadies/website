import prefix from "../utils/prefix"

// Change status to "past" once an event is over — it moves from the Upcoming
// section near the top of the Programs page to the Past section at the bottom.
const events = [
  {
    status: "upcoming",
    title: "Saturday Nature Hike: Southern Ridges",
    date: "Sat, 22 Aug 2026 · 8:30am",
    image: `${prefix}/events/2026-08-22-southern-ridges-hike.jpg`,
    url: "https://luma.com/24qkprvm",
  },
  {
    status: "past",
    title: "Build Your Career With Confidence",
    date: "Thu, 16 Jul 2026 · 6:30pm",
    image: `${prefix}/events/2026-07-16-build-career-confidence.jpg`,
    url: "https://www.meetup.com/women-devs-sg/events/315367903/",
  },
]

export default events
