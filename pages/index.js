import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an Full Stack developer based in Mumbai, India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Dinesh Maurya
          </Heading>
          <p>Tech Enthusiast ( Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/dinesh.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Dinesh is a freelance and a full-stack developer based in Mumbai with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with exploring the different subjects. Currently, he is full stack developer at {' '}
          <Link as={NextLink} href="https://perfectlyokay.com/" passHref scroll={false}>
             PerfectlyOkay Solutions
          </Link>
          {/* . He also working business partner at Mora Footwear for marketing his products and his YouTube
          channel called &quot;
          <Link
            as={NextLink}
            href="https://www.youtube.com/devaslife"
            passHref
            target="_blank"
          >
            Dev as Life
          </Link>
          &quot; has more than 100k subscribers. */}
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Mumbai, India.
        </BioSection>
        <BioSection>
          <BioYear>Mar 2023</BioYear>
          Completed the Bachelor&apos;s of Science in Computer Science Program in the VESASC at Mumbai University
        </BioSection>
        <BioSection>
          <BioYear>Apr 2023</BioYear>
          Worked at RSWebTechSOft! Mumbai
        </BioSection>
        <BioSection>
          <BioYear>Apr 2024</BioYear>

          Working as a Full Stack Developer at{' '}
          <Link href="https://perfectlyokay.com/" target="_blank">
            PerfectlyOkay Solutions
          </Link>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Business, Music, Finance,{' '}
          Cricket, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/dinu7172" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @dinu7172
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/dinu7172" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @dinu7172
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/dinesh_v19" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @dinesh_v19
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          Contact Me
        </Heading>
        <p>
          Reach out to me for job opportunities, projects, or just to say hi!{' '}
          <br />
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="mailto:dineshmourya7172@gmail.com"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Reach me
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
