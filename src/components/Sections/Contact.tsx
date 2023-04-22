import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import Slide from "react-reveal/Slide";

export default function Contact() {
  const [state, handleSubmit] = useForm("mayzabaq");

  if (state.succeeded) {
    return (
      <section id="contact">
        <div className="container text-center flex flex-col justify-center items-center gap-5">
          <Slide up>
            <h2>Thanks for contacting me!</h2>
            <Image
              className="w-52 h-52 object-contain"
              src={"/images/me.webp"}
              height={300}
              width={300}
              alt="me"
            />
          </Slide>
        </div>
      </section>
    );
  }

  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <form
          className="flex flex-col justify-center items-center w-3/5 mx-auto"
          onSubmit={handleSubmit}
        >
          <label>
            <span>
              Name <b>*</b>
            </span>
            <input type="text" name="name" required />
          </label>
          <label htmlFor="email">
            <span>
              Email <b>*</b>
            </span>
            <input id="email" type="email" name="email" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </label>

          <label>
            <span>Phone</span>
            <input type="number" name="phone" />
          </label>

          <label htmlFor="message">
            <span>
              Message <b>*</b>
            </span>
            <textarea id="message" name="message" required />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </label>

          <button className="btn" type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
