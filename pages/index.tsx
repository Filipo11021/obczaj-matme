import type { GetStaticProps, NextPage } from "next";
import Hero from "../components/index/hero/Hero";
import Course from "../components/index/course/Course";
import Testimonials from "../components/index/testimonials/Testimonials";
import Team from "../components/index/team/Team";
import Contact from "../components/index/contact/Contact";
import Modal from "../components/Modal";
import { createContext, useEffect, useState } from "react";
import About from "components/index/about/About";
import EnrollForm from "components/enrollForm/EnrollForm";
import type { ResponseTeam, TeamItem } from "types/team";
import type { ResponseTestimonials, Testimonial } from "types/testimonials";
import React from 'react'

type Props = {
  teamItems: TeamItem[];
  testimonials: Testimonial[]
};
export const EnrollPopupCtx = createContext({setEnrollPopupIsOpen: (() => {}) as unknown as React.Dispatch<React.SetStateAction<boolean>>})
const Home: NextPage<Props> = ({ teamItems, testimonials }) => {
  const [enrollPopupIsOpen, setEnrollPopupIsOpen] = useState(false);
useEffect(() => {
  const html = document.querySelector<HTMLElement>("html")!;
  if (enrollPopupIsOpen) {
    html.style.overflowY = "hidden";
  } else {
    html.style.overflowY = "initial";
  }
}, [enrollPopupIsOpen])
  return (
    <EnrollPopupCtx.Provider value={{setEnrollPopupIsOpen}}>
      <div className="">
      <Hero />
      <Team teamItems={teamItems} />
      <Course />
      <About />
      <Testimonials testimonials={testimonials} />
      <Contact />
      {enrollPopupIsOpen && (
        <Modal setIsOpen={setEnrollPopupIsOpen}>
          <div className="flex justify-center items-center">
            <EnrollForm />
          </div>
        </Modal>
      )}
      {/* contact */}
    </div>
    </EnrollPopupCtx.Provider>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  

  const teamItems:ResponseTeam = await fetchGraphcms(`team_items {
    name
    description
    image {
      url
    }
  }`);

  const testimonials:ResponseTestimonials = await fetchGraphcms(`testimonials {
    name
    description
  }`)

  async function fetchGraphcms(query: string) {
    const res = await fetch(process.env.GRAPHCMS_URL, {
      headers: {
        Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
      },
      body: JSON.stringify({
        query: `query {
          ${query}
        }`,
      }),
      method: "POST",
    });

    const data = await res.json();
    return data;
  }

  return {
    props: { teamItems: teamItems.data.team_items, testimonials: testimonials.data.testimonials }, // will be passed to the page component as props
  };
};

export default Home;
