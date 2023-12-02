import PropTypes from 'prop-types'
import Button from './Button'
import { FiPlusCircle } from 'react-icons/fi'
import { MdOutlineArchive } from 'react-icons/md'

const ContentHeader = ({ handleAdd }) => {
  return (
    <div className="flex items-center my-8">
      <div className="flex-1">
        <h1 className="text-2xl text-custom-txt font-medium lg:-ml-2">📝 Notes</h1>
      </div>
      <div className="flex-none">
        <Button onClick={handleAdd} variant="secondary" className="ml-2 px-5 py-3 hover:bg-[#3261F2]">
          <FiPlusCircle size={17} />
          Add notes
        </Button>
        <Button onClick={() => console.log('Archive button clicked')} variant="tertiary" className="ml-2 px-5 py-3 hover:bg-[#242B41]">
          <MdOutlineArchive size={18} />
          Archive
        </Button>
      </div>
    </div>
  )
}

ContentHeader.propTypes = {
  handleAdd: PropTypes.func.isRequired
}

export default ContentHeader
