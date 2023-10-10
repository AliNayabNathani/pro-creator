import { VStack, HStack, Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const LogoPositionSelector = () => {
  const [selectedPosition, setSelectedPosition] = useState('center');

  const positions = [
    'top-left',
    'top-center',
    'top-right',
    'middle-left',
    'center',
    'middle-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ];

  const handlePositionClick = position => {
    setSelectedPosition(position);
  };

  return (
    <VStack align="center">
      <VStack spacing={2}>
        <HStack>
          {positions.slice(0, 3).map(position => (
            <Box
              key={position}
              boxSize="30px"
              bg={selectedPosition === position ? '#FF5757' : '#D9D9D9'}
              borderRadius="md"
              cursor="pointer"
              onClick={() => handlePositionClick(position)}
              _hover={{ bg: '#FF5757' }}
            ></Box>
          ))}
        </HStack>

        <HStack>
          {positions.slice(3, 6).map(position => (
            <Box
              key={position}
              boxSize="30px"
              bg={selectedPosition === position ? '#FF5757' : '#D9D9D9'}
              borderRadius="md"
              cursor="pointer"
              onClick={() => handlePositionClick(position)}
              _hover={{ bg: '#FF5757' }}
            ></Box>
          ))}
        </HStack>

        <HStack>
          {positions.slice(6).map(position => (
            <Box
              key={position}
              boxSize="30px"
              bg={selectedPosition === position ? '#FF5757' : '#D9D9D9'}
              borderRadius="md"
              cursor="pointer"
              onClick={() => handlePositionClick(position)}
              _hover={{ bg: '#FF5757' }}
            >
              {/* You can customize the content of the small boxes here */}
            </Box>
          ))}
        </HStack>
      </VStack>
    </VStack>
  );
};

export default LogoPositionSelector;
