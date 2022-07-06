export type ModalContent = {
  steps: string[];
  nextButton: string;
  prevButton: string;
  errorButton: string;
  typeOfService: {
    title: string;
    description: string;
    courseOption: string;
    lessonsOption: string;
  };
  additionalDescription: {
    title: string;
    questionsInput: string;
    description: string;
  };
  contactDetails: {
    firstNameInput: string;
    emailInput: string;
    lastNameInput: string;
    title: string;
    description: string;
  };
};

export type ModalContentResponse = {
  data: {
    modals: modalContent[]
  }
}
