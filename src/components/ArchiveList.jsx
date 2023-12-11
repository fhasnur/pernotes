import PropTypes from 'prop-types'
import Card from "./Card"

const ArchiveList = ({
  notes,
  showFormattedDate,
  handleRestore,
  handleEdit,
  isEdit,
}) => {
  return (
    <div className="flex flex-wrap justify-between">
      {notes.map((note, index) => (
        <Card
          key={index}
          note={note}
          showFormattedDate={showFormattedDate}
          handleRestore={handleRestore}
          handleEdit={handleEdit}
          isEdit={isEdit}
        />
      ))}
    </div >
  )
}

ArchiveList.propTypes = {
  notes: PropTypes.array.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleRestore: PropTypes.func,
  isEdit: PropTypes.bool,
}

export default ArchiveList