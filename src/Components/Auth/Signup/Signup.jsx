import React, { useState } from 'react';
import { Stack, Container } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import SignupForm2 from './SignupForm2';
import SignupForm3 from './SignupForm3';
import SignupForm4 from './SignUpForm4';
import SignUpForm1 from './SignUpForm1';
import authBg from '../../../Assests/images/authBg.png';

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;

  const handleBackButtonClick = () => {
    if (currentStep > 0) {
      setCurrentStep(prevStep => prevStep - 1);
    }
  };

  const handleNextButtonClick = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };
  return (
    <Container
      minH={'100vh'}
      maxW="100%"
      paddingY={'8'}
      bg={'#FF5757'}
      bgImg={authBg}
    >
      <Stack
        direction={['column', 'row']}
        bg="white"
        p={8}
        w={['100%', '4xl']}
        marginInline={'auto'}
        borderRadius={'20px'}
      >
        {currentStep === 0 && (
          <SignUpForm1 onNextClick={handleNextButtonClick} />
        )}
        {currentStep === 1 && (
          <Stack w={['100%', '100%']}>
            <SignupForm2
              onBackClick={handleBackButtonClick}
              onNextClick={handleNextButtonClick}
              currentStep={currentStep}
              totalSteps={totalSteps}
            />
          </Stack>
        )}
        {currentStep === 2 && (
          <Stack w={['100%', '100%']}>
            <SignupForm3
              onBackClick={handleBackButtonClick}
              onNextClick={handleNextButtonClick}
              currentStep={currentStep}
              totalSteps={totalSteps}
            />
          </Stack>
        )}
        {currentStep === 3 && (
          <Stack w={['100%', '100%']}>
            <SignupForm4
              onBackClick={handleBackButtonClick}
              onNextClick={handleNextButtonClick}
              currentStep={currentStep}
              totalSteps={totalSteps}
            />
          </Stack>
        )}
      </Stack>
    </Container>
  );
};

export default Signup;
