import {
  Container,
  Heading,
  Stack,
  Text,
  InputRightElement,
  InputLeftElement,
  InputGroup,
  Box,
  Button,
  Input,
  Divider,
  Textarea,
  Flex,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import {
  AiOutlineArrowRight,
  AiOutlineLink,
  AiOutlineUpload,
} from 'react-icons/ai';
const UploadVideo = () => {
  const [videoLink, setVideoLink] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const isVideoPresent = videoLink.trim() !== '' || selectedFile;

  const handleVideoLinkChange = event => {
    setVideoLink(event.target.value);
  };

  const handleFileChange = event => {
    const file = event.target.files[0];
    console.log(file);
    setSelectedFile(file);
    setVideoLink(file.name);
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <Container minH={'100vh'} maxW="90%" paddingY={'8'} bg={'white'}>
        <Stack>
          <Heading textAlign={['center', 'center']}>Upload Video</Heading>
        </Stack>
        <Box
          maxW={'xl'}
          marginInline={'auto'}
          mt={[4, 8]}
          borderRadius={'20px'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <InputGroup alignItems={'center'} marginInline={'auto'}>
            <InputLeftElement
              ml={-2}
              mt={2}
              pointerEvents="none"
              color={'white'}
              children={<AiOutlineLink />}
            />
            <Input
              type="text"
              placeholder="Paste Youtube link"
              bg="#292D32"
              color="white"
              borderRadius="md"
              p={6}
              ml={8}
              value={videoLink}
              onChange={handleVideoLinkChange}
              marginInline={'auto'}
            />
            <InputRightElement width={['8rem', '8rem']}>
              <Button
                mt={2.5}
                mr={[0, 2]}
                bgGradient="linear(to-r, #8E2485, #F16F23)"
                _hover={{
                  bgGradient: 'linear(to-r, #8E2485, #F16F23)',
                }}
                leftIcon={<AiOutlineUpload />}
                color={'white'}
                size={['xs', 'md']}
                onClick={handleUploadButtonClick}
              >
                Upload File
                <input
                  ref={fileInputRef}
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                  accept="video/*"
                />
              </Button>
            </InputRightElement>
          </InputGroup>
          <Divider my={6} />

          <Textarea
            placeholder="Enter Script or Article"
            color="black"
            borderRadius="md"
            p={4}
            size="lg"
            focusBorderColor="#D9D9D9"
          />
          <Flex justifyContent="flex-end">
            <Button
              mt={4}
              bgGradient="linear(to-r, #8E2485, #F16F23)"
              _hover={{
                bgGradient: 'linear(to-r, #8E2485, #F16F23)',
              }}
              rightIcon={<AiOutlineArrowRight />}
              color={'white'}
              isDisabled={!isVideoPresent}
              bg={!isVideoPresent ? '#898989' : undefined}
            >
              Next
            </Button>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default UploadVideo;
