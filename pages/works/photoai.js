import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Photo AI">
    <Container>
      <Title>
        Photo AI <Badge></Badge>
      </Title>
      <P>
        A web app that generates images trained with your own photos.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/dinu7172/Image-Generations">
            https://github.com/dinu7172/Image-Generations <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web App</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Nextjs, Express, MongoDB, React, Fal-AI</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/photo-ai.jpg" alt="Photo AI" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
