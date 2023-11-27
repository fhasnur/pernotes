import Card from "./Card"

const ContentItem = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="w-full lg:w-96 mb-5">
        <Card />
      </div>
      <div className="w-full lg:w-96 mb-5">
        <Card />
      </div>
      <div className="w-full lg:w-96 mb-5">
        <Card />
      </div>
      <div className="w-full lg:w-96 mb-5">
        <Card />
      </div>
      <div className="w-full lg:w-96 mb-5">
        <Card />
      </div>
      <div className="w-full lg:w-96 mb-5">
        <Card />
      </div>
    </div>
  )
}

export default ContentItem