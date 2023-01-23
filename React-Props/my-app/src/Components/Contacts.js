function Contact(props) {
  return (
    <div className="contact-card">
      <img src={props.img} alt="mm" />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="../Icons/phone-call.png" alt="mm" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src="../Icons/email.png" alt="mm" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
export default Contact;
