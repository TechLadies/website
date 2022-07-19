import seo from "../../next-seo.config"

// type, title, image, url are required and type is always "website"
// see https://ogp.me/
const requiredOpenGraphProperties = {
  type: "website",
}

// Put the custom seo page data here and
const Bootcamp6PageSeo = {
  ...seo,
  title: "Bootcamp #6 | TechLadies",
  description:
    "The TechLadies Bootcamp #6 is a 14-week part-time accelerated learning program designed to help women with basic programming background become professional programmers.",
  openGraph: {
    ...requiredOpenGraphProperties,
    title: "Bootcamp #6 | TechLadies",
    description:
      "The TechLadies Bootcamp #6 is a 14-week part-time accelerated learning program designed to help women with basic programming background become professional programmers.",
    url: "https://techladies.co/bootcamp-6/",
    images: [
      {
        url: "https://techladies.co/photos/bootcamp_stage.jpg",
        alt: "TechLadies Bootcamp stage",
      },
    ],
  },
}

const BootcampPageSeo = {
  ...seo,
  title: "Bootcamp | TechLadies",
  description:
    "The TechLadies Bootcamp is a 15-week part-time accelerated learning program designed to help women with basic programming background become professional programmers.",
  openGraph: {
    ...requiredOpenGraphProperties,
    title: "Bootcamp | TechLadies",
    description:
      "The TechLadies Bootcamp is a 15-week part-time accelerated learning program designed to help women with basic programming background become professional programmers.",
    url: "https://techladies.co/bootcamp/",
    images: [
      {
        url: "https://techladies.co/photos/bootcamp_stage.jpg",
        alt: "TechLadies Bootcamp stage",
      },
    ],
  },
}

const VolunteerSeo = {
  ...seo,
  title: "Contribute to TechLadies",
  description:
    "Volunteer or donate to join us in our mission to increase women's participation in the tech industry! ",
  openGraph: {
    ...requiredOpenGraphProperties,
    title: "Contribute to TechLadies",
    description:
      "Volunteer or donate to join us in our mission to increase women's participation in the tech industry!",
    url: "https://techladies.co/contribute/",
    images: [
      {
        url: "https://techladies.co/ogimages/contribute.png",
      },
    ],
  },
}

const HomeSeo = {
  ...seo,
  openGraph: {
    ...requiredOpenGraphProperties,
    url: "https://techladies.co/",
    images: [
      {
        url: "https://techladies.co/ogimages/og-main.png",
      },
    ],
  },
}

export { Bootcamp6PageSeo, BootcampPageSeo, VolunteerSeo, HomeSeo }
