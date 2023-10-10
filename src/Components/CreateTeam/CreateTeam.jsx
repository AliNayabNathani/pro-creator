import React, { useState } from 'react';
import {
  Container,
  Heading,
  Stack,
  Text,
  InputRightElement,
  InputLeftElement,
  InputGroup,
  Box,
  Button,
  Input,
  Divider,
  Textarea,
  Flex,
} from '@chakra-ui/react';
import { AiOutlineLink } from 'react-icons/ai';
import TeamMembers from './MemberCard';
const CreateTeam = () => {
  const [teamMemberEmail, setTeamMemberEmail] = useState('');

  const handleEmailChange = event => {
    setTeamMemberEmail(event.target.value);
  };

  const handleAddButtonClick = () => {
    console.log('Adding team member with email:', teamMemberEmail);
    setTeamMemberEmail('');
  };
  return (
    <>
      <Container minH={'100vh'} maxW="90%" paddingY={'8'} bg={'white'}>
        <Stack>
          <Heading textAlign={['center', 'center']}>Create Team</Heading>
        </Stack>
        <Box
          maxW={'xl'}
          marginInline={'auto'}
          mt={[4, 8]}
          borderRadius={'20px'}
        >
          <InputGroup alignItems={'center'}>
            <InputLeftElement
              ml={6}
              mt={2}
              pointerEvents="none"
              color={'black'}
              children={<AiOutlineLink />}
            />
            <Input
              type="text"
              placeholder="Enter Team Member Email"
              color="black"
              borderRadius="md"
              p={6}
              ml={8}
              value={teamMemberEmail}
              onChange={handleEmailChange}
            />
            <InputRightElement width={['8rem', '8rem']}>
              <Button
                mt={2.5}
                bgGradient="linear(to-r, #8E2485, #F16F23)"
                _hover={{
                  bgGradient: 'linear(to-r, #8E2485, #F16F23)',
                }}
                color={'white'}
                size={['xs', 'md']}
                width={['4rem', '6rem']}
                onClick={handleAddButtonClick}
              >
                Add
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
        <TeamMembers />
      </Container>
    </>
  );
};

export default CreateTeam;
