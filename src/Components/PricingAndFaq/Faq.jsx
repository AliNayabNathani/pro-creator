import {
  Container,
  HStack,
  Heading,
  Icon,
  VStack,
  Box,
  Text,
} from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import React from 'react';

const faqData = [
  {
    question: 'Is Web3 Career Legit?',
    answer:
      'Lorem ipsum dolor sit amet. Est recusandae quaerat cum velit rerum ea dolore optio? Ea sint impedit sit enim quae et Quis quisquam!',
  },
  {
    question: 'Is It Hard to Get a job at web3?',
    answer:
      'Lorem ipsum dolor sit amet. Est recusandae quaerat cum velit rerum ea dolore optio? Ea sint impedit sit enim quae et Quis quisquam!Lorem ipsum dolor sit amet. Est recusandae quaerat cum velit rerum ea dolore optio? Ea sint impedit sit enim quae et Quis quisquam!Lorem ipsum dolor sit amet. Est recusandae quaerat cum velit rerum ea dolore optio? Ea sint impedit sit enim quae et Quis quisquam!',
  },
  {
    question: 'Is Web3 Career Legit?',
    answer:
      'Lorem ipsum dolor sit amet. Est recusandae quaerat cum velit rerum ea dolore optio? Ea sint impedit sit enim quae et Quis quisquam!',
  },
  {
    question: 'Is Web3 Career Legit?',
    answer:
      'Lorem ipsum dolor sit amet. Est recusandae quaerat cum velit rerum ea dolore optio? Ea sint impedit sit enim quae et Quis quisquam!',
  },
  {
    question: 'Is Web3 Career Legit?',
    answer:
      'Lorem ipsum dolor sit amet. Est recusandae quaerat cum velit rerum ea dolore optio? Ea sint impedit sit enim quae et Quis quisquam!',
  },
];

const Faq = () => {
  return (
    <>
      <Heading
        textAlign={'center'}
        mt={6}
        fontSize={['2xl', '7xl']}
        fontFamily={'Poppins, sans-serif'}
        fontWeight={'extrabold'}
        color={'black'}
      >
        FAQ ?
      </Heading>
      <HStack
        position="relative"
        alignItems={'center'}
        justifyContent={'space-around'}
        p={[0, 8]}
      >
        <VStack w="100%">
          <Accordion allowToggle p={[0, 8]} w="100%">
            {faqData.map((faqItem, index) => (
              <Box bg={'white'} m={2} key={index} w="100%">
                <Accordion allowToggle>
                  <AccordionItem border={'none'} borderRadius={'5px'}>
                    <h2>
                      <AccordionButton p={6}>
                        <Box flex="1" textAlign="left">
                          {faqItem.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box bg={'white'} p={3}>
                        <Text fontFamily={'Recoleta'} color={'black'}>
                          {faqItem.answer}
                        </Text>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            ))}
          </Accordion>
        </VStack>
      </HStack>
    </>
  );
};

export default Faq;
