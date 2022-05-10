import Email from "./email";

import { useState } from "react";
import EmailDetails from './emailDetails'

function EmailList(props) {
  const [selectedEmail, setSelectedEmail] = useState(false);

  {
    return selectedEmail === false ? (
      <ul>
        {props.filteredEmails.map((email, index) => (
          <Email
            key={index}
            toggleRead={props.toggleRead}
            toggleStar={props.toggleStar}
            email={email}
            setSelectedEmail={setSelectedEmail}
          />
        ))}
      </ul>
    ) : (
      <EmailDetails selectedEmail ={selectedEmail} setSelectedEmail={setSelectedEmail}/>
    );
  }
}

export default EmailList;