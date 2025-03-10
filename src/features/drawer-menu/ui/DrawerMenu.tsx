import React, {useState} from "react";
import Link from "next/link";
import {
  Button,
  Separator,
  Stack,
  Text,
  Link as ChakraLink,
  VStack,
  HStack
} from "@chakra-ui/react";

import CatalogIcon from "@/shared/assets/icons/catalog-icon";
import {Illustration} from "@/shared/ui/illustration";
import {ArrowIcon} from "./ArrowIcon";

import books from "@/shared/assets/illustrations/books.svg";
import {
  DrawerBackdrop,
  DrawerBody, DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger
} from "@/shared/ui/drawer";
import {LogoLink} from "@/widgets/logo-link";
import {Navigation} from "@/widgets/navigation";
import CabinetIcon from "@/shared/assets/icons/cabinet-icon";
import MenuIcon from "@/shared/assets/icons/menu-icon";
import {SearchBar} from "@/widgets/search-bar";
import FavoriteIcon from "@/shared/assets/icons/favorite-icon";
import ArrowLeftIcon from "@/shared/assets/icons/arrow-left-icon";
import MenuGreyIcon from "@/shared/assets/icons/menu-grey-icon";



const CATEGORIES = [
  {
    title: "Художня література",
    items: [
      "Сучасна українська проза",
      "Сучасна світова проза",
      "Класична українська проза",
      "Класична світова проза",
      "Детективи та трилери",
      "Горор",
      "Романтична проза",
      "Антології та коротка проза",
      "Історична проза",
      "Міфи, легенди, фольклор",
      "Сучасна українська поезія",
      "Класична українська поезія",
      "Світова поезія",
      "Різдвяні книги для дорослих",
      "Підліткова література",
    ],
  },
  {
    title: "Нон-фікшн література",
    items: ["Дизайн", "Креативність", "Ілюстрація", "Психологія", "Копірайтинг"],
  },
  {
    title: "Бізнес та саморозвиток",
    items: [
      "Історії бізнесів та бізнесменів",
      "Менеджмент та лідерство",
      "Тайм-менеджмент",
      "Мотивація",
      "Кар'єра та професійні навички",
      "Підприємництво",
      "Маркетинг та реклама",
      "Продажі",
      "Економіка",
    ],
  },
  {
    title: "Програмування",
    items: [
      "Java",
      "PHP",
      "C#",
      "C++",
      "JavaScript",
      "Arduino",
      "Computer Science",
      "Go",
      "Ajax",
      "Python",
    ],
  },
];

const CatalogueContent = ({setStep}: {setStep: (step: number) => void}) => {
  return (
    <>
      <DrawerHeader padding='16px 20px'>
        <HStack>
          <Button
            gap='8px'
            p='4px 8px'
            rounded="lg"
            height='100%'
            variant='ghost'
            onClick={() => setStep(0)}
          >
            <ArrowLeftIcon/>
          </Button>
          <HStack>
            <MenuGreyIcon/>
            <Text fontSize='20px' fontWeight="semibold">
              Каталог
            </Text>
          </HStack>
          <DrawerCloseTrigger/>
        </HStack>
      </DrawerHeader>
      <DrawerBody>
        <Link href='#'>
          <Stack bg='#F7F8F8' padding='8px' borderRadius='8px' marginBottom='24px'>
            <Stack direction='row' justify='space-between'>
              <Text fontWeight="semibold">
                Усі книги
              </Text>
              <ArrowIcon/>
            </Stack>
            <Text fontSize="sm">
              Переглянути всю бібліотеку
            </Text>
          </Stack>
        </Link>
        {CATEGORIES.map((category) => (
          <Stack key={category.title} marginBottom='24px' css={{breakInside: 'avoid'}}>
            <ChakraLink asChild>
              <Link href='#'>
                <Text fontWeight="semibold">{category.title}</Text>
              </Link>
            </ChakraLink>
            <Separator/>
            {category.items.map((item) => (
              <ChakraLink asChild key={item}>
                <Link href='#'>
                  <Text fontSize="sm">
                    {item}
                  </Text>
                </Link>
              </ChakraLink>
            ))}
          </Stack>
        ))}
      </DrawerBody>
    </>
  )
}

const MenuContent = ({setStep}: {setStep: (step: number) => void}) => {
  return (
    <>
      <DrawerHeader>
        <LogoLink height={24} width={200}/>
      </DrawerHeader>
      <DrawerBody>
        <Navigation direction='column'/>
        <VStack height='16px' justifyContent='center'>
          <Separator width='100%'/>
        </VStack>
        <VStack alignItems='flex-start'>
          <Button
            gap='8px'
            p='4px 8px'
            rounded="lg"
            height='100%'
            color='#030712'
            variant='ghost'
          >
            <CabinetIcon width='24px' height='24px'/>
            Кабінет
          </Button>
          <Button
            gap='8px'
            p='4px 8px'
            rounded="lg"
            height='100%'
            color='#030712'
            variant='ghost'
          >
            <FavoriteIcon width='24px' height='24px'/>
            Обране
          </Button>
        </VStack>
        <Link href='#'>
          <Stack alignItems='start' padding='8px'>
            <Illustration src={books.src} alt={'Books'} width={137} height={136}/>
            <Stack direction='row' justify='space-between'>
              <Text fontWeight="semibold">
                Зробіть добру справу!
              </Text>
              <ArrowIcon/>
            </Stack>
            <Text fontSize="sm">
              Залиште свою книгу в бібліотеці і вона знайде нового читача!
            </Text>
          </Stack>
          <Separator/>
        </Link>
      </DrawerBody>
      <DrawerFooter>
        <VStack width='100%'>
          <Button colorPalette='kowo' rounded="lg" color='#FFF' fontWeight='600' width='100%' onClick={() => setStep(1)}>
            <CatalogIcon/>
            Каталог
          </Button>
          <SearchBar/>
        </VStack>
      </DrawerFooter>
      <DrawerCloseTrigger/>
    </>
  )
}

export const DrawerMenu = () => {
  const [step, setStep] = useState(0);

  return (
    <DrawerRoot placement='start' onOpenChange={({open}) => {
      if (!open) {
        setStep(0);
      }
    }}>
      <DrawerBackdrop/>
      <DrawerTrigger asChild>
        <Button
          gap='0'
          p='4px 8px'
          rounded="lg"
          height='100%'
          color='#030712'
          variant='ghost'
          flexDirection="column"
        >
          <MenuIcon/>
          Меню
        </Button>
      </DrawerTrigger>
      <DrawerContent width={{base: '100%', sm: '400px'}} maxWidth='none'>
        {step === 0 && <MenuContent setStep={setStep}/>}
        {step === 1 && <CatalogueContent setStep={setStep}/>}
      </DrawerContent>
    </DrawerRoot>
  )
}
