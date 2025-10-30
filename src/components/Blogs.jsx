import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Dummy blog data
const dummyBlogs = [
  { id: 1, title: 'Decoupled Drupal: A Modern Approach', image: 'https://images.unsplash.com/photo-1517430816045-df4b7de1101d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', teaser: 'Exploring the benefits of separating your backend and frontend for superior performance in modern web ecosystems.' },
  { id: 2, title: 'Vercel Deployment Strategies for Next.js', image: 'https://images.unsplash.com/photo-1515879218367-bc80a0ee46c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', teaser: 'A guide to optimizing your React app for the best edge deployment using Incremental Static Regeneration.' },
  { id: 3, title: 'Tailwind CSS vs. traditional CSS-in-JS', image: 'https://images.unsplash.com/photo-1549419163-f0d7e638b97d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', teaser: 'Comparing utility-first CSS frameworks with component-based styling methodologies for rapid development.' },
  { id: 4, title: 'The Future of Headless Content Management', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', teaser: 'How Drupal and React collaboration shapes the next generation of flexible digital customer experiences.' },
];

const BlogCard = ({ title, image, teaser }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
    <img src={image} alt={title} className="w-full h-48 object-cover"/>
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2 truncate text-primary-dark">{title}</h3>
      <p className="text-gray-600 text-sm line-clamp-3">{teaser}</p>
    </div>
  </div>
);

const Blogs = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12 text-primary-dark">Latest Insights</h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          // Responsive breakpoints for 4/2/1 layout
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },   // Mobile: 1 per row
            768: { slidesPerView: 2, spaceBetween: 30 },  // Tablet: 2 per row
            1024: { slidesPerView: 4, spaceBetween: 30 }, // Desktop: 4 per row
          }}
          className="pb-10" // Add padding for pagination dots
        >
          {dummyBlogs.map(blog => (
            <SwiperSlide key={blog.id}>
              <BlogCard {...blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blogs;
