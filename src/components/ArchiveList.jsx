import PropTypes from 'prop-types'
import Card from "./Card"

const ArchiveList = ({ notes, showFormattedDate, handleRestore }) => {
  return (
    <div className="flex flex-wrap justify-between">
      {notes.map((note, index) => (
        <Card
          key={index}
          note={note}
          showFormattedDate={showFormattedDate}
          handleRestore={handleRestore}
        />
      ))}
    </div >
  )
}

ArchiveList.propTypes = {
  notes: PropTypes.array.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
  handleRestore: PropTypes.func.isRequired,
}

export default ArchiveList