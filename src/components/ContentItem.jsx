import PropTypes from 'prop-types'
import Card from "./Card"

const ContentItem = ({ notes, showFormattedDate }) => {
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

ContentItem.propTypes = {
  notes: PropTypes.array.isRequired,
  showFormattedDate: PropTypes.func.isRequired
}

export default ContentItem