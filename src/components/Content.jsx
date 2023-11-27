import Container from "./Container"
import ContentHeader from "./ContentHeader"
import ContentItem from "./ContentItem"

const Content = () => {
  return (
    <section>
      <div className="flex min-h-screen gradient-bg">
        <Container>
          <ContentHeader />
          <ContentItem />
        </Container>
      </div>
    </section>
  )
}

export default Content