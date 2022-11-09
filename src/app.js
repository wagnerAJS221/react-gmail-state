import { useState } from 'react'
import Header from './components/header'
// import EmailTemplate from './templates/emailTemplate.html'
import initialEmails from './data/emails'

import './styles/app.css'

function App() {
  console.log(initialEmails)
  const [emails, setEmails] = useState(initialEmails)
  const [readEmailsHidden, setReadEmailsHidden] = useState(false)
  const toggleRead = (targetEmail) => {}

  console.log('app, hide read emails?', readEmailsHidden)

  const emailsToRender = emails.filter((email) => {
    if (readEmailsHidden && email.read === true) {
      return false
    }
    return true
  })
  // not sure how to get this approach to work correctly????
  // const emailList = emails.map((email, i) => {
  //   return (
  //     <li key={email.id} className="email">
  //       {email.title}
  //     </li>
  //   )
  // }) see below

  const emailsAsJSX = emails.map((email) => {
    const emailCSSClass = email.read ? 'email read' : 'email unread'
    return (
      <li className={emailCSSClass} key={email.id}>
        <div className="select">
          <input className="select-checkbox" type="checkbox" />
        </div>
        <div className="star">
          <input
            className="star-checkbox"
            type="checkbox"
            checked={email.starred}
          />
        </div>
        <div className="sender">{email.sender}</div>
        <div className="title">{email.title}</div>
      </li>
    )
  })

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{emailsAsJSX}</main>
    </div>
  )
}

export default App
