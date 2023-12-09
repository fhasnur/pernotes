import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import Container from "./Container"
import ContentHeader from "./ContentHeader"
import ContentList from "./ContentList"
import { getInitialData } from '../utils/getInitialData'
import { showFormattedDate } from '../utils/showFormattedDate'
import ArchiveList from "./ArchiveList"

const Content = () => {
  const [data, setData] = useState(getInitialData() || [])
  const [notes, setNotes] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  })
  const [isArchive, setIsArchive] = useState(false)
  const [archivedNotes, setArchivedNotes] = useState([])

  useEffect(() => {
    const nonArchivedNotes = data.filter((note) => !note.archived)
    const archivedNotes = data.filter((note) => note.archived)

    setNotes(nonArchivedNotes)
    setArchivedNotes(archivedNotes)
  }, [data])

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (value.length <= 50) {
      setFormData((prevData) => ({ ...prevData, [name]: value }))
    }
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

  const handleArchive = (id) => {
    const updatedData = data.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: true,
          updatedAt: new Date(),
        }
      }
      return note
    })

    setData(updatedData)

    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Note archived.',
      customClass: {
        popup: 'rounded-xl',
      },
    })
  }

  const handleRestore = (id) => {
    const updatedData = data.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: false,
          updatedAt: new Date(),
        };
      }
      return note
    });

    setData(updatedData)

    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Note restored.',
      customClass: {
        popup: 'rounded-xl',
      },
    })
  }

  return (
    <section>
      <div className="flex min-h-screen gradient-bg -mt-20">
        <Container>
          <ContentHeader
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            formData={formData}
            handleChange={handleChange}
            handleAdd={handleAdd}
            handleCancel={handleCancel}
            isArchive={isArchive}
            setIsArchive={setIsArchive}
          />
          {isArchive ? (
            <ArchiveList
              notes={archivedNotes}
              showFormattedDate={showFormattedDate}
              handleRestore={handleRestore}
            />
          ) : (
            <ContentList
              notes={notes}
              showFormattedDate={showFormattedDate}
              handleArchive={handleArchive}
            />
          )}
        </Container>
      </div>
    </section>
  )
}

export default Content