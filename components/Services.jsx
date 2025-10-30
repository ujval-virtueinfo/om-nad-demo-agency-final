import { FaLaptopCode, FaChartLine, FaShieldAlt, FaLightbulb } from 'react-icons/fa';

const serviceData = [
  { title: 'Web Development', icon: FaLaptopCode, points: ['Drupal Backend', 'React Frontend', 'Vercel Deployment', 'Performance Optimization'] },
  { title: 'Digital Strategy', icon: FaChartLine, points: ['Market Analysis', 'SEO Audits', 'Content Planning', 'Conversion Funnels'] },
  { title: 'Security & Hosting', icon: FaShieldAlt, points: ['Enterprise Security', 'Managed Hosting', 'Data Backups', 'Compliance Checks'] },
  { title: 'UX/UI Design', icon: FaLightbulb, points: ['User Research', 'Wireframing', 'Prototyping', 'A/B Testing'] },
];

const ServiceCard = ({ title, icon: Icon, points }) => (
  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
    <div className="text-accent-blue mb-4 text-4xl">
      <Icon />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <ul className="space-y-2 text-gray-600 list-disc list-inside ml-4">
      {points.map((point, index) => (
        <li key={index} className="text-base">{point}</li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12 text-gray-800">Our Core Services</h2>
        {/* Responsive Grid: 1 col (mobile), 2 col (tablet), 4 col (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map(service => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
