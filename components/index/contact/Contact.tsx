import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="py-[100px] md:flex  md:mx-8 lg:mx-[10vw] mx-4"id="contact">
      <div className="mb-8 md:pr-6 flex-1">
        <h2 className="title relative after:w-2/3 after:h-1/2 inline after:bg-secondary after:absolute after:top-1/2 after:-z-10 after:right-0">KONTAKT</h2>
        <p className="text-lg">
          Możesz nas spotkać w różnych social mediach, albo skontaktować się za
          pomocą maila.
        </p>
      </div>
      <div className="flex mx-auto flex-1 justify-center">
      <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
