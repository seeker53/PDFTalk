import PropTypes from 'prop-types';

export default function DocIcon({ width = 17, height = 20, strokeColor = "#000" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Document icon"
      role="img"
    >
      <path
        d="M10 1H2.8A1.8 1.8 0 001 2.8v14.4A1.8 1.8 0 002.8 19h10.8a1.8 1.8 0 001.8-1.8V6.4L10 1z"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 1v5.4h5.4M11.802 10.898h-7.2M11.802 14.5h-7.2M6.402 7.3h-1.8"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

DocIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  strokeColor: PropTypes.string,
};
