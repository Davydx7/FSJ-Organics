import { useFadeIn, useScrollToTop } from '../../Hooks';

function Contact() {
  useScrollToTop();
  const fadeIn = useFadeIn();

  return (
    <main ref={fadeIn}>
      <section className="socials">
        <div className="whatsapp">Whatsapp</div>
        <div className="whatsapp">Instagram</div>
        <div className="whatsapp">Facebook</div>
        <div className="whatsapp">Twitter</div>
      </section>
      <section className="formarea">
        <form action="#">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" />
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  );
}
export default Contact;
