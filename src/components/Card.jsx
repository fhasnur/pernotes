import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from "./Button"
import { FaRegNoteSticky } from "react-icons/fa6"
import { RiInboxArchiveLine } from "react-icons/ri"
import { FiEdit, FiTrash } from "react-icons/fi"
import { LuArchiveRestore } from "react-icons/lu"
import Swal from 'sweetalert2'

const Card = ({
  note,
  showFormattedDate,
  handleArchive,
  handleRestore,
  handleEdit,
  isEdit,
  handleDelete,
}) => {
  const [isReadMoreDisabled, setIsReadMoreDisabled] = useState(false)
  const maxWords = 30

  useEffect(() => {
    setIsReadMoreDisabled(countWords(note.body) <= maxWords)
  }, [note.body])

  const countWords = (text) => {
    return text.split(/\s+/).filter((word) => word !== '').length
  }

  const handleReadMore = () => {
    const formattedBody = note.body.replace(/\n/g, '<br>');

    Swal.fire({
      title: note.title,
      html:
        `<div class="max-h-96 overflow-y-auto text-left">${formattedBody}</div>
         <p class="font-light text-base mt-6">${showFormattedDate(isEdit ? note.updatedAt : note.createdAt)}</p>`,
      confirmButtonText: 'Close',
      customClass: {
        popup: 'rounded-xl',
        scrollbar: 'swiper-scrollbar',
        container: 'swiper-container'
      },
      scrollbarTarget: '.swiper-scrollbar'
    })
  }

  const handleClickArchive = () => {
    if (note.archived) {
      handleRestore(note.id)
    } else {
      handleArchive(note.id)
    }
  }

  const handleClickEdit = () => {
    handleEdit(note.id)
  }

  const handleClickDelete = () => {
    handleDelete(note.id)
  }

  return (
    <div className="flex-grow max-w-sm my-2overflow-hidden mb-5">
      <div
        key={note.id}
        className="card p-8 bg-custom-primary rounded-2xl text-custom-txt-primary hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] lg:mb-2 transition-all transform duration-300 ease-in-out"
      >
        <div>
          <h2 className="font-medium text-2xl">{note.title}</h2>
          <h5 className="font-light text-sm ">{showFormattedDate(isEdit ? note.updatedAt : note.createdAt)}</h5>
        </div>
        <div>
          <p className="my-6 line-clamp-6">{note.body}</p>
        </div>
        <div className="flex items-center justify-between mt-1 mb-1">
          <Button
            variant="primary"
            onClick={handleReadMore}
            className="w-1/2 font-normal lg:-ml-1 hover:bg-[#D9DDDA] hover:text-custom-btn-secondary hover:border-custom-btn-secondary"
            disabled={isReadMoreDisabled}
          >
            <FaRegNoteSticky size={15} />
            Read more
          </Button>
          <div className="tooltip tooltip-bottom" data-tip={note.archived ? "restore" : "archive"}>
            <Button
              variant="primary"
              onClick={handleClickArchive}
              className="hover:bg-[#D9DDDA] hover:border-custom-txt-primary"
            >
              {note.archived ? (
                <LuArchiveRestore size={16} />
              ) : (
                <RiInboxArchiveLine size={16} />
              )}
            </Button>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="edit">
            <Button
              variant="primary"
              onClick={handleClickEdit}
              className="hover:bg-[#D9DDDA] hover:text-[#279EFF] hover:border-[#279EFF]"
            >
              <FiEdit size={16} />
            </Button>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="delete">
            <Button
              variant="primary"
              onClick={handleClickDelete}
              className="hover:bg-[#D9DDDA] hover:text-[#FF1E00] hover:border-[#FF1E00]"
            >
              <FiTrash size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div >
  )
}

Card.propTypes = {
  note: PropTypes.object.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
  handleArchive: PropTypes.func,
  handleEdit: PropTypes.func.isRequired,
  handleRestore: PropTypes.func,
  isEdit: PropTypes.bool,
  handleDelete: PropTypes.func.isRequired,
}

export default Card