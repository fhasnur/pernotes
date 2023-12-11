import { useState } from "react"
import Header from "./components/Header"
import Content from "./components/Content"

function App() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (query) => setSearchQuery(query)

  return (
    <>
      <Header
        searchQuery={searchQuery}
        handleSearch={handleSearch}
      />
      <main>
        <Content
          searchQuery={searchQuery}
        />
      </main>
    </>
  )
}

export default App