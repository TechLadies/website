export default function preloadImages(images = []) {
  images.forEach((image) => {
    new Image().src = image
  })
}
