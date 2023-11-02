import React, { useState } from 'react';
import {
  Box,
  Button,
  Text,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Container,
  Heading,
  Image,
  Divider,
} from '@chakra-ui/react';
import {
  AiOutlineArrowLeft,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';
import signUpImage from '../../../Assests/images/SignUpPage.png';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import SignUpLogo from '../../../Assests/images/SignUpLogo.png';

const SignUpForm1 = ({
  onNextClick,
  onInputChange,
  firstName,
  lastName,
  username,
  email,
  password,
}) => {
  console.log('username');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const handleSignup = () => {
    onNextClick();
  };
  return (
    <>
      <Stack w={['100%', '50%']} mb={[4, 0]}>
        <Image src={SignUpLogo} alignSelf={'center'} />
        <Stack spacing={4} mt={4}>
          <Stack direction="row" spacing={4}>
            <Input
              name="firstName"
              placeholder="First Name"
              borderRadius="10px"
              size="lg"
              variant="filled"
              value={firstName}
              onChange={onInputChange}
            />
            <Input
              name="lastName"
              placeholder="Last Name"
              borderRadius="10px"
              size="lg"
              variant="filled"
              value={lastName}
              onChange={onInputChange}
            />
          </Stack>

          <Input
            name="username"
            type="text"
            placeholder="Username"
            borderRadius="10px"
            size="lg"
            variant="filled"
            value={username}
            onChange={onInputChange}
          />

          <InputGroup>
            <InputLeftElement pointerEvents="none" mt={1} ml={2}>
              <AiOutlineMail color="gray.300" />
            </InputLeftElement>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              borderRadius="10px"
              size="lg"
              variant="filled"
              value={email}
              onChange={onInputChange}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none" mt={1} ml={2}>
              <AiOutlineLock color="gray.300" />
            </InputLeftElement>
            <Input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              borderRadius="10px"
              size="lg"
              variant="filled"
              value={password}
              onChange={onInputChange}
            />
            <InputRightElement width="3rem" mt={1} ml={2}>
              <Button
                h="1.5rem"
                size="sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            variant="solid"
            bg={'#FF5757'}
            color={'white'}
            borderRadius={'full'}
            size={'lg'}
            _hover={{
              bg: '#E04141',
            }}
            p={8}
            mt={4}
            onClick={handleSignup}
          >
            Sign Up
          </Button>
          <Divider marginTop={[4, '3.5rem']} />
          <Text textAlign="center" color="black">
            Already have an account?{' '}
            <Button
              color={'#FF5757'}
              variant={'link'}
              fontWeight="bold"
              _hover={{ color: '#E04141' }}
              onClick={() => setLoginModalOpen(true)}
            >
              Login
            </Button>
          </Text>
          <Login
            isOpen={isLoginModalOpen}
            onClose={() => setLoginModalOpen(false)}
          />
        </Stack>
      </Stack>
      <Stack w={['100%', '50%']}>
        <Image
          src={signUpImage}
          alt="Signup Illustration"
          h={'full'}
          w={'full'}
        />
      </Stack>
    </>
  );
};

export default SignUpForm1;
