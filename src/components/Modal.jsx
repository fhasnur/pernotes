import Swal from 'sweetalert2'
import PropTypes from 'prop-types'

const Modal = ({ onConfirm }) => {
  const handleAddNotes = async () => {
    const { value: notes } = await Swal.fire({
      title: 'Add notes',
      html:
        `<div class="relative">
          <label id="charCount" class="absolute text-md font-semibold top-0 left-0 mt-1 text-gray-500">Title</label>
          <input id="swal-input1" class="w-full mt-8 mb-5 z-50 input input-bordered" placeholder="Enter a title">
          <label id="charCount" class="absolute text-sm top-0 right-0 mt-1 mr-2 text-gray-500">0/50</label>
        </div>` +
        `
        <div class="relative">
          <label id="charCount" class="absolute text-md font-semibold left-0 mt-1 text-gray-500">Notes</label>
          <textarea id="swal-input2" class="w-full h-48 z-60 lg:h-80 mt-8 textarea text-base textarea-bordered rounded-xl" placeholder="Capture your thoughts here"></textarea>
        </div>`,
      color: 'black',
      position: 'center',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Add',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#2657ED',
      cancelButtonColor: '#EB5353',
      customClass: {
        popup: 'rounded-3xl',
      },
      preConfirm: () => {
        const title = Swal.getPopup().querySelector('#swal-input1').value
        const content = Swal.getPopup().querySelector('#swal-input2').value
        return { title, content }
      }
    });

    if (notes) {
      onConfirm(notes)
    }
  };


  return (
    <div>
      <button onClick={handleAddNotes} className="hidden">
        Add notes
      </button>
    </div>
  );
};

Modal.propTypes = {
  onConfirm: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
}

export default Modal
