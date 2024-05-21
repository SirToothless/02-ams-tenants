
import {
  ClerkLoaded,
  ClerkLoading,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shell } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className='flex justify-center h-screen w-screen items-center bg-neutral-300'>
        <div className='border border-black size-[400px] rounded-lg shadow-lg shadow-slate-300 px-4 py-4 bg-neutral-50 flex items-center justify-center flex-col space-y-4'>
          <ClerkLoading>
            <Shell className=' animate-spin' />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <h1 className=' text-muted-foreground text-sm'>
                Jesteś zalogowany jako:
              </h1>
              <UserButton showName />
              <Link href='/aplikacja'>
                <Button variant='outline'>Przejdź do aplikacji</Button>
              </Link>
            </SignedIn>
            <SignedOut>
              <Button variant='outline'>
                <SignUpButton signInForceRedirectUrl='/aplikacja'>
                  Zaloguj się
                </SignUpButton>
              </Button>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </section>
    </>
  );
}
