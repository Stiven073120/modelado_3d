"use client";

import React, { useState } from "react";
import Image from "next/image";
import ButtonSidebar from "../components/Button_sidebar";
import ButtonSidebarPrincipal from "../components/Button_sidebar_principal";

const ModeladoPage = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (title) => {
    setSelectedButton(title);
  };

  return (
    <>
      <main className="min-h-screen flex flex-row">
        <div className="w-1/4 flex flex-col">
          <section className="p-5 flex items-center justify-center">
            <Image
              src="/images/logo_empresarial.png"
              alt="Logo"
              width={300}
              height={200}
            />
          </section>
          <section className="h-full bg-azul_primario flex flex-col justify-center gap-10">
            <ButtonSidebarPrincipal
              title="MAQUETA WEB"
              isSelected={selectedButton === "maqueta web"}
              onClick={() => handleButtonClick("maqueta web")}
            />
            <ButtonSidebarPrincipal
              title="APARTAMENTOS"
              isSelected={selectedButton === "apartamentos"}
              onClick={() => handleButtonClick("apartamentos")}
            />
            <ButtonSidebarPrincipal
              title="LOCALIZACION"
              isSelected={selectedButton === "localizacion"}
              onClick={() => handleButtonClick("localizacion")}
            />
          </section>
          <section className="h-1/4 p-5 bg-azul_primario flex items-center justify-center">
            <div className="inline-flex flex-col items-center justify-center p-3 bg-white rounded-xl">
              <Image
                src="/images/logo_empresarial.png"
                alt="Logo"
                width={175}
                height={85}
              />
              <ButtonSidebar title="Componente" />
            </div>
          </section>
        </div>
        <div className="bg-black w-full flex items-center justify-center">
          {/* Modelado canva */}
        </div>
      </main>
    </>
  );
};

export default ModeladoPage;
