"use client";

import Nav from "../../../components/Nav";
import FooterPage from "../../../components/Footer";
import Card from "../../../components/Cards";
import React from "react";
import Link from "next/link";

// pages/profile.client.page.tsx
const ClientProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="bg-[#003C71] text-white no-underline">
        {/*---------------MENU NAV---------------- */}
        <Nav></Nav>
      </div>
      {/*---------------SECTION INFORMATION USER CLIENT---------------- */}
      <section className="h-screen w-full flex flex-col justify-center items-center">
        <div className="info-profile-customer flex justify-around items-center h-3/4 w-4/6 gap-10 p-10">
          <div className=" h-full w-2/6 flex  justify-center items-center">
            <div className="bg-custom-gradient rounded-full h-72 w-72 bg-[#003C71]"></div>
          </div>
          <div className=" w-4/6 h-full p-10 flex justify-start items-center">
            <div className="bg-custom-gradient text-white text-3xl flex justify-around flex-col rounded-sm bg-[#003C71] h-72 w-full p-10 ">
              <h4 className="font-bold ">
                Nombre: <span className="text-sm">Samuel Acevedo Ossa</span>
              </h4>
              <h4 className="font-bold">
                Correo: <span className="text-sm">samuelacevedo9307@gmail.com</span>
              </h4>
              <h4 className="font-bold">
                Nick name: <span className="text-sm">samuelacevedo9307</span>
              </h4>
            </div>
          </div>
        </div>
        {/*-------------- SUBTITLE TARGETS CUSTOMERS---------------- */}
        <div className="title-animation pt-10 pb-10 w-full border-2 border-y-[#003C71] border-t-[#003C71]-500">
          <h3 className="text-5xl text-[#003C71] text-center">
            Mis propiedades
          </h3>
          <h4 className="text-[#747474] text-center text-2xl">
            Descubre las nuevas tendencias e incorporaciones trasadas en el
            ultimo mes.
          </h4>
        </div>
      </section>
      {/*-------------- SECTION TARGETS CUSTOMER---------------- */}
      <section className=" section-cards-customer h-screen flex justify-around items-center p-24  w-full ">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </section>
      <div className="flex justify-center p-10">
        <Link href="/pages/form-new-propieties">
          <button className="button-know-home text-[#003C71] rounded-sm shadow-[#003C71]-500/40 border-t-2 border-b-2 border-[#003C71] p-3">
            Agregar Propiedad
          </button>
        </Link>
      </div>

      {/*-------------- SUBTITLE ANOTHER PROPIETYS---------------- */}
      <div className=" title-animation pt-10 pb-10 w-full border-2 border-y-[#003C71] border-t-[#003C71]-500">
        <h3 className="text-5xl text-[#003C71] text-center">
          Otras propiedades
        </h3>
      </div>
      {/*-------------- SUBTITLE ANOTHER PROPIETIES--------------- */}
      <section className="section-cards-another-propieties flex justify-around items-center p-24 h-full w-full">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </section>
      <div className="flex justify-center p-10">
        <button className="button-know-home text-[#003C71] rounded-sm shadow-[#003C71]-500/40 border-t-2 border-b-2 border-[#003C71] p-3">
          Conoce mas
        </button>
      </div>
      {/*-------------- FOOTER---------------- */}
      <FooterPage></FooterPage>
    </div>
  );
};

export default ClientProfilePage;
