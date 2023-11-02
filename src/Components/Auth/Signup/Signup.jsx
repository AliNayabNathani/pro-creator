import React, { useEffect, useState } from 'react';
import { Stack, Container, useToast } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import SignupForm2 from './SignupForm2';
import SignupForm3 from './SignupForm3';
import SignupForm4 from './SignUpForm4';
import SignUpForm1 from './SignUpForm1';
import authBg from '../../../Assests/images/authBg.png';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/actions/user';
import axios from 'axios';
import { server } from '../../../redux/store';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    selectedGoal: null,
    selectedOrganizationSize: null,
    describeProfession: null,
  });
  const toast = useToast();
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector(state => state.user);
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;
  const navigate = useNavigate();
  // console.log(formData);

  //generating random string function of any length for namira api
  const generateRandomString = length => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  };

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

  const handleInputChange = e => {
    const { name, value } = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    dispatch(registerUser(formData));
  };

  useEffect(() => {
    if (message) {
      toast({
        title: 'Registration Successful!',
        description: message,
        position: 'top',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      dispatch({ type: 'clearMessage' });
    } else if (error) {
      toast({
        title: 'Registration Failed',
        description: 'An error occurred during registration.',
        position: 'top',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      dispatch({ type: 'clearError' });
    }
  }, [loading, message, error, toast]);

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
          <SignUpForm1
            onNextClick={handleNextButtonClick}
            onInputChange={handleInputChange}
            {...formData}
          />
        )}
        {currentStep === 1 && (
          <Stack w={['100%', '100%']}>
            <SignupForm2
              onInputChange={handleInputChange}
              selectedGoal={formData.selectedGoal}
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
              onInputChange={handleInputChange}
              selectedOrganizationSize={formData.selectedOrganizationSize}
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
              onInputChange={handleInputChange}
              describeProfession={formData.describeProfession}
              onBackClick={handleBackButtonClick}
              onNextClick={handleNextButtonClick}
              currentStep={currentStep}
              totalSteps={totalSteps}
              loading={loading}
              onSubmit={handleFormSubmit}
            />
          </Stack>
        )}
      </Stack>
    </Container>
  );
};

export default Signup;
