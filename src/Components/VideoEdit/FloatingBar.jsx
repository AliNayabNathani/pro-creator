import {
  Box,
  VStack,
  Text,
  IconButton,
  useBreakpointValue,
  SimpleGrid,
  HStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  FiAlignCenter,
  BsCardImage,
  AiFillAudio,
  BiText,
  BiShapeSquare,
  BiCoinStack,
} from 'react-icons/all';

const FloatingBar = ({ onButtonClick }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [activeButton, setActiveButton] = useState(null);

  const buttonData = [
    { icon: <FiAlignCenter />, label: 'Scenes' },
    { icon: <BsCardImage />, label: 'Visuals' },
    { icon: <AiFillAudio />, label: 'Audio' },
    { icon: <BiText />, label: 'Text' },
    { icon: <BiShapeSquare />, label: 'Elements' },
    { icon: <BiCoinStack />, label: 'Branding' },
  ];

  const handleButtonClick = index => {
    setActiveButton(index);
    onButtonClick && onButtonClick(buttonData[index].label);
  };

  return (
    <Box
      w={isMobile ? '100%' : '90px'}
      h={isMobile ? 'auto' : '501px'}
      bg={'black'}
      borderRadius={isMobile ? '0' : '20px'}
      display="flex"
      flexDirection={isMobile ? 'row' : 'column'}
      justifyContent={isMobile ? 'space-around' : 'flex-start'}
      align="center"
      padding={isMobile ? '8px' : 4}
    >
      {isMobile ? (
        <SimpleGrid columns={3} spacing={4}>
          {buttonData.map((item, index) => (
            <VStack
              key={index}
              spacing={1}
              align="center"
              onClick={() => handleButtonClick(index)}
              cursor="pointer"
            >
              <IconButton
                icon={item.icon}
                aria-label={item.label}
                color={activeButton === index ? 'white' : 'white'}
                opacity={activeButton === index ? 1 : 0.3}
                bg={'transparent'}
              />
              <Text color="white" opacity={activeButton === index ? 1 : 0.3}>
                {item.label}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      ) : (
        <VStack spacing={4} align="center">
          {buttonData.map((item, index) => (
            <VStack
              key={index}
              spacing={0}
              align="center"
              onClick={() => handleButtonClick(index)}
              cursor="pointer"
            >
              <IconButton
                icon={item.icon}
                aria-label={item.label}
                bg={'transparent'}
                color={activeButton === index ? 'white' : 'white'}
                opacity={activeButton === index ? 1 : 0.3}
              />
              <Text color="white" opacity={activeButton === index ? 1 : 0.3}>
                {item.label}
              </Text>
            </VStack>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default FloatingBar;
