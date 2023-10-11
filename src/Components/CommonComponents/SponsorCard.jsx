import React from 'react';
import partnership1 from '../../Assests/images/image 28.png';
import partnership2 from '../../Assests/images/image 29.png';
import partnership3 from '../../Assests/images/image 30.png';
import partnership4 from '../../Assests/images/image 31.png';
import partnership5 from '../../Assests/images/image 32.png';
import { Heading, Image, Stack } from '@chakra-ui/react';

const SponsorCard = () => {
  return (
    <>
      <Stack
        justifyContent={['center', 'space-between']}
        w={'100%'}
        // my={[4, 20]}
        p={20}
        bg={'#F7F7F8'}
        h={'100%'}
      >
        <Heading textAlign={['center', 'left']} mb={[4, 0]}>
          In Partnership With
        </Heading>
        <Stack
          direction={['column', 'row']}
          justifyContent={'space-between'}
          mt={[2, 4]}
          spacing={[8, 0]}
          alignItems={['center', 'flex-start']}
        >
          <Image src={partnership1} />
          <Image src={partnership2} />
          <Image src={partnership3} />
          <Image src={partnership4} />
          <Image src={partnership5} />
        </Stack>
      </Stack>
    </>
  );
};

export default SponsorCard;
