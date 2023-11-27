import PropTypes from 'prop-types'

const Button = ({ children, onClick, className, variant }) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return 'bg-custom-btn-primary text-custom-txt-primary'
      case 'secondary':
        return 'bg-custom-btn-secondary text-custom-txt-secondary'
      case 'tertiary':
        return 'bg-custom-btn-tertiary text-custom-txt-secondary'
      default:
        return '';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`btn px-5 py-3 font-normal rounded-full transition-all duration-300 ${getVariantClass()} ${className}`}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
}

export default Button