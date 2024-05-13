import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Nakesh"}
          feedback={"Best ho Shivang bhai tum !"}
        />

        <TestimonialCard
          name={"Pranshu"}
          feedback={
            "Yaar ye sach mein behetreen hai !"
          }
        />

        <TestimonialCard
          name={"Shobhit"}
          feedback={"Bohot shi hai !"}
        />
      </section>
    </div>
  )
}

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial