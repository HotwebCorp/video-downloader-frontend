import { useState } from "react"
import { Button } from "./ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger } from "./ui/drawer"
import { MdOutlineHistory } from "react-icons/md"


function BottomDrawer({ setOpen, open }) {

    return (

        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger><Button>History</Button></DrawerTrigger>

            <DrawerContent>
                <DrawerHeader>
                    <MdOutlineHistory />
                    <h3>History</h3>
                </DrawerHeader>

                <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
            </DrawerContent>

        </Drawer>

    )
}

export default BottomDrawer