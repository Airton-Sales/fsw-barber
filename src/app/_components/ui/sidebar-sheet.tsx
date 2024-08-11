import { Button } from "./button"
import { CalendarIcon, HomeIcon, LogInIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./sheet"
import { quickSearchOptions } from "@/app/_constants/search"
import Link from "next/link"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"

const SidebarSheet = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        <h2 className="font-bold">Olá, faça seu login!</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <LogInIcon size="icon" />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[90%]">
            <DialogHeader>
              <DialogTitle>Faça seu login na plataforma</DialogTitle>
              <DialogDescription>
                Conecte-se usando sua conta do Google
              </DialogDescription>
            </DialogHeader>
            <Button className="gap-1 font-bold" variant={"outline"}>
              <Image
                alt="Fazer login com o Google"
                src="/Google.svg"
                width={20}
                height={20}
              />
              Google
            </Button>
          </DialogContent>
        </Dialog>
        {/* Avatar 
        <Avatar>
          <AvatarImage
            src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Rafael Carvalho"
          />
        </Avatar>

        <div>
          <p className="font-bold">Rafael Carvalho</p>
          <p className="text-xs">LXt4m@example.com</p>
        </div> */}
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant={"ghost"} asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Ínicio
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamento
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant={"ghost"}
          >
            <Image
              alt={option.title}
              src={option.imageUrl}
              width={18}
              height={18}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <Button className="justify-start gap-2" variant={"ghost"}>
          <LogInIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
