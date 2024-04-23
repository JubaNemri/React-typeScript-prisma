import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1> Hello, Home page !</h1>
      <div>
        <Link href="./home">Accueil</Link>
      </div>
    </>
  );
}
