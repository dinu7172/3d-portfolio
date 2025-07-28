import {
  Container,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Promptify">
    <Container>
      <Title>
        Promptify <Badge>2022</Badge>
      </Title>
      <P>
        Promptify is a web application that generates creative writing prompts
        using advanced AI algorithms. It helps writers overcome writer&apos;s block
        and find inspiration for their next story.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web App</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Nextjs, MongoDB</span>
        </ListItem>
      </List>

        <WorkImage src="/images/works/promptify.jpg" alt="promptify" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
