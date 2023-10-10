import {
  Button,
  FormLabel,
  HStack,
  Icon,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineUpload } from 'react-icons/ai';
import LogoPositionSelector from './Card/PositionSelector';

const BrandingComp = () => {
  const [selectedButton, setSelectedButton] = useState('intro');

  const handleButtonClick = button => {
    setSelectedButton(button);
  };

  const [logoSize, setLogoSize] = useState(30);
  const [logoOpacity, setLogoOpacity] = useState(0.5);

  const handleLogoSizeChange = value => {
    setLogoSize(value);
  };

  const handleLogoOpacityChange = value => {
    setLogoOpacity(value);
  };

  return (
    <VStack w={'full'} alignItems={'flex-start'} mb={[10, 0]}>
      <Stack direction={'row'} spacing={2} mt={2} w={'full'}>
        <Button
          borderRadius={'full'}
          variant={'outline'}
          size={['sm', 'lg']}
          onClick={() => handleButtonClick('intro')}
          borderColor={selectedButton === 'intro' ? '#FF5757' : '#D9D9D9'}
          bg={selectedButton === 'intro' ? '#FF5757' : 'white'}
        >
          Intro
        </Button>

        <Button
          borderRadius={'full'}
          variant={'outline'}
          size={['sm', 'lg']}
          onClick={() => handleButtonClick('scenes')}
          borderColor={selectedButton === 'scenes' ? '#FF5757' : '#D9D9D9'}
          bg={selectedButton === 'scenes' ? '#FF5757' : 'white'}
        >
          Scenes
        </Button>

        <Button
          borderRadius={'full'}
          variant={'outline'}
          size={['sm', 'lg']}
          onClick={() => handleButtonClick('outro')}
          borderColor={selectedButton === 'outro' ? '#FF5757' : '#D9D9D9'}
          bg={selectedButton === 'outro' ? '#FF5757' : 'white'}
        >
          Outro
        </Button>
      </Stack>
      <Stack p={6} w={'full'} bg={'white'} borderRadius={'20px'}>
        <Stack>
          <Text color={'#898989'}>Intro Visuals</Text>
          <HStack w={'full'}>
            <Button
              p={8}
              leftIcon={<AiOutlineUpload />}
              borderRadius={'md'}
              w={'full'}
              border={'1px solid #898989'}
              bg={'white'}
            >
              Upload Video Clips or Image
            </Button>
          </HStack>
        </Stack>
        <Stack mt={4}>
          <Text color={'#898989'}>Intro Visuals</Text>
          <HStack w={'full'}>
            <Button
              p={8}
              leftIcon={<AiOutlineUpload />}
              borderRadius={'md'}
              w={'full'}
              border={'1px solid #898989'}
              bg={'white'}
            >
              Upload Logo
            </Button>
          </HStack>
        </Stack>
        <Stack direction={'row'}>
          <VStack w={'50%'} spacing={8} mt={[6, 10]}>
            <Slider
              aria-label="slider-ex-1"
              colorScheme="red"
              defaultValue={logoSize}
              min={1}
              max={100}
              onChange={handleLogoSizeChange}
            >
              <FormLabel mb={[8, 10]}>Logo Size</FormLabel>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip label={`Size: ${logoSize}px`} fontSize="sm">
                <SliderThumb />
              </Tooltip>
            </Slider>

            <Slider
              aria-label="slider-ex-2"
              colorScheme="red"
              defaultValue={logoOpacity}
              min={0}
              max={1}
              step={0.01}
              onChange={handleLogoOpacityChange}
            >
              <FormLabel mb={[8, 10]}>Logo Opacity</FormLabel>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                label={`Opacity: ${logoOpacity.toFixed(2)}`}
                fontSize="sm"
              >
                <SliderThumb />
              </Tooltip>
            </Slider>
          </VStack>
          <VStack w={'50%'} spacing={8} mt={[6, 10]}>
            <LogoPositionSelector />
          </VStack>
        </Stack>
      </Stack>
    </VStack>
  );
};

export default BrandingComp;
