import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Slide from "react-reveal/Slide";

export default function Contact() {
  const [state, handleSubmit] = useForm("mayzabaq");

  if (state.succeeded) {
    return (
      <section id="contact">
        <div className="container text-center flex flex-col justify-center items-center gap-5">
          <Slide up>
            <h2>Thanks for contacting me!</h2>
            <img className="object-contain" src="/images/thanks.gif" alt="me" />
          </Slide>
        </div>
      </section>
    );
  }

  return (
    <section id="contact">
      <div className="container flex flex-col gap-3 justify-center items-center">
        <h2>Contact</h2>
        <form
          className="mx-auto tablet:min-h-[30rem] flex flex-col justify-center items-center gap-3"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col-reverse tablet:flex-row justify-center items-center gap-3 w-full ">
            <div className="w-full tablet:w-1/2 h-full">
              {" "}
              <label>
                <span>Name</span>
                <input type="text" name="name" required />
              </label>
              <label htmlFor="email">
                <span>Email</span>
                <input id="email" type="email" name="email" required />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </label>
              <label>
                <span>
                  Phone <b>OPTIONAL</b>
                </span>
                <input type="number" name="phone" />
              </label>
              <label htmlFor="message">
                <span>Message</span>
                <textarea id="message" name="message" required />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </label>
            </div>
            <div className="w-full tablet:w-1/2 h-full">
              <img
                className="w-full h-full object-cover rounded-md tablet:h-[30rem]"
                src="/images/do_it.gif"
                alt="contact"
              />
            </div>
          </div>

          <button
            className="btn mx-auto w-full tablet:w-auto"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
