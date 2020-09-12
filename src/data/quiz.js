const REASON = {
  id: 'reason',
  type: 'question',
  title: 'Why are you here?',
  options: {
    justBrowsing: 'Just browsing',
    learnNewSkills: 'I want to learn new skills',
    moreWomenInTech: 'I want to see more women in tech',
    makeNewFriends: 'I want to make new friends',
  },
};

const DESCRIPTION = {
  id: 'description',
  type: 'question',
  title: 'Which phrase best describes you?',
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
  title: 'How much time do you have?',
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
        Want to learn more about what we do?
        <br />
        <a
          href="https://www.facebook.com/groups/techladiescode"
          target="_blank"
        >
          Become a COMMUNITY MEMBER ON FACEBOOK
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
    mentorshipProgram: 'Have you heard of our MENTORSHIP PROGRAM?',
    joinBootcamp: 'Would you like to join our next BOOTCAMP?',
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
