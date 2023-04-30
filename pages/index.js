import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className=" h-screen bg-blue-900 flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn('google')}
            className=" bg-white p-2 rounded-full"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      Signed in as {session.user.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}
