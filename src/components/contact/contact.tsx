import "./contact.scss"
export default function Contact(){
    return(
        <section className="contact-us" id="contact-section">
        <form id="contact" action="" method="post">
         
          <div className="section-heading">
            <h1>CONTACTEZ-MOI </h1>
          </div>
    
          <div className="inputField">
            <input type="name" name="name" id="name" placeholder="Votre nom complet" autoComplete="on" required />
            <span className="valid_info_name"></span>
          </div>
    
          <div className="inputField">
            <input type="Email" name="email" id="email" placeholder="Votre adresse email"  />
            <span className="valid_info_email"></span>
          </div>
    
          <div className="inputField">
            <textarea name="message" id="message" placeholder="Votre message"></textarea>
            <span className="valid_info_message"></span>
          </div>
    
          <div className="inputField btn">
            <button type="submit" id="form-submit" >ENVOYER LE MESSAGE</button>
          </div>
    
        </form>
      </section>
    )
}
   
