const SCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
      <div className="p-3">
        <h1 className="text-2xl border-t-2 border-t-gray-950 pt-2 my-2">
          Newsroom
        </h1>
        <p className="text-gray-600">
          Read press releases and announcements to see what’s new at the College
          Board.
        </p>
      </div>
      <div className="p-3">
        <h1 className="text-2xl border-t-2 border-t-gray-950 pt-2 my-2">
          Research
        </h1>
        <p className="text-gray-600">
          Our world-class research informs ongoing innovation in our programs.
        </p>
      </div>
      <div className="p-3">
        <h1 className="text-2xl border-t-2 border-t-gray-950 pt-2 my-2">
          Events
        </h1>
        <p className="text-gray-600">
          Our events provide professional learning and networking opportunities
          for educators.
        </p>
      </div>
      <div className="p-3">
        <h1 className="text-2xl border-t-2 border-t-gray-950 pt-2 my-2">
          Careers
        </h1>
        <p className="text-gray-600">
          Explore career opportunities at the College Board and join our team.
        </p>
      </div>
    </div>
  );
};

export default SCard;
