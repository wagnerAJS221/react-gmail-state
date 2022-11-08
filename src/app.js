import { useState } from 'react'
import Header from './components/header'
// import EmailTemplate from './templates/emailTemplate.html'
import initialEmails from './data/emails'

import './styles/app.css'

function App() {
  console.log(initialEmails)
  const [emails, setEmails] = useState(initialEmails)
  const emailList = emails.map((email, i) => {
    return (
      <li key={email.id} className="email">
        {email.title}
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
      <main className="emails">{emailList}</main>
    </div>
  )
}

export default App
