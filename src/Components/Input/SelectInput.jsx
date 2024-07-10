import React from 'react'
import { FormLabel, Select } from "@chakra-ui/react";

const SelectInput = ({ title, selectLg, selectSm, OptionSm, OptionLg, text }) => {
    return (
        <div>
            <FormLabel>{title}</FormLabel>
            <p>{text}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "60%" }}>
                    <Select placeholder={selectLg} size='lg'>
                        {OptionLg.map((opt, i) => (
                            <>
                            <option value={opt.value} key={i}>{opt.options}</option>

                            
                            </>                            
                        ))}
                    </Select>
                </div>
                <div style={{ width: "40%", marginLeft: "15px" }}>
                    <Select placeholder={selectSm} size='lg'>
                        {OptionSm.map((opt, i) => (
                            <option value={opt.value} key={i}>{opt.options}</option>
                        ))}
                    </Select>
                </div>


            </div>
        </div>
    )
}

export default SelectInput