import {
  Button,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineClockCircle, BiMagicWand, FaRegCopy } from 'react-icons/all';

const SceneCard = () => {
  return (
    <Stack direction={['column', 'column']} mt={4}>
      <Text fontWeight="bold" fontSize={['xl', '2xl']}>
        Title #1
      </Text>
      <Stack bg={'white'} p={[4, 8]}>
        <HStack justifyContent={'space-between'}>
          <HStack>
            <Text fontSize="md" color="Black">
              Scene #1
            </Text>

            <Icon as={AiOutlineClockCircle} color={'#FF5757'} />
            <Text fontSize="md" color={'#FF5757'}>
              00:30.00
            </Text>
          </HStack>
          <HStack>
            <Button borderRadius={'full'} bg={'#FF5757'} color={'white'} ml={2}>
              Modify
            </Button>
            <Button
              borderRadius={'full'}
              bg={'transparent'}
              borderColor={'#FF5757'}
              ml={2}
            >
              <Icon as={FaRegCopy} />
            </Button>
          </HStack>
        </HStack>
        <Text mt={4}>
          No need to spend money on other subscriptions. Automatically selects
          clips from over 3 MILLION videos and images PLUS 15,000 music tracks
          from industry leaders StoryBlocks and Melod.ie - all royalty-free
          forever meaning you'll never get a copyright claim.
        </Text>
      </Stack>
    </Stack>
  );
};

export default SceneCard;
