import axios from "axios"
import getConfig from "next/config"

const SENDGRID_API = "https://api.sendgrid.com/v3/contactdb/recipients"

const addContact = async (req, res) => {
  const { serverRuntimeConfig } = getConfig()
  const { email } = req.body
  const payload = [
    {
      email: email,
    },
  ]
  await axios
    .post(SENDGRID_API, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${serverRuntimeConfig.SENDGRID_API_KEY}`,
      },
    })
    .then(
      () => {
        return res.status(200).end()
      },
      () => {
        return res.status(404).json({
          error: {
            message: "Unable to add the contact.",
          },
        })
      }
    )
}

export default addContact
