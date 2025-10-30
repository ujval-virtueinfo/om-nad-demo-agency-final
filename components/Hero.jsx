const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] flex items-center justify-center text-center">
      {/* Background Image/Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1549490349-86433e1c640d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-4xl mx-auto px-4">
        <h1 className="mb-4">
          Design Intelligence for the Modern Web
        </h1>
        <p className="text-xl mb-8 font-light opacity-90">
          Unlock the potential of your brand with a seamless, responsive, and data-driven digital experience using Drupal & React.
        </p>
        <button className="btn-primary">
          Start Your Project Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
