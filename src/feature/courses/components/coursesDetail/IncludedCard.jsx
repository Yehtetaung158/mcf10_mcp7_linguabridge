import { includedData } from "../../../../utils/course";

const IncludedCard = () => {
  return (
    <div>
      <h3 className="font-header_weight text-2xl mb-6">
        What&apos;s included{" "}
      </h3>
      <hr className="h-0.5 bg-neutral-100 mb-3" />
      {includedData.map((item, index) => (
        <div key={index}>
          <div className="flex py-5 gap-2">
            <img src={item.icon} alt="" />
            <p className=" text-gray">{item.text}</p>
          </div>
          {index < includedData.length - 1 && (
            <hr className="h-0.5 bg-neutral-100" />
          )}
        </div>
      ))}
    </div>
  );
};

export default IncludedCard;
