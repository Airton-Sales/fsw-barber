import { Button } from "./ui/button"
import { signIn } from "next-auth/react"
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import Image from "next/image"

const SignInDialog = () => {
  const handleLoginWithGoogleClick = () => signIn("google")
  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça seu login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do Google
        </DialogDescription>
      </DialogHeader>

      <Button
        className="gap-1 font-bold"
        variant={"outline"}
        onClick={handleLoginWithGoogleClick}
      >
        <Image
          alt="Fazer login com o Google"
          src="/Google.svg"
          width={18}
          height={18}
        />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
