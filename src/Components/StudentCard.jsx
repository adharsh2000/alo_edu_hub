// import P1 from "../assets/P1.svg";

/* eslint-disable react/prop-types */
const StudentCard = ({img,name,position,desc}) => {
  return (
    <div className="w-[500px] h-60 md:mr-10 shadow-xl p-5 gap-4 flex flex-col justify-around">
      <p className="text-gray-500 text-sm">
        {`“${desc}”`}
      </p>
      <div className="flex items-center gap-4">
        <img
          src={img}
          alt="person"
          style={{
            width: 50,
          }}
        />
        <div>
          <h2 className="font-bold text-xs">{name}</h2>
          <h3 className="text-gray-500 text-xs">{position}</h3>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
