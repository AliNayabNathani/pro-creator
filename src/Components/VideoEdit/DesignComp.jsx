import {
  Button,
  Divider,
  FormLabel,
  HStack,
  Heading,
  Icon,
  IconButton,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Switch,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineInfoCircle, AiOutlineUpload } from 'react-icons/ai';
import { FiBold, FiItalic, FiUnderline } from 'react-icons/fi';
import { ChromePicker } from 'react-color';
import { useState } from 'react';
const DesignComp = () => {
  const [fontColor, setFontColor] = useState('#000000');
  const [fontStrokeColor, setFontStrokeColor] = useState('#000000');
  const [fontShadowColor, setFontShadowColor] = useState('#000000');
  const [aiKeywordColor, setAiKeywordColor] = useState('#000000');
  const [aiKeywordColor2, setAiKeywordColor2] = useState('#000000');

  const [showFontColorPicker, setShowFontColorPicker] = useState(false);
  const [showFontStrokeColorPicker, setShowFontStrokeColorPicker] =
    useState(false);
  const [showFontShadowColorPicker, setShowFontShadowColorPicker] =
    useState(false);
  const [showAiKeywordColorPicker, setShowAiKeywordColorPicker] =
    useState(false);
  const [showAiKeywordColorPicker2, setShowAiKeywordColorPicker2] =
    useState(false);

  const [xSize, setXsize] = useState(30);
  const [ySize, setYsize] = useState(30);
  const [zSize, setZsize] = useState(30);

  const handleFontColorChange = color => {
    setFontColor(color.hex);
  };

  const handleFontStrokeColorChange = color => {
    setFontStrokeColor(color.hex);
  };

  const handleFontShadowColorChange = color => {
    setFontShadowColor(color.hex);
  };

  const handleAiKeywordColorChange = color => {
    setAiKeywordColor(color.hex);
  };

  const handleAiKeywordColorChange2 = color => {
    setAiKeywordColor2(color.hex);
  };

  const toggleFontColorPicker = () => {
    setShowFontColorPicker(!showFontColorPicker);
  };

  const toggleFontStrokeColorPicker = () => {
    setShowFontStrokeColorPicker(!showFontStrokeColorPicker);
  };

  const toggleFontShadowColorPicker = () => {
    setShowFontShadowColorPicker(!showFontShadowColorPicker);
  };

  const toggleAiKeywordColorPicker = () => {
    setShowAiKeywordColorPicker(!showAiKeywordColorPicker);
  };

  const toggleAiKeywordColorPicker2 = () => {
    setShowAiKeywordColorPicker2(!showAiKeywordColorPicker2);
  };

  const handleXchange = value => {
    setXsize(value);
  };
  const handleYchange = value => {
    setYsize(value);
  };
  const handleZchange = value => {
    setZsize(value);
  };
  return (
    <>
      <Stack
        w={'full'}
        bg={'white'}
        p={4}
        borderRadius={'md'}
        direction={['column', 'row']}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <HStack alignItems={'center'}>
          <FormLabel fontSize={'lg'}>Auto Caption</FormLabel>
          <Switch colorScheme="teal" size={'lg'} />
        </HStack>
        <HStack>
          <Button variant={'outline'} borderRadius={'full'} size={['sm', 'lg']}>
            Three Lines Per Page
          </Button>
          <Button variant={'outline'} borderRadius={'full'} size={['sm', 'lg']}>
            One Line
          </Button>
        </HStack>
      </Stack>
      <Stack
        w={'full'}
        bg={'white'}
        p={4}
        borderRadius={'md'}
        direction={['column', 'row']}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <FormLabel fontSize={'lg'}>Caption Position</FormLabel>
        <HStack>
          <Button variant={'outline'} borderRadius={'full'} size={['sm', 'lg']}>
            Auto
          </Button>
          <Button variant={'outline'} borderRadius={'full'} size={['sm', 'lg']}>
            Top
          </Button>
          <Button variant={'outline'} borderRadius={'full'} size={['sm', 'lg']}>
            Middle
          </Button>
          <Button variant={'outline'} borderRadius={'full'} size={['sm', 'lg']}>
            Bottom
          </Button>
        </HStack>
      </Stack>
      <Stack
        w={'full'}
        bg={'white'}
        p={4}
        borderRadius={'md'}
        justifyContent={'space-between'}
      >
        <Heading fontSize={'lg'} fontWeight={'semibold'}>
          Screen overlay (logo, CTA, etc.)
        </Heading>
        <Text color={'#898989'}>
          For best results, use high-res PNG with transparent background.
        </Text>
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
      <Stack
        w={'full'}
        bg={'white'}
        p={[4, 8]}
        borderRadius={'md'}
        justifyContent={'space-between'}
      >
        <Text fontWeight={'bold'} color={'#898989'} mb={[2, 4]}>
          Font
        </Text>
        <Stack direction={['column', 'row']} alignItems={'center'}>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Stack>
        <Stack direction={['column', 'row']}>
          <Stack
            direction={['column', 'row']}
            w={['100%', '50%']}
            mt={4}
            alignItems={'center'}
          >
            <IconButton icon={<FiBold />} size={['sm', 'lg']} />
            <IconButton icon={<FiItalic />} size={['sm', 'lg']} />
            <IconButton icon={<FiUnderline />} size={['sm', 'lg']} />
          </Stack>
          <Stack
            direction={['column', 'row']}
            w={['100%', '50%']}
            mt={4}
            alignItems={'center'}
          >
            <FormLabel fontSize={'lg'}>Text Uppercase</FormLabel>
            <Switch colorScheme="teal" size={'lg'} />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        w={'full'}
        bg={'white'}
        p={[4, 8]}
        borderRadius={'md'}
        justifyContent={'space-between'}
      >
        <Stack
          direction={['column', 'row']}
          justifyContent={['center', 'space-between']}
        >
          <Text fontWeight={'semibold'} fontSize={'16px'}>
            Font Color
          </Text>
          <HStack>
            <Input value={fontColor} readOnly size="md" mx={2} w={'100px'} />
            <Popover
              isOpen={showFontColorPicker}
              onClose={() => setShowFontColorPicker(false)}
            >
              <PopoverTrigger>
                <Button
                  borderRadius="full"
                  w="36px"
                  h="36px"
                  bg={fontColor}
                  onClick={toggleFontColorPicker}
                  _hover={{ textDecoration: 'none' }}
                />
              </PopoverTrigger>
              <PopoverContent p={4}>
                <ChromePicker
                  color={fontColor}
                  onChange={handleFontColorChange}
                />
              </PopoverContent>
            </Popover>
          </HStack>
        </Stack>
        <Stack
          direction={['column', 'row']}
          justifyContent={['center', 'space-between']}
          my={[6, 0]}
        >
          <HStack>
            <Text fontWeight={'semibold'} fontSize={'16px'}>
              Font Stroke
            </Text>
            <Switch mx={2} colorScheme="teal" size={['md', 'lg']} />
          </HStack>
          <HStack>
            <Input
              value={fontStrokeColor}
              readOnly
              size="md"
              mx={2}
              w={'100px'}
            />
            <Popover
              isOpen={showFontStrokeColorPicker}
              onClose={() => setShowFontStrokeColorPicker(false)}
            >
              <PopoverTrigger>
                <Button
                  borderRadius="full"
                  w="36px"
                  h="36px"
                  bg={fontStrokeColor}
                  onClick={toggleFontStrokeColorPicker}
                  _hover={{ textDecoration: 'none' }}
                />
              </PopoverTrigger>
              <PopoverContent p={4}>
                <ChromePicker
                  color={fontStrokeColor}
                  onChange={handleFontStrokeColorChange}
                />
              </PopoverContent>
            </Popover>
          </HStack>
        </Stack>
        <Stack
          direction={['column', 'row']}
          justifyContent={['center', 'space-between']}
        >
          <HStack>
            <Text fontWeight={'semibold'} fontSize={'16px'}>
              Font Shadow
            </Text>
            <Switch mx={2} colorScheme="teal" size={['md', 'lg']} />
          </HStack>
          <HStack>
            <Input
              value={fontShadowColor}
              readOnly
              size="md"
              mx={2}
              w={'100px'}
            />
            <Popover
              isOpen={showFontShadowColorPicker}
              onClose={() => setShowFontShadowColorPicker(false)}
            >
              <PopoverTrigger>
                <Button
                  borderRadius="full"
                  w="36px"
                  h="36px"
                  bg={fontShadowColor}
                  onClick={toggleFontShadowColorPicker}
                  _hover={{ textDecoration: 'none' }}
                />
              </PopoverTrigger>
              <PopoverContent p={4}>
                <ChromePicker
                  color={fontShadowColor}
                  onChange={handleFontShadowColorChange}
                />
              </PopoverContent>
            </Popover>
          </HStack>
        </Stack>
        <Stack
          direction={['column', 'column']}
          justifyContent={['center', 'space-between']}
        >
          <HStack width={'25%'} mt={4}>
            <FormLabel>X</FormLabel>
            <Slider
              aria-label="slider-ex-1"
              colorScheme="red"
              defaultValue={xSize}
              min={1}
              max={100}
              onChange={handleXchange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip label={`${xSize}`} fontSize="sm">
                <SliderThumb />
              </Tooltip>
            </Slider>
          </HStack>
          <HStack width={'25%'} mt={4}>
            <FormLabel>Y</FormLabel>
            <Slider
              aria-label="slider-ex-2"
              colorScheme="red"
              defaultValue={ySize}
              min={1}
              max={100}
              onChange={handleYchange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip label={`${ySize}`} fontSize="sm">
                <SliderThumb />
              </Tooltip>
            </Slider>
          </HStack>
          <HStack width={'25%'} mt={4}>
            <FormLabel>Z</FormLabel>
            <Slider
              aria-label="slider-ex-3"
              colorScheme="red"
              defaultValue={zSize}
              min={1}
              max={100}
              onChange={handleZchange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip label={`${zSize}`} fontSize="sm">
                <SliderThumb />
              </Tooltip>
            </Slider>
          </HStack>
        </Stack>
        <Divider my={2} borderWidth="1px" />
        <Stack
          direction={['column', 'row']}
          justifyContent={['center', 'space-between']}
          my={[6, 0]}
        >
          <HStack alignItems={'flex-start'}>
            <Text fontWeight={'semibold'} fontSize={'16px'}>
              Ai Keyword Highlighter
            </Text>
            <Switch mx={2} colorScheme="teal" size={['md', 'lg']} />
          </HStack>
          <VStack>
            <HStack>
              <Input
                value={aiKeywordColor}
                readOnly
                size="md"
                mx={2}
                w={'100px'}
              />
              <Popover
                isOpen={showAiKeywordColorPicker}
                onClose={() => setShowAiKeywordColorPicker(false)}
              >
                <PopoverTrigger>
                  <Button
                    borderRadius="full"
                    w="36px"
                    h="36px"
                    bg={aiKeywordColor}
                    onClick={toggleAiKeywordColorPicker}
                    _hover={{ textDecoration: 'none' }}
                  />
                </PopoverTrigger>
                <PopoverContent p={4}>
                  <ChromePicker
                    color={aiKeywordColor}
                    onChange={handleAiKeywordColorChange}
                  />
                </PopoverContent>
              </Popover>
            </HStack>
            <HStack>
              <Input
                value={aiKeywordColor2}
                readOnly
                size="md"
                mx={2}
                w={'100px'}
              />
              <Popover
                isOpen={showAiKeywordColorPicker2}
                onClose={() => setShowAiKeywordColorPicker2(false)}
              >
                <PopoverTrigger>
                  <Button
                    borderRadius="100%"
                    w="36px"
                    h="36px"
                    bg={aiKeywordColor2}
                    onClick={toggleAiKeywordColorPicker2}
                    _hover={{ textDecoration: 'none' }}
                  />
                </PopoverTrigger>
                <PopoverContent p={4}>
                  <ChromePicker
                    color={aiKeywordColor2}
                    onChange={handleAiKeywordColorChange2}
                  />
                </PopoverContent>
              </Popover>
            </HStack>
          </VStack>
        </Stack>
      </Stack>
      <Stack
        w={'full'}
        bg={'white'}
        p={[4, 8]}
        borderRadius={'md'}
        justifyContent={'space-between'}
      >
        <Heading fontSize={'lg'} fontWeight={'semibold'}>
          Layout settings
        </Heading>
        <Text color={'#898989'} fontSize={'14px'}>
          Select the layouts you want to include, we will apply them if
          applicable. Click "Save & Compile" to view the layout updates. Split
          mode will only work when both speakers appear together in the original
          video frame.
        </Text>
      </Stack>
      <Stack
        w={'full'}
        bg={'white'}
        p={[4, 8]}
        borderRadius={'md'}
        direction={'row'}
        justifyContent={'space-between'}
      >
        <HStack alignItems={'center'}>
          <FormLabel fontSize={['md', 'md']}>Auto intro caption</FormLabel>
          <Tooltip hasArrow label="Search places" bg="gray.300" color="black">
            <Icon as={AiOutlineInfoCircle} />
          </Tooltip>
          <Switch colorScheme="teal" size={['md', 'md']} />
        </HStack>
        <HStack alignItems={'center'}>
          <FormLabel fontSize={['md', 'md']}>Auto emojis</FormLabel>
          <Tooltip hasArrow label="Search places" bg="gray.300" color="black">
            <Icon as={AiOutlineInfoCircle} />
          </Tooltip>
          <Switch colorScheme="teal" size={['md', 'md']} />
        </HStack>
      </Stack>
    </>
  );
};

export default DesignComp;
