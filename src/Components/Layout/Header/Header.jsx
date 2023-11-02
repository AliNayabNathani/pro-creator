import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  ColorModeProvider,
  Image,
} from '@chakra-ui/react';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineDown,
  AiOutlineRight,
} from 'react-icons/ai';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import Login from '../../Auth/Login/Login';
import whiteHeaderLogo from '../../../Assests/images/whiteHeaderLogo.png';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Features',
    children: [
      {
        label: 'Script Features',
        href: '/script-features',
      },
      {
        label: 'Short Video Features',
        href: 'short-video-features',
      },
    ],
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
];

const Header = ({ isAuthenticated }) => {
  console.log('IsAuth', isAuthenticated);
  const { isOpen, onToggle } = useDisclosure();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = e => {
    // e.preventDefault();
    dispatch({ type: 'logoutSuccess' });
  };
  return (
    <Box>
      <Flex
        bg={'white'}
        opacity={1}
        color={'black'}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'end' }}>
          <Image
            src={whiteHeaderLogo}
            alt="Pro Creator"
            marginRight={['none', 'auto']}
          />
          <Flex
            display={{ base: 'none', md: 'flex' }}
            marginRight={'10'}
            alignItems={'center'}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#FF5757'}
            href={'#'}
            _hover={{
              bg: '#E04141',
            }}
            borderRadius={'full'}
            padding={{ base: '2', md: '4' }}
            minW={{ base: '80px', md: '120px' }}
          >
            Free Trail
          </Button>
          {isAuthenticated ? (
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'md'}
              fontWeight={600}
              color={'black'}
              bg={'transparent'}
              href={'#'}
              _hover={{
                bg: 'black',
                color: 'white',
              }}
              border={'1px solid black'}
              borderRadius={'full'}
              padding={{ base: '2', md: '4' }}
              minW={{ base: '80px', md: '120px' }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'md'}
              fontWeight={600}
              color={'black'}
              bg={'transparent'}
              href={'#'}
              _hover={{
                bg: 'black',
                color: 'white',
              }}
              border={'1px solid black'}
              borderRadius={'full'}
              padding={{ base: '2', md: '4' }}
              minW={{ base: '80px', md: '120px' }}
              onClick={() => setLoginModalOpen(true)}
            >
              Login
            </Button>
          )}
          <Login
            isOpen={isLoginModalOpen}
            onClose={() => setLoginModalOpen(false)}
          />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Header;

const DesktopNav = () => {
  const [activeTab, setActiveTab] = useState(null);
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const location = useLocation();

  const handleSetActiveTab = index => {
    setActiveTab(index);
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const activeIndex = NAV_ITEMS.findIndex(item => item.href === currentPath);

    if (activeIndex !== -1) {
      setActiveTab(activeIndex);
    } else {
      setActiveTab(null);
    }
  }, [location.pathname]);

  return (
    <Stack direction={'row'} spacing={20} alignItems={'center'}>
      {NAV_ITEMS.map((navItem, index) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'md'}
                fontWeight={400}
                color={activeTab === index ? 'black' : 'gray.500'}
                borderBottom={activeTab === index ? '2px solid black' : 'none'}
                _hover={{
                  textDecoration: 'none',
                  color: 'black',
                }}
                alignItems={'center'}
                onClick={() => handleSetActiveTab(index)}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

//not using yet
const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: '#FF5757' }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'white' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'#F07837'} w={5} h={5} as={AiOutlineRight} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={'white'} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={300}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={AiOutlineDown}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={3}
            h={3}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
