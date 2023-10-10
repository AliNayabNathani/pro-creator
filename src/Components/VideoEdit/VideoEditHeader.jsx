import { Stack, Flex, Input, IconButton, Button } from '@chakra-ui/react';
import { FaUndo, FaRedo } from 'react-icons/fa';
import React from 'react';
import { useState } from 'react';

const VideoEditHeader = () => {
  const [projectName, setProjectName] = useState('');

  const handleProjectNameChange = e => {
    setProjectName(e.target.value);
  };
  return (
    <Flex
      width="100%"
      h={'70px'}
      bg="black"
      paddingX={4}
      paddingY={2}
      align="center"
      justify="space-between"
    >
      <Stack direction="row" spacing={4} align="center">
        <Input
          variant="unstyled"
          placeholder="Enter Project Name"
          color="white"
          _placeholder={{ color: 'white', opacity: '40%' }}
          value={projectName}
          onChange={handleProjectNameChange}
        />
      </Stack>

      <Stack direction="row" spacing={[0, 4]} align="center">
        <IconButton
          icon={<FaUndo />}
          aria-label="Undo"
          color="white"
          fontSize={['10px', '20px']}
          bg={'transparent'}
          _hover={{ textDecoration: 'none' }}
        />
        <IconButton
          icon={<FaRedo />}
          aria-label="Redo"
          color="white"
          fontSize={['10px', '20px']}
          bg={'transparent'}
          _hover={{ textDecoration: 'none' }}
        />
      </Stack>

      <Stack direction={['column', 'row']} spacing={[2, 4]} align="center">
        <Button
          borderRadius="full"
          variant="outline"
          colorScheme="whiteAlpha"
          size={['xs', 'lg']}
        >
          Customize Video
        </Button>
        <Button
          borderRadius="full"
          variant="outline"
          colorScheme="whiteAlpha"
          size={['xs', 'lg']}
        >
          Download Video
        </Button>
      </Stack>
    </Flex>
  );
};

export default VideoEditHeader;
