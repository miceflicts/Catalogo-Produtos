"use client"

import React, {useState} from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'

import { Button } from "@/components/ui/button"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


function CompanyFilter() {

    const marcas = [
        {
          value: "nike",
          label: "Nike",
        },
        {
          value: "adidas",
          label: "Adidas",
        },
        {
          value: "puma",
          label: "Puma",
        },
    ]

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")


  return (
    <>
        <div className=' flex max-[790px]:w-[70%] max-[400px]:w-[90%] w-[50%] rounded-xl items-center justify-between h-[45px] bg-[#ffffff] border-[1px] border-[#584F4F] mt-10 '>
            <div className='flex w-[100%] items-center justify-between'>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <div className=' flex w-full items-center justify-center'>
                            <Button
                                /* variant="outline" */
                                aria-expanded={open}
                                className=" text-[15px] text-[#AAA9A5] bg-transparent hover:bg-transparent w-[99%] justify-between"
                                >
                                {value
                                    ? marcas.find((framework) => framework.value === value)?.label
                                    : "Pesquise por marca..."}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0" />
                            </Button>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-[400px] p-0">
                        <Command>
                        <CommandInput placeholder="Pesquise por marca..." />
                        <CommandEmpty>Nós ainda não temos essa marca</CommandEmpty>
                        <CommandGroup>
                            {marcas.map((framework) => (
                            <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setOpen(false)
                                }}
                            >
                                <Check
                                className={cn(
                                    "mr-2 h-4 w-4",
                                    value === framework.value ? "opacity-100" : "opacity-0"
                                )}
                                />
                                {framework.label}
                            </CommandItem>
                            ))}
                        </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>        
            </div>
        </div>   

    </>
  )
}

export default CompanyFilter