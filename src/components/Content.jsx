import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import Container from "./Container"
import ContentHeader from "./ContentHeader"
import ContentList from "./ContentList"
import { getInitialData } from '../utils/getInitialData'
import { showFormattedDate } from '../utils/showFormattedDate'
import ArchiveList from "./ArchiveList"

const Content = () => {
  const initialData = () => {
    const data = getInitialData();

    const dataWithUpdatedAt = data.map((note) => ({
      ...note,
      updatedAt: new Date().toString(),
    }))

    return dataWithUpdatedAt
  }

  const [data, setData] = useState(initialData() || [])
  const [notes, setNotes] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isArchive, setIsArchive] = useState(false)
  const [archivedNotes, setArchivedNotes] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [editedNoteId, setEditedNoteId] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  })

  useEffect(() => {
    const nonArchivedNotes = data.filter((note) => !note.archived)
    const archivedNotes = data.filter((note) => note.archived)

    setNotes(nonArchivedNotes)
    setArchivedNotes(archivedNotes)
  }, [data])

  const resetForm = () => {
    setFormData({
      title: '',
      body: '',
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'title' && value.length > 50) {
      const truncatedTitle = value.substring(0, 50);
      setFormData((prevData) => ({ ...prevData, [name]: truncatedTitle }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }))
    }
  }

  const handleSubmit = () => {
    if (isEdit && editedNoteId) {
      handleUpdate()
    } else {
      handleAdd()
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
      resetForm()
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
    resetForm()
    setModalIsOpen(false)
    setIsEdit(false)
  }

  const handleArchive = (id) => {
    const archivedData = data.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: true,
        }
      }
      return note
    })

    setData(archivedData)

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
    const restoredData = data.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: false,
        }
      }
      return note
    })

    setData(restoredData)

    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Note restored.',
      customClass: {
        popup: 'rounded-xl',
      },
    })
  }

  const handleEdit = (id) => {
    const noteToEdit = data.find((note) => note.id === id)

    if (!noteToEdit) {
      console.error("Note not found for id:", id)
      return
    }

    const { title, body } = noteToEdit

    if (title && body) {
      setFormData({
        title,
        body,
      })

      setModalIsOpen(true)
      setIsEdit(true)
      setEditedNoteId(id)
    } else {
      console.error("Invalid note data:", noteToEdit)
    }
  }

  const handleUpdate = () => {
    const { title, body } = formData

    if (isEdit && editedNoteId) {
      const updatedData = data.map((note) => {
        if (note.id === editedNoteId) {
          const updatedNote = {
            ...note,
            title,
            body,
            updatedAt: new Date(),
          }
          console.log(updatedNote)
          return updatedNote
        }
        return note
      })

      setModalIsOpen(false)
      setIsEdit(false)
      setEditedNoteId(null)
      setData(updatedData)
      resetForm()

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Note updated.',
        customClass: {
          popup: 'rounded-xl',
        },
      })
    }
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this note!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      customClass: {
        popup: 'rounded-xl',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const selectedData = data.filter((note) => note.id !== id)
        setData(selectedData)

        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Note deleted.',
          customClass: {
            popup: 'rounded-xl',
          },
        })
      }
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
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            isArchive={isArchive}
            setIsArchive={setIsArchive}
            handleUpdate={handleUpdate}
            isEdit={isEdit}
          />
          {isArchive ? (
            archivedNotes.length === 0 ? (
              <div className="flex justify-center">
                <p>Archive is empty.</p>
              </div>
            ) : (
              <ArchiveList
                notes={archivedNotes}
                showFormattedDate={showFormattedDate}
                handleRestore={handleRestore}
                handleEdit={handleEdit}
                isEdit={isEdit}
                handleDelete={handleDelete}
              />
            )
          ) : (
            notes.length === 0 ? (
              <div className="flex justify-center">
                <p>Notes is empty.</p>
              </div>
            ) : (
              <ContentList
                notes={notes}
                showFormattedDate={showFormattedDate}
                handleArchive={handleArchive}
                handleEdit={handleEdit}
                isEdit={isEdit}
                handleDelete={handleDelete}
              />
            )
          )}
        </Container>
      </div>
    </section>
  )
}

export default Content