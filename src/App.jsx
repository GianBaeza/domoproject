import { Pivot as Hamburger } from 'hamburger-react';
import './App.css';
import { useState } from 'react';
import Circulos from './Components/Circulos';

const logoImg = 'https://i.postimg.cc/nrvhS1Fz/image-Photoroom.png';

const CircleMain = [
    { title: "PROTOTYPING", color: "blue" },
    { title: "BRANDING", color: "purple" },
    { title: "DESIGN", color: "green" },
    { title: "STRATEGY", color: "red" }
];


const brandLogos = [
    { name: "ecoxygen", image: "https://i.postimg.cc/d1CGY1Gx/image-Photoroom-1.png" },
    { name: "techcube", image: "https://i.postimg.cc/TYfgzT1t/image-Photoroom-2.png" },
    { name: "touch", image: "https://i.postimg.cc/GmSDTYQf/image-Photoroom-3.png" },
    { name: "cloudbar", image: "https://i.postimg.cc/ZqGyVSXF/image-Photoroom-4.png" },
    { name: "GROWTH", image: "https://i.postimg.cc/KjNkGgjJ/image-Photoroom-5.png" }
];

function App() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className='Background'>
            <header className='header'>
                <img src={logoImg} alt="logo descriptivo" className='logo' />
                <nav>
                    <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
                </nav>
            </header>


            <div className="container-fluid main">
                {
                    CircleMain.map((circleData, i) => (
                        <Circulos
                            key={i}
                            title={circleData.title}
                            color={circleData.color}
                            styleTitle='title'
                            style="divCircle "
                        />
                    ))
                }
            </div>

            <footer className='brands'>
                <h3>We worked with the world's biggest brands</h3>
                <div className='logos'>
                    {
                        brandLogos.map((brand, i) => (
                            <div key={i} className='logoItem'>
                                <img src={brand.image} alt={`${brand.name} logo`} className='brandLogo' />
                                <span>{brand.name}</span>
                            </div>
                        ))
                    }
                </div>
            </footer>
        </div>
    );
}

export default App;
