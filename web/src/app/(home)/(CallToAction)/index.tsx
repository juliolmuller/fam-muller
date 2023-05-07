import Button from '~/components/button';

export default function CallToAction() {
  return (
    <div className="flex flex-col items-center gap-8 pt-8 pb-16">
      <p className="text-brand-800 text-4xl font-bold">Acessar a pplataforma</p>

      <Button className="px-8">Entrar ou Registrar-se</Button>
    </div>
  );
}
