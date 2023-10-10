import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const UserCard = ({ name, designation, email, onDelete, onEdit, avatar }) => {
  return (
    <Box
      bg="#292D32"
      color="white"
      p={4}
      borderRadius="md"
      textAlign="center"
      position="relative"
      maxW={'240px'}
      alignItems={'center'}
      justifyContent={'cener'}
    >
      <Button
        position="absolute"
        top="4"
        left="4"
        variant="ghost"
        bg={'white'}
        size={['sm', 'md']}
        onClick={onDelete}
      >
        <AiOutlineDelete />
      </Button>
      <Button
        position="absolute"
        top="4"
        right="4"
        variant="ghost"
        bg={'white'}
        size={['sm', 'md']}
        onClick={onEdit}
      >
        <AiOutlineEdit />
      </Button>

      <Stack spacing={2}>
        <Avatar size="lg" name={name} src={avatar} alignSelf={'center'} />

        <Heading as="h3" fontSize="xl">
          {name}
        </Heading>

        <Text color="#898989">{designation}</Text>

        <Divider my={2} borderColor="#898989" />

        <Text>{email}</Text>
      </Stack>
    </Box>
  );
};

const TeamMembers = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Nayab',
      designation: 'Owner',
      email: 'nayab@example.com',
      avatar: 'https://storage.needpix.com/rsynced_images/head-659650_1280.png',
    },
    {
      id: 2,
      name: 'Nayab',
      designation: 'Owner',
      email: 'nayab@example.com',
      avatar: 'https://storage.needpix.com/rsynced_images/head-659650_1280.png',
    },
    {
      id: 3,
      name: 'Nayab',
      designation: 'Owner',
      email: 'nayab@example.com',
      avatar: 'https://storage.needpix.com/rsynced_images/head-659650_1280.png',
    },
    {
      id: 4,
      name: 'Nayab',
      designation: 'Owner',
      email: 'nayab@example.com',
      avatar: 'https://storage.needpix.com/rsynced_images/head-659650_1280.png',
    },
  ];

  const handleDelete = memberId => {
    console.log('Delete member with ID:', memberId);
  };

  const handleEdit = memberId => {
    console.log('Edit member with ID:', memberId);
  };

  return (
    <>
      <Container minH={'100vh'} maxW="90%" paddingY={'8'} bg={'white'}>
        <Text color="gray.600" my={(4, 4)}>{`${teamMembers.length} Team Member${
          teamMembers.length !== 1 ? 's' : ''
        }`}</Text>
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {teamMembers.map(member => (
            <UserCard
              key={member.id}
              name={member.name}
              designation={member.designation}
              email={member.email}
              avatar={member.avatar}
              onDelete={() => handleDelete(member.id)}
              onEdit={() => handleEdit(member.id)}
            />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default TeamMembers;
