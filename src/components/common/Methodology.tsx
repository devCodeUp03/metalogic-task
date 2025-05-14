const Methodology = () => {
  return (
    <div>
      <div className="container">
        <div className="flex flex-col gap-6 pb-20 lg:grid lg:grid-cols-2 lg:items-center">
          <div className="flex justify-center">
            <img src="/agile.png" alt="methodology" />
          </div>

          <div className="flex flex-col gap-6">
            <div className="uppercase text-[20px] text-different font-bold">
              Our Methodology
            </div>
            <p className="text-[32px] font-bold text-head">
              Agile development methodology
            </p>
            <p className="text-[18px] font-medium text-para">
              We use the agile development methodology to minimize risk, such as
              bugs, cost overruns, and changing requirements, when adding new
              functionality. In our approach, we develop the software in
              iterations that contain mini-increments of the new functionality.
              We consider different forms of the agile development method,
              including scrum, crystal, extreme programming (XP), and
              feature-driven development (FDD).
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 pb-20 lg:grid lg:grid-cols-2 lg:items-center">
          <div className="flex justify-center  lg:order-2 ">
            <img src="/customization.png" alt="customization" />
          </div>

          <div className="flex flex-col gap-6 lg:order-1">
            <div className="uppercase text-[20px] text-different font-bold">
              customization and scalability
            </div>
            <p className="text-[32px] font-bold text-head">
              Crafting Solutions Just for You
            </p>
            <p className="text-[18px] font-medium text-para">
              Discover how we personalize your experience with customized
              features and effortlessly scale your system to match your growing
              needs. Our approach ensures that your software is uniquely
              tailored to fit your business, allowing you to adapt easily and
              efficiently. Explore simplicity and adaptability in our
              Customization and Scalability.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 pb-20 lg:grid lg:grid-cols-2 lg:items-center">
          <div className="flex justify-center">
            <img src="/realiability.png" alt="realiability" />
          </div>

          <div className="flex flex-col gap-6">
            <div className="uppercase text-[20px] text-different font-bold">
              Benefits of working with us
            </div>
            <p className="text-[32px] font-bold text-head">
              Reliability in Partnership
            </p>
            <p className="text-[18px] font-medium text-para">
              Rely on us for more than just solutions—rely on a steadfast
              partnership. Discover the assurance of reliability, commitment,
              and a shared commitment to your sustained success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
