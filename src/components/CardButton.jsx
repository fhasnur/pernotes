import Button from "./Button"
import { FaRegNoteSticky } from "react-icons/fa6"
import { RiInboxArchiveLine } from "react-icons/ri"
import { FiEdit, FiTrash } from "react-icons/fi"

const CardButton = () => {
  return (
    <div className="flex items-center justify-between mt-1 mb-1">
      <Button variant="primary" className="w-1/2 font-normal py-3 hover:bg-[#D9DDDA]">
        <FaRegNoteSticky size={15} />
        Read more
      </Button>
      <div className="tooltip tooltip-bottom" data-tip="archive">
        <Button variant="primary" className="hover:bg-[#D9DDDA]">
          <RiInboxArchiveLine size={16} />
        </Button>
      </div>
      <div className="tooltip tooltip-bottom" data-tip="edit">
        <Button variant="primary" className="hover:bg-[#D9DDDA]">
          <FiEdit size={16} />
        </Button>
      </div>
      <div className="tooltip tooltip-bottom" data-tip="delete">
        <Button variant="primary" className="hover:bg-[#D9DDDA]">
          <FiTrash size={16} />
        </Button>
      </div>
    </div>
  )
}

export default CardButton