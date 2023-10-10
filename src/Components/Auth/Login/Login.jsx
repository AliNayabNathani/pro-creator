import React, { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineGoogle,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router';

const Login = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log('Logging in...');
  };

  const handleLoginWithGoogle = () => {
    console.log('Logging in with Google...');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backdropFilter: 'blur(8px)',
            zIndex: 999,
          }}
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={'center'} p={10}>
            Welcome Back! <br />
            {/* {email && <Text fontSize="sm">{email}</Text>} */}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AiOutlineMail color="gray.300" />
                </InputLeftElement>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  focusBorderColor="black"
                />
              </InputGroup>
            </FormControl>
            <FormControl mb={4}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AiOutlineLock color="gray.300" />
                </InputLeftElement>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  focusBorderColor="black"
                />
                <InputRightElement width="3rem">
                  <Button
                    h="1.5rem"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack
              direction="row"
              justify="space-between"
              alignItems={'center'}
            >
              <Link fontSize="sm" color="#898989">
                Forgot Password?
              </Link>

              <Button
                variant={'solid'}
                bg={'#FF5757'}
                color={'white'}
                borderRadius={'full'}
                _hover={{
                  bg: '#E04141',
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Stack>
            <Divider my={4} />
            <Button
              onClick={handleLoginWithGoogle}
              leftIcon={<AiOutlineGoogle />}
              colorScheme="red"
              variant="outline"
              w="full"
            >
              Login with Google
            </Button>
          </ModalBody>
          <ModalFooter bg={'#FF5757'} mt={4}>
            <Box textAlign="center" w="full">
              <Button
                variant="link"
                fontSize="md"
                onClick={handleSignUpClick}
                color={'white'}
              >
                Create Account
                <Box display="inline" marginLeft="2">
                  <AiOutlineArrowRight />
                </Box>
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </AnimatePresence>
  );
};

export default Login;
