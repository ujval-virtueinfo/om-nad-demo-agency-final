import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaQuoteLeft } from 'react-icons/fa';

// Dummy testimony data
const dummyTestimonies = [
  { id: 1, text: "The team delivered a high-performance, complex site ahead of schedule. The React frontend is incredibly fast!", name: "Sarah Connor", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 2, text: "Exceptional architecture. The decoupled setup gives us the flexibility we needed for content distribution.", name: "John Doe", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 3, text: "Seamless transition from monolithic Drupal to this modern, component-driven experience. Highly recommended.", name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 4, text: "The design is clean, professional, and truly responsive—exactly what we were looking for, inspired by Squarespace.", name: "Alex Johnson", image: "https://randomuser.me/api/portraits/men/82.jpg" },
];

const TestimonyCard = ({ text, name, image }) => (
  <div className="p-8 bg-white rounded-lg shadow-xl min-h-[300px] flex flex-col justify-between">
    <FaQuoteLeft className="text-accent-blue text-2xl mb-4 opacity-70" />
    <p className="text-gray-700 italic mb-6 flex-grow">"{text}"</p>
    <div className="flex items-center">
      <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-3"/>
      <p className="font-semibold text-primary-dark">{name}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12 text-primary-dark">Client Testimony</h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          // Responsive breakpoints for 3/2/1 layout
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-10"
        >
          {dummyTestimonies.map(testimony => (
            <SwiperSlide key={testimony.id}>
              <TestimonyCard {...testimony} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
