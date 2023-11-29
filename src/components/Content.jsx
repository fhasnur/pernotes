import { useState, useEffect } from 'react'
import Container from "./Container"
import ContentHeader from "./ContentHeader"
import ContentItem from "./ContentItem"
import { getInitialData, showFormattedDate } from '../utils/getInitialData'

const Content = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    setNotes(getInitialData())
  }, [])

  return (
    <section>
      <div className="flex min-h-screen gradient-bg">
        <Container>
          <ContentHeader />
          <ContentItem
            notes={notes}
            showFormattedDate={showFormattedDate}
          />
        </Container>
      </div>
    </section>
  )
}

export default Content