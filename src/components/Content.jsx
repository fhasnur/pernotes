import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import Container from "./Container"
import ContentHeader from "./ContentHeader"
import ContentList from "./ContentList"
import { getInitialData } from '../utils/getInitialData'
import { showFormattedDate } from '../utils/showFormattedDate'

const Content = () => {
  const [data, setData] = useState(getInitialData() || [])
  const [notes, setNotes] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });

  useEffect(() => {
    setNotes(data)
  }, [data])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleAdd = () => {
    const { title, body } = formData

    if (notes.length > 0) {
      const newNote = {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      setData([newNote, ...data])
      setFormData({
        title: '',
        body: '',
      })
      setModalIsOpen(false)

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Note added.',
        customClass: {
          popup: 'rounded-xl',
        },
      })
    }
  }

  const handleCancel = () => {
    setModalIsOpen(false)
  }

  return (
    <section>
      <div className="flex min-h-screen gradient-bg">
        <Container>
          <ContentHeader
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            formData={formData}
            handleChange={handleChange}
            handleAdd={handleAdd}
            handleCancel={handleCancel}
          />
          <ContentList
            notes={notes}
            showFormattedDate={showFormattedDate}
          />
        </Container>
      </div>
    </section>
  )
}

export default Content