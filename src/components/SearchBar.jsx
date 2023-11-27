import PropTypes from 'prop-types';
import { FiSearch } from "react-icons/fi"

const SearchBar = ({ className }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search notes.."
        className={`w-full input input-bordered rounded-full tracking-tighter text-base text-custom-txt pl-12 ${className}`}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-5">
        <FiSearch className="text-gray-400" />
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  className: PropTypes.string
}

export default SearchBar