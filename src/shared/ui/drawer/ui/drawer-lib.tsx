import * as React from "react"
import { Drawer as ChakraDrawer, IconButton as ChakraIconButton, Portal } from "@chakra-ui/react"
import {LuX} from "react-icons/lu";

interface DrawerContentProps extends ChakraDrawer.ContentProps {
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
  offset?: ChakraDrawer.ContentProps["padding"]
}

export const DrawerContent = React.forwardRef<
  HTMLDivElement,
  DrawerContentProps
>(function DrawerContent(props, ref) {
  const { children, portalled = true, portalRef, offset, ...rest } = props
  return (
    <Portal disabled={!portalled} container={portalRef}>
      <ChakraDrawer.Positioner padding={offset}>
        <ChakraDrawer.Content ref={ref} {...rest} asChild={false}>
          {children}
        </ChakraDrawer.Content>
      </ChakraDrawer.Positioner>
    </Portal>
  )
})

export const DrawerCloseTrigger = React.forwardRef<
  HTMLButtonElement,
  ChakraDrawer.CloseTriggerProps
>(function DrawerCloseTrigger(props, ref) {
  return (
    <ChakraDrawer.CloseTrigger
      position="absolute"
      top="2"
      insetEnd="2"
      {...props}
      asChild
    >
      <ChakraIconButton variant="ghost" aria-label="Close" size="sm" ref={ref}  {...props}>
        <LuX />
      </ChakraIconButton>
    </ChakraDrawer.CloseTrigger>
  )
})

export const StaticCloseTrigger = React.forwardRef<HTMLButtonElement, ChakraDrawer.CloseTriggerProps>(function DrawerCloseTrigger(props, ref) {
  return (
    <ChakraDrawer.CloseTrigger position="static" {...props} asChild>
      <ChakraIconButton variant="ghost" aria-label="Close" size="sm" ref={ref} {...props}>
        <LuX/>
      </ChakraIconButton>
    </ChakraDrawer.CloseTrigger>
  );
});

export const DrawerTrigger = ChakraDrawer.Trigger
export const DrawerRoot = ChakraDrawer.Root
export const DrawerFooter = ChakraDrawer.Footer
export const DrawerHeader = ChakraDrawer.Header
export const DrawerBody = ChakraDrawer.Body
export const DrawerBackdrop = ChakraDrawer.Backdrop
export const DrawerDescription = ChakraDrawer.Description
export const DrawerTitle = ChakraDrawer.Title
export const DrawerActionTrigger = ChakraDrawer.ActionTrigger
