import React from 'react';
import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Image,
  Divider,
} from '@chakra-ui/react';
import footerLogo from '../../../Assests/images/footerLogo.png';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const monoFontFamily = `'Courier New',`;
  return (
    <Box
      bg={'#212529'}
      color={'white'}
      fontFamily={monoFontFamily}
      w={'full'}
      py={[8, 16]}
      px={[4, 20]}
      fontSize={[12, 16]}
    >
      <Stack
        direction={['column', 'row']}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Stack w={['100%', '50%']}>
          <Image src={footerLogo} h={['auto', '50px']} w={['auto', '383px']} />
        </Stack>
        <Stack w={['100%', '30%']} alignItems={'center'}>
          <Text opacity={'50%'} fontWeight={'light'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </Text>
        </Stack>
      </Stack>
      <Divider my={8} borderWidth={'1px'} />
      {/* <Container as={Stack} maxW={'6xl'} py={10}> */}
      <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={8}>
        <Stack align={'flex-start'}>
          <ListHeader>Product</ListHeader>
          <Box as="a" href={'#'} opacity={'50%'}>
            Features
          </Box>
          <Box as="a" href={'#'} opacity={'50%'}>
            Pricing
          </Box>
          <Box as="a" href={'/who'} opacity={'50%'}>
            Who Uses
          </Box>
          <Box as="a" href={'#'} opacity={'50%'}>
            Reviews
          </Box>
          <Box as="a" href={'#'} opacity={'50%'}>
            Updates
          </Box>
        </Stack>
        <Stack align={'flex-start'}>
          <ListHeader>Support</ListHeader>
          <Box as="a" href={'#'} opacity={'50%'}>
            Getting Started
          </Box>
          <Box as="a" href={'#'} opacity={'50%'}>
            Help Center
          </Box>
          <Box as="a" href={'#'} opacity={'50%'}>
            Server status
          </Box>
          <Box as="a" href={'#'} opacity={'50%'}>
            Report a bug
          </Box>
          <Box as="a" href={'#'} opacity={'50%'}>
            Chat Support
          </Box>
        </Stack>
        <Stack align={'flex-start'} mt={[8, 0]}>
          <ListHeader>Interested in a Demo?</ListHeader>
          <Box as="p" opacity={'50%'}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            mauris sed ma
          </Box>
        </Stack>
        <Stack align={'flex-start'} mt={[8, 0]}>
          <Box
            as="input"
            type="text"
            placeholder="Enter Your Email"
            borderRadius="md"
            p="3"
            w={'full'}
            border="1px solid white"
            focusBorderColor="white"
            bg={'transparent'}
          />
          <Box
            as="button"
            bg="#FF5757"
            color="white"
            padding="3"
            w={'full'}
            borderRadius="md"
            cursor="pointer"
            _hover={{ bg: '#E04141' }}
          >
            Subscribe
          </Box>
        </Stack>
      </SimpleGrid>
      {/* </Container> */}
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: 'gray.200',
            flexGrow: 1,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: 'gray.200',
            flexGrow: 1,
          }}
        ></Flex>
        <Text
          pt={6}
          fontSize={'md'}
          textAlign={'center'}
          color={'white'}
          opacity={'50%'}
        >
          Copyright © 2023 All Rights Reserved
        </Text>
      </Box>
    </Box>
  );
}
