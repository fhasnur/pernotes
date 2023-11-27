import PropTypes from 'prop-types';

export default function Container({ children }) {
  return (
    <div className="w-full max-w-screen-12xl mx-auto px-4 lg:px-24">
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
};