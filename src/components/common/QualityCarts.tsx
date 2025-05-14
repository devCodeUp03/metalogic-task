import qualityInfo from "../../../qualityInfo";

const QualityCarts = () => {
  return (
    <div>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {qualityInfo.map((el, idx) => {
          return (
            <div key={idx} >
              <div className="cart">
                <img src={el.image} alt="precise scoping" />
                <p className="text-[24px] font-bold text-head">{el.head}</p>
                <p className="text-[18px] font-medium text-para">{el.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QualityCarts;
