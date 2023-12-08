import PropTypes from 'prop-types'
import Button from './Button'
import { FiPlusCircle } from 'react-icons/fi'
import { MdOutlineArchive } from 'react-icons/md'
import SweetAlert from 'react-bootstrap-sweetalert'
import Modal from './Modal'

const ContentHeader = ({
  formData,
  modalIsOpen,
  setModalIsOpen,
  handleChange,
  handleAdd,
  handleCancel
}) => {
  return (
    <div className="flex items-center mt-28 mb-8">
      <div className="flex-1">
        <h1 className="text-2xl text-custom-txt font-medium lg:-ml-2">📝 Notes</h1>
      </div>
      <div className="flex-none">
        <Button onClick={() => setModalIsOpen(true)} variant="secondary" className="ml-2 px-5 py-3 hover:bg-[#3261F2]">
          <FiPlusCircle size={17} />
          Add notes
        </Button>
        <Button onClick={() => console.log('Archive button clicked')} variant="tertiary" className="ml-2 px-5 py-3 hover:bg-[#242B41]">
          <MdOutlineArchive size={18} />
          Archive
        </Button>
      </div>
      <div className="rounded-xl">
        <SweetAlert
          show={modalIsOpen}
          title="Add Notes"
          onConfirm={handleAdd}
          onCancel={handleCancel}
          showConfirm={false}
          className="rounded-3xl"
        >

          <Modal
            formData={formData}
            handleChange={handleChange}
            handleAdd={handleAdd}
            handleCancel={handleCancel}
          />
        </SweetAlert>
      </div>
    </div>
  )
}

ContentHeader.propTypes = {
  formData: PropTypes.object.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
}

export default ContentHeader
