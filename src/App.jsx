import './App.css'
import './index.css'
import UnionImage from './components/IMG/Union.png'
import ServImg from './components/IMG/Frame 953.png'
import Pic1 from './components/IMG/Frame1.png'
import Pic2 from './components/IMG/Frame2.png'
import Pic3 from './components/IMG/Frame3.png'
import Pic4 from './components/IMG/Frame4.png'
import Pic5 from './components/IMG/Frame5.png'
import Pic6 from './components/IMG/Frame6.png'
import Pic7 from './components/IMG/Frame7.png'
import Pic8 from './components/IMG/Frame8.png'
import Pic9 from './components/IMG/Frame9.png'
import Logo from './components/IMG/logo.png'
import Navbar from './components/Navbar'
import { BsArrowUpRight } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { MdOutlineBuild } from "react-icons/md";
import { MdOutlineDns } from "react-icons/md";




function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <section id="home">
          <div className="home-content">
            <div className="text-content">
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
              <p>Lorem ipsum dolor sit amet consectetur. Non integer vulputate congue amet aliquam lacinia ultricies arcu.</p>

              <div className="button-content">
                <button className="btn">Nuestros proyectos</button>
                <button className="btn home-btn"><BsArrowUpRight size={25} /></button>
              </div>
            </div>
            <div className="image-content">
              <img src={UnionImage} alt="Union" />
            </div>
          </div>
        </section>

        <section id="EnergyType">
          <h2 className='EnergyType-h2'>Types of Energy</h2>
          <div className="box-container">

            <div className="EnergyTypeCards box-1">
              <h2>Wind Energy</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Vel molestie quam ipsum ut nec feugiat tellus. </p>
              <button className="box-btn">See our projects</button>
              <button className="box-btn"><BsArrowUpRight /></button>
            </div>

            <div className="EnergyTypeCards box-2">
              <h2>Solar Energy</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Vel molestie quam ipsum ut nec feugiat tellus. </p>
              <button className="box-btn">See our projects</button>
              <button className="box-btn"><BsArrowUpRight /></button>
            </div>

            <div className="EnergyTypeCards box-3">
              <h2>Green Hydrogen</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Vel molestie quam ipsum ut nec feugiat tellus. </p>
              <button className="box-btn">See our projects</button>
              <button className="box-btn"><BsArrowUpRight /></button>
            </div>
          </div>
        </section>

        <section id="services">
          <h1 className='services-heading'>Services</h1>
          <div className="services-content">
            <div className="services-img-cont">
              <div className="serv-img">
                <img src={ServImg} alt="ServImg" />
              </div>
            </div>

            <div className="services-txt-cont">
              <div className="services-box">
                <button className="servise-btn"><MdOutlineAssignment /></button>
                <div>
                  <h1 className='services-h1'>Inspecciones Técnicas</h1>
                  <p className='services-para'>Lorem ipsum dolor sit amet constetur. Vel molestie quam ipsum ut nec feugiat tellus. </p>
                </div>
              </div>

              <div className="services-box">
                <button className="servise-btn"><MdOutlineBuild /></button>
                <div>
                  <h1 className='services-h1'>Estudios de Ingenieria</h1>
                  <p className='services-para'>Lorem ipsum dolor sit amet constetur. Vel molestie quam ipsum ut nec feugiat tellus. </p>
                </div>
              </div>

              <div className="services-box">
                <button className="servise-btn"><MdOutlineDns /></button>
                <div>
                  <h1 className='services-h1'>Gestión de proyectos</h1>
                  <p className='services-para'>Lorem ipsum dolor sit amet constetur. Vel molestie quam ipsum ut nec feugiat tellus. </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="blog">
          <h1 className='blog-heading'>Blog Posts</h1>
          <div className="all-blogs">
            <div className="blog-box1">
              <div className="blog-content">
                <h1 className='blog-box1-h1'>Lorem ipsum dolor sit amet consectetur.</h1>
                <p className="blog-para">Lorem ipsum dolor sit amet consectetur. Vel molestie quam ipsum ut nec feugiat tellus. </p>
                <button className="blog-btn">Ver más</button>
                <button className="blog-btn btn-1"><BsArrowUpRight /></button>
              </div>
            </div>

            <div className="blog-box2">
              <div className="blog-content">
                <h1 className='blog-box2-h1'>Lorem ipsum dolor sit amet consectetur.</h1>
                <p className="blog-para">Lorem ipsum dolor sit amet consectetur. Vel molestie quam ipsum ut nec feugiat tellus. </p>
                <button className="blog-btn">Ver más</button>
                <button className="blog-btn btn-1"><BsArrowUpRight /></button>
              </div>
            </div>

          </div>
          <div className="all-blogs">

            <div className="blog-box3">
              <div className="blog-content">
                <h1 className='blog-box3-h1'>Lorem ipsum dolor sit amet consectetur.</h1>
                <p className="blog-para">Lorem ipsum dolor sit amet consectetur. Vel molestie quam ipsum ut nec feugiat tellus. </p>
                <button className="blog-btn">Ver más</button>
                <button className="blog-btn btn-1"><BsArrowUpRight /></button>
              </div>
            </div>

            <div className="blog-box4">
              <div className="blog-content">
                <h1 className='blog-box4-h1'>Lorem ipsum dolor sit amet consectetur.</h1>
                <p className="blog-para">Lorem ipsum dolor sit amet consectetur. Vel molestie quam ipsum ut nec feugiat tellus. </p>
                <button className="blog-btn">Ver más</button>
                <button className="blog-btn btn-1"><BsArrowUpRight /></button>
              </div>
            </div>
          </div>

          <div className="all-blogs">

            <div className="blog-box5">
              <div className="blog-content">
                <h1 className='blog-box5-h1'>Lorem ipsum dolor sit amet consectetur.</h1>
                <p className="blog-para">Lorem ipsum dolor sit amet consectetur. Vel molestie quam ipsum ut nec feugiat tellus. </p>
                <button className="blog-btn">Ver más</button>
                <button className="blog-btn btn-1"><BsArrowUpRight /></button>
              </div>
            </div>

            <div className="blog-box6">
              <div className="blog-content">
                <h1 className='blog-box6-h1'>Lorem ipsum dolor sit amet consectetur.</h1>
                <p className="blog-para para-6">Lorem ipsum dolor sit amet consectetur. Vel molestie quam ipsum ut nec feugiat tellus. </p>
                <button className="blog-btn">Ver más</button>
                <button className="blog-btn btn-1"><BsArrowUpRight /></button>
              </div>
            </div>

            <div className="blog-box7">
              <div className="blog-content">
                <h1 className='blog-box6-h1'>Lorem ipsum dolor sit amet consectetur.</h1>
                <p className="blog-para para-6">Lorem ipsum dolor sit amet consectetur. Vel molestie quam ipsum ut nec feugiat tellus. </p>
                <button className="blog-btn">Ver más</button>
                <button className="blog-btn btn-1"><BsArrowUpRight /></button>
              </div>
            </div>
          </div>
        </section>

        <section id="clients">
          <h1 className="clients-h1">Nuestros clientes</h1>
          <p className="clients-para">Lorem ipsum dolor sit amet consectetur. Sit senectus quisque at egestas nibh enim tellus amet. Gravida tellus venenatis nunc fringilla dolor a a tincidunt in. Pulvinar ullamcorper luctus at justo tincidunt odio tempus eu neque. </p>
          <div className="client-images">
            <div className="client-img">
              <img src={Pic1} alt="" />
            </div>
            <div className="client-img">
              <img src={Pic2} alt="" />
            </div>
            <div className="client-img">
              <img src={Pic3} alt="" />
            </div>
            <div className="client-img">
              <img src={Pic4} alt="" />
            </div>
          </div>

          <div className="client-images-2">
            <div className='client-img'>
              <img src={Pic5} alt="" />
            </div>
            <div className="client-img">
              <img src={Pic6} alt="" />
            </div>
            <div className="client-img">
              <img src={Pic7} alt="" />
            </div>
            <div className="client-img">
              <img src={Pic8} alt="" />
            </div>
            <div className="client-img">
              <img src={Pic9} alt="" />
            </div>

          </div >
        </section >

        <section id="contact">
          <h1 className="contact-h1">Lorem ipsum dolor sit amet.
            Habitasse ac pellentesque. </h1>
          <div className="btns">

            <button className="contact-btn">Contáctanos</button>
            <button className="contact-btn arrow-btn"><BsArrowUpRight /></button>
          </div>
        </section>

        <section id="footer">
          <div className="footer-img">
            <img src={Logo} alt="" />
          </div>
          <span>&copy;2025 | All rights reserved</span>
        </section>
      </div >
    </>
  )
}

export default App
