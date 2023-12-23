import PropTypes from 'prop-types';

const Button = ({ children, onClick, className, disabled, variant }) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return '';
      case 'secondary':
        return 'bg-custom-btn-secondary text-custom-txt-secondary';
      case 'tertiary':
        return 'bg-custom-btn-tertiary text-custom-txt-secondary';
      case 'danger':
        return 'bg-custom-btn-danger text-custom-txt-secondary';
      default:
        return '';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`btn font-normal rounded-full transition-all duration-300 ${getVariantClass()} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger']),
};

export default Button;
