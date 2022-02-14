import React, { useRef, useState } from "react";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [info, setInfo] = useState("");

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setInfo("wysylanie...");
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
      const {error} = await res.json()
      if(error){
        setInfo("error");
      }else{
        setInfo("wiadomosc zostala wyslana");
      }
      console.log(error)
      
    } catch (error) {
      setInfo("error");
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
      <p>{info}</p>
      <button type="submit" className="enroll__btn mt-3">
        Wyślij
      </button>
    </form>
  );
};

export default ContactForm;