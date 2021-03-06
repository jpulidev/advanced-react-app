import PropTypes from 'prop-types';

export default function Page({ children, cool }) {
  return (
    <div>
      <h2>Hello! Page Component</h2>
      <h3>{cool}</h3>
      {children}
    </div>
  );
}

Page.prototype = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
