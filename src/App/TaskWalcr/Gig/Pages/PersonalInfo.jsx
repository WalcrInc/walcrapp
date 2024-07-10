import React from 'react'
import {
    InputGroup,
    Input,
    InputLeftElement,
    InputRightElement,
    FormLabel,
    FormControl,
} from "@chakra-ui/react";
import { CheckIcon, ProfileIcon, UserIcon } from '@/Assets';

const PersonalInfo = () => {
    return (
        <div style={{marginBottom:"40px"}}>
            <div>
                <h1>
                    Personal Info
                </h1>
                <p>
                    Avoid requesting that communication and payments take place.
                </p>
            </div>

            <div>
                <FormControl>
                    <FormLabel>Full name</FormLabel>
                    <InputGroup
                        boxShadow={" 0px 0px 0px 1px #CDD1DC"}
                        borderRadius={"8px"}
                        size={"lg"}
                    >
                        <InputLeftElement>
                            <UserIcon />
                        </InputLeftElement>
                        <Input placeholder='Brandon, Joe' />
                        <InputRightElement>
                            <CheckIcon/>
                        </InputRightElement>
                    </InputGroup>

                    <FormLabel>Address</FormLabel>
                    <InputGroup
                        boxShadow={" 0px 0px 0px 1px #CDD1DC"}
                        borderRadius={"8px"}
                        size={"lg"}
                    >
                        <InputLeftElement>
                            <UserIcon />
                        </InputLeftElement>
                        <Input placeholder='Dallas, Texas' />
                        <InputRightElement>
                        <CheckIcon/>
                        </InputRightElement>
                    </InputGroup>

                    <FormLabel>DOB</FormLabel>
                    <InputGroup
                        boxShadow={" 0px 0px 0px 1px #CDD1DC"}
                        borderRadius={"8px"}
                        size={"lg"}
                    >
                    <Input placeholder='Select Date' size='md' type='date' />
                    </InputGroup>

                    <FormLabel>Languages</FormLabel>
                </FormControl>
            </div>
        </div>
    )
}

export default PersonalInfo
