import { string } from "joi";
import { fetchGraphcms } from "lib/fetchGraphcms";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getModalContent, getTermsOfServiceContent } from "pages";
import { ModalContext } from "providers/ModalProvider";
import { useContext, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { ModalContent } from "types/contentModal";
import {
  CoursePageContentResponse,
  CoursePageContent,
} from "types/coursePageContent";

type Props = {
  contentModal: ModalContent;
  coursePageContent: CoursePageContent;
  termsOfServiceUrl: string;
};

const KursPage: NextPage<Props> = ({
  contentModal,
  coursePageContent: { description, enrollButton, plan, title },
  termsOfServiceUrl,
}) => {
  const { setEnrollPopupIsOpen, setModalContent, setTermsOfServiceUrl } =
    useContext(ModalContext);

  useEffect(() => {
    setModalContent(contentModal);
    setTermsOfServiceUrl(termsOfServiceUrl);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col overflow-x-hidden">
      <div className="flex justify-between h-full flex-col-reverse lg:flex-row">
        <div className="flex">
          <img data-aos="fade-up" src="/vector-course-left.svg" alt="" />
          <div className="flex flex-col justify-center mt-20 lg:mt-8 px-6 lg:ml-[6vw]">
            <h1
              dangerouslySetInnerHTML={{ __html: title }}
              className="text-6xl inline mb-12 lg:mb-20 lg:mt-10 text-center"
              data-aos="fade-down"
            ></h1>

            <div className="text-[1.2rem] font-light sm:text-[1.8rem] max-w-[1000px]">
              {plan.map((e, i) => (
                <ReactMarkdown
                  key={i}
                  components={{
                    p: ({ node, ...props }) => (
                      <p
                        data-aos="fade-up"
                        data-aos-delay={i * 100}
                        data-aos-duration="900"
                        className="mb-4"
                        {...props}
                      ></p>
                    ),
                    strong: ({ node, ...props }) => (
                      <strong className="font-medium" {...props}></strong>
                    ),
                  }}
                >
                  {e}
                </ReactMarkdown>
              ))}
            </div>
          </div>
        </div>
        <div className="flex lg:mr-[6vw] mx-6 lg:items-end items-start flex-col mt-14">
          <Link href="/">
            <a>
              <img
                className="mb-12 lg:mb-20 max-w-[250px]"
                src="/logo1.png"
                alt="logo"
              />
            </a>
          </Link>
          <div className="text-[1.2rem] font-light w-full mx-auto text-center mb-8 lg:mb-12 sm:text-[1.6rem] max-w-[700px]">
            <ReactMarkdown
              components={{
                p: ({ node, ...props }) => (
                  <p data-aos="fade-left" data-aos-duration="900" className="mt-6" {...props}></p>
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-medium" {...props}></strong>
                ),
              }}
            >
              {description}
            </ReactMarkdown>
          </div>
          <button
            onClick={() => setEnrollPopupIsOpen(true)}
            className="hover:left-0 hover:top-0 main__btn-base reverse-btn mt-4 lg:mt-10 mb-5 mx-auto relative"
          >
            {enrollButton}
          </button>
        </div>
      </div>

      <img
        className="max-w-[500px] mt-auto relative right-0 ml-auto"
        src="/vector-course-bottom.svg"
        alt=""
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const contentModal = await getModalContent();
  const coursePageContent = await getCoursePageContent();
  const TermsOfServiceContent = await getTermsOfServiceContent();

  return {
    props: {
      contentModal: contentModal.data.modals[0],
      coursePageContent: coursePageContent.data.coursePages[0],
      termsOfServiceUrl: TermsOfServiceContent.data.termsOfService[0].file
        .url as string,
    },
  };
};

async function getCoursePageContent() {
  const content: CoursePageContentResponse = await fetchGraphcms(`coursePages {
    plan
    description
    enrollButton
    title
  }`);
  return content;
}

export default KursPage;
