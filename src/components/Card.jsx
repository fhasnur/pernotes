import PropTypes from 'prop-types'
import Button from "./Button"
import { FaRegNoteSticky } from "react-icons/fa6"
import { RiInboxArchiveLine } from "react-icons/ri"
import { FiEdit, FiTrash } from "react-icons/fi"

const Card = ({ note, showFormattedDate }) => {
  return (
    <div className="flex-grow max-w-sm my-2overflow-hidden mb-5">
      <div
        key={note.id}
        className="card p-8 bg-custom-primary rounded-2xl text-custom-txt-primary hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] lg:mb-2 transition-all transform duration-300 ease-in-out"
      >
        <div>
          <h2 className="font-medium text-2xl">{note.title}</h2>
          <h5 className="font-light text-sm ">{showFormattedDate(note.createdAt)}</h5>
        </div>
        <div>
          <p className="my-6 line-clamp-6">{note.body}</p>
        </div>
        <div className="flex items-center justify-between mt-1 mb-1">
          <Button
            variant="primary"
            className="w-1/2 font-normal lg:-ml-1 hover:bg-[#D9DDDA] hover:text-custom-btn-secondary hover:border-custom-btn-secondary"
          >
            <FaRegNoteSticky size={15} />
            Read more
          </Button>
          <div className="tooltip tooltip-bottom" data-tip="archive">
            <Button
              variant="primary"
              className="hover:bg-[#D9DDDA] hover:border-custom-txt-primary"
            >
              <RiInboxArchiveLine size={16} />
            </Button>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="edit">
            <Button
              variant="primary"
              className="hover:bg-[#D9DDDA] hover:text-[#279EFF] hover:border-[#279EFF]"
            >
              <FiEdit size={16} />
            </Button>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="delete">
            <Button
              variant="primary"
              className="hover:bg-[#D9DDDA] hover:text-[#FF1E00] hover:border-[#FF1E00]"
            >
              <FiTrash size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  note: PropTypes.array.isRequired,
  showFormattedDate: PropTypes.func.isRequired
}

export default Card