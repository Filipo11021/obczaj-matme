import Link from "next/link";
import { EnrollPopupCtx } from "pages";
import { ModalContext } from "providers/ModalProvider";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { ContentCourse } from "types/contentCourse";

const Course = ({
  content: { description, elements, enrollButton, seeMoreButton, title },
}: {
  content: ContentCourse;
}) => {
  const { setEnrollPopupIsOpen } = useContext(ModalContext);
  return (
    <div className="relative">
      <div className="course-trapezoid"></div>
      <div
        id="course"
        className="flex py-[100px] justify-center lg:justify-between items-center my-12 md:mx-8 lg:mx-[5vw] mx-4"
      >
        <div
          className="m-auto grid justify-center basis-full lg:basis-1/2"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <h2
            dangerouslySetInnerHTML={{ __html: title }}
            className="text-[3rem] mb-10 sm:text-[4rem] md:text-[6rem] leading-[105%]"
          ></h2>
          <div className="text-[1.2rem] sm:text-[1.8rem] max-w-[700px] text-center">
            <ReactMarkdown
              components={{
                p: ({ node, ...props }) => <p className="mb-6" {...props}></p>,
              }}
            >
              {description}
            </ReactMarkdown>
          </div>
         
          <div className="flex justify-evenly mt-6">
          <Link href='/kurs'>
           <a
              className="main__btn mt-3 mx-5"
            >
              {seeMoreButton}
            </a>
           </Link>
          <button
            className="main__btn-base seeMoreBtn mt-3 mx-5"
            onClick={() => setEnrollPopupIsOpen(true)}
          >
            {enrollButton}
          </button>
            {" "}
           
          </div>
        </div>
        <div className="lg:flex lg:ml-10 hidden h-full justify-center items-center basis-full lg:basis-1/2">
          <ul className="flex flex-col justify-evenly h-full">
            {elements.map((e, index) => (
              <li
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-delay={(index + 1) * 300}
                key={index}
                className="flex items-center mb-12"
              >
                <img src="like.svg" alt="" className="mr-4 my-4" />{" "}
                <span className="text-2xl ">{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Course;
