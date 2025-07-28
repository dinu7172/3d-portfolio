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
  <Layout title="Mora Footwear">
    <Container>
      <Title>
        Mora Footwear <Badge></Badge>
      </Title>
      <P>
        It is freelance project where I created a website for Mora Footwear, a footwear company. The website showcases their products and provides an easy way for customers to browse and purchase items online.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://mora-footwear.vercel.app/">
            https://mora-footwear.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web App</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Nextjs, Tailwind, PLSQL, React</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/mora.jpg" alt="Photo AI" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
