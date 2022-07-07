import { ModalContext } from "providers/ModalProvider";
import React, { useContext, useRef, useState } from "react";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [info, setInfo] = useState("");
  const { termsOfServiceUrl } = useContext(ModalContext);

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setInfo("Wysyłanie...");
    const data = new FormData(form.current as HTMLFormElement);

    console.log(data.get("email"));
    try {
      const res = await fetch("/api/contactMessage", {
        method: "POST",
        body: JSON.stringify({
          email: data.get("email"),
          text: data.get("text"),
        }),
      });
      const { error } = await res.json();
      console.log(error);
      if (error) {
        setInfo(error);
      } else {
        setInfo("Wiadomość została wysłana");
      }
      console.log(error);
    } catch (error) {
      console.log(error);
      setInfo("");
    }
  };
  return (
    <form
      ref={form}
      className="max-w-[600px] w-full mt-12"
      onSubmit={submitHandler}
    >
      <div className="mb-3 flex p-5 min-h-[360px] text-black flex-col border border-black relative after:absolute after:left-2 after:bottom-2 after:w-full after:h-full bg-white after:border after:border-black after:-z-10 hover:after:bg-secondary after:transition-colors after:duration-500">
        <input
          type="email"
          required
          className="focus:ring-black p-1 relative focus:z-10 focus:border-black focus:border-b-1 focus:outline-none focus:ring-1 border-b border-black focus:border-0"
          name="email"
          id=""
          placeholder="Twój mail"
        />
        <textarea
          required
          className="focus:ring-black p-1 resize-none focus:outline-none focus:ring-1 flex grow"
          name="text"
          id=""
          placeholder="Treść wiadomości"
        ></textarea>
      </div>
      <div className="flex items-center mb-4">
        <input
          role="button"
          type="checkbox"
          className=" w-[20px] h-[20px] mr-3"
          required
        />
        <span>
          Akceptuję{" "}
          <a
            href={termsOfServiceUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="text-decoration-2 font-bold"
          >
            regulamin
          </a>
        </span>
      </div>
      <p>{info}</p>
      <button type="submit" className="main__btn mt-3 mx-auto">
        Wyślij
      </button>
    </form>
  );
};

export default ContactForm;
