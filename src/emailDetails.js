function EmailDetails(props) {
  return (
    <div>
      <p>
        {props.selectedEmail.id} - {props.selectedEmail.title}
      </p>
      <button onClick={() => props.setSelectedEmail(false)}>
        Show All Emails
      </button>
    </div>
  );
}

export default EmailDetails;