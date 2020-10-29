const REASON = {
  id: 'reason',
  type: 'question',
  title: 'What is your main goal at TechLadies?',
  options: {
    learnNewSkills: 'I want to learn new skills',
    moreWomenInTech: 'I want to see more women in tech',
    makeNewFriends: 'I want to make new friends',
    justBrowsing: 'No goals, just browsing',
  },
};

const DESCRIPTION = {
  id: 'description',
  type: 'question',
  title: 'Which phrase best describes your level of tech experiences?',
  options: {
    newbie: 'Newbie in tech',
    intermediate: 'Intermediate techie',
    advanced: 'Advanced tech professional',
    noSmartphone: "I don't even own a smartphone",
  },
};

const TIME = {
  id: 'time',
  type: 'question',
  title: 'How much time can you spare?',
  options: {
    notMuch: 'Not much!',
    some: ' Some time',
    fewHoursPerWeek: 'A few hours per week',
    fewHoursPerMonth: 'A few hours per month',
  },
};

const ACTION = {
  type: 'result',
  title: null,
  options: {
    learnMore: (
      <>
        <h3> Want to learn more about what we do? </h3>
        <br />
        <img
          className="thumbnail thumbnail-lg mx-auto d-block space-bottom-10 "
          alt="TODO: REPLACE ME"
          src="/icons/mentorship/goalsetting.jpg"
        />
        <a
          href="https://www.facebook.com/groups/techladiescode"
          target="_blank"
        >
          Become a COMMUNITY MEMBER ON FACEBOOK
        </a>
        <p>
          Beyond programs and events, TechLadies is a community. Join us online for the latest industry news, highlights on awesome women in tech, and get support on your journey in tech on our Facebook group and Facebook page.
        </p>
        <a className="btn btn-primary" href="#">
          Volunteer with TechLadies
        </a>
      </>
    ),

    communityMember: (
      <>
        <br />
        <a
          href="https://www.facebook.com/groups/techladiescode"
          target="_blank"
        >
          Become a COMMUNITY MEMBER ON FACEBOOK
        </a>
      </>
    ),

    mentorshipProgram: (
      <>
        <h3>We think you're great for our mentorship program. </h3>
        <br />
        <img
          className="thumbnail thumbnail-lg mx-auto d-block space-bottom-10 "
          alt="TODO: REPLACE ME"
          src="/icons/icon_TLmentorship.png"
        />
        <h1>TechLadies Mentorship</h1>
        <p>
          Ready to start or grow your career in tech? TechLadies Mentorship is a 3-month mentorship program that pairs women who are transitioning into or establishing themselves in the tech industry with industry practitioners.
        </p>
        <a className="btn btn-primary" href="/mentorship-2">
          Learn More
        </a>
      </>
    ),

    joinBootcamp: (
      <>
        <h3>We think you're great for our bootcamp program.</h3>
        <br />
        <img
          className="thumbnail thumbnail-lg mx-auto d-block space-bottom-10 "
          alt="TODO: REPLACE ME"
          src="/icons/icon_TLbootcamp.png"
        />
        <h1>TechLadies Bootcamp</h1>
        <p>
          Looking to become a professional programmer? TechLadies Bootcamp is a part-time accelerated learning program where you learn valuable technical skills from industry experts by building a product from scratch.
        </p>
        <a className="btn btn-primary" href="/bootcamp-6">
          Learn More
        </a>
      </>
    ),

    studyGroup: 'Are you looking for a STUDY GROUP?',
    volunteer: 'Would you be interested in VOLUNTEERING with us?',
    bootcampCoach: 'Why not join us as a BOOTCAMP COACH?',
    guestArticleBlog:
      'Would you be interested in contributing a GUEST ARTICLE to our BLOG?',
  },
};


const FOLLOW_UP_ACTION = {
  becomeMentee: 'Are you hoping to become a MENTEE?',
  becomeMentor: 'Have you ever considered becoming a mentor?',
};

const CHART = {
  type: REASON,
  nodes: [
    {
      value: 'justBrowsing',
      next: {
        type: ACTION,
        nodes: [
          {
            value: 'learnMore',
          },
        ],
      },
    },
    {
      value: 'learnNewSkills',
      next: {
        type: DESCRIPTION,
        nodes: [
          {
            value: 'newbie',
            next: {
              type: TIME,
              nodes: [
                {
                  value: 'notMuch',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'communityMember',
                      },
                    ],
                  },
                },
                {
                  value: 'some',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'mentorshipProgram',
                      },
                    ],
                  },
                },
                {
                  value: 'fewHoursPerWeek',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'joinBootcamp',
                      },
                    ],
                  },
                },
                {
                  value: 'fewHoursPerMonth',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'studyGroup',
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            value: 'intermediate',
            next: {
              type: TIME,
              nodes: [
                {
                  value: 'notMuch',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'communityMember',
                      },
                    ],
                  },
                },
                {
                  value: 'some',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'mentorshipProgram',
                      },
                    ],
                  },
                },
                {
                  value: 'fewHoursPerWeek',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'joinBootcamp',
                      },
                    ],
                  },
                },
                {
                  value: 'fewHoursPerMonth',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'volunteer',
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            value: 'advanced',
            next: {
              type: TIME,
              nodes: [
                {
                  value: 'notMuch',
                },
                {
                  value: 'some',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'mentorshipProgram',
                      },
                    ],
                  },
                },
                {
                  value: 'fewHoursPerWeek',
                },
                {
                  value: 'fewHoursPerMonth',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'bootcampCoach',
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            value: 'noSmartphone',
            next: {
              type: ACTION,
              nodes: [
                {
                  value: 'communityMember',
                },
              ],
            },
          },
        ],
      },
    },
    {
      value: 'moreWomenInTech',
      next: {
        type: DESCRIPTION,
        nodes: [
          {
            value: 'newbie',
            next: {
              type: TIME,
              nodes: [
                {
                  value: 'notMuch',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'communityMember',
                      },
                    ],
                  },
                },
                {
                  value: 'some',
                  next: {
                    type: ACTION,
                  },
                },
                {
                  value: 'fewHoursPerWeek',
                  next: {
                    type: ACTION,
                  },
                },
                {
                  value: 'fewHoursPerMonth',
                  next: {
                    type: ACTION,
                  },
                },
              ],
            },
          },
          {
            value: 'intermediate',
            next: {
              type: TIME,
              nodes: [
                {
                  value: 'notMuch',
                  next: {
                    type: ACTION,
                  },
                },
                {
                  value: 'some',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'mentorshipProgram',
                      },
                    ],
                  },
                },
                {
                  value: 'fewHoursPerWeek',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'bootcampCoach',
                      },
                    ],
                  },
                },
                {
                  value: 'fewHoursPerMonth',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'volunteer',
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            value: 'advanced',
            next: {
              type: TIME,
              nodes: [
                {
                  value: 'notMuch',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'guestArticleBlog',
                      },
                    ],
                  },
                },
                {
                  value: 'some',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'mentorshipProgram',
                      },
                    ],
                  },
                },
                {
                  value: 'fewHoursPerWeek',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'bootcampCoach',
                      },
                    ],
                  },
                },
                {
                  value: 'fewHoursPerMonth',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'volunteer',
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            value: 'noSmartphone',
            next: {
              type: ACTION,
              nodes: [
                {
                  value: 'communityMember',
                },
              ],
            },
          },
        ],
      },
    },
    {
      value: 'makeNewFriends',
      next: {
        type: DESCRIPTION,
        nodes: [
          {
            value: 'newbie',
            next: {
              type: TIME,
              nodes: [
                {
                  value: 'notMuch',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'communityMember',
                      },
                    ],
                  },
                },
                {
                  value: 'some',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'mentorshipProgram',
                      },
                    ],
                  },
                },
                {
                  value: 'fewHoursPerWeek',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'volunteer',
                      },
                    ],
                  },
                },
                {
                  value: 'fewHoursPerMonth',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'studyGroup',
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            value: 'intermediate',
            next: {
              type: TIME,
              nodes: [
                {
                  value: 'notMuch',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'communityMember',
                      },
                    ],
                  },
                },
                {
                  value: 'some',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'mentorshipProgram',
                      },
                    ],
                  },
                },
                {
                  value: 'fewHoursPerWeek',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'bootcampCoach',
                      },
                    ],
                  },
                },
                {
                  value: 'fewHoursPerMonth',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'volunteer',
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            value: 'advanced',
            next: {
              type: TIME,
              nodes: [
                {
                  value: 'notMuch',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'communityMember',
                      },
                      {
                        value: 'volunteer',
                      },
                    ],
                  },
                },
                {
                  value: 'some',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'mentorshipProgram',
                      },
                    ],
                  },
                },
                {
                  value: 'fewHoursPerWeek',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'bootcampCoach',
                      },
                    ],
                  },
                },
                {
                  value: 'fewHoursPerMonth',
                  next: {
                    type: ACTION,
                    nodes: [
                      {
                        value: 'volunteer',
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            value: 'noSmartphone',
            next: {
              type: ACTION,
              nodes: [
                {
                  value: 'communityMember',
                },
              ],
            },
          },
        ],
      },
    },
  ],
};

export default CHART;
