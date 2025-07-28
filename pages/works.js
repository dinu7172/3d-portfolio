import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import coupono from '../public/images/works/coupono.jpg'
import mora from '../public/images/works/mora.jpg'
import photoAi from '../public/images/works/photo-ai.jpg'
import productraters from '../public/images/works/productraters.jpg'
import promptify from '../public/images/works/promptify.jpg'
import alrigh from '../public/images/works/alrigh.jpg'
import ecommerce from '../public/images/works/ecommerce.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="photoai" title="Photo Ai" thumbnail={photoAi}>
            Generate the images trained with your own photos
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="promptify"
            title="Promptify"
            thumbnail={promptify}
          >
            A web app that help you to create prompts and share them for AI models
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="morafootwear"
            title="Mora Footwear"
            thumbnail={mora}
          >
            Business website for a footwear company
          </WorkGridItem>
        </Section>
        {/* <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="productraters" thumbnail={productraters} title="ProductRaters">
            A web app that help you find the best products, so you can shop with confidence and make quick & smart buying decisions!
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="coupono"
            thumbnail={coupono}
            title="Coupono"
          >
            A web app to help you save more, shop smarter, and enjoy the best deals with ease!
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          {/* alrigh.com is coupono sharing site for users in USA */}
          <WorkGridItem id="alrigh" thumbnail={alrigh} title="Alrigh">
            A web app that helps you find the best coupons, so you can save money while shopping!
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="ecommerce" thumbnail={ecommerce} title="Ecommerce Site">
            A simple e-commerce site built with Django and sqlite3
          </WorkGridItem>
        </Section>
        {/* <Section delay={0.5}>
          <WorkGridItem
            id="shoe-auction"
            thumbnail={thumbFreeDBTagger}
            title="Shoe Auction"
          >
            A simple shoe auction site built with Django and sqlite3
          </WorkGridItem>
        </Section> */}
        {/* <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
