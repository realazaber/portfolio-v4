export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <form
          className="flex flex-col justify-center items-center w-3/5 mx-auto"
          action="https://formspree.io/f/mayzabaq"
          method="POST"
        >
          <label>
            <span>
              Name <b>*</b>
            </span>
            <input type="text" name="name" required />
          </label>
          <label>
            <span>
              Email <b>*</b>
            </span>
            <input type="email" name="email" required />
          </label>

          <label>
            <span>Phone</span>
            <input type="number" name="phone" />
          </label>

          <label>
            <span>
              Message <b>*</b>
            </span>
            <textarea name="message" required></textarea>
          </label>

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
