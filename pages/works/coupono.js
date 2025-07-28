import {
  Container,
  Link,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Coupono">
    <Container>
      <Title>
         Coupono
      </Title>
      <P>
        A web app to help you save more, shop smarter, and enjoy the best deals with ease!
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Nextjs, React, MongoDB, Tailwind, NodeJS, TypeScript, Puppeteer, Cheerio</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://coupono.com/">
            coupono.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/coupono.jpg" alt="coupono" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/coupono_01.jpg" alt="coupono" />
        <WorkImage src="/images/works/coupono_02.jpg" alt="coupono" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
