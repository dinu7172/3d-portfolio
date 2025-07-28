import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Margelo">
    <Container>
      <Title>
        ProductRaters <Badge>2024 -</Badge>
      </Title>
      <P>
        ProductRaters is a platform that allows users to rate and review products
        from various categories. It aims to provide valuable insights to consumers
        and help them make informed purchasing decisions.
      </P>
      <P>
        <Link href="https://perfectlyokay.com/" target="_blank">
          PerfectlyOkay Solutions <ExternalLinkIcon mx="2px" />
        </Link>
        , where I work, is the company behind ProductRaters.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://productraters.com/" target="_blank">
              https://productraters.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js / Tailwind CSS / MongoDB / Puppeteer / Cheerio
          </span>
        </ListItem>
        <ListItem>
          <Meta>Features</Meta>
          <span>
            User ratings, reviews, product categories, search functionality,
            responsive design
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/productraters.jpg" alt="Website" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
