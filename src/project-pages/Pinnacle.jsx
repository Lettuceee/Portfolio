import "../App.css";
import { Rnd } from 'react-rnd';
import { useRef } from 'react';
import ProjectImg from './ProjectImg.jsx';
import { useState } from 'react';

import PinnacleGIF from '../assets/pinnacle/pinnacle-logo.gif';
import PinnacleLogo from '../assets/pinnacle/pinnacle-logo.jpg';
import PinnacleBrand from '../assets/pinnacle/pinnacle-brand-guide.jpg';
import PinnacleBrochure1 from '../assets/pinnacle/pinnacle-brochure-1.jpg'; 
import PinnacleBrochure2 from '../assets/pinnacle/pinnacle-brochure-2.jpg';
import PinnaclePages from '../assets/pinnacle/pinnacle-pages.jpg';
import PinnacleExhibit from '../assets/pinnacle/pinnacle-exhibit.jpg';

export default function Pinnacle ({
    en, jp,
    defWidth, defX, defY,
    indexCount, setIndexCount,
    winIndex, setWinIndex,
    showWin, setShowWin
}) {
    const nodeRef = useRef(null);

    const [winImg1, setShowWinImg1] = useState(false);
    const [img1Index, setImg1Index] = useState(1);
    const [winImg2, setShowWinImg2] = useState(false);
    const [img2Index, setImg2Index] = useState(1);  
    const [winImg3, setShowWinImg3] = useState(false);
    const [img3Index, setImg3Index] = useState(1);  
    const [winImg4, setShowWinImg4] = useState(false);
    const [img4Index, setImg4Index] = useState(1); 
    const [winImg5, setShowWinImg5] = useState(false);
    const [img5Index, setImg5Index] = useState(1);
    const [winImg6, setShowWinImg6] = useState(false);
    const [img6Index, setImg6Index] = useState(1);  
    const [winImg7, setShowWinImg7] = useState(false);
    const [img7Index, setImg7Index] = useState(1);  


    return (
        <div>
            {showWin &&
                <Rnd className="window" id="project"
                minWidth="300px" minHeight="400px" default={{width: defWidth, height: 600, x: defX, y: defY}}
                dragHandleClassName="windowDrag" bounds="body"
                noderef={nodeRef} style={{zIndex:`${winIndex}`}}
                onMouseDown={() => {
                        setIndexCount((prevValue) => prevValue + 1)
                        setWinIndex(indexCount)
                    }}>
                        <div className="windowheader">
                            {en && <p>ASID Pinnacle Awards 2023</p>}
                            {jp && <p className="jpFont">ASID ピナクル賞 2023</p>}
                            <div className="windowDrag"></div>
                            <div className="close" onClick={() => setShowWin(false)}></div>
                        </div>
                    <div className="windowContent">
                        <div className="projectContainer">
                            <div style={{textAlign: 'center'}}>
                                {en && <h1>ASID Pinnacle Awards 2023</h1>}
                                {jp && <h1 className="jpFontHeader">ASID ピナクル賞 2023</h1>}

                            </div>
                            {en && <p>Every two years, the American Society of Interior Designers' Missori East Chapter presents the Pinnacle Awards, celebrating outstanding innovation
                                and ingenuity in the realm of interior design. I was honored to partner with ASID: MO East to bring the branding for 2023's Pinnacle Awards to life.
                            </p>}
                            {jp && <p className="jpFont">隔年、アメリカのインテリアデザインの教会のASIDの東ミズーリ州チャプターは授賞式のピナクル・アワードをして、インテリアデザインのすごいイ
                                ノベーションを祝います。2023年のピナクル・アワードのブランドを生じるためにASIDと協力するのが本当にありがたいでした。</p>}
                            <div className="containerFlex">
                                <div className="imgContainer" style={{width: '100%', height: '400px', backgroundColor: '#275099'}}>
                                    <img src={PinnacleGIF} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg1Index(indexCount)
                                        setShowWinImg1(true)
                                    }}/>
                                </div>
                            </div>
                             <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={PinnacleLogo} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg2Index(indexCount)
                                        setShowWinImg2(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={PinnacleBrand} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg3Index(indexCount)
                                        setShowWinImg3(true)
                                    }}/>
                                </div>
                            </div>
                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={PinnacleBrochure1} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg4Index(indexCount)
                                        setShowWinImg4(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={PinnacleBrochure2} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg5Index(indexCount)
                                        setShowWinImg5(true)
                                    }}/>
                                </div>
                            </div>
                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={PinnaclePages} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg6Index(indexCount)
                                        setShowWinImg6(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={PinnacleExhibit} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg7Index(indexCount)
                                        setShowWinImg7(true)
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Rnd>
                }
                <ProjectImg
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img1Index}
                    setWinIndex={setImg1Index}
                    showWin={winImg1}
                    setShowWin={setShowWinImg1}
                    windowImage={PinnacleGIF}
                    imageName={'pinnacle.gif'}
                />
                <ProjectImg
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img2Index}
                    setWinIndex={setImg2Index}
                    showWin={winImg2}
                    setShowWin={setShowWinImg2}
                    windowImage={PinnacleLogo}
                    imageName={'pinnacle-logo.jpg'}
                />
                <ProjectImg
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img3Index}
                    setWinIndex={setImg3Index}
                    showWin={winImg3}
                    setShowWin={setShowWinImg3}
                    windowImage={PinnacleBrand}
                    imageName={'pinnacle-brand.jpg'}
                />
                <ProjectImg
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img4Index}
                    setWinIndex={setImg4Index}
                    showWin={winImg4}
                    setShowWin={setShowWinImg4}
                    windowImage={PinnacleBrochure1}
                    imageName={'pinnacle-brochure-1.jpg'}
                />
                <ProjectImg
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img5Index}
                    setWinIndex={setImg5Index}
                    showWin={winImg5}
                    setShowWin={setShowWinImg5}
                    windowImage={PinnacleBrochure2}
                    imageName={'pinnacle-brochure-2.jpg'}
                />
                <ProjectImg
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img6Index}
                    setWinIndex={setImg6Index}
                    showWin={winImg6}
                    setShowWin={setShowWinImg6}
                    windowImage={PinnaclePages}
                    imageName={'pinnacle-pages.jpg'}
                />  
                <ProjectImg
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img7Index}
                    setWinIndex={setImg7Index}
                    showWin={winImg7}
                    setShowWin={setShowWinImg7}
                    windowImage={PinnacleExhibit}
                    imageName={'pinnacle-exhibit.jpg'}
                />  
        </div>
    )
}