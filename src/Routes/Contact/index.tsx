import { useFadeIn, useScrollToTop } from '../../Hooks';
import { useForm } from 'react-hook-form';

import './contact.scss'
import { Link } from 'react-router-dom';

function Contact() {
  useScrollToTop();
  const fadeIn = useFadeIn();

  const { register, handleSubmit, formState:{errors} } = useForm({mode:'onBlur' ,defaultValues:{name:'', email:'', message:''}});

  const onSubmit = (data) => {
    console.log(data);

    const name = data.name + ' from skincare website contact';
    const email = data.email;
    const message = data.message;

    // const body = `Name: ${name} \nEmail: ${email} \nMessage: ${message}`;

    window.open(`mailto:oludave0511@gmail.com?subject=${name}&body=${message}`);

    // const emailData = {
    //   from: email,
    //   to: 'oludave0511@gmail.com',
    //   subject: 'Contact Form Submission',
    //   text: body
    // }
  }

  return (
    <main ref={fadeIn} className="contact">
      <p>Contact Dev:</p>
      <section className="socials">
        <a href='https://github.com/Davydx7' target="_blank" className="github">Github</a>
        <a href='https://twitter.com/olufemi_david11' target="_blank" className="twitter">Twitter</a>
        <a href='https://www.linkedin.com/in/davidolufemi/' target="_blank" className="linkedin">Linkedin</a>
        <a href='mailto:oludave0511@gmail.com' target="_blank" className="email">Email</a>
      </section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Reach Out</p>
        <input type="text" placeholder="Name" {...register("name", {required: true, maxLength: 15})} />
        <input type="email" placeholder="Email" {...register("email", {required: true})} />
        <textarea placeholder='Message'{...register("message", {minLength: 15})} />
        {errors.message &&
          <p style={{color:'red'}}>Message must be at least 15 characters long</p>}
        <input type="submit" />
      </form>
    </main>
  );
}
export default Contact;
