import {
  Button,
  Divider,
  HStack,
  Icon,
  IconButton,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillHeart, AiFillSetting } from 'react-icons/ai';
import { FaWandMagicSparkles } from 'react-icons/fa';
import AudioCard from './Card/AudioCard';

const AudioComp = () => {
  const audioCardsData = [
    {
      id: 1,
      avatarUrl:
        'https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Listen-Hear-Sound-Noise-Ear-Audio-Avatar-512.png',
      title: 'Audio Title #1',
      genres: ['Relaxing', 'Dramatic'],
      duration: '2:15',
      audioUrl: 'https://www.sample-videos.com/audio/mp3/crowd-cheering.mp3',
    },
    {
      id: 2,
      avatarUrl:
        'https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Listen-Hear-Sound-Noise-Ear-Audio-Avatar-512.png',
      title: 'Audio Title #1',
      genres: ['Relaxing', 'Dramatic'],
      duration: '2:15',
      audioUrl: 'https://www.sample-videos.com/audio/mp3/crowd-cheering.mp3',
    },
    {
      id: 3,
      avatarUrl:
        'https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Listen-Hear-Sound-Noise-Ear-Audio-Avatar-512.png',
      title: 'Audio Title #1',
      genres: ['Relaxing', 'Dramatic'],
      duration: '2:15',
      audioUrl: 'https://www.sample-videos.com/audio/mp3/crowd-cheering.mp3',
    },
  ];
  return (
    <>
      <VStack w={'full'} alignItems={'flex-start'} mb={[10, 0]}>
        <Stack
          direction={'row'}
          spacing={2}
          mt={2}
          w={'full'}
          justifyContent={'space-between'}
        >
          <Stack direction={['column', 'row']}>
            <Button
              borderRadius={'full'}
              variant={'outline'}
              colorScheme={'red'}
              borderColor={'#FF5757'}
            >
              Background Music
            </Button>

            <Button
              borderRadius={'full'}
              variant={'outline'}
              colorScheme={'red'}
              borderColor={'#FF5757'}
            >
              Voice Over
            </Button>

            <Button
              borderRadius={'full'}
              variant={'outline'}
              colorScheme={'red'}
              borderColor={'#FF5757'}
            >
              My Uploads
            </Button>
          </Stack>
          <HStack>
            <IconButton
              icon={<AiFillHeart />}
              aria-label="Heart"
              borderRadius={'full'}
              bg={'#D9D9D9'}
              color={'white'}
            />
            <IconButton
              icon={<AiFillSetting />}
              aria-label="Setting"
              borderRadius={'full'}
              bg={'#D9D9D9'}
              color={'white'}
            />
          </HStack>
        </Stack>

        <Stack
          direction={'row'}
          align="center"
          mt={2}
          w={'full'}
          bg={'white'}
          p={4}
        >
          <Input
            placeholder="Image,Videos,and Templates"
            size="md"
            variant="outline"
            p={6}
            borderRadius={'full'}
            borderColor="#898989"
            focusBorderColor="#898989"
          />

          <Button
            borderRadius={'full'}
            variant={'outline'}
            color={'black'}
            border={'1px solid black'}
            ml={2}
            size={'lg'}
          >
            Apply All
          </Button>
        </Stack>
        <Stack
          direction={'column'}
          align="center"
          w={'full'}
          overflowY={'scroll'}
          maxH={'550px'}
        >
          {audioCardsData.map(audioCard => (
            <AudioCard key={audioCard.id} {...audioCard} />
          ))}
        </Stack>
      </VStack>
    </>
  );
};

export default AudioComp;
