export type Testimonial = {
  name: string;
  description: string;
};

export type ResponseTestimonials = {
  data: { testimonials: Testimonial[] };
};
