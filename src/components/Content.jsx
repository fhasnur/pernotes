import Container from "./Container"
import ContentHeader from "./ContentHeader"

const Content = () => {
  return (
    <section>
      <div className="flex min-h-screen gradient-bg">
        <Container>
          <ContentHeader />
        </Container>
      </div>
    </section>
  )
}

export default Content