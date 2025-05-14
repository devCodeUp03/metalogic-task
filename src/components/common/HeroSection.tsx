const HeroSection = () => {
  return (
    <div className="container pb-10">
      <div>
        <h1 className="text-different font-bold mt-4 mb-4 text-[18px]">
          WEBSITE DEVELOPMENT
        </h1>
        <div className="lg:flex lg:justify-between lg:items-center">
          <div>
            <p className="text-head font-bold text-[24px] leading-none mb-6">
              Scalable & Seamless Web Development
            </p>
            <ul className="flex flex-col gap-2 text-[16px] font-semibold text-para mb-4">
              <li>✅ Lightning-fast Progressive Web Apps</li>
              <li>📱 App-like experience right in the browser </li>
              <li>🛠️ Built using modern web technologies </li>
              <li>🔒 Secure, reliable, and scalable</li>
            </ul>
          </div>
          <img src="/HeroImage.png" alt="" className="hidden lg:flex h-60" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
