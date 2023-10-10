import React, { useState } from 'react';
import { Button, Heading, Stack, HStack } from '@chakra-ui/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
const goalOptions = [
  'Monetize views on my Youtube Channel and Other Sites',
  'Creating Marketing Videos for my Business',
  'Make and Sell Videos for Others as an agency',
  'Creating Training and Education Videos for My Business',
  'Personal Use',
  'Other',
];

const SignupForm2 = ({ onBackClick, onNextClick, currentStep, totalSteps }) => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleGoalSelection = selectedGoal => {
    console.log('Selected Goal:', selectedGoal);
    setSelectedGoal(selectedGoal);
  };

  return (
    <>
      <Stack direction={['column', 'row']} align="center" spacing={2} mb={4}>
        <Button
          variant="ghost"
          leftIcon={<AiOutlineArrowLeft />}
          onClick={onBackClick}
        ></Button>
      </Stack>
      <Stack spacing={4} align="center" mb={4}>
        <Heading fontSize="xl" textAlign="center">
          What is Your Main Goal?
        </Heading>
        <Stack
          direction={['column', 'row']}
          flexWrap={['wrap', 'wrap']}
          spacing={4}
        >
          {goalOptions.map((goal, index) => (
            <Button
              key={index}
              onClick={() => handleGoalSelection(goal)}
              size={['xs', 'lg']}
              variant="outline"
              borderRadius={['2px', '10px']}
              borderWidth={1}
              borderColor={selectedGoal === goal ? '#FF5757' : '#D9D9D9'}
              color={'#898989'}
            >
              {goal}
            </Button>
          ))}
        </Stack>
      </Stack>
      <Stack direction={['column', 'row']} justify="space-between" mt={[4, 10]}>
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

export default SignupForm2;
