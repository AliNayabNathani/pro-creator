import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  chakra,
  Icon,
  Button,
} from '@chakra-ui/react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

const monthlyPlans = [
  {
    name: 'Standard',
    priceMonthly: 19,
    userPerAccount: 1,
    videosPerMonth: 60,
    textToVideoProjects: '10min in Length',
    videoTranscription: '60 Hrs/Month',
    editVideoRecordings: '01 Hr Long',
    templates: '03 Templates',
    music: '5000 Tracks',
    textToSpeech: '34 Text-to-speech',
    voiceOverSynchronization: '01',
    videoHighlights: false,
    hootsuiteIntegration: false,
    bulkDownload: false,
  },
  {
    name: 'Premium',
    priceMonthly: 39,
    userPerAccount: 1,
    videosPerMonth: 60,
    textToVideoProjects: '10min in Length',
    videoTranscription: '60 Hrs/Month',
    editVideoRecordings: '02 Hr Long',
    templates: '03 Templates',
    music: '5000 Tracks',
    textToSpeech: '34 Text-to-speech',
    voiceOverSynchronization: '01',
    videoHighlights: true,
    hootsuiteIntegration: true,
    bulkDownload: true,
    background: '#FF5757',
  },
  {
    name: 'Team',
    priceMonthly: 99,
    userPerAccount: 2,
    videosPerMonth: 60,
    textToVideoProjects: '10min in Length',
    videoTranscription: '60 Hrs/Month',
    editVideoRecordings: '03 Hr Long',
    templates: '03 Templates',
    music: '5000 Tracks',
    textToSpeech: '34 Text-to-speech',
    voiceOverSynchronization: '02',
    videoHighlights: false,
    hootsuiteIntegration: false,
    bulkDownload: false,
  },
];

const yearlyPlans = [
  {
    name: 'Standard',
    priceYearly: 190,
    userPerAccount: 1,
    videosPerMonth: 60,
    textToVideoProjects: '10min in Length',
    videoTranscription: '60 Hrs/Month',
    editVideoRecordings: '01 Hr Long',
    templates: '03 Templates',
    music: '5000 Tracks',
    textToSpeech: '34 Text-to-speech',
    voiceOverSynchronization: '01',
    videoHighlights: false,
    hootsuiteIntegration: false,
    bulkDownload: false,
  },
  {
    name: 'Premium',
    priceYearly: 390,
    userPerAccount: 1,
    videosPerMonth: 60,
    textToVideoProjects: '10min in Length',
    videoTranscription: '60 Hrs/Month',
    editVideoRecordings: '02 Hr Long',
    templates: '03 Templates',
    music: '5000 Tracks',
    textToSpeech: '34 Text-to-speech',
    voiceOverSynchronization: '01',
    videoHighlights: true,
    hootsuiteIntegration: true,
    bulkDownload: true,
    background: '#FF5757',
  },
  {
    name: 'Team',
    priceYearly: 990,
    userPerAccount: 2,
    videosPerMonth: 60,
    textToVideoProjects: '10min in Length',
    videoTranscription: '60 Hrs/Month',
    editVideoRecordings: '03 Hr Long',
    templates: '03 Templates',
    music: '5000 Tracks',
    textToSpeech: '34 Text-to-speech',
    voiceOverSynchronization: '02',
    videoHighlights: false,
    hootsuiteIntegration: false,
    bulkDownload: false,
  },
];

const PricingBox = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const plans = isMonthly ? monthlyPlans : yearlyPlans;
  const handleToggle = () => {
    setIsMonthly(prev => !prev);
  };

  return (
    <>
      <TableContainer>
        <Table
          variant="striped"
          style={{
            textAlignLast: 'center',
          }}
        >
          <Thead>
            <Tr>
              <Th>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '30px',
                    overflow: 'hidden',
                    backgroundColor: isMonthly ? '#D9D9D9' : '#D9D9D9',
                    color: 'white',
                    cursor: 'pointer',
                    width: '150px',
                    border: '1px solid #ddd',
                    transition: 'background-color 0.3s',
                    height: '50px',
                  }}
                  onClick={handleToggle}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '100%',
                      backgroundColor: 'white',
                      marginLeft: isMonthly ? '0' : '100px',
                      transition: 'margin 0.3s',
                    }}
                  />
                  <Text
                    fontWeight="semibold"
                    fontSize="sm"
                    color={isMonthly ? '#FF5757' : '#FF5757'}
                    p={4}
                    style={{
                      flex: 1,
                      textAlign: 'left',
                      marginLeft: isMonthly ? '0' : '-200px',
                    }}
                  >
                    {isMonthly ? 'Monthly' : 'Yearly'}
                  </Text>
                </div>
              </Th>
              {plans.map((plan, index) => (
                <Th
                  key={plan.name}
                  color={plan.name === 'Premium' ? 'white' : 'black'}
                  bg={
                    plan.name === 'Premium' && isMonthly
                      ? plan.background
                      : plan.background
                  }
                  borderRadius={plan.name === 'Premium' ? '20px' : 'none'}
                >
                  {plan.name}
                  <br />
                  <br />
                  <br />
                  <chakra.span fontSize={'6xl'}>
                    ${isMonthly ? plan.priceMonthly : plan.priceYearly}
                  </chakra.span>
                  <br />
                  <br />
                  Per {isMonthly ? 'Month' : 'Year'}
                </Th>
              ))}
            </Tr>

            <Tr p={[4, 20]}>
              <Th></Th>
              {plans.map(plan => (
                <Th key={plan.name}>
                  <Button
                    variant={
                      plan.name === 'Premium' && isMonthly ? 'solid' : 'outline'
                    }
                    border={plan.name === 'Premium' ? '' : '1px solid black'}
                    borderRadius={'full'}
                    size={'lg'}
                    bg={
                      plan.name === 'Premium'
                        ? plan.background
                        : plan.background
                    }
                    color={plan.name === 'Premium' ? 'white' : 'black'}
                    w={['auto', '214px']}
                  >
                    Buy Now
                  </Button>
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>User Per Account</Td>
              {plans.map(plan => (
                <Td key={plan.name}>{plan.userPerAccount}</Td>
              ))}
            </Tr>
            <Tr>
              <Td>Per Month</Td>
              {plans.map(plan => (
                <Td key={plan.name}>{plan.videosPerMonth} Videos</Td>
              ))}
            </Tr>
            <Tr>
              <Td>Text-to-video projects of up to</Td>
              {plans.map(plan => (
                <Td key={plan.name}>{plan.textToVideoProjects}</Td>
              ))}
            </Tr>
            <Tr>
              <Td>Video Transcription</Td>
              {plans.map(plan => (
                <Td key={plan.name}>{plan.videoTranscription}</Td>
              ))}
            </Tr>
            <Tr>
              <Td>Edit existing video recordings up to</Td>
              {plans.map(plan => (
                <Td key={plan.name}>{plan.editVideoRecordings}</Td>
              ))}
            </Tr>
            <Tr>
              <Td>Templates</Td>
              {plans.map(plan => (
                <Td key={plan.name}>{plan.templates}</Td>
              ))}
            </Tr>
            <Tr>
              <Td>Music</Td>
              {plans.map(plan => (
                <Td key={plan.name}>{plan.music}</Td>
              ))}
            </Tr>
            <Tr>
              <Td>Text-to-speech AI voices</Td>
              {plans.map(plan => (
                <Td key={plan.name}>{plan.textToSpeech}</Td>
              ))}
            </Tr>
            <Tr>
              <Td>Automatic voice-over synchronization</Td>
              {plans.map(plan => (
                <Td key={plan.name}>{plan.voiceOverSynchronization}</Td>
              ))}
            </Tr>
            <Tr>
              <Td>Automatic video highlights</Td>
              {plans.map(plan => (
                <Td key={plan.name}>
                  <Icon
                    as={
                      plan.videoHighlights
                        ? AiOutlineCheckCircle
                        : AiOutlineCloseCircle
                    }
                  />
                </Td>
              ))}
            </Tr>
            <Tr>
              <Td>Hootsuite integration</Td>
              {plans.map(plan => (
                <Td key={plan.name}>
                  <Icon
                    as={
                      plan.hootsuiteIntegration
                        ? AiOutlineCheckCircle
                        : AiOutlineCloseCircle
                    }
                  />
                </Td>
              ))}
            </Tr>
            <Tr>
              <Td>Bulk download of videos to CSV</Td>
              {plans.map(plan => (
                <Td key={plan.name}>
                  <Icon
                    as={
                      plan.bulkDownload
                        ? AiOutlineCheckCircle
                        : AiOutlineCloseCircle
                    }
                  />
                </Td>
              ))}
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PricingBox;
