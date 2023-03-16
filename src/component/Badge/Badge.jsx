import getRandomColor from "../../utils/randomizeColor";

const Badge = ({ badge }) => {
  return badge.map((data) => (
    <span
      className={`inline-flex items-center rounded-full bg-${getRandomColor()}-100 px-3 py-0.5 text-sm font-medium text-${getRandomColor()}-800`}
    >
      {data}
    </span>
  ));
};

export default Badge;
