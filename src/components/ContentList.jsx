import PropTypes from 'prop-types'
import Card from "./Card"

const ContentList = ({ notes, showFormattedDate }) => {
  return (
    <div className="flex flex-wrap justify-between">
      {notes.map((note, index) => (
        <Card
          key={index}
          note={note}
          showFormattedDate={showFormattedDate}
        />
      ))}
    </div >
  )
}

ContentList.propTypes = {
  notes: PropTypes.object.isRequired,
  showFormattedDate: PropTypes.func.isRequired
}

export default ContentList