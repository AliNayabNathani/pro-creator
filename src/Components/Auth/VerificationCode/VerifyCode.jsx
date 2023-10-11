import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Text,
  Stack,
  Input,
  Container,
  Heading,
} from '@chakra-ui/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import authBg from '../../../Assests/images/authBg.png';
const formatTime = seconds => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
};

const VerifyCode = ({ email }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [timer, setTimer] = useState(300);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleVerificationSubmit = () => {
    console.log('Verification code submitted:', verificationCode);
  };

  const handleResendCode = () => {
    console.log('Resending verification code...');
    setTimer(300);
  };

  return (
    <Container
      minH={'100vh'}
      maxW="100%"
      paddingY={'8'}
      bg={'#FF5757'}
      bgImg={authBg}
    >
      <Box
        bg="white"
        p={8}
        w={['auto', 'md']}
        marginInline={'auto'}
        borderRadius={'20px'}
      >
        <Stack direction="row" align="center" spacing={2} mb={4}>
          <Button
            variant="ghost"
            leftIcon={<AiOutlineArrowLeft />}
            onClick={() => window.history.back()}
          ></Button>
        </Stack>
        <Stack p={8}>
          <Heading fontSize={'xl'} textAlign={'center'}>
            Verification Your Email
          </Heading>
          <Text fontWeight={'semibold'} textAlign={'center'} color={'#D9D9D9'}>
            A Verification code has been sent to {email}
          </Text>
        </Stack>
        <Stack direction="row" spacing={2} mb={4}>
          {Array.from({ length: 5 }, (_, index) => (
            <Input
              key={index}
              value={verificationCode[index] || ''}
              onChange={e => {
                const updatedCode = [...verificationCode];
                updatedCode[index] = e.target.value;
                setVerificationCode(updatedCode);
              }}
              maxLength={1}
              textAlign="center"
              fontSize="2xl"
              fontWeight="bold"
              borderColor="#D9D9D9"
              borderBottom="2px solid #D9D9D9"
              color="black"
              bg="transparent"
              focusBorderColor="#D9D9D9"
            />
          ))}
        </Stack>
        <Text textAlign="center" fontWeight="bold" fontSize="lg">
          {formatTime(timer)}
        </Text>
        <Stack alignItems="center" mb={6}>
          <Button
            variant="solid"
            mt={6}
            bg={'#FF5757'}
            color={'white'}
            borderRadius={'full'}
            _hover={{
              bg: '#E04141',
            }}
            onClick={handleVerificationSubmit}
            isDisabled={verificationCode.length !== 5}
          >
            Verify
          </Button>
        </Stack>
        <Stack direction="column" justify="space-between" alignItems="center">
          <Text fontSize="sm">Didn't Receive Code?</Text>
          <Button
            fontSize="sm"
            variant="outline"
            border={'1px solid #FF5757'}
            borderRadius={'full'}
            color={'#FF5757'}
            onClick={handleResendCode}
          >
            Resend Code
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default VerifyCode;
