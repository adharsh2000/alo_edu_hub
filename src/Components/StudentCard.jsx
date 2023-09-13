import P1 from "../assets/P1.svg"

const StudentCard = () => {
  return (
    <div className="w-80 h-48 b mr-10 shadow-xl p-6 flex flex-col justify-around">
      <p className="text-gray-500 text-sm">
        “Teachings of the great explore of truth, the master-builder of human
        happiness. no one rejects,dislikes, or avoids pleasure itself, pleasure
        itself”
      </p>
      <div className="flex items-center gap-4">
        <img src={P1} alt="person" />
        <div>
            <h2 className="font-bold text-xs">Lorem ipsum</h2>
            <h3 className="text-gray-500 text-xs">Web Developer</h3>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
