import { Container, Image, Stack, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import PricingBox from './PricingBox';
import subHeading from '../../Assests/images/SubscriptionPlan.png';
import TopBar from './TopBar';

const Subscription = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  return (
    <>
      <Container minH={'100vh'} maxW="90%" paddingY={'8'} bg={'white'}>
        <Stack alignItems={'center'}>
          <Image src={subHeading} my={[4, 8]} />
        </Stack>
        <TopBar />
        <Stack paddingY={10} mt={8} position="relative" p={8}>
          <div
            style={{
              borderRadius: '20px',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              boxShadow:
                '0 0 10px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.1)',
              pointerEvents: 'none',
            }}
          />

          <PricingBox />
        </Stack>
      </Container>
    </>
  );
};

export default Subscription;
