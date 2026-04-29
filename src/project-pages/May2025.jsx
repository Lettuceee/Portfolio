import "../App.css";
import { Rnd } from 'react-rnd';
import { useRef } from 'react';
import ProjectImg from './ProjectImg.jsx';
import { useState } from 'react';

import May2025Wonder from '../assets/may2025/may2025-cd-1.jpg';
import May2025Dream from '../assets/may2025/may2025-cd-2.jpg';
import May2025Reflect from '../assets/may2025/may2025-cd-3.jpg';
import May2025Renew from '../assets/may2025/may2025-cd-4.jpg';

import SideCloud from '../assets/may2025/sideyard-cloud.jpg';
import LongBlur from '../assets/may2025/longview-blur.jpg';
import LongRoad from '../assets/may2025/longview-road.jpg';
import TXSun from '../assets/may2025/tx-sunrise.jpg';

import Shirt1 from '../assets/may2025/may2025-shirt-1.jpg';
import Shirt2 from '../assets/may2025/may2025-shirt-2.jpg';
import Tote from '../assets/may2025/may2025-tote.jpg';
import Vinyl from '../assets/may2025/may2025-vinyl.jpg';
import Series from '../assets/may2025/may2025-series.jpg';

export default function May2025 ({
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
    const [winImg8, setShowWinImg8] = useState(false);
    const [img8Index, setImg8Index] = useState(1);

    const [winImg9, setShowWinImg9] = useState(false);
    const [img9Index, setImg9Index] = useState(1);
    const [winImg10, setShowWinImg10] = useState(false);
    const [img10Index, setImg10Index] = useState(1);  
    const [winImg11, setShowWinImg11] = useState(false);
    const [img11Index, setImg11Index] = useState(1);  
    const [winImg12, setShowWinImg12] = useState(false);
    const [img12Index, setImg12Index] = useState(1); 
    const [winImg13, setShowWinImg13] = useState(false);
    const [img13Index, setImg13Index] = useState(1);  


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
                            {en && <p>May2025 Poster Series</p>}
                            {jp && <p className="jpFont">May2025 ポスターシリーズ</p>}
                            <div className="windowDrag"></div>
                            <div className="close" onClick={() => setShowWin(false)}></div>
                        </div>
                    <div className="windowContent">
                        <div className="projectContainer">
                            <div style={{textAlign: 'center'}}>
                                {en && <h1>May2025 Poster Series</h1>}
                                {jp && <h1 className="jpFontHeader">May2025 ポスターシリーズ</h1>}
                            </div>
                            {en && <div>
                                <p>It was a sunny evening. I look outside my window and see a towering cumulonimbus.
                                I think to myself, "That would make for a cool poster."
                                A few hours and adjustment layers later, Wonder was created. This spontaneous project would quickly
                                turn into a four-part series, and Wonder would be followed by Dream, Reflect and Renew.</p>
                                <p>I wanted to aim for something minimalistic and Helvetica-inspired. Think Weeknd album covers.</p>
                            </div>}
                            {jp && <div className="jpFont">
                                <p>晴れな夕方でした。窓の外に見て、すっごい入道雲でした。「かっこいいポスターになるだろう」と思った
                                    調整レイヤーと実験して数時間後、「ワンダー」が作成された。この唐突なプロジェクトがすぐに四枚ポスターシリーズに進化して、
                                    「ワンダー」の後に、「ドリーム」、「リフレクト」、「リニュー」が続きました。</p>
                                <p>ミニマリズムとフォントのHelveticaから影響に受けて、「Weeknd」のアルバムカバーのようなポスターを作りたかった。</p>
                            </div>}
                                
                            <div className="containerFlex" style={{paddingBottom: '5%'}}>
                                <div className="imgContainer">
                                    <img src={May2025Wonder} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg1Index(indexCount)
                                        setShowWinImg1(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={May2025Dream} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg2Index(indexCount)
                                        setShowWinImg2(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={May2025Reflect} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg3Index(indexCount)
                                        setShowWinImg3(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={May2025Renew} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg4Index(indexCount)
                                        setShowWinImg4(true)
                                    }}/>
                                </div>
                            </div>
                            {en && <p>The first three images were taken on my phone, and the last was taken by a friend who graciously
                                gave me permission to use for this series.</p>}
                            {jp && <p className="jpFont">最初の三枚の写真は携帯で撮って、最後の写真はこのシリーズに使うに友達から許可を得ました。</p>}

                             <div className="containerFlex" style={{paddingBottom: '5%'}}>
                                <div className="imgContainer">
                                    <img src={SideCloud} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg5Index(indexCount)
                                        setShowWinImg5(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={LongBlur} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg6Index(indexCount)
                                        setShowWinImg6(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={LongRoad} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg7Index(indexCount)
                                        setShowWinImg7(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={TXSun} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg8Index(indexCount)
                                        setShowWinImg8(true)
                                    }}/>
                                </div>
                            </div>
                            {en && <p>I wanted to see how these projects would translate to other forms of
                                printed media. Why stop at posters?
                            </p>}
                            {jp && <p className="jpFont">別の印刷メディアでどう見えるかを見たかった。なんでポスターだけ？</p>}
                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={Shirt1} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg9Index(indexCount)
                                        setShowWinImg9(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={Tote} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg10Index(indexCount)
                                        setShowWinImg10(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={Vinyl} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg11Index(indexCount)
                                        setShowWinImg11(true)
                                    }}/>
                                </div>
                            </div>
                            <div className="containerFlex" style={{paddingBottom: '5%'}}>
                                <div className="imgContainer">
                                    <img src={Shirt2} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg12Index(indexCount)
                                        setShowWinImg12(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={Series} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg13Index(indexCount)
                                        setShowWinImg13(true)
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
                    windowImage={May2025Wonder}
                    imageName={'may2025-wonder.jpg'}
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
                    windowImage={May2025Dream}
                    imageName={'may2025-dream.jpg'}
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
                    windowImage={May2025Reflect}
                    imageName={'may2025-reflect.jpg'}
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
                    windowImage={May2025Renew}
                    imageName={'may2025-renew.jpg'}
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
                    windowImage={SideCloud}
                    imageName={'sideyard-cloud.jpg'}
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
                    windowImage={LongBlur}
                    imageName={'longview-blur.jpg'}
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
                    windowImage={LongRoad}
                    imageName={'longview-road.jpg'}
                />  
                <ProjectImg
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img8Index}
                    setWinIndex={setImg8Index}
                    showWin={winImg8}
                    setShowWin={setShowWinImg8}
                    windowImage={TXSun}
                    imageName={'texas-sunrise.jpg'}
                />
                <ProjectImg
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img9Index}
                    setWinIndex={setImg9Index}
                    showWin={winImg9}
                    setShowWin={setShowWinImg9}
                    windowImage={Shirt1}
                    imageName={'may2025-shirt-1.jpg'}
                />
                <ProjectImg
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img10Index}
                    setWinIndex={setImg10Index}
                    showWin={winImg10}
                    setShowWin={setShowWinImg10}
                    windowImage={Tote}
                    imageName={'may2025-tote.jpg'}
                />
                <ProjectImg
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img11Index}
                    setWinIndex={setImg11Index}
                    showWin={winImg11}
                    setShowWin={setShowWinImg11}
                    windowImage={Vinyl}
                    imageName={'may2025-vinyl.jpg'}
                />  
                <ProjectImg
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img12Index}
                    setWinIndex={setImg12Index}
                    showWin={winImg12}
                    setShowWin={setShowWinImg12}
                    windowImage={Shirt2}
                    imageName={'may2025-shirt-2.jpg'}
                />  
                <ProjectImg
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img13Index}
                    setWinIndex={setImg13Index}
                    showWin={winImg13}
                    setShowWin={setShowWinImg13}
                    windowImage={Series}
                    imageName={'may2025-series.jpg'}
                />  
        </div>
    )
}