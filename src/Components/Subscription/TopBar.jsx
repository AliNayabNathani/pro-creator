import {
  Box,
  Button,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  chakra,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import subscriptionHeader from '../../Assests/images/subscriptionHeader.png';

const TopBar = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  return (
    <Stack
      justifyContent={'space-between'}
      w={'full'}
      direction={['column', 'row']}
      bg={'#292D32'}
      borderRadius={'30px'}
      h={['auto', '100px']}
      alignItems={'center'}
      p={[2, 8]}
    >
      {isLargerThan768 && (
        <Box alignSelf={'flex-end'} position="relative" marginBottom="-12px">
          <Image src={subscriptionHeader} />

          <Box position="absolute" bottom="0" right="0" p="4" bg="transparent">
            <Text
              color={'white'}
              fontSize={'lg'}
              fontFamily={'Poppins, sans-serif'}
              textAlign={'left'}
              fontWeight={'light'}
            >
              Subscription Plan{' '}
              <chakra.span fontWeight="semibold" fontSize={'24px'}>
                Team Free Trail
              </chakra.span>
            </Text>
          </Box>
        </Box>
      )}

      <Stack
        textAlign={'center'}
        direction={['column', 'row']}
        w={'80%'}
        justifyContent={'space-between'}
        p={8}
        spacing={[10, 0]}
      >
        <VStack>
          <Text
            color={'white'}
            fontSize={'12px'}
            fontFamily={'Poppins, sans-serif'}
            fontWeight={'light'}
          >
            Status
          </Text>
          <Text
            color={'white'}
            fontSize={'16px'}
            fontFamily={'Poppins, sans-serif'}
            fontWeight={'medium'}
          >
            Active
          </Text>
        </VStack>
        <VStack>
          <Text
            color={'white'}
            fontSize={'12px'}
            fontFamily={'Poppins, sans-serif'}
            fontWeight={'light'}
          >
            Video Used
          </Text>
          <Text
            color={'white'}
            fontSize={'16px'}
            fontFamily={'Poppins, sans-serif'}
            fontWeight={'medium'}
          >
            0/3
          </Text>
        </VStack>
        <VStack>
          <Text
            color={'white'}
            fontSize={'12px'}
            fontFamily={'Poppins, sans-serif'}
            fontWeight={'light'}
          >
            Transcription Hr Used
          </Text>
          <Text
            color={'white'}
            fontSize={'16px'}
            fontFamily={'Poppins, sans-serif'}
            fontWeight={'medium'}
          >
            0 / 1
          </Text>
        </VStack>
        <VStack>
          <Text
            color={'white'}
            fontSize={'12px'}
            fontFamily={'Poppins, sans-serif'}
            fontWeight={'light'}
          >
            My Template Used
          </Text>
          <Text
            color={'white'}
            fontSize={'16px'}
            fontFamily={'Poppins, sans-serif'}
            fontWeight={'medium'}
          >
            0 / 1
          </Text>
        </VStack>
        <VStack>
          <Text
            color={'white'}
            fontSize={'12px'}
            fontFamily={'Poppins, sans-serif'}
            fontWeight={'light'}
          >
            Team Member Used
          </Text>
          <Text
            color={'white'}
            fontSize={'16px'}
            fontFamily={'Poppins, sans-serif'}
            fontWeight={'medium'}
          >
            1 / 20
          </Text>
        </VStack>
      </Stack>
    </Stack>
  );
};

export default TopBar;
