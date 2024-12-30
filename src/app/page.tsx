import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <title>Modelado 3D</title>
      <div className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-[url('/images/fondo.png')] bg-cover">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <main className="relative w-full flex flex-col items-center">
          <div className="w-1/2 bg-white rounded-lg flex flex-col items-center p-8 shadow-md gap-6 relative z-10">
            <Image
              src="/images/logo_empresarial.png"
              alt="Imagen"
              width={350}
              height={170}
              priority
            />
            <p className="text-center">
              Las imágenes representadas son una ilustración grafica del
              proyecto, el mobiliario, electrodomésticos, acabados y demás
              elementos en el documento ilustrado no comprometen a INVERSIONES
              MUZZÚ
            </p>
            <Link
              href="/modelado"
              className="bg-azul_primario text-white font-semibold text-lg rounded-2xl px-16 py-3 mb-4 hover:bg-azul_secundario transition duration-300"
            >
              Ingresar
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
