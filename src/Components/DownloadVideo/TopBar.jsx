import { Button, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { BsUpload } from 'react-icons/bs';

const TopBar = () => {
  const [selectedResolution, setSelectedResolution] = useState(null);

  const handleResolutionClick = resolution => {
    setSelectedResolution(resolution);
  };
  return (
    <Stack
      justifyContent={'space-between'}
      w={'full'}
      direction={'row'}
      bg={'#292D32'}
      borderRadius={'30px'}
      h={'100px'}
      alignItems={'center'}
      p={[2, 8]}
    >
      <VStack alignItems={'flex-start'}>
        <Text color={'white'}>Select Video Resolution</Text>
        <HStack>
          <Button
            bg={'transparent'}
            borderColor={selectedResolution === '720p' ? '#FF5757' : '#898989'}
            color={selectedResolution === '720p' ? '#FF5757' : '#898989'}
            border={'1px solid'}
            onClick={() => handleResolutionClick('720p')}
          >
            720p
          </Button>
          <Button
            bg={'transparent'}
            borderColor={selectedResolution === '1080p' ? '#FF5757' : '#898989'}
            color={selectedResolution === '1080p' ? '#FF5757' : '#898989'}
            border={'1px solid'}
            onClick={() => handleResolutionClick('1080p')}
          >
            1080p
          </Button>
          <Button
            bg={'transparent'}
            borderColor={selectedResolution === '4K' ? '#FF5757' : '#898989'}
            color={selectedResolution === '4K' ? '#FF5757' : '#898989'}
            border={'1px solid'}
            onClick={() => handleResolutionClick('4K')}
          >
            4K
          </Button>
          <Button
            bg={'transparent'}
            borderColor={selectedResolution === '8K' ? '#FF5757' : '#898989'}
            color={selectedResolution === '8K' ? '#FF5757' : '#898989'}
            border={'1px solid'}
            onClick={() => handleResolutionClick('8K')}
          >
            8K
          </Button>
        </HStack>
      </VStack>
      <VStack w={'25%'} textAlign={'center'}>
        <Text color={'white'} fontSize={'sm'}>
          Optimize Generated Video for the Size
        </Text>
        <Text color={'white'} fontSize={'sm'}>
          Turning this on would reduce file size but increase the video
          generation time
        </Text>
      </VStack>
      <Button
        color={'black'}
        bg={'white'}
        borderRadius={'full'}
        size={'lg'}
        leftIcon={<BsUpload />}
      >
        Download All Video
      </Button>
    </Stack>
  );
};

export default TopBar;
