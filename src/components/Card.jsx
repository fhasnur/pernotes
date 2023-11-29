import Button from "./Button"
import { FaRegNoteSticky } from "react-icons/fa6"
import { RiInboxArchiveLine } from "react-icons/ri"
import { FiEdit, FiTrash } from "react-icons/fi"

const Card = () => {
  return (
    <div className="card p-8 bg-custom-primary rounded-2xl text-custom-txt-primary hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] lg:mb-2 transition-all transform duration-300 ease-in-out">
      <div>
        <h2 className="font-medium text-2xl">Babel</h2>
        <h5 className="font-light text-sm ">28 November 2023</h5>
      </div>
      <div>
        <p className="my-6 line-clamp-6">Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.  JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX. JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.</p>
      </div>
      <div className="flex items-center justify-between mt-1 mb-1">
        <Button variant="primary" className="w-1/2 font-normal lg:-ml-1 hover:bg-[#D9DDDA] hover:text-custom-btn-secondary hover:border-custom-btn-secondary">
          <FaRegNoteSticky size={15} />
          Read more
        </Button>
        <div className="tooltip tooltip-bottom" data-tip="archive">
          <Button variant="primary" className="hover:bg-[#D9DDDA] hover:border-custom-txt-primary">
            <RiInboxArchiveLine size={16} />
          </Button>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="edit">
          <Button variant="primary" className="hover:bg-[#D9DDDA] hover:text-[#279EFF] hover:border-[#279EFF]">
            <FiEdit size={16} />
          </Button>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="delete">
          <Button variant="primary" className="hover:bg-[#D9DDDA] hover:text-[#FF1E00] hover:border-[#FF1E00]">
            <FiTrash size={16} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card