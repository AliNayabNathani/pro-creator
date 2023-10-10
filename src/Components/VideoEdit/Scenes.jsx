import { Button, Icon, Input, Stack, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaWandMagicSparkles } from 'react-icons/fa';
import SceneCard from './Card/SceneCard';
import DesignComp from './DesignComp';
import SocialComp from './SocialComp';

const Scenes = () => {
  const [selectedButton, setSelectedButton] = useState('caption');

  const dummyData = [
    {
      id: 1,
      title: 'Title #1',
      sceneNumber: 'Scene #1',
      time: '00:30.00',
      buttonText: 'Modify',
      additionalText:
        "No need to spend money on other subscriptions. Automatically selects clips from over 3 MILLION videos and images PLUS 15,000 music tracks from industry leaders StoryBlocks and Melod.ie - all royalty-free forever meaning you'll never get a copyright claim.",
    },
    {
      id: 2,
      title: 'Title #1',
      sceneNumber: 'Scene #1',
      time: '00:30.00',
      buttonText: 'Modify',
      additionalText:
        "No need to spend money on other subscriptions. Automatically selects clips from over 3 MILLION videos and images PLUS 15,000 music tracks from industry leaders StoryBlocks and Melod.ie - all royalty-free forever meaning you'll never get a copyright claim.",
    },
    {
      id: 3,
      title: 'Title #1',
      sceneNumber: 'Scene #1',
      time: '00:30.00',
      buttonText: 'Modify',
      additionalText:
        "No need to spend money on other subscriptions. Automatically selects clips from over 3 MILLION videos and images PLUS 15,000 music tracks from industry leaders StoryBlocks and Melod.ie - all royalty-free forever meaning you'll never get a copyright claim.",
    },
  ];

  const handleButtonClick = button => {
    setSelectedButton(button);
  };
  return (
    <>
      <VStack w={'full'} alignItems={'flex-start'} mb={[10, 0]}>
        <Stack direction={'row'} spacing={2} mt={2} w={'full'}>
          <Button
            borderRadius={'full'}
            variant={selectedButton === 'caption' ? 'solid' : 'outline'}
            colorScheme={'red'}
            size={['sm', 'lg']}
            onClick={() => handleButtonClick('caption')}
            borderColor={selectedButton === 'caption' ? '#FF5757' : '#D9D9D9'}
          >
            Caption
          </Button>

          <Button
            borderRadius={'full'}
            variant={selectedButton === 'design' ? 'solid' : 'outline'}
            colorScheme={'red'}
            size={['sm', 'lg']}
            onClick={() => handleButtonClick('design')}
            borderColor={selectedButton === 'design' ? '#FF5757' : '#D9D9D9'}
          >
            Design
          </Button>

          <Button
            borderRadius={'full'}
            variant={selectedButton === 'social' ? 'solid' : 'outline'}
            colorScheme={'red'}
            size={['sm', 'lg']}
            onClick={() => handleButtonClick('social')}
            borderColor={selectedButton === 'social' ? '#FF5757' : '#D9D9D9'}
          >
            Social Media / Email
          </Button>
        </Stack>
        <Stack w={'full'}>
          {selectedButton === 'design' && <DesignComp />}
        </Stack>
        <Stack w={'full'}>
          {selectedButton === 'social' && <SocialComp />}
        </Stack>

        <Stack direction={'row'} align="center" mt={2} w={'full'}>
          {selectedButton === 'caption' && (
            <>
              <Input
                placeholder="Search And Replace"
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
                Generate Title
              </Button>
            </>
          )}
        </Stack>

        <Stack overflowY={'scroll'} maxH={'550px'}>
          {selectedButton === 'caption' &&
            dummyData.map(data => (
              <SceneCard
                key={data.id}
                title={data.title}
                sceneNumber={data.sceneNumber}
                time={data.time}
                buttonText={data.buttonText}
                additionalText={data.additionalText}
              />
            ))}
        </Stack>
      </VStack>
    </>
  );
};

export default Scenes;
