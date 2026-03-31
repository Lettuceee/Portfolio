import "../App.css";
import { Rnd } from 'react-rnd';
import { useRef } from 'react';
import ProjectImg from './ProjectImg.jsx';
import { useState } from 'react';

import DashiShirt from "../assets/extras/2025-stltaiko-dashi-shirt.jpg";
import Clutter from "../assets/extras/cluttered-mind-cassette.jpg";
import ClutterCase from "../assets/extras/cluttered-mind-cassette-mockup.jpg";
import DonutClock from "../assets/extras/donut-o-clock.jpg";
import ENJPLE from "../assets/extras/enjple-poster.jpg";
import VRNihongo from "../assets/extras/vr-nihongo-poster.jpg";
import Radical from "../assets/extras/radical-refresh-flavors.jpg";
import MeatballSide from "../assets/extras/rolling-meatball-side.jpg";
import MeatballFront from "../assets/extras/rolling-meatball-front.jpg";
import Gate from "../assets/extras/laser-cut-gate.png";
import Flygon from "../assets/extras/pokemon-tcg-entry-flygon.jpg";

export default function Extras ({
    en, jp, indexCount, setIndexCount, winIndex, setWinIndex, showWin, setShowWin
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
    const [winImg8, setShowWinImg8] = useState(false);
    const [img8Index, setImg8Index] = useState(1);
    const [winImg9, setShowWinImg9] = useState(false);
    const [img9Index, setImg9Index] = useState(1);
    const [winImg10, setShowWinImg10] = useState(false);
    const [img10Index, setImg10Index] = useState(1);
    const [winImg11, setShowWinImg11] = useState(false);
    const [img11Index, setImg11Index] = useState(1);


    return (
        <div>
            {showWin &&
                <Rnd className="window" id="extras"
                minWidth="200px" minHeight="300px" default={{width: 600, height: 400, x: 200, y: 200}}
                dragHandleClassName="windowheader" bounds="body"
                noderef={nodeRef} style={{zIndex:`${winIndex}`}}
                onMouseDown={() => {
                        setIndexCount((prevValue) => prevValue + 1)
                        setWinIndex(indexCount)
                    }}>
                        <div className="windowheader">
                            {en &&<p>Extras</p>}
                            {jp &&<p>エクストラ</p>}
                            <div className="close" onClick={() => setShowWin(false)}></div>
                        </div>
                    <div className="windowContent">
                        <div className="projectsContainer">
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${DashiShirt})`}}
                                        onDoubleClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg1Index(indexCount)
                                        setShowWinImg1(true)
                                    }}></div>
                                    <div>2025-stltaiko-dashi-shirt.jpg</div>
                                </div>
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${Clutter})`}}
                                        onDoubleClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg2Index(indexCount)
                                        setShowWinImg2(true)
                                    }}></div>
                                    <div>cluttered-mind-cassette.jpg</div>
                                </div>
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${ClutterCase})`}}
                                        onDoubleClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg3Index(indexCount)
                                        setShowWinImg3(true)
                                    }}></div>
                                    <div>cluttered-mind-cassette-mockup.jpg</div>
                                </div> 
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${DonutClock})`}}
                                        onDoubleClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg4Index(indexCount)
                                        setShowWinImg4(true)
                                    }}></div>
                                    <div>donut-o-clock.jpg</div>
                                </div>
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${ENJPLE})`}}
                                    onDoubleClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg5Index(indexCount)
                                        setShowWinImg5(true)
                                    }}></div>
                                    <div>enjple-poster.jpg</div>
                                </div>
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${VRNihongo})`}}
                                    onDoubleClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg6Index(indexCount)
                                        setShowWinImg6(true)
                                    }}></div>
                                    <div>vr-nihongo-poster.jpg</div>
                                </div>
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${Radical})`}}
                                    onDoubleClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg7Index(indexCount)
                                        setShowWinImg7(true)
                                    }}></div>
                                    <div>radical-refresh-flavors.jpg</div>
                                </div>
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${MeatballSide})`}}onDoubleClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg8Index(indexCount)
                                        setShowWinImg8(true)
                                    }}></div>
                                    <div>rolling-meatball-side.jpg</div>
                                </div>
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${MeatballFront})`}}
                                    onDoubleClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg9Index(indexCount)
                                        setShowWinImg9(true)
                                    }}></div>
                                    <div>rolling-meatball-front.jpg</div>
                                </div>
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${Gate})`}}
                                    onDoubleClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg10Index(indexCount)
                                        setShowWinImg10(true)
                                    }}></div>
                                    <div>laser-cut-gate.png</div>
                                </div>
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${Flygon})`}}
                                    onDoubleClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg11Index(indexCount)
                                        setShowWinImg11(true)
                                    }}></div>
                                    <div>pokemon-tcg-entry-flygon.jpg</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Rnd>
                }
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img1Index}
                    setWinIndex={setImg1Index}
                    showWin={winImg1}
                    setShowWin={setShowWinImg1}
                    windowImage={DashiShirt}
                    imageName={'2025-stltaiko-dashi-shirt.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img2Index}
                    setWinIndex={setImg2Index}
                    showWin={winImg2}
                    setShowWin={setShowWinImg2}
                    windowImage={Clutter}
                    imageName={'cluttered-mind-cassette.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img3Index}
                    setWinIndex={setImg3Index}
                    showWin={winImg3}
                    setShowWin={setShowWinImg3}
                    windowImage={ClutterCase}
                    imageName={'cluttered-mind-cassette-mockup.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img4Index}
                    setWinIndex={setImg4Index}
                    showWin={winImg4}
                    setShowWin={setShowWinImg4}
                    windowImage={DonutClock}
                    imageName={'donut-o-clock.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img5Index}
                    setWinIndex={setImg5Index}
                    showWin={winImg5}
                    setShowWin={setShowWinImg5}
                    windowImage={ENJPLE}
                    imageName={'enjple-poster.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img6Index}
                    setWinIndex={setImg6Index}
                    showWin={winImg6}
                    setShowWin={setShowWinImg6}
                    windowImage={VRNihongo}
                    imageName={'vr-nihongo-poster.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img7Index}
                    setWinIndex={setImg7Index}
                    showWin={winImg7}
                    setShowWin={setShowWinImg7}
                    windowImage={Radical}
                    imageName={'radical-refresh-flavors.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img8Index}
                    setWinIndex={setImg8Index}
                    showWin={winImg8}
                    setShowWin={setShowWinImg8}
                    windowImage={MeatballSide}
                    imageName={'rolling-meatball-side.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img9Index}
                    setWinIndex={setImg9Index}
                    showWin={winImg9}
                    setShowWin={setShowWinImg9}
                    windowImage={MeatballFront}
                    imageName={'rolling-meatball-front.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img10Index}
                    setWinIndex={setImg10Index}
                    showWin={winImg10}
                    setShowWin={setShowWinImg10}
                    windowImage={Gate}
                    imageName={'laser-cut-gate.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img11Index}
                    setWinIndex={setImg11Index}
                    showWin={winImg11}
                    setShowWin={setShowWinImg11}
                    windowImage={Flygon}
                    imageName={'pokemon-tcg-entry-flygon.jpg'}
                />
        </div>
    )
}