import { Button, Headline, Link, Paragraph } from "./components"

export default function NotFound() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <Headline>404</Headline>
      <Paragraph className="my-5">No hemos encontrado la página a la que ingresaste.</Paragraph>
      <Link href="/" className="!p-0">
        <Button as="span" variant="featured">
          Volver al inicio
        </Button>
      </Link>
    </div>
  )
}
