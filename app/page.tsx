'use client'

import { Button } from '@nextui-org/button'
import { Avatar, Card, CardBody, Divider, Textarea } from "@nextui-org/react"
import { FC, FormEvent, useState } from 'react'


export default function Home() {
  const [res, setRes] = useState<string | undefined>()
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/python/', {
      method: 'POST',
      body: formData,
    })

    const data = await response.text()
    setRes(data)
  }

  return (
    <main className="flex flex-1 min-h-screen flex-col items-center justify-between p-16">
      <div className="max-w-2xl relative flex 
        flex-col place-items-center before:absolute 
        before:h-[300px] before:w-[480px] before:-translate-x-1/2 
        before:rounded-full before:bg-gradient-radial 
        before:from-white before:to-transparent before:blur-2xl 
        before:content-[''] after:absolute after:-z-20 
        after:h-[180px] after:w-[240px] after:translate-x-1/3 
        after:bg-gradient-conic after:from-sky-200 
        after:via-blue-200 after:blur-2xl after:content-[''] 
        before:dark:bg-gradient-to-br before:dark:from-transparent 
        before:dark:to-blue-700 before:dark:opacity-10 
        after:dark:from-sky-900 after:dark:via-[#0141ff] 
        after:dark:opacity-40 before:lg:h-[360px]">

        <div className="flex space-x-4 text-small">
          <div>
            <Avatar showFallback isBordered radius="full" size="md" src="https://images.unsplash.com/broken" />
          </div>
          <Divider orientation="vertical" />
          <div>
            <Card>
              <CardBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac orci augue. In et commodo eros. Aliquam semper odio arcu, in aliquet tellus rutrum vel. Aenean ornare eu nunc at laoreet. Sed a suscipit quam, maximus cursus felis. Nulla ante tortor, ultrices et pretium in, pharetra eget enim. Maecenas vel rhoncus justo. Integer dictum velit erat, in mollis arcu porttitor non. Donec imperdiet quis sem sit amet dapibus. Suspendisse ut nisl est. Vestibulum sollicitudin, nisl eu efficitur posuere, dolor odio sagittis nulla, eu laoreet justo turpis at dui.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="flex space-x-4 text-small">
          <div>
            <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
          </div>
          <Divider orientation="vertical" />
          <div>
            <Card>
              <CardBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac orci augue. In et commodo eros. Aliquam semper odio arcu, in aliquet tellus rutrum vel. Aenean ornare eu nunc at laoreet. Sed a suscipit quam, maximus cursus felis. Nulla ante tortor, ultrices et pretium in, pharetra eget enim. Maecenas vel rhoncus justo. Integer dictum velit erat, in mollis arcu porttitor non. Donec imperdiet quis sem sit amet dapibus. Suspendisse ut nisl est. Vestibulum sollicitudin, nisl eu efficitur posuere, dolor odio sagittis nulla, eu laoreet justo turpis at dui.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="flex space-x-4 text-small">
          <div>
            <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
          </div>
          <Divider orientation="vertical" />
          <div>
            <Card>
              <CardBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac orci augue. In et commodo eros. Aliquam semper odio arcu, in aliquet tellus rutrum vel. Aenean ornare eu nunc at laoreet. Sed a suscipit quam, maximus cursus felis. Nulla ante tortor, ultrices et pretium in, pharetra eget enim. Maecenas vel rhoncus justo. Integer dictum velit erat, in mollis arcu porttitor non. Donec imperdiet quis sem sit amet dapibus. Suspendisse ut nisl est. Vestibulum sollicitudin, nisl eu efficitur posuere, dolor odio sagittis nulla, eu laoreet justo turpis at dui.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="flex space-x-4 text-small">
          <div>
            <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
          </div>
          <Divider orientation="vertical" />
          <div>
            <Card>
              <CardBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac orci augue. In et commodo eros. Aliquam semper odio arcu, in aliquet tellus rutrum vel. Aenean ornare eu nunc at laoreet. Sed a suscipit quam, maximus cursus felis. Nulla ante tortor, ultrices et pretium in, pharetra eget enim. Maecenas vel rhoncus justo. Integer dictum velit erat, in mollis arcu porttitor non. Donec imperdiet quis sem sit amet dapibus. Suspendisse ut nisl est. Vestibulum sollicitudin, nisl eu efficitur posuere, dolor odio sagittis nulla, eu laoreet justo turpis at dui.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="fixed w-full ease-in-out bottom-0 space-y-1">
          <form onSubmit={onSubmit}>
            <Textarea
              className='mx-auto sm:max-w-2xl sm:pl-24 sm:pr-4'
              id='chatInput'
              maxRows={3}
              label="Description"
              placeholder="Enter your description (Max rows 3)"
            >
            </Textarea>
            <Button type='submit'>Send</Button>

          </form>
        </div>


      </div>
    </main>
  )
}