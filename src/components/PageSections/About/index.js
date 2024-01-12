import React, { Fragment } from 'react';
// import About from './components/About';
import Section from '../../Section/Section';
import MeetingForm from '../../../components/Form/MeetingForm';

import aboutMeImg  from "../../../assets/img/me/me_photo.jpg"
const AboutComponent = () => {
  return (
    <Section>
    {/* <Fade delay={300} direction="right"> */}
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-1">
      <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col justify-center xl:ml-6">
        <h2 className="text-6xl xl:text-5xl text-center  text-primary font-bold">
            Sobre mí
          </h2>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
          <div className="col-span-2 xl:col-span-1 flex flex-col">
            {/* <img
              src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1691681682/Projects/unne/img/experienciaUsuarios/mujer.png"
              alt="about-img"
              className="rounded-full h-[200px] w-[200px] mt-10 mx-14 md:mx-2 md:w-[300px] md:h-[300px] xl:w-[360px] xl:h-[360px] md:mt-24 xl:mt-20 xl:mx-2"
            /> */}
            <img
              src={aboutMeImg}
              alt="about-img"
              className="rounded-full object-cover h-[200px] w-[200px] mt-10 mx-14 md:mx-2 md:w-[300px] md:h-[300px] xl:w-[370px] xl:h-[370px] md:mt-24 xl:mt-28 xl:mx-1"
            />
          </div>
          <div className="col-span-2 xl:col-span-1 ">
            <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-0 xl:text-left xl:mt-16">
              Con más de 3 años de experiencia como corredora en el mercado inmobiliario, estoy comprometida con un constante aprendizaje y crecimiento. Mi afinidad por la venta se complementa con una trayectoria de más de 20 años en atención al cliente.
              <br />
              <br />
              Enfoco mi servicio en tres principios clave: transparencia, eficiencia y eficacia. La transparencia es esencial para construir relaciones de confianza, ofreciendo información clara en cada paso. La eficiencia y eficacia son fundamentales en mi enfoque diario, buscando optimizar resultados y garantizar experiencias inmobiliarias exitosas. Mi pasión por la venta y experiencia en atención al cliente se fusionan para brindar un servicio profesional y orientado a la satisfacción del cliente.
              <br />
            </p>

            <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 md:text-center xl:text-left">
              Natalia Marchant.
            </p>
            <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-1 md:text-center xl:text-left">
              Fundador(a) Teo Tai Propiedades.
            </p>
          </div>
    
        </div>
       
  
      </div>
      <div className="col-span-1 md:col-span-1 xl:col-span-1 flex flex-col justify-center mx-2 xl:ml-24">
      <MeetingForm 
            title="Contacto corredor"
            subtitle="Enviar mensaje"
          />
      </div>

      {/* 
        <div className="pt-10">
          <h2 className="text-2xl xl:text-4xl font-bold text-black text-center sm:text-start">
            “Un largo camino
            <br />
            se inicia con un solo paso...”
          </h2>
        </div> */}
    </div>
    {/* </Fade>  */}
  </Section>
    // <Fragment>
    //   <About />
    // </Fragment>
  );
};

export default AboutComponent;
