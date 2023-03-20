const Badge = ({ badge }) => {
  return(
  <span
    className={`inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium text-gray-800 bg-purple-200 mr-3`}
    data-testid="badge"
  >
    {badge}
  </span>
)};
export default Badge;
