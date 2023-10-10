import React from 'react';
import VideoEditHeader from './VideoEditHeader';
import {
  Button,
  Container,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Switch,
} from '@chakra-ui/react';
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineScissor,
} from 'react-icons/ai';
import { BiFontSize } from 'react-icons/bi';
import ReactPlayer from 'react-player';
import video1 from '../../Assests/v1.mp4';
import { useState } from 'react';
import FloatingBar from './FloatingBar';
import Scenes from './Scenes';
import Visuals from './Visuals';
import AudioComp from './AudioComp';
import TextComp from './TextComp';
import ElementsComp from './ElementsComp';
import BrandingComp from './BrandingComp';
import posterVideoEdit from '../../Assests/images/videoPoster.png';
const VideoEdit = () => {
  const dummyButtonData = ['16:9', '9:16', '1:1'];
  const [selectedOrientation, setSelectedOrientation] = useState(null);
  const [maxLines, setMaxLines] = useState(1);
  const handleOrientationChange = orientation => {
    console.log(`Selected Orientation: ${orientation}`);
    setSelectedOrientation(orientation);
  };

  const handleIncrement = () => {
    setMaxLines(maxLines + 1);
  };

  const handleDecrement = () => {
    if (maxLines > 1) {
      setMaxLines(maxLines - 1);
    }
  };

  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleFloatingBarButtonClick = component => {
    setSelectedComponent(component);
  };
  return (
    <>
      <VideoEditHeader />
      <Container minH={'100vh'} maxW="100%" paddingY={'8'} bg={'#F5F5F5'}>
        <Stack direction={['column', 'row']}>
          <Stack w={['100%', '50%']} direction={['column', 'row']}>
            <FloatingBar onButtonClick={handleFloatingBarButtonClick} />
            {selectedComponent === 'Scenes' && <Scenes />}
            {selectedComponent === 'Visuals' && <Visuals />}
            {selectedComponent === 'Audio' && <AudioComp />}
            {selectedComponent === 'Text' && <TextComp />}
            {selectedComponent === 'Elements' && <ElementsComp />}
            {selectedComponent === 'Branding' && <BrandingComp />}
          </Stack>
          <Stack
            w={['100%', '50%']}
            direction={['column', 'column']}
            spacing={4}
            maxH={'550px'}
          >
            <ReactPlayer
              url={video1}
              width="100%"
              height="100%"
              controls={true}
              light={posterVideoEdit}
            />
            <Stack
              p={4}
              spacing={2}
              direction={'row'}
              justifyContent={'space-between'}
            >
              <IconButton
                icon={<AiOutlineScissor />}
                aria-label="Cut Video"
                borderRadius={'full'}
                bg={'#FF5757'}
                color={'white'}
              />
              <IconButton
                icon={<BiFontSize />}
                aria-label="Change Font Size"
                borderRadius={'full'}
              />
              <IconButton
                icon={<BiFontSize />}
                aria-label="Change Font Size"
                borderRadius={'full'}
              />
              <IconButton
                icon={<BiFontSize />}
                aria-label="Change Font Size"
                borderRadius={'full'}
              />
            </Stack>
            <Stack
              direction={['column', 'row']}
              spacing={4}
              align={['none', 'center']}
              justifyContent={'space-between'}
            >
              <Stack direction={'row'}>
                <FormLabel>Select Orientation</FormLabel>
                {dummyButtonData.map(orientation => (
                  <Button
                    key={orientation}
                    color={
                      selectedOrientation === orientation ? 'black' : '#898989'
                    }
                    bg={
                      selectedOrientation === orientation ? 'white' : '#FFFFFF'
                    }
                    borderColor={
                      selectedOrientation === orientation
                        ? '#FF5757'
                        : '#FFFFFF'
                    }
                    borderWidth="2px"
                    onClick={() => handleOrientationChange(orientation)}
                  >
                    {orientation}
                  </Button>
                ))}
              </Stack>
              <Stack direction={'row'}>
                <FormLabel>Max Lines</FormLabel>
                <InputGroup>
                  <InputLeftElement>
                    <IconButton
                      icon={<AiOutlineMinusCircle />}
                      aria-label="Decrement"
                      onClick={handleDecrement}
                      isDisabled={maxLines === 1}
                      bg={'transparent'}
                      variant={'outline'}
                      border={'1px solid black'}
                      size={'xs'}
                    />
                  </InputLeftElement>
                  <Input
                    type="number"
                    value={maxLines}
                    onChange={e => setMaxLines(Number(e.target.value))}
                    min={1}
                    max={999}
                    textAlign={'center'}
                    bg={'white'}
                  />
                  <InputRightElement>
                    <IconButton
                      icon={<AiOutlinePlusCircle />}
                      aria-label="Increment"
                      onClick={handleIncrement}
                      bg={'transparent'}
                      variant={'outline'}
                      border={'1px solid black'}
                      size={'xs'}
                    />
                  </InputRightElement>
                </InputGroup>
              </Stack>
            </Stack>

            <Stack
              direction="row"
              align={['left', 'center']}
              justifyContent={'space-between'}
            >
              <Stack direction={['column', 'row']} align={['left', 'center']}>
                <FormLabel>Subtitle</FormLabel>
                <Switch colorScheme="teal" />
              </Stack>

              <Stack direction={['column', 'row']} align={['left', 'center']}>
                <FormLabel>Remove Filter Words</FormLabel>
                <Switch colorScheme="teal" />
              </Stack>

              <Stack direction={['column', 'row']} align={['left', 'center']}>
                <FormLabel>Remove Silences</FormLabel>
                <Switch colorScheme="teal" />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default VideoEdit;
