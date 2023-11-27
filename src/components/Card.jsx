import CardHeader from "./CardHeader"
import CardBody from "./CardBody"
import CardButton from "./CardButton"

const Card = () => {
  return (
    <div className="card p-8 bg-custom-primary rounded-2xl text-custom-txt-primary hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] lg:mb-2 transition-all transform duration-300 ease-in-out">
      <CardHeader />
      <CardBody />
      <CardButton />
    </div>
  )
}

export default Card