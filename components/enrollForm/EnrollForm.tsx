import Joi from "joi";
import { createContext, useContext, useState } from "react";
import React from "react";
import { formConfig } from "config/googleForm";

const EnrollFormCtx = createContext({
  step: 1,
  setStep: (() => {}) as unknown as React.Dispatch<
    React.SetStateAction<number>
  >,
});

const EnrollForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    option: "",
    questions: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const submitHandler = async () => {
    await fetch("/api/enroll", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  };

  const handleInputData = (
    input: "firstName" | "lastName" | "option" | "email" | "questions",
    config: "lekcje" | "kurs" | "" = ""
  ) => {
    if (input === "option") {
      setFormData((prevState) => ({
        ...prevState,
        option: config,
      }));
    } else {
      return (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setFormData((prevState) => ({
          ...prevState,
          [input]: value,
        }));
      };
    }
  };

  const renderSwitch = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            handleInputData={handleInputData}
            option={formData.option as "lekcje" | "kurs"}
          />
        );
        break;
      case 2:
        return (
          <Step2
            handleInputData={handleInputData}
            firstName={formData.firstName}
            lastName={formData.lastName}
            email={formData.email}
          />
        );
        break;
      case 3:
        return (
          <Step3
            handleInputData={handleInputData}
            submitHandler={submitHandler}
            questions={formData.questions}
          />
        );
        break;
      case 4:
        return <Step4 />;
        break;
      default:
        break;
    }
  };
  const steps = ["rodzaj", "dane", "opis"];
  return (
    <EnrollFormCtx.Provider value={{ step, setStep }}>
      <div className="max-w-[1000px] w-full">
        <div
          className={`flex w-full justify-around text-[30px] sm:text-[40px] md:text-[60px] border-b-4 ${
            step == 4 && "hidden"
          }`}
        >
          {steps.map((e, index) => (
            <p
              key={index + 1}
              className={`${index + 1 === step && "text-primary"} capitalize`}
            >
              <span className="font-bold">{index + 1} </span>

              {e}
            </p>
          ))}
        </div>
        {renderSwitch()}
      </div>
    </EnrollFormCtx.Provider>
  );
};

const NextBtn = ({
  disabled = false,
  customText,
}: {
  disabled?: boolean;
  customText?: string;
}) => {
  const { setStep } = useContext(EnrollFormCtx);
  return (
    <button
      onClick={() =>
        setStep((e) => {
          return e + 1;
        })
      }
      className="main__btn m-0"
      disabled={disabled}
    >
      {disabled ? "Wypełnij wszystkie pola" : customText ? customText : "Dalej"}
    </button>
  );
};

const PrevBtn = () => {
  const { setStep } = useContext(EnrollFormCtx);
  return (
    <button
      onClick={() =>
        setStep((e) => {
          return e - 1;
        })
      }
      className="main__btn m-0"
    >
      wroc
    </button>
  );
};

const Step1 = ({
  handleInputData,
  option,
}: {
  handleInputData: any;
  option: "lekcje" | "kurs";
}) => {
  return (
    <div className="px-7 py-5">
      <div>
        <h2 className="enroll__form__title">Co Cię interesuje?</h2>
        <p className="enroll__form__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus
          lorem, blandit sed quam in, rutrum mollis ex. Integer vel diam vitae
          elit ultrices ornare sit amet eget est. Nulla facilisi.
        </p>
      </div>
      <div className="flex justify-center">
        <div>
          <button
            className={`enroll__btn w-full my-12 justify-center ${
              option === "kurs" && "bg-primary"
            }`}
            onClick={() => handleInputData("option", "kurs")}
          >
            Kurs ósmoklasity
          </button>
          <button
            className={`enroll__btn w-full my-12 justify-center ${
              option === "lekcje" && "bg-primary"
            }`}
            onClick={() => handleInputData("option", "lekcje")}
          >
            Lekcje indywidualne
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <NextBtn disabled={option ? false : true} />
      </div>
    </div>
  );
};

const Step2 = ({
  handleInputData,
  firstName,
  lastName,
  email,
}: {
  handleInputData: any;
  firstName: string;
  lastName: string;
  email: string;
}) => {
  const checkEmail = !Joi.string().email({ tlds: { allow: false } }).validate(email).error
  const fields = [
    {
      name: "firstName",
      display: "Imie",
      value: firstName,
    },
    {
      name: "lastName",
      display: "Nazwisko",
      value: lastName,
    },
    {
      name: "email",
      display: "E-mail",
      value:  email,
    },
  ];

 console.log(checkEmail)

  return (
    <div className="px-7 py-5">
      <h2 className="enroll__form__title">Dane kontaktowe</h2>
      <p className="enroll__form__description">
        Podaj dane kontaktowe, aby otrzymać więcej informacji.
      </p>
      <div className="max-w-[600px]">
        {fields.map((field, index) => (
          <input
            key={index}
            type="text"
            placeholder={field.display}
            value={field.value}
            className={`${field.value.length > 0 && (field.name === 'email' ? checkEmail : true) ? 'border-decoration-2 focus:outline-decoration-2' : 'border-black focus:outline-black'} p-3 block border text-[20px] w-full focus:outline-none  sm:text-[30px] my-8`}
            onChange={handleInputData(field.name)}
          />
        ))}
      </div>
      <div className="flex justify-between">
        <PrevBtn />
        <NextBtn disabled={firstName && lastName && email && checkEmail ? false : true} />
      </div>
    </div>
  );
};

const Step3 = ({
  handleInputData,
  questions,
  submitHandler,
}: {
  handleInputData: any;
  questions: string;
  submitHandler: () => Promise<void>;
}) => {
  return (
    <div className="px-7 py-5">
      <h2 className="enroll__form__title">Masz jakieś pytanie?</h2>
      <p className="enroll__form__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus
        lorem, blandit sed quam in, rutrum mollis ex. Integer vel diam vitae
        elit ultrices ornare sit amet eget est. Nulla facilisi.{" "}
      </p>
      <textarea
        value={questions}
        className="w-[90%] min-h-[300px] border border-black flex mx-auto p-2 my-5 resize-none font-light text-[1.5rem]"
        placeholder="pytania"
        onChange={handleInputData("questions")}
      ></textarea>
      <div className="flex justify-between">
        <PrevBtn />
        <div onClick={submitHandler}>
          <NextBtn customText="Wyślij" />
        </div>
      </div>
    </div>
  );
};

const Step4 = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h2 className="text-[2rem] md:text-[3rem] text-center lg:text-[4rem] mb-9">
        Dziękujemy za kontakt!
      </h2>
      <button className="main__btn">powrot</button>
    </div>
  );
};

export default EnrollForm;
