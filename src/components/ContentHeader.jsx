import Button from "./Button"
import { FiPlusCircle } from "react-icons/fi"
import { MdOutlineArchive } from "react-icons/md"

const ContentHeader = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="flex items-center my-8">
      <div className="flex-1">
        <h1 className="text-2xl text-custom-txt font-medium lg:-ml-1">📝 Notes</h1>
      </div>
      <div className="flex-none">
        <Button onClick={handleClick} variant="secondary" className="ml-2 hover:bg-[#3261F2]">
          <FiPlusCircle size={17} />
          Add notes
        </Button>
        <Button onClick={handleClick} variant="tertiary" className="ml-2 hover:bg-[#242B41]">
          <MdOutlineArchive size={18} />
          Archive
        </Button>
      </div>
    </div>
  )
}

export default ContentHeader