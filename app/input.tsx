'use client'
import { Button, Textarea } from '@nextui-org/react'
import { useState } from 'react'

export interface IChat {
  messages: IMessage[]
  id: string
}

export interface IMessage {
  role?: string
  content: any
}

export const Input = () => {
  const [res, setRes] = useState<string | undefined>()

  const [value, setValue] = useState('')

  async function send() {
    const response = await fetch('/api/ask/', {
      method: 'POST',
      body: value
    })

    const data = await response.json()

    console.log(data)

    setRes(data)
  }

  return (
    <div className="grid grid-cols-4 content-center">
      <div className="col-span-3">
        <Textarea
          className="mx-auto sm:max-w-2xl sm:pl-24 sm:pr-4"
          id="chatInput"
          maxRows={3}
          placeholder="Send a message"
          value={value}
          onValueChange={setValue}
        ></Textarea>
      </div>
      <div className="self-center">
        <Button
          onClick={async e => await send()}
          color="primary"
          variant="flat"
        >
          Send
        </Button>
      </div>
    </div>
  )
}
