import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import {
    DrawerBody,
    Drawer as ChakraDrawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
} from "@chakra-ui/modal";
import React from "react";

function Drawer(props: any) {
    const { isOpen, onClose } = props;

    return (
        <>
            <ChakraDrawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder="Type here..." />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue">Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </ChakraDrawer>
        </>
    );
}

export default Drawer;
