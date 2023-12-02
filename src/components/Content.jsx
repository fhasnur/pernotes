import { useState, useEffect } from 'react'
import Container from "./Container"
import ContentHeader from "./ContentHeader"
import ContentList from "./ContentList"
import Swal from 'sweetalert2'
import { getInitialData } from '../utils/getInitialData'
import { showFormattedDate } from '../utils/showFormattedDate'

const Content = () => {
  const [data, setData] = useState(getInitialData() || [])
  const [notes, setNotes] = useState([])

  useEffect(() => {
    setNotes(data)
  }, [data])

  const handleAdd = async () => {
    const { value: notes } = await Swal.fire({
      title: 'Add notes',
      html:
        `<div class="relative">
          <label id="title" class="absolute text-md font-semibold top-0 left-0 mt-1 text-gray-500">Title</label>
          <input id="swal-input1" class="w-full mt-8 mb-5 z-50 input input-bordered" placeholder="Enter a title">
          <label id="char-count" class="absolute text-sm top-0 right-0 mt-1 mr-2 text-gray-500">0/50</label>
        </div>` +
        `
        <div class="relative">
          <label id="notes" class="absolute text-md font-semibold left-0 mt-1 text-gray-500">Notes</label>
          <textarea id="swal-input2" class="w-full h-48 z-60 lg:h-80 mt-8 textarea text-base textarea-bordered rounded-xl" placeholder="Capture your thoughts here"></textarea>
        </div>`,
      color: 'black',
      position: 'center',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Add',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#2657ED',
      cancelButtonColor: '#EB5353',
      customClass: {
        popup: 'rounded-3xl',
      },
    })

    const title = document.getElementById('swal-input1').value
    const body = document.getElementById('swal-input2').value

    if (notes) {
      const newNote = {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      setData([newNote, ...data])

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Note added.',
        customClass: {
          popup: 'rounded-3xl',
        },
      })
    }
  }

  return (
    <section>
      <div className="flex min-h-screen gradient-bg">
        <Container>
          <ContentHeader
            handleAdd={handleAdd}
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