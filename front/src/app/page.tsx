"use client";

import styled from "styled-components";
import Nav from "@/components/Nav";

//HERO
const Container = styled.div`
  font-family: Roboto, sans-serif;
  width: 100%;
  height: 100%;
`;

const MainSection = styled.section`
  text-align: left;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 15%;
  background: url(/acces/img/HERO.png);
  background-size: cover;
`;

const TitleH1 = styled.h1`
  font-size: 3rem;
  font-size: 10rem;
  color: #003c71;
  height: 11rem;
  width: 100%;
`;

const Subtitle = styled.h2`
  font-size: 5rem;
  margin-bottom: 20px;
  color: white;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ffffff44;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #003c71;
  }
`;
// FIN HERO
const Titleh3 = styled.h3`
  width: 100%;
  text-align: center;
  padding: 20px 0;
  width: 100%;
  font-size: 3rem;
  border-top: solid 2px #003c71;
  border-bottom: solid 2px #003c71;
  color: #003c71;
`;

const Services = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const IconServices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 20rem;
  border: solid 1px black;
`;

const ImgIconArrendamiento = styled.img`
  height: 70%;
  width: 100%;

  border: solid 1px black;
`;

const HomePage: React.FC = () => {
  return (
    <Container>
      <MainSection>
        {/*---------------NAV---------------- */}
        <Nav />
        {/*---------------SECTION HERO---------------- */}
        <div className="ml-5">
          <TitleH1>Medellín</TitleH1>
          <Subtitle>Un lugar para vivir</Subtitle>
          <Button>Conoce más</Button>
        </div>
      </MainSection>
      <Titleh3>¿Qué desea realizar hoy?</Titleh3>
      {/*---------------SECTION ICONS CUSTOMERS---------------- */}
      <section className="h-60 w-100 p-5 flex flex-row flex-nowrap justify-around align-around bg-[#003C71] mb-10 mt-40">
        <div className="w-1/4 h-full flex justify-center items-center flex-col text-center">
          <img src="/acces/icons/arrendatario.png"
            alt="arrendatario"
            className="h-3/5 cursor-pointer"
          />
          <h4 className="h-1/5 w-full flex justify-center items-center text-white font-bold cursor-pointer">
            Arrendatario
          </h4>
        </div>
        <div className="w-1/4 h-fullx flex justify-center items-center flex-col text-center ">
          <img
            src="/acces/icons/arrendamiento.png"
            alt="arrendador"
            className="h-3/5 cursor-pointer object-fill"
          />
          <h4 className="h-1/5 w-full flex justify-center items-center text-white font-bold cursor-pointer">
            Arrendador
          </h4>
        </div>
        <div className="w-1/4 h-full flex justify-center items-center flex-col text-center">
          <img
            src="/acces/icons/vendedor.png"
            alt="vendedor"
            className="h-3/5 cursor-pointer"
          />
          <h4 className="h-1/5 w-full flex justify-center items-center  text-white font-bold cursor-pointer">
            Vendedor
          </h4>
        </div>
      </section>
      {/*---------------SECTION TARGETS "DESTACADOS"---------------- */}
      <section className="h-full w-full mt-40">
        {/*---------------TITLE 2 "DESTACADOS" AND DESCRIPTION----------- */}
        <div className="flex flex-col ">
          <Titleh3>Destacados</Titleh3>
          <h4 className="text-[#747474] text-center ">
            Descubre las nuevas tendencias e incorporaciones trasadas en el
            ultimo mes.
          </h4>
        </div>
        {/*---------------TARGETS---------------- */}
        <div className="flex justify-between items-center container-cards h-full w-full gap-40 p-10">
          {/*---------------CONTAINER TARGETS---------------- */}
          {/*---------------CARD 1---------------- */}
          <div className="flex flex-wrap w-2/6 h-full rounded-md shadow-lg shadow-gray-500/50">
            <div className="h-60 w-full object-contain rounded-md">
              <img
                src="/acces/img/HERO.png"
                alt="place"
                className="h-full w-full rounded-md"
              />
            </div>
            <div className="h-2/4 w-full bg-[#003C71] text-white ">
              <h4 className="bg-white text-[#003C71] font-bold pl-5">
                Nombre propiedad
              </h4>
              <div className="flex flex-row justify-around items-center w-full p-1">
                <p className="font-bold">Precio</p>
                <p className="bg-[#ffffff58] p-1 rounded-md">2.000.000</p>
              </div>
              <div className=" flex p-5 text-center text-xs">
                <div className="flex flex-col w-2/6">
                  <p>habitaciones</p>
                  <p>2</p>
                </div>
                <div className="flex flex-col w-2/6">
                  <p>baños</p>
                  <p>1</p>
                </div>
                <div className="flex flex-col w-2/6">
                  <p>area</p>
                  <p>60</p>
                </div>
              </div>
              <div className=" flex justify-center items-center w-full bg-[#003C71] p-3">
                <button className="bg-white w-1/4 text-[#003C71] rounded-sm shadow-md-white">
                  Ver
                </button>
              </div>
            </div>
          </div>
          {/*---------------CARD 2---------------- */}
          <div className="flex flex-wrap w-2/6 h-full rounded-md shadow-lg shadow-gray-500/50">
            <div className="h-60 w-full object-contain rounded-md">
              <img
                src="/acces/img/HERO.png"
                alt="place"
                className="h-full w-full rounded-md"
              />
            </div>
            <div className="h-2/4 w-full bg-[#003C71] text-white ">
              <h4 className="bg-white text-[#003C71] font-bold pl-5">
                Nombre propiedad
              </h4>
              <div className="flex flex-row justify-around items-center w-full p-1">
                <p className="font-bold">Precio</p>
                <p className="bg-[#ffffff58] p-1 rounded-md">2.000.000</p>
              </div>
              <div className=" flex p-5 text-center text-xs">
                <div className="flex flex-col w-2/6">
                  <p>habitaciones</p>
                  <p>2</p>
                </div>
                <div className="flex flex-col w-2/6">
                  <p>baños</p>
                  <p>1</p>
                </div>
                <div className="flex flex-col w-2/6">
                  <p>area</p>
                  <p>60</p>
                </div>
              </div>
              <div className=" flex justify-center items-center w-full bg-[#003C71] p-3">
                <button className="bg-white w-1/4 text-[#003C71] rounded-sm shadow-md-white">
                  Ver
                </button>
              </div>
            </div>
          </div>
          {/*---------------CARD 3---------------- */}
          <div className="flex flex-wrap w-2/6 h-full rounded-md shadow-lg shadow-gray-500/50">
            <div className="h-60 w-full object-contain rounded-md">
              <img
                src="/acces/img/HERO.png"
                alt="place"
                className="h-full w-full rounded-md"
              />
            </div>
            <div className="h-2/4 w-full bg-[#003C71] text-white ">
              <h4 className="bg-white text-[#003C71] font-bold pl-5">
                Nombre propiedad
              </h4>
              <div className="flex flex-row justify-around items-center w-full p-1">
                <p className="font-bold">Precio</p>
                <p className="bg-[#ffffff58] p-1 rounded-md">2.000.000</p>
              </div>
              <div className=" flex p-5 text-center text-xs">
                <div className="flex flex-col w-2/6">
                  <p>habitaciones</p>
                  <p>2</p>
                </div>
                <div className="flex flex-col w-2/6">
                  <p>baños</p>
                  <p>1</p>
                </div>
                <div className="flex flex-col w-2/6">
                  <p>area</p>
                  <p>60</p>
                </div>
              </div>
              <div className=" flex justify-center items-center w-full bg-[#003C71] p-3">
                <button className="bg-white w-1/4 text-[#003C71] rounded-sm shadow-md-white">
                  Ver
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*---------------BUTTON MORE TARGETS---------------- */}
        <div className="flex justify-center items-center w-full">
          <button className="bg-[#003C71] w-1/6 text-white rounded-sm shadow-[#003C71]-500/40">
            Conoce mas
          </button>
        </div>
      </section>
      {/*---------------TECNOLOGYS---------------- */}
      <section className="flex w-full h-full p-5 justify-around items-center gap-20 mt-40">
        <div className=" flex justify-center w-2/12 h-40">
          <img
            src="/acces/img/nextjs_logo.png"
            alt=""
            className="object-contain "
          />
        </div>
        <div className=" flex justify-center w-2/12 h-40">
          <img
            src="/acces/img/mysql_logo.png"
            alt=""
            className="object-contain"
          />
        </div>
        <div className=" flex justify-center w-2/12 h-40">
          <img
            src="/acces/img/logoJava.png"
            alt=""
            className="object-contain"
          />
        </div>
      </section>
      {/*---------------SECTION FOOTER---------------- */}
      <section className="h-60 w-full p-10 flex justify-center items-center gap-10 text-left mt-40 shadow-inner shadow-blue-900/50">
        <div className="h-40 w-full flex flex-col justify-center">
          <div>
            <h1 className="text-8xl text-[#003C71] text-center">Logo</h1>
          </div>
        </div>
        <div className="h-40 w-full flex flex-col justify-center items-center">
          <h3 className="text-[#003C71] font-bold text-3xl">Menu</h3>
          <ul className="h-full font-semibold text-[#003C71] pt-5 text-lg">
            <li className="w-2/6">Inicio</li>
            <li className="w-2/6">Servicios</li>
            <li className="w-2/6">Nosotros</li>
          </ul>
        </div>
        <div className="h-40 w-full flex flex-col items-center ">
          <h3 className="text-[#003C71] font-bold text-3xl">Redes sociales</h3>
          <div className="h-full flex justify-between items-center p-10 ">
            <img
              src="/acces/icons/instagram.png"
              alt=""
              className="w-1/3 p-5"
            />
            <img src="/acces/icons/correo.png" alt="" className="w-1/3 p-5" />
            <img src="/acces/icons/whatsapp.png" alt="" className="w-1/3 p-5" />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HomePage;
