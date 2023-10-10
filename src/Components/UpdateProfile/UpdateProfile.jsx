import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Container,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import EditHeading from '../../Assests/images/EditProfileHeading.png';
import profilePic from '../../Assests/images/profile.png';
import { AiOutlineEyeInvisible, AiOutlineLock } from 'react-icons/ai';

const UpdateProfile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <Container
        minH={'100vh'}
        maxW={['100%', '70%']}
        paddingY={'8'}
        bg={'white'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Stack alignItems={'center'}>
          <Image src={EditHeading} />
        </Stack>
        <Stack
          alignItems={'center'}
          bg={'#F5F5F5'}
          p={[4, 12]}
          mt={[8, 16]}
          borderRadius={'20px'}
        >
          <VStack>
            <Avatar size="2xl" name="Segun Adebayo" src={profilePic} />
            <Button
              variant={'link'}
              color={'black'}
              textDecoration={'underline'}
            >
              Change Profile Image
            </Button>
          </VStack>
          <Stack mt={[4, 6]} direction={['column', 'row']} spacing={[6, 4]}>
            <Input
              placeholder="First Name"
              borderRadius="10px"
              size="lg"
              variant="filled"
              bg={'white'}
              focusBorderColor="#D9D9D9"
              p={8}
              w={['auto', '240px']}
            />
            <Input
              placeholder="Last Name"
              borderRadius="10px"
              size="lg"
              variant="filled"
              bg={'white'}
              focusBorderColor="#D9D9D9"
              p={8}
              w={['auto', '240px']}
            />
            <Input
              type="email"
              placeholder="test123@gmail.com"
              borderRadius="10px"
              size="lg"
              variant="filled"
              bg={'white'}
              focusBorderColor="#D9D9D9"
              p={8}
              w={['auto', '400px']}
            />
          </Stack>
          <Stack
            mt={[4, 6]}
            direction={['column', 'row']}
            spacing={[6, 4]}
            w={'full'}
          >
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password"
                borderRadius="10px"
                size="lg"
                p={8}
                variant="filled"
                focusBorderColor="#D9D9D9"
                bg={'white'}
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <InputRightElement width="4rem" mt={4}>
                <Button
                  h="2rem"
                  size="sm"
                  bg={'transparent'}
                  _hover={{ textDecoration: 'none' }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Show' : <AiOutlineEyeInvisible />}
                </Button>
              </InputRightElement>
            </InputGroup>{' '}
            <InputGroup>
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Enter Confirm Password"
                borderRadius="10px"
                size="lg"
                p={8}
                variant="filled"
                focusBorderColor="#D9D9D9"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                bg={'white'}
              />
              <InputRightElement width="4rem" mt={4}>
                <Button
                  h="2rem"
                  size="sm"
                  bg={'transparent'}
                  _hover={{ textDecoration: 'none' }}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? 'Show' : <AiOutlineEyeInvisible />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
          <Stack mt={[4, 8]} alignItems={['center', 'self-end']} w={'full'}>
            <Button
              bg={'#FF5757'}
              color={'white'}
              variant={'solid'}
              borderRadius={'full'}
              size={'lg'}
              _hover={{
                bg: '#E04141',
              }}
            >
              Update
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default UpdateProfile;
