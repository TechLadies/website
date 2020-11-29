import seo from '../../next-seo.config'

// type, title, image, url are required and type is always "website"
// see https://ogp.me/
const requiredOpenGraphProperties = {
  type: "website"
}

// Put the custom seo page data here and
const Bootcamp6PageSeo = {
  ...seo,
  title: "Bootcamp #6 | TechLadies",
  description: "The TechLadies Bootcamp #6 is a 14-week part-time accelerated learning program designed to help women with basic programming background become professional programmers.",
  openGraph: {
    ...requiredOpenGraphProperties,
    title: "Bootcamp #6 | TechLadies",
    description: "The TechLadies Bootcamp #6 is a 14-week part-time accelerated learning program designed to help women with basic programming background become professional programmers.",
    url: "https://techladies.co/bootcamp-6/",
    images: [
      {
        url: "https://techladies.co/photos/bootcamp_stage.jpg",
        alt: "TechLadies Bootcamp stage"
      },
    ]
  }
}

export {
  Bootcamp6PageSeo
}
