import { useState } from 'react'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'
import styles from './index.module.scss'

function EmailSubscription (props) {
  const { register, handleSubmit, reset } = useForm()
  const [addContactFeedback, setAddContactFeedback] = useState(null)

  const handleAddEmail = data => {
    fetch('/api/addContact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: data.email })
    }).then(function (res) {
      if (res.ok) {
        setAddContactFeedback('Thank you, your email is added to our list')
        reset()
      } else {
        setAddContactFeedback('Something went wrong. Your email was not added')
      }
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleAddEmail)}>
        <div className="input-group">
          <input
            name="email"
            className={clsx('form-control', styles.emailTextfieldWithRightButton)}
            placeholder="E-mail address"
            required={true}
            type="email"
            ref={register}
          />
          <button className={clsx(styles.paperPlaneButton)} type="submit"><div className={styles.paperPlaneSvg}></div></button>
        </div>
      </form>
      {
        addContactFeedback && (<div>{addContactFeedback}</div>)
      }
    </>
  )
}

export default EmailSubscription
