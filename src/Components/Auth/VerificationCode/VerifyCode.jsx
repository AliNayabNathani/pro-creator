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
import { useParams } from 'react-router';
const formatTime = seconds => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
};

const VerifyCode = ({ email }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const params = useParams();
  
  useEffect(() => {
    const sendCode = async () => {
      try {
        const response = await axios.post(`${server}/user/otp_verf`, , {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
      } catch (error) {
        console.error('Error fetching goals:', error);
      }
    };

    sendCode();
  }, []);

  // const handleVerificationSubmit = () => {
  //   console.log('Verification code submitted:', verificationCode);
  // };

  // const handleResendCode = () => {
  //   console.log('Resending verification code...');
  //   setTimer(300);
  // };

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
            Verifying Your Email
          </Heading>
          <Text fontWeight={'semibold'} textAlign={'center'} color={'#D9D9D9'}>
            A Verification code has been sent to {email}
          </Text>
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
