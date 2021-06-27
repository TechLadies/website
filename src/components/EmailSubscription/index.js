import { useState, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'
import styles from './index.module.scss'

function EmailSubscription () {
  const { register, handleSubmit, reset } = useForm()
  const [addContactFeedback, setAddContactFeedback] = useState(null)
  const [feedbackState, setFeedbackState] = useState("SUCCESS")

  const handleAddEmail = data => {
    fetch('/api/addContact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: data.email })
    }).then(function (res) {
      if (res.ok) {
        setAddContactFeedback('Thank you, your email is added to our list')
        setFeedbackState("SUCCESS")
        reset()
      } else {
        setAddContactFeedback('Something went wrong. Your email was not added')
        setFeedbackState("ERROR")
      }
    })
  }

  const alertClasses = useMemo(() => {
    let classes = ['alert']
    if (feedbackState === 'SUCCESS') {
      classes.push('alert-success')
    } else if (feedbackState === "ERROR") {
      classes.push('alert-warning')
    }

    return classes.join(" ")
  }, [feedbackState])

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
        addContactFeedback && (<div className={alertClasses}>{addContactFeedback}</div>)
      }
    </>
  )
}

export default EmailSubscription
