'use client'
import { Button, Textarea } from '@nextui-org/react'
import { FormEvent, useState } from 'react'

export const Input = () => {
  const [res, setRes] = useState<string | undefined>()
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/hello/', {
      method: 'POST',
      body: formData
    })

    const data = await response.text()
    setRes(data)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="grid grid-cols-2 content-center">
        <div>
          <Textarea
            className="mx-auto sm:max-w-2xl sm:pl-24 sm:pr-4"
            id="chatInput"
            maxRows={3}
            label="Description"
            placeholder="Enter your description (Max rows 3)"
          ></Textarea>
        </div>
        <div className="self-center">
          <Button type="submit">Send</Button>
        </div>
      </div>
    </form>
  )
}
