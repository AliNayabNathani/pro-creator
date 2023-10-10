import { Container, Heading, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import NotFoundImg from '../../Assests/images/NotFound.png';
const NotFound = () => {
  return (
    <>
      <Container
        minH={'100vh'}
        maxW="90%"
        paddingY={'8'}
        bg={'white'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Stack alignItems={'center'}>
          <Heading fontWeight={'bold'} fontSize={['2xl', '6xl']} my={[4, 12]}>
            Page Not Found
          </Heading>
          <Image src={NotFoundImg} />
        </Stack>
      </Container>
    </>
  );
};

export default NotFound;
