import PropTypes from 'prop-types';
import Button from './Button';

const Modal = ({
  formData,
  handleSubmit,
  handleCancel,
  handleChange,
  handleUpdate,
  isEdit,
}) => {
  const handleSubmitForm = (event) => {
    event.preventDefault();
    isEdit ? handleUpdate() : handleSubmit();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="relative">
        <label
          id="title"
          className="absolute text-md font-semibold top-0 left-0 mt-1 text-gray-500"
        >
          Title
        </label>
        <input
          name="title"
          className="w-full mt-8 mb-5 z-50 input input-bordered"
          placeholder="Enter a title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label
          id="char-count"
          className="absolute text-sm top-0 right-0 mt-1 mr-2 text-gray-500"
        >
          {formData.title.length}/50
        </label>
      </div>
      <div className="relative">
        <label
          id="body"
          className="absolute text-md font-semibold left-0 mt-1 text-gray-500"
        >
          Notes
        </label>
        <textarea
          name="body"
          className="w-full h-48 z-60 lg:h-80 mt-8 textarea text-base textarea-bordered rounded-xl"
          placeholder="Capture your thoughts here"
          value={formData.body}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mt-6 mb-2">
        <Button variant="secondary" className="hover:bg-[#3261F2]">
          {isEdit ? 'Save' : 'Add'}
        </Button>
        <Button
          variant="danger"
          className="ml-2 hover:bg-[#ff2f2f]"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

Modal.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
};

export default Modal;
