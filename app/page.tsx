import { Avatar, Card, CardBody, Divider } from '@nextui-org/react'
import { IChat, IMessage, Input } from './input'

const getChat = async (): Promise<IChat> => {
  const res = await fetch(`${process.env.ServerUrl}/api/chat`, {
    method: 'GET'
  })

  return res.json()
}

export default async function Home() {
  const chat: IChat = await getChat()
  return (
    <main className="flex flex-1 min-h-screen flex-col items-center justify-between p-16">
      <div
        className="max-w-2xl relative flex 
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
        after:dark:opacity-40 before:lg:h-[360px]"
      >
        <div className="grid gap-y-8 content-start">
          {chat.messages.map(message => (
            <Message message={message}></Message>
          ))}
        </div>
        <Divider className="my-4" />
        <div className="w-full ease-in-out bottom-0 space-y-1">
          <Input />
        </div>
      </div>
    </main>
  )
}

function Message({ message }: { message: IMessage }) {
  return (
    <div key={Math.random().toString()} className="flex space-x-4 text-small">
      <div className="grow-0">
        <Avatar
          isBordered
          name={message.role === 'user' ? 'user' : 'bot'}
          radius="lg"
          size="md"
          color={message.role === 'user' ? 'default' : 'warning'}
          src={
            message.role === 'user'
              ? ''
              : 'https://i.pravatar.cc/150?u=a04258114e29026702d'
          }
        />
      </div>
      <Divider orientation="vertical" />
      <div>
        <Card>
          <CardBody>
            <p>{message.content}</p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
