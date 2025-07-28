import {
  Container,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Alrigh">
    <Container>
      <Title>
         Alrigh
      </Title>
      <P>
        A web app that helps you find the best coupons, so you can save money while shopping!
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>AngularJs, NodeJS, MySql, Express, Puppeteer, Cheerio</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://alrigh.com/">
            alrigh.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/alrigh.jpg" alt="alrigh" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
