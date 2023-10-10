import React from 'react';
import {
  Avatar,
  Button,
  HStack,
  IconButton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';
import { useState } from 'react';

const AudioCard = ({ avatarUrl, title, genres, duration, audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio(audioUrl);

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <Stack
      direction={['column', 'row']}
      //   spacing={2}
      align="center"
      bg={'white'}
      borderRadius="lg"
      p={4}
      w={'full'}
      justifyContent={'space-between'}
    >
      <HStack spacing={8}>
        <Avatar
          src={avatarUrl}
          alt="Avatar"
          style={{ borderRadius: '50%', width: '60px', height: '60px' }}
        />
        <VStack alignItems={'flex-start'}>
          <Text fontSize="md" fontWeight="bold">
            {title}
          </Text>

          <Text fontSize="sm" color="gray.500">
            {genres.join(', ')}
          </Text>

          <Text fontSize="sm" color="gray.500">
            {duration}
          </Text>
        </VStack>
      </HStack>
      <HStack>
        <IconButton
          icon={isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
          aria-label={isPlaying ? 'Pause' : 'Play'}
          borderRadius={'full'}
          bg={'black'}
          color={'white'}
          onClick={handlePlayPause}
        />

        <Button
          borderRadius={'full'}
          variant={'outline'}
          color={'black'}
          border={'1px solid black'}
          size={['sm', 'md']}
        >
          Apply
        </Button>
      </HStack>
    </Stack>
  );
};

export default AudioCard;
