import { Button, Input, Stack, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ElementsComp = () => {
  const [selectedButton, setSelectedButton] = useState('emoji');

  const handleButtonClick = button => {
    setSelectedButton(button);
  };

  return (
    <VStack w={'full'} alignItems={'flex-start'} mb={[10, 0]}>
      <Stack direction={'row'} spacing={2} mt={2} w={'full'}>
        <Button
          borderRadius={'full'}
          variant={'outline'}
          size={['sm', 'lg']}
          onClick={() => handleButtonClick('emoji')}
          borderColor={selectedButton === 'emoji' ? '#FF5757' : '#D9D9D9'}
        >
          Emoji
        </Button>

        <Button
          borderRadius={'full'}
          variant={'outline'}
          size={['sm', 'lg']}
          onClick={() => handleButtonClick('gif')}
          borderColor={selectedButton === 'gif' ? '#FF5757' : '#D9D9D9'}
        >
          GIF
        </Button>

        <Button
          borderRadius={'full'}
          variant={'outline'}
          size={['sm', 'lg']}
          onClick={() => handleButtonClick('sticker')}
          borderColor={selectedButton === 'sticker' ? '#FF5757' : '#D9D9D9'}
        >
          Sticker
        </Button>
      </Stack>

      <Stack w={'full'} p={8} bg={'white'} h={'450px'} borderRadius={'20px'}>
        {selectedButton === 'emoji' && (
          <Input
            placeholder="Search Emoji"
            size="md"
            variant="outline"
            p={6}
            borderRadius={'full'}
            borderColor="#898989"
            focusBorderColor="#898989"
          />
        )}

        {selectedButton === 'gif' && (
          <Input
            placeholder="Search GIF"
            size="md"
            variant="outline"
            p={6}
            borderRadius={'full'}
            borderColor="#898989"
            focusBorderColor="#898989"
          />
        )}

        {selectedButton === 'sticker' && (
          <Input
            placeholder="Search Sticker"
            size="md"
            variant="outline"
            p={6}
            borderRadius={'full'}
            borderColor="#898989"
            focusBorderColor="#898989"
          />
        )}
      </Stack>
    </VStack>
  );
};

export default ElementsComp;
