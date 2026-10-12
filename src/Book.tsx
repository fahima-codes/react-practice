interface BookProps {
  name:string
}

export default function Book({ name }: { name: string }:BookProps) {
  return <li>Book name:{name}</li>;
}
