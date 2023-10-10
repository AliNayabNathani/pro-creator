import { Button, Divider, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const TextComp = () => {
  const [textInputs, setTextInputs] = useState({
    heading: '',
    subheading: '',
    paragraph: '',
  });

  const [selectedFonts, setSelectedFonts] = useState({
    heading: '',
    subheading: '',
    paragraph: '',
  });

  const [selectedType, setSelectedType] = useState('');

  const handleButtonClick = type => {
    const defaultText = `<${
      type === 'heading' ? 'h1' : type === 'subheading' ? 'h2' : 'p'
    }>Enter ${type}</${type === 'paragraph' ? 'p' : ''}>`;
    setTextInputs(prevTextInputs => ({
      ...prevTextInputs,
      [type]: defaultText,
    }));
    setSelectedType(type);
  };

  const fontStyles = {
    Poppins: { fontFamily: 'Poppins, sans-serif' },
    Raleway: { fontFamily: 'Raleway, sans-serif' },
    Montserrat: { fontFamily: 'Montserrat, sans-serif' },
    Ramabhadra: { fontFamily: 'Ramabhadra, sans-serif' },
    'Rampart One': { fontFamily: 'Rampart One, sans-serif' },
    Rancho: { fontFamily: 'Rancho, sans-serif' },
  };

  const fontNames = [
    'Poppins',
    'Raleway',
    'Montserrat',
    'Ramabhadra',
    'Rampart One',
    'Rancho',
  ];

  const handleTextSelect = font => {
    setSelectedFonts(prevSelectedFonts => ({
      ...prevSelectedFonts,
      [selectedType]: font,
    }));
  };

  return (
    <VStack w={'full'} alignItems={'flex-start'} mb={[10, 0]}>
      <Stack direction={'row'} spacing={2} mt={2} w={'full'}>
        <Button
          borderRadius={'full'}
          variant={'outline'}
          borderColor={selectedType === 'heading' ? '#FF5757' : '#D9D9D9'}
          onClick={() => handleButtonClick('heading')}
          size={['sm', 'lg']}
        >
          Add Heading
        </Button>

        <Button
          borderRadius={'full'}
          variant={'outline'}
          borderColor={selectedType === 'subheading' ? '#FF5757' : '#D9D9D9'}
          onClick={() => handleButtonClick('subheading')}
          size={['sm', 'lg']}
        >
          Add Subheading
        </Button>

        <Button
          borderRadius={'full'}
          variant={'outline'}
          borderColor={selectedType === 'paragraph' ? '#FF5757' : '#D9D9D9'}
          onClick={() => handleButtonClick('paragraph')}
          size={['sm', 'lg']}
        >
          Add Paragraph
        </Button>
      </Stack>
      <Stack
        maxH={'550px'}
        overflowY={'scroll'}
        w={'full'}
        bg={'white'}
        borderRadius={'10px'}
        p={[4, 6]}
      >
        {fontNames.map((font, index) => (
          <React.Fragment key={font}>
            <Stack
              direction="row"
              align="center"
              w={'full'}
              p={4}
              justifyContent={'space-between'}
              bg={'white'}
              borderColor={
                selectedFonts[selectedType] === font ? 'black' : 'transparent'
              }
              borderWidth={selectedFonts[selectedType] === font ? '1px' : '0px'}
            >
              <Text
                p={2}
                style={fontStyles[font]}
                fontWeight={'semibold'}
                fontSize={['lg', '2xl']}
              >
                {font}
              </Text>

              <Button
                borderRadius={'full'}
                variant={'outline'}
                onClick={() => handleTextSelect(font)}
              >
                Select
              </Button>
            </Stack>
            {index < fontNames.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Stack>
    </VStack>
  );
};

export default TextComp;
