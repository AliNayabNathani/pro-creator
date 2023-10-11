import React from 'react';
import AnotherTestimonialGrid from '../Home/TestimonialCard2';
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  chakra,
  OrderedList,
  VStack,
} from '@chakra-ui/react';
import '../../Utils/fonts.css';
import scriptBg from '../../Assests/images/script bg.png';
import centerContent from '../../Assests/images/center content.png';
import whatisprocreator from '../../Assests/images/ProCreator.png';
import whyProCreator from '../../Assests/images/whyProCreator.png';
import scriptFeatureVid from '../../Assests/images/scriptFeatureVid.png';
import { ReactComponent as PinkCheck } from '../../Assests/icon/pinkCheck.svg';
import { ReactComponent as LineCheck } from '../../Assests/icon/LineIcon.svg';
import SponsorCard from '../CommonComponents/SponsorCard';

const ScriptFeatures = () => {
  return (
    <>
      <Container
        minH={'100vh'}
        maxW="full"
        padding={0}
        paddingTop={'8'}
        bg={'white'}
        w={'full'}
        overflow={'hidden'}
      >
        <Stack direction={['column', 'row']} alignItems={'center'} mb={4}>
          <Stack
            w={['100%', '60%']}
            p={10}
            direction={'column'}
            ml={[0, '8rem']}
          >
            <Heading
              fontSize={['4xl', '7xl']}
              width={['100%', '65%']}
              fontFamily={'Recoleta'}
              fontWeight={'semibold'}
              textAlign={['center', 'left']}
            >
              Automatically Summarize{' '}
              <chakra.span color="#FF5757">Long Videos</chakra.span>
            </Heading>
            <Text
              children="When long needs to be short, Pro Creator got you covered"
              fontFamily={'Poppins, sans-serif'}
              fontSize={'16px'}
            />
            <Image
              cursor={'pointer'}
              src={scriptFeatureVid}
              h={['auto', '100px']}
              w={['auto', '400px']}
            />
          </Stack>

          <Stack
            w={['100%', '50%']}
            padding={10}
            fontSize={'18px'}
            alignItems={'flex-start'}
          >
            <List spacing={[6, 8]}>
              <ListItem>
                <ListIcon as={PinkCheck} color="#FF5757" />
                <chakra.span fontWeight={'bold'}>Grab Attention, </chakra.span>
                A.I. summarises your key points flash
              </ListItem>
              <ListItem>
                <ListIcon as={PinkCheck} color="#FF5757" />
                <chakra.span fontWeight={'bold'}>
                  Repurpose Content,
                </chakra.span>
                turn long content into short
              </ListItem>
              <ListItem>
                <ListIcon as={PinkCheck} color="#FF5757" />
                <chakra.span fontWeight={'bold'}>
                  Boost Engagement,{' '}
                </chakra.span>
                short clips engage viewers
              </ListItem>
              <ListItem>
                <ListIcon as={PinkCheck} color="#FF5757" />
                <chakra.span fontWeight={'bold'}>Auto Captions, </chakra.span>
                reach viewers at work
              </ListItem>
              <ListItem>
                <ListIcon as={PinkCheck} color="#FF5757" />
                <chakra.span fontWeight={'bold'}>PC & Mac, </chakra.span>
                runs in the cloud on any computer
              </ListItem>
              <ListItem w={'80%'}>
                AI automatically produces short summary videos from your
                webinars, podcasts and Zoom recordings in just minutes.
              </ListItem>
            </List>
          </Stack>
        </Stack>

        <Stack
          p={[4, 16]}
          bgImage={scriptBg}
          bgSize={'cover'}
          w={'full'}
          h={'full'}
        >
          <Heading
            mb={[6, 12]}
            w={['100%', '40%']}
            fontSize={['2xl', '48px']}
            fontFamily={'Poppins, sans-serif'}
            color={'white'}
          >
            ProCreator.io Script To Video Features At A Glance
          </Heading>
          <Stack direction={['column-reverse', 'row']}>
            <VStack w={['100%', '40%']} alignItems={['center', 'flex-start']}>
              <List spacing={[6, 8]} color={'white'}>
                <ListItem>
                  <ListIcon as={LineCheck} />
                  <chakra.span fontWeight={'bold'}>Grab Attention</chakra.span>
                  <br />
                  <Text ml={[0, 5]}>
                    Advanced AI creates short clips from long videos containing
                    your key points to grab your audience's attention, fast.
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={LineCheck} />
                  <chakra.span fontWeight={'bold'}>
                    Increase Engagement & Opt-in rate
                  </chakra.span>
                  <br />
                  <Text ml={[0, 5]}>
                    intriguing short clips lead to higher levels of engagement
                    and more opt-ins to your sales funnel.
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={LineCheck} />
                  <chakra.span fontWeight={'bold'}>
                    Repurpose Content
                  </chakra.span>
                  <br />
                  <Text ml={[0, 5]}>
                    like magic, hour-long webinars become 3-minute bite-sized
                    snippets which you can easily share.
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={LineCheck} />
                  <chakra.span fontWeight={'bold'}>Auto Captions</chakra.span>
                  <br />
                  <Text ml={[0, 5]}>
                    burn captions into videos automatically, reach viewers at
                    work or in noising environments.
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={LineCheck} />
                  <chakra.span fontWeight={'bold'}>
                    Fast, Simple & Effective
                  </chakra.span>
                  <br />
                  <Text ml={[0, 5]}>
                    runs in the cloud on any computer, Mac or PC, no software to
                    download and won't slow your computer down.
                  </Text>
                </ListItem>
              </List>
            </VStack>
            <VStack w={['100%', '50%']} alignItems={['center', 'flex-end']}>
              <Image
                src={centerContent}
                w={['auto', '547px']}
                h={['auto', '435px']}
              />
            </VStack>
          </Stack>
        </Stack>

        <Stack alignItems={'center'} mt={(4, 8)}>
          <Heading fontSize={['2xl', '4xl']} mb={[8, 10]}>
            Procreator.io Is Easy To Use
          </Heading>
          <Image src={whyProCreator} />
        </Stack>
        <Divider my={4} borderWidth={'1.5px'} />
        <Stack alignItems={'center'} w={'100%'} mt={[8, 10]}>
          <Heading fontSize={['2xl', '4xl']}>
            Where to use Procreator.io?
          </Heading>
          <Text color={'#898989'} textAlign={'center'}>
            Use Pictory to summarize any kind of videos with spoken content and
            get them ready for sharing on social media.
          </Text>
          <Image src={whatisprocreator} mt={[4, 8]} />
        </Stack>
      </Container>
      <SponsorCard />
    </>
  );
};

export default ScriptFeatures;
