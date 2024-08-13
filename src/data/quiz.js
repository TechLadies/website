import Link from "next/link"

const REASON = {
  id: "reason",
  type: "question",
  title: "What is your main goal at TechLadies?",
  options: {
    learnNewSkills: "I want to learn new skills",
    moreWomenInTech: "I want to see more women in tech",
    makeNewFriends: "I want to make new friends",
  },
}

const DESCRIPTION = {
  id: "description",
  type: "question",
  title: "What is your level of tech experience?",
  options: {
    newbie: "Newbie in tech",
    intermediate: "Intermediate techie",
    advanced: "Advanced tech professional",
    noSmartphone: "I'm not tech savvy at all",
  },
}

const TIME = {
  id: "time",
  type: "question",
  title: "How much time can you spend?",
  options: {
    notMuch: "Not much!",
    some: " Less than an hour per week",
    fewHoursPerWeek: "A few hours per week",
    fewHoursPerMonth: "A few hours per month",
  },
}

const ACTION = {
  type: "result",
  title: null,
  options: {
    communityMember: (
      <>
        <h3>We think you&apos;re great for our community!</h3>
        <img
          className="thumbnail thumbnail-xxl mx-auto d-block programs-modal-image"
          alt="TechLadies Community"
          src="/icons/icon_TLcommunity.png"
        />
        <h2>TechLadies Community</h2>
        <div className="col-md-10 offset-md-1">
          <p className="left-align mb-3">
            Beyond programs and events, TechLadies is a community. Join us
            online for the latest industry news, highlights on awesome women in
            tech, and get support on your journey in tech on our Facebook group
            and Facebook page.
          </p>
        </div>
        <a
          className="btn btn-primary mb-5"
          href="https://www.facebook.com/groups/techladiescode"
          target="_blank"
          rel="noreferrer"
        >
          Join Community
        </a>
      </>
    ),

    mentorshipProgram: (
      <>
        <h3>We think you&apos;re great for our mentorship program!</h3>
        <img
          className="thumbnail thumbnail-xxl mx-auto d-block programs-modal-image"
          alt="TechLadies Mentorship"
          src="/icons/icon_TLmentorship.png"
        />
        <h2>TechLadies Mentorship</h2>
        <div className="col-md-10 offset-md-1">
          <p className="left-align mb-3">
            TechLadies Mentorship is a 3-month mentorship program that pairs
            women who are transitioning into or establishing themselves in the
            tech industry with industry practitioners. Selected participants
            receive tailored guidance on their career goals.
          </p>
        </div>
        <Link href="/mentorship" passHref>
          <a className="btn btn-primary mb-5">Learn More</a>
        </Link>
      </>
    ),

    joinBootcamp: (
      <>
        <h3>We think you&apos;re great for our bootcamp program!</h3>
        <img
          className="thumbnail thumbnail-xxl mx-auto d-block programs-modal-image"
          alt="TechLadies Bootcamp"
          src="/icons/icon_TLbootcamp.png"
        />
        <h2>TechLadies Bootcamp</h2>
        <div className="col-md-10 offset-md-1">
          <p className="left-align mb-3">
            TechLadies Bootcamp is a part-time accelerated learning program
            where you learn valuable technical skills from industry experts by
            building a product from scratch. This program is best for women
            exploring a career switch into tech.
          </p>
        </div>
        <Link href="/bootcamp" passHref>
          <a className="btn btn-primary mb-5">Learn More</a>
        </Link>
      </>
    ),

    meet: (
      <>
        <h3>We think you&apos;ll find our get-togethers useful!</h3>
        <img
          className="thumbnail thumbnail-xxl mx-auto d-block programs-modal-image"
          alt="TechLadies Meet"
          src="/icons/icon_TLmeet.png"
        />
        <h2>TechLadies Meet</h2>
        <div className="col-md-10 offset-md-1">
          <p className="left-align mb-3">
            We run frequent in-person or virtual events on technical talks,
            roundtable discussions, study groups and more. You&apos;ll find
            something for you at TechLadies Meet, available for women of all
            levels of technical skills.
          </p>
        </div>
        <a
          className="btn btn-primary mb-5"
          href="https://www.eventbrite.sg/o/techladies-11040976589"
          target="_blank"
          rel="noreferrer"
        >
          Learn More
        </a>
      </>
    ),
    volunteer: (
      <>
        <h3>We think you&apos;ll enjoy volunteering with us!</h3>
        <img
          className="thumbnail thumbnail-xxl mx-auto d-block programs-modal-image"
          alt="Join us to increase gender diversity in tech"
          src="/illustrations/illus_contribute.png"
        />
        <h2>Contribute to TechLadies</h2>
        <div className="col-md-10 offset-md-1">
          <p className="left-align mb-3">
            We&apos;re looking for volunteers for a range of different technical
            and non-technical roles. Volunteer with TechLadies in 2021 to meet
            like-minded peers passionate about gender diversity in tech!
          </p>
        </div>
        <Link href="/contribute" passHref>
          <a className="btn btn-primary mb-5">Learn More</a>
        </Link>
      </>
    ),

    bootcampCoach: (
      <>
        <h3>We think you&apos;ll enjoy coaching at TechLadies Bootcamp!</h3>
        <img
          className="thumbnail thumbnail-xxl mx-auto d-block programs-modal-image"
          alt="TechLadies Bootcamp"
          src="/icons/icon_TLbootcamp.png"
        />
        <h2>TechLadies Bootcamp</h2>
        <div className="col-md-10 offset-md-1">
          <p className="left-align mb-3">
            You are part of the team that teaches the Bootcamp participants
            valuable skills that help them kick start their journey in tech. You
            will pair-program with the participants, following a curriculum set
            by the Tech Lead, and provide feedback to the participants and Tech
            Lead on how the Bootcamp is progressing.
          </p>
        </div>
        <Link href="/contribute" passHref>
          <a className="btn btn-primary mb-5">Learn More</a>
        </Link>
      </>
    ),
    featureSpeaker: (
      <>
        <h3>We think you&apos;ll enjoy sharing your knowledge with us!</h3>
        <img
          className="thumbnail thumbnail-xxl mx-auto d-block programs-modal-image"
          alt="Join us to increase gender diversity in tech"
          src="/illustrations/illus_contribute.png"
        />
        <h2>Ladies in Tech Feature</h2>
        <div className="col-md-10 offset-md-1">
          <p className="left-align mb-3">
            We love to feature you and share your knowledge with our community!
            You can be part of our Ladies in Tech feature, write guest articles,
            or speak at our events. Fill the form below to let us know more
            about you.
          </p>
        </div>
        <a
          className="btn btn-primary mb-5"
          href="http://bit.ly/ladiesintechTL"
          target="_blank"
          rel="noreferrer"
        >
          Learn More
        </a>
      </>
    ),
  },
}

const FOLLOW_UP_ACTION = {
  becomeMentee: "Are you hoping to become a MENTEE?",
  becomeMentor: "Have you ever considered becoming a mentor?",
}

const CHART = {
  type: REASON,
  nodes: [
    {
      value: "learnNewSkills",
      next: {
        type: DESCRIPTION,
        nodes: [
          {
            value: "newbie",
            next: {
              type: TIME,
              nodes: [
                {
                  value: "notMuch",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "communityMember",
                      },
                    ],
                  },
                },
                {
                  value: "some",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "mentorshipProgram",
                      },
                    ],
                  },
                },
                {
                  value: "fewHoursPerWeek",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "joinBootcamp",
                      },
                    ],
                  },
                },
                {
                  value: "fewHoursPerMonth",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "meet",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            value: "intermediate",
            next: {
              type: TIME,
              nodes: [
                {
                  value: "notMuch",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "communityMember",
                      },
                    ],
                  },
                },
                {
                  value: "some",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "mentorshipProgram",
                      },
                    ],
                  },
                },
                {
                  value: "fewHoursPerWeek",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "joinBootcamp",
                      },
                    ],
                  },
                },
                {
                  value: "fewHoursPerMonth",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "volunteer",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            value: "advanced",
            next: {
              type: TIME,
              nodes: [
                {
                  value: "notMuch",
                },
                {
                  value: "some",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "mentorshipProgram",
                      },
                    ],
                  },
                },
                {
                  value: "fewHoursPerWeek",
                },
                {
                  value: "fewHoursPerMonth",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "bootcampCoach",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            value: "noSmartphone",
            next: {
              type: ACTION,
              nodes: [
                {
                  value: "communityMember",
                },
              ],
            },
          },
        ],
      },
    },
    {
      value: "moreWomenInTech",
      next: {
        type: DESCRIPTION,
        nodes: [
          {
            value: "newbie",
            next: {
              type: TIME,
              nodes: [
                {
                  value: "notMuch",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "communityMember",
                      },
                    ],
                  },
                },
                {
                  value: "some",
                  next: {
                    type: ACTION,
                  },
                },
                {
                  value: "fewHoursPerWeek",
                  next: {
                    type: ACTION,
                  },
                },
                {
                  value: "fewHoursPerMonth",
                  next: {
                    type: ACTION,
                  },
                },
              ],
            },
          },
          {
            value: "intermediate",
            next: {
              type: TIME,
              nodes: [
                {
                  value: "notMuch",
                  next: {
                    type: ACTION,
                  },
                },
                {
                  value: "some",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "mentorshipProgram",
                      },
                    ],
                  },
                },
                {
                  value: "fewHoursPerWeek",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "bootcampCoach",
                      },
                    ],
                  },
                },
                {
                  value: "fewHoursPerMonth",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "volunteer",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            value: "advanced",
            next: {
              type: TIME,
              nodes: [
                {
                  value: "notMuch",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "featureSpeaker",
                      },
                    ],
                  },
                },
                {
                  value: "some",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "mentorshipProgram",
                      },
                    ],
                  },
                },
                {
                  value: "fewHoursPerWeek",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "bootcampCoach",
                      },
                    ],
                  },
                },
                {
                  value: "fewHoursPerMonth",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "volunteer",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            value: "noSmartphone",
            next: {
              type: ACTION,
              nodes: [
                {
                  value: "communityMember",
                },
              ],
            },
          },
        ],
      },
    },
    {
      value: "makeNewFriends",
      next: {
        type: DESCRIPTION,
        nodes: [
          {
            value: "newbie",
            next: {
              type: TIME,
              nodes: [
                {
                  value: "notMuch",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "communityMember",
                      },
                    ],
                  },
                },
                {
                  value: "some",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "mentorshipProgram",
                      },
                    ],
                  },
                },
                {
                  value: "fewHoursPerWeek",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "volunteer",
                      },
                    ],
                  },
                },
                {
                  value: "fewHoursPerMonth",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "meet",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            value: "intermediate",
            next: {
              type: TIME,
              nodes: [
                {
                  value: "notMuch",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "communityMember",
                      },
                    ],
                  },
                },
                {
                  value: "some",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "mentorshipProgram",
                      },
                    ],
                  },
                },
                {
                  value: "fewHoursPerWeek",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "bootcampCoach",
                      },
                    ],
                  },
                },
                {
                  value: "fewHoursPerMonth",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "volunteer",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            value: "advanced",
            next: {
              type: TIME,
              nodes: [
                {
                  value: "notMuch",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "communityMember",
                      },
                      {
                        value: "volunteer",
                      },
                    ],
                  },
                },
                {
                  value: "some",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "mentorshipProgram",
                      },
                    ],
                  },
                },
                {
                  value: "fewHoursPerWeek",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "bootcampCoach",
                      },
                    ],
                  },
                },
                {
                  value: "fewHoursPerMonth",
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: "volunteer",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            value: "noSmartphone",
            next: {
              type: ACTION,
              nodes: [
                {
                  value: "communityMember",
                },
              ],
            },
          },
        ],
      },
    },
  ],
}

export default CHART
