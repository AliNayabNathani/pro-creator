import React, { useEffect, useState } from 'react';
import { Button, HStack, Heading, Stack } from '@chakra-ui/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

// const Professions = [
//   'Content Creator',
//   'Teacher, Instructor, Coach',
//   'Marketer',
//   'Sales Professional',
//   'Other',
// ];

const SignupForm4 = ({
  onBackClick,
  onNextClick,
  currentStep,
  totalSteps,
  onInputChange,
  describeProfession,
  loading,
  onSubmit,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [Professions, setProfessions] = useState([]);

  const handleSubmit = () => {
    setIsSubmitted(true);

    if (onSubmit) {
      onSubmit();
    }
  };

  useEffect(() => {
    const fetchProf = async () => {
      try {
        const response = await fetch(
          'https://nameera.pythonanywhere.com/api/user/prof/'
        );
        const data = await response.json();
        setProfessions(data);
        console.log('DATA:', data);
      } catch (error) {
        console.error('Error fetching goals:', error);
      }
    };

    fetchProf();
  }, []);
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
          {Professions.map((size, index) => (
            <Button
              key={index}
              onClick={() =>
                onInputChange({
                  target: { name: 'describeProfession', value: size.id },
                })
              }
              size="lg"
              variant="outline"
              borderRadius="10px"
              borderWidth={1}
              borderColor={
                describeProfession === size.id ? '#FF5757' : '#D9D9D9'
              }
              color={'#898989'}
            >
              {size.prof}
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
          // isLoading={loading}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Stack>
    </>
  );
};

export default SignupForm4;
