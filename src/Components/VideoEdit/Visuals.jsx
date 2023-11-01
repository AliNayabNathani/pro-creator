import { Button, Input, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
// import { FaWandMagicSparkles } from 'react-icons/fa';

const Visuals = () => {
  return (
    <>
      <VStack w={'full'} alignItems={'flex-start'} mb={[10, 0]}>
        <Stack direction={'row'} spacing={2} mt={2} w={'full'}>
          <Button
            borderRadius={'full'}
            variant={'outline'}
            colorScheme={'red'}
            borderColor={'#FF5757'}
          >
            Library
          </Button>

          <Button
            borderRadius={'full'}
            variant={'outline'}
            colorScheme={'red'}
            borderColor={'#FF5757'}
          >
            Text
          </Button>

          <Button
            borderRadius={'full'}
            variant={'outline'}
            colorScheme={'red'}
            borderColor={'#FF5757'}
          >
            My Uploads
          </Button>
          <Button
            borderRadius={'full'}
            variant={'outline'}
            colorScheme={'red'}
            borderColor={'#FF5757'}
          >
            Recently
          </Button>
        </Stack>

        <Stack direction={'row'} align="center" mt={2} w={'full'}>
          <Input
            placeholder="Image,Videos,and Templates"
            size="md"
            variant="outline"
            p={6}
            borderRadius={'full'}
            borderColor="#898989"
            focusBorderColor="#898989"
          />

          <Button
            borderRadius={'full'}
            variant={'outline'}
            color={'black'}
            border={'1px solid black'}
            ml={2}
            size={'lg'}
          >
            Apply All
          </Button>
        </Stack>
      </VStack>
    </>
  );
};

export default Visuals;
