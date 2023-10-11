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
import { ReactComponent as ThreadsIcon } from '../../../Assests/icon/ThreadsIcon.svg';
import { ReactComponent as TwitterIcon } from '../../../Assests/icon/TwitterXLogo.svg';

const SocialMediaCard = ({ data }) => {
  const { title, content } = data;
  const formattedContent = content.replace(/\n/g, '<br>');
  const icon =
    title === 'Threads by Instagram' ? <ThreadsIcon /> : <TwitterIcon />;

  return (
    <Stack direction={['column', 'column']} mt={4}>
      <Stack bg={'white'} p={[4, 8]} borderRadius={'lg'}>
        <HStack justifyContent={'space-between'}>
          <HStack>
            {' '}
            {icon}
            <Text fontSize="20px" color="Black" fontWeight={'semibold'}>
              {title}
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
        {/* <Text mt={4}>{content}</Text> */}
        <Text mt={4} dangerouslySetInnerHTML={{ __html: formattedContent }} />
      </Stack>
    </Stack>
  );
};

export default SocialMediaCard;
