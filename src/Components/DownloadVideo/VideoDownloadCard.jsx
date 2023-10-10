import {
  Avatar,
  Box,
  Button,
  HStack,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

import { BsUpload } from 'react-icons/bs';
import { ReactComponent as EditIcon } from '../../Assests/icon/edit-2.svg';
import { ReactComponent as LikeIcon } from '../../Assests/icon/like.svg';
import { ReactComponent as DislikeIcon } from '../../Assests/icon/dislike.svg';
import { ReactComponent as ShareIcon } from '../../Assests/icon/share-1.svg';
import { ReactComponent as TimerIcon } from '../../Assests/icon/timer1.svg';
import { useState } from 'react';

const VideoDownloadCard = ({ data }) => {
  const [selectedDuration, setSelectedDuration] = useState(null);
  const durations = [30, 60, 90, 120];
  const handleDurationClick = duration => {
    setSelectedDuration(duration);
  };

  const iconData = [
    { id: 'edit', icon: <EditIcon /> },
    { id: 'like', icon: <LikeIcon /> },
    { id: 'dislike', icon: <DislikeIcon /> },
    { id: 'share', icon: <ShareIcon /> },
  ];
  return (
    <>
      <Stack mt={8} direction={['column', 'row']} alignItems={'center'}>
        <Image src={data.image} h={'180px'} w={'245px'} />

        <VStack
          alignItems={['center', 'flex-start']}
          spacing={4}
          w={'60%'}
          textAlign={['center', 'left']}
          pl={[0, 6]}
        >
          <Heading
            fontFamily={'Poppins, sans-serif'}
            fontSize={'24px'}
            fontWeight={'semibold'}
          >
            {data.title}
          </Heading>
          <Text
            fontFamily={'Poppins, sans-serif'}
            fontSize={'14px'}
            fontWeight={'light'}
          >
            {data.content}
          </Text>
          <HStack>
            {durations.map(duration => (
              <Button
                key={duration}
                borderRadius={'full'}
                bg={selectedDuration === duration ? 'white' : 'white'}
                border={`2px solid ${
                  selectedDuration === duration ? '#FF5757' : '#D9D9D9'
                }`}
                color={selectedDuration === duration ? '#FF5757' : '#D9D9D9'}
                alignItems={'center'}
                onClick={() => handleDurationClick(duration)}
              >
                <TimerIcon
                  fill={selectedDuration === duration ? '#FF5757' : '#D9D9D9'}
                />
                {`${duration} sec`}
              </Button>
            ))}
          </HStack>
        </VStack>
        <Box
          bg={'#FF5757'}
          color={'white'}
          w={'93px'}
          h={'120px'}
          borderRadius={'lg'}
          alignItems={'center'}
          textAlign={'center'}
          p={4}
          mt={[4, 0]}
        >
          <Text
            fontWeight={'bold'}
            fontSize={'36px'}
            fontFamily={'Poppins, sans-serif'}
          >
            {data.score}
          </Text>
          <Text
            fontWeight={'semibold'}
            fontSize={'16px'}
            fontFamily={'Poppins, sans-serif'}
          >
            Score
          </Text>
        </Box>
        <VStack alignSelf={'center'} p={(4, 8)}>
          <Button
            color={'black'}
            bg={'white'}
            borderRadius={'full'}
            border={'1px solid black'}
            w={'272px'}
            h={'50px'}
            leftIcon={<BsUpload />}
          >
            Download
          </Button>
          <HStack w={'full'} justifyContent={'space-between'} mt={[4, 4]}>
            {iconData.map(({ id, icon }) => (
              <IconButton
                key={id}
                icon={icon}
                borderRadius={'full'}
                bg={'transparent'}
                border={'2px solid #D9D9D9'}
                color={'#D9D9D9'}
                _hover={{ textDecoration: 'none' }}
                size={'lg'}
              />
            ))}
          </HStack>
        </VStack>
      </Stack>
    </>
  );
};

export default VideoDownloadCard;
