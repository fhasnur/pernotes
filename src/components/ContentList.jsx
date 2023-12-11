import PropTypes from 'prop-types'
import Card from "./Card"

const ContentList = ({
  notes,
  showFormattedDate,
  handleArchive,
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
          handleArchive={handleArchive}
          handleEdit={handleEdit}
          isEdit={isEdit}
        />
      ))}
    </div >
  )
}

ContentList.propTypes = {
  notes: PropTypes.array.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
  handleEdit: PropTypes.func,
  isEdit: PropTypes.bool,
}

export default ContentList