import React, { useState } from 'react';
import { Button, HStack, Heading, Stack } from '@chakra-ui/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const organizationSizeOptions = [
  'Content Creator',
  'Teacher, Instructor, Coach',
  'Marketer',
  'Sales Professional',
  'Other',
];

const SignupForm4 = ({ onBackClick, onNextClick, currentStep, totalSteps }) => {
  const [selectedOrganizationSize, setSelectedOrganizationSize] =
    useState(null);

  const handleOrganizationSizeSelection = size => {
    console.log('Selected Organization Size:', size);
    setSelectedOrganizationSize(size);
  };

  return (
    <>
      <Stack direction="row" align="center" spacing={2} mb={4}>
        <Button
          variant="ghost"
          leftIcon={<AiOutlineArrowLeft />}
          onClick={onBackClick}
        ></Button>
      </Stack>
      <Stack spacing={4} align="center" mb={4}>
        <Heading fontSize="xl" textAlign="center">
          How Would you describe yourself professionally?
        </Heading>
        <Stack direction="row" flexWrap="wrap" spacing={4}>
          {organizationSizeOptions.map((size, index) => (
            <Button
              key={index}
              onClick={() => handleOrganizationSizeSelection(size)}
              size="lg"
              variant="outline"
              borderRadius="10px"
              borderWidth={1}
              borderColor={
                selectedOrganizationSize === size ? '#FF5757' : '#D9D9D9'
              }
              color={'#898989'}
            >
              {size}
            </Button>
          ))}
        </Stack>
      </Stack>
      <Stack
        direction={['column', 'row']}
        justify="space-between"
        alignItems={'center'}
        mt={[8, 20]}
      >
        <HStack marginInline={['auto', 'unset']}>
          <BsArrowLeft />
          <span style={{ alignSelf: 'center' }}>{` ${currentStep}`}</span>
          <BsArrowRight />
        </HStack>
        <Button
          variant={'solid'}
          bg={'#FF5757'}
          _hover={{
            bg: '#E04141',
          }}
          color={'white'}
          borderRadius={'full'}
          size={'lg'}
          onClick={onNextClick}
        >
          Submit
        </Button>
      </Stack>
    </>
  );
};

export default SignupForm4;
