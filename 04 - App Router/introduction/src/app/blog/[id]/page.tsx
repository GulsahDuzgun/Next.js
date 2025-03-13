import Link from 'next/link';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>{params.id}</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
