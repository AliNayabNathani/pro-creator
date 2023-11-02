import React, { useEffect, useState } from 'react';
import { Button, HStack, Heading, Stack } from '@chakra-ui/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const organizationSizeOptions = [
  {
    id: 1,
    org: '2 - 10 Employees',
  },
];

const SignupForm3 = ({
  onBackClick,
  onNextClick,
  currentStep,
  totalSteps,
  onInputChange,
  selectedOrganizationSize,
}) => {
  // const [organizationSizeOptions, setOrganizationSizeOptions] = useState([]);

  // useEffect(() => {
  //   const fetchOrg = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://nameera.pythonanywhere.com/api/user/org/'
  //       );
  //       const data = await response.json();
  //       setOrganizationSizeOptions(data);
  //     } catch (error) {
  //       console.error('Error fetching goals:', error);
  //     }
  //   };

  //   fetchOrg();
  // }, []);

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
          Please Tell Me More About Your Organization
        </Heading>
        <Stack direction="row" flexWrap="wrap" spacing={4}>
          {organizationSizeOptions.map((size, index) => (
            <Button
              key={index}
              onClick={() =>
                onInputChange({
                  target: { name: 'selectedOrganizationSize', value: size.id },
                })
              }
              size="lg"
              variant="outline"
              borderRadius="10px"
              borderWidth={1}
              borderColor={
                selectedOrganizationSize === size.id ? '#FF5757' : '#D9D9D9'
              }
              color={'#898989'}
            >
              {size.org}
            </Button>
          ))}
        </Stack>
      </Stack>
      <Stack direction={['column', 'row']} justify="space-between" mt={[8, 20]}>
        <HStack marginInline={['auto', 'unset']}>
          <BsArrowLeft />
          <span style={{ alignSelf: 'center' }}>{` ${currentStep}`}</span>
          <BsArrowRight />
        </HStack>

        <Button
          variant={'outline'}
          borderColor={'#FF5757'}
          color={'#FF5757'}
          borderRadius={'full'}
          size={'lg'}
          onClick={onNextClick}
        >
          Next
        </Button>
      </Stack>
    </>
  );
};

export default SignupForm3;
