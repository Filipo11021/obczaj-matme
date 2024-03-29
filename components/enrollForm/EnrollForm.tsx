import Joi from "joi";
import { createContext, useContext, useState } from "react";
import React from "react";
import { formConfig } from "config/googleForm";
import { EnrollPopupCtx } from "pages";
import { ModalContext } from "providers/ModalProvider";

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
    checkbox: false,
  });
const data = Object.keys(formData).filter(key =>
  key !== 'checkbox').reduce((obj, key) =>
  {
      obj[key] = formData[key];
      return obj;
  }, {}
);
const {modalContent} = useContext(ModalContext)
  const submitHandler = async () => {
    await fetch("/api/enroll", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  const handleInputData = (
    input:
      | "firstName"
      | "lastName"
      | "option"
      | "email"
      | "questions"
      | "checkbox",
    config: "lekcje" | "kurs" | "" = ""
  ) => {
    if (input === "option") {
      setFormData((prevState) => ({
        ...prevState,
        option: config,
      }));
    } else if (input === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        checkbox: !prevState.checkbox,
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
            checkbox={formData.checkbox}
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

  return (
    <EnrollFormCtx.Provider value={{ step, setStep }}>
      <div className="max-w-[1000px] w-full">
        <div
          className={`flex w-full justify-around text-[25px] sm:text-[40px] md:text-[60px] border-b-4 ${
            step == 4 && "hidden"
          }`}
        >
          {modalContent?.steps.map((e, index) => (
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
  const {modalContent} = useContext(ModalContext)
  return (
    <button
      onClick={() =>
        setStep((e) => {
          return e + 1;
        })
      }
      className="main__btn m-0 w-full md:w-auto justify-center"
      disabled={disabled}
    >
      {disabled ? modalContent?.errorButton : customText ? customText : modalContent?.nextButton}
    </button>
  );
};

const PrevBtn = () => {
  const { setStep } = useContext(EnrollFormCtx);
  const {modalContent} = useContext(ModalContext)
  return (
    <button
      onClick={() =>
        setStep((e) => {
          return e - 1;
        })
      }
      className="text-[20px] sm:text-[24px] main__btn m-0 w-full md:w-auto mb-3 md:mb-0 justify-center"
    >
      {modalContent?.prevButton}
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
  const {modalContent} = useContext(ModalContext)
  return (
    <div className="px-7 py-5">
      <div>
        <h2 className="enroll__form__title">{modalContent?.typeOfService.title}</h2>
        <p className="enroll__form__description">
          {modalContent?.typeOfService.description}
        </p>
      </div>
      <div className="flex justify-center">
        <div>
          <button
            className={`enroll__btn w-full my-12 justify-center ${
              option === "kurs" && "bg-decoration-1"
            }`}
            onClick={() => handleInputData("option", "kurs")}
          >
            {modalContent?.typeOfService.courseOption}
          </button>
          <button
            className={`enroll__btn w-full my-12 justify-center ${
              option === "lekcje" && "bg-decoration-1"
            }`}
            onClick={() => handleInputData("option", "lekcje")}
          >
            {modalContent?.typeOfService.lessonsOption}
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
  const checkEmail = !Joi.string()
    .email({ tlds: { allow: false } })
    .validate(email).error;
    const {modalContent} = useContext(ModalContext)
  const fields = [
    {
      name: "firstName",
      display: modalContent?.contactDetails.firstNameInput ?? "Imię",
      value: firstName,
    },
    {
      name: "lastName",
      display: modalContent?.contactDetails.lastNameInput ?? "Nazwisko",
      value: lastName,
    },
    {
      name: "email",
      display: modalContent?.contactDetails.emailInput ?? "E-mail",
      value: email,
    },
  ];
  
  return (
    <div className="px-7 py-5">
      <h2 className="enroll__form__title">{modalContent?.contactDetails.title}</h2>
      <p className="enroll__form__description">
        {modalContent?.contactDetails.description}
      </p>
      <div className="max-w-[600px]">
        {fields.map((field, index) => (
          <input
            key={index}
            type="text"
            placeholder={field.display}
            value={field.value}
            className={`${
              field.value.length > 0 &&
              (field.name === "email" ? checkEmail : true)
                ? "border-decoration-2 focus:outline-decoration-2"
                : "border-black focus:outline-black"
            } p-3 block border text-[20px] w-full focus:outline-none  sm:text-[30px] my-8`}
            onChange={handleInputData(field.name)}
          />
        ))}
      </div>
      <div className="flex justify-between flex-col md:flex-row">
        <PrevBtn />
        <NextBtn
          disabled={firstName && lastName && email && checkEmail ? false : true}
        />
      </div>
    </div>
  );
};

const Step3 = ({
  handleInputData,
  questions,
  submitHandler,
  checkbox,
}: {
  handleInputData: any;
  questions: string;
  checkbox: boolean;
  submitHandler: () => Promise<void>;
}) => {
  const {modalContent, termsOfServiceUrl} = useContext(ModalContext)
  return (
    <div className="px-7 py-5">
      <h2 className="enroll__form__title">{modalContent?.additionalDescription.title}</h2>
      <p className="enroll__form__description">
       {modalContent?.additionalDescription.description}
      </p>
      <div className=" mx-auto">
        <textarea
          value={questions}
          className="w-full min-h-[300px] border border-black flex p-2 my-5 resize-none font-light text-[1.5rem]"
          placeholder={modalContent?.additionalDescription.questionsInput ?? "Pytania"}
          onChange={handleInputData("questions")}
        ></textarea>
        <div className="flex items-center mb-4">
          <input
            onClick={() => handleInputData("checkbox")}
            role="button"
            type="checkbox"
            defaultChecked={checkbox}
            className=" w-[20px] h-[20px] mr-3"
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
      </div>
      <div className="flex justify-between flex-col md:flex-row">
        <PrevBtn />
        <div onClick={submitHandler} className="w-full md:w-auto">
          <NextBtn disabled={checkbox ? false : true} customText="Wyślij" />
        </div>
      </div>
    </div>
  );
};

const Step4 = () => {
  const {setEnrollPopupIsOpen} = useContext(EnrollPopupCtx)
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h2 className="text-[2rem] md:text-[3rem] text-center lg:text-[4rem] mb-9">
        Dziękujemy za kontakt!
      </h2>
      <button className="main__btn" onClick={() => setEnrollPopupIsOpen(false)}>Powrót</button>
    </div>
  );
};

export default EnrollForm;
