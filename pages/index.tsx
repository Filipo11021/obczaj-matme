import type { GetStaticProps, NextPage } from "next";
import Hero from "../components/index/hero/Hero";
import Course from "../components/index/course/Course";
import Testimonials from "../components/index/testimonials/Testimonials";
import Team from "../components/index/team/Team";
import Contact from "../components/index/contact/Contact";
import Modal from "../components/Modal";
import { createContext, useContext, useEffect, useState } from "react";
import About from "components/index/about/About";
import EnrollForm from "components/enrollForm/EnrollForm";
import type { ResponseTeam, TeamItem } from "types/team";
import type { ResponseTestimonials, Testimonial } from "types/testimonials";
import React from "react";
import { fetchGraphcms } from "lib/fetchGraphcms";
import { ContentCourse, ContentCourseResponse } from "../types/contentCourse";
import { ContentLessons, ContentLessonsResponse } from "types/contentLessons";
import { ModalContent, ModalContentResponse } from "types/contentModal";
import { ModalContext } from "providers/ModalProvider";

type Props = {
  teamItems: TeamItem[];
  testimonials: Testimonial[];
  contentLessons: ContentLessons;
  contentCourse: ContentCourse;
  contentModal: ModalContent;
};
export const EnrollPopupCtx = createContext({
  setEnrollPopupIsOpen: (() => {}) as unknown as React.Dispatch<
    React.SetStateAction<boolean>
  >,
});

const Home: NextPage<Props> = ({
  teamItems,
  testimonials,
  contentCourse,
  contentLessons,
  contentModal,
}) => {
  const { setModalContent } = useContext(ModalContext);

  useEffect(() => {
    setModalContent(contentModal);
  }, []);

  return (
    <>
      <div className="">
        <Hero />
        <Team teamItems={teamItems} />
        <Course content={contentCourse} />
        <About content={contentLessons} />
        <Testimonials testimonials={testimonials} />
        <Contact />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const teamItems = await getTeamItems();
  const testimonials = await getTestimonials();
  const contentLessons = await getLessonsContent();
  const contentCourse = await getCourseContent();
  const contentModal = await getModalContent();

  return {
    props: {
      teamItems: teamItems.data.team_items,
      testimonials: testimonials.data.testimonials,
      contentLessons: contentLessons.data.lessons[0],
      contentCourse: contentCourse.data.courses[0],
      contentModal: contentModal.data.modals[0],
    },
  };
};

async function getTeamItems() {
  const teamItems: ResponseTeam = await fetchGraphcms(`team_items {
    name
    description
    image {
      url
    }
  }`);
  return teamItems;
}

async function getTestimonials() {
  const testimonials: ResponseTestimonials = await fetchGraphcms(`testimonials {
    name
    description
  }`);
  return testimonials;
}

async function getCourseContent() {
  const course: ContentCourseResponse = await fetchGraphcms(`courses {
    description
    title
    elements 
    enrollButton
    seeMoreButton
  }`);
  return course;
}

async function getLessonsContent() {
  const lessonsContent: ContentLessonsResponse = await fetchGraphcms(`lessons {
    title
    description
    enrollButton
    elements
  }`);

  return lessonsContent;
}

async function getModalContent() {
  const modalContent: ModalContentResponse = await fetchGraphcms(`modals {
    steps
    nextButton
    prevButton
    errorButton
    typeOfService {
      title
      description
      courseOption
      lessonsOption
    }
    additionalDescription {
      title
      questionsInput
      description
    }
    contactDetails {
      firstNameInput
      emailInput
      description
      lastNameInput
      title
    }
  }`);
  return modalContent;
}
export default Home;
