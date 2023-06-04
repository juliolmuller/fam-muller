import Button from '~/components/button'

export default function CallToAction() {
  return (
    <div className="flex flex-col items-center gap-8 pb-16 pt-8">
      <p className="text-center text-4xl font-bold text-brand-800">
        Acessar a pplataforma
      </p>

      <Button className="px-8" href="/feed">
        Entrar ou Registrar-se
      </Button>
    </div>
  )
}
