const ContactForm = () => {
  return (
    <form className="max-w-[600px] w-full mt-12">
      <div className="flex p-5 min-h-[360px] text-black flex-col border border-black relative after:absolute after:left-2 after:bottom-2 after:w-full after:h-full bg-white after:border after:border-black after:-z-10 hover:after:bg-secondary after:transition-colors after:duration-500">
        <input className="focus:ring-black p-1 relative focus:z-10 focus:border-black focus:border-b-1 focus:outline-none focus:ring-1 border-b border-black focus:border-0" type="email" name="" id="" placeholder="Twój mail" />
        <textarea className="focus:ring-black p-1 resize-none focus:outline-none focus:ring-1 flex grow" name="" id="" placeholder="Treść wiadomości"></textarea>
      </div>

      <button type="submit" className="enroll__btn">Wyślij</button>
    </form>
  );
};

export default ContactForm;
