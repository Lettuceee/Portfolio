import "../App.css";
import { Rnd } from 'react-rnd';
import { useRef } from 'react';
import ProjectImg from './ProjectImg.jsx';
import { useState } from 'react';

import HagerTimeline from '../assets/hager175/hager175-timeline.jpg';
import HagerBooth1 from '../assets/hager175/hager175-booth-1.jpg';
import HagerBooth2 from '../assets/hager175/hager175-booth-2.jpg';
import HagerLetterhead from '../assets/hager175/hager175-letterhead.jpg';
import HagerWeb from '../assets/hager175/hager175-web-mockup.jpg';
import HagerPolo from '../assets/hager175/hager175-polo.jpg';
import HagerCap from '../assets/hager175/hager175-cap.jpg';
import HagerSocial from '../assets/hager175/hager175-social.jpg';
import HagerBanners from '../assets/hager175/hager175-banners.jpg';

export default function Hager175 ({
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


    return (
        <div>
            {showWin &&
                <Rnd className="window" id="project"
                minWidth="300px" minHeight="400px" default={{width: defWidth, height: 600, x: defX, y: defY}}
                dragHandleClassName="windowheader" bounds="body"
                noderef={nodeRef} style={{zIndex:`${winIndex}`}}
                onMouseDown={() => {
                        setIndexCount((prevValue) => prevValue + 1)
                        setWinIndex(indexCount)
                    }}>
                        <div className="windowheader">
                            {en && <p>Hager Companies 175th</p>}
                            {jp && <p className="jpFont">ハーガー・カンパニーズ 175周年</p>}
                            <div className="close" onClick={() => setShowWin(false)}></div>
                        </div>
                    <div className="windowContent">
                        <div className="projectContainer">
                            <div style={{textAlign: 'center'}}>
                                {en && <h1>Hager Companies 175th</h1>}
                                {jp && <h1 className="jpFontHeader">ハーガー・カンパニーズ 175周年</h1>}
                            </div>
                            <div className="containerVideo">
                                <iframe src="https://player.vimeo.com/video/1021838016?autoplay=1&amp;loop=1&amp;h=049cd3041e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;muted=1" allow="autoplay; picture-in-picture" className="embed-content" style={{display: 'block', width: '100%', height: '8vw'}} sandbox="allow-presentation allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>
                            </div>
                            {en && <div>
                                <p>In 1849, Charles Hager started his own business in St. Louis, crafting wagon wheel rims 
                                    and hardware for settlers heading west during the gold rush. 175 years and six generations later, 
                                    Hager Companies is still going strong, setting the standard for door hardware.</p>
                                <p>To celebrate this monumentous anniversary, Hager wanted a graphic identity
                                that not only encapsulated the remarkable achievements they have made in the past, but also emenated 
                                a positive outlook for the company's future.</p>
                            </div>}
                            {jp && <div className="jpFont">
                                <p>1849年には、チャールズハガーが自分の企業を始めて、西に向かって金を見つけたい開拓者ためにワゴンの外輪と道具を作りました。
                                六世代後、ハーガーコンパニーズは今でも元気があって、ドアーハードウェアの基準を作っています。</p>
                                <p>大切なイベントを祝うために、ハーガーコンパニーズが過去の成功だけじゃなく、楽観的な未来を表すグラフィックアイデンティティを願望しました。</p>
                            </div>}

                            <div className="containerVideo">
                                <iframe src="https://player.vimeo.com/video/1021845479?h=3167cdfc5e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; picture-in-picture" className="embed-content" style={{display: 'block', width: '100%'}} sandbox="allow-presentation allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>
                            </div>
                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={HagerTimeline} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg1Index(indexCount)
                                        setShowWinImg1(true)
                                    }}/>
                                </div>
                            </div>
                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={HagerBooth1} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg2Index(indexCount)
                                        setShowWinImg2(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={HagerBooth2} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg3Index(indexCount)
                                        setShowWinImg3(true)
                                    }}/>
                                </div>
                            </div>
                             <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={HagerLetterhead} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg4Index(indexCount)
                                        setShowWinImg4(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={HagerWeb} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg5Index(indexCount)
                                        setShowWinImg5(true)
                                    }}/>
                                </div>
                            </div>
                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={HagerCap} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg6Index(indexCount)
                                        setShowWinImg6(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={HagerPolo} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg7Index(indexCount)
                                        setShowWinImg7(true)
                                    }}/>
                                </div>
                            </div>
                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={HagerSocial} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg8Index(indexCount)
                                        setShowWinImg8(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={HagerBanners} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg9Index(indexCount)
                                        setShowWinImg9(true)
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
                    windowImage={HagerTimeline}
                    imageName={'hager175-timeline.jpg'}
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
                    windowImage={HagerBooth1}
                    imageName={'hager175-booth1.jpg'}
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
                    windowImage={HagerBooth2}
                    imageName={'hager175-booth2.jpg'}
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
                    windowImage={HagerLetterhead}
                    imageName={'hager175-letterhead.jpg'}
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
                    windowImage={HagerWeb}
                    imageName={'hager175-web-mockup.jpg'}
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
                    windowImage={HagerCap}
                    imageName={'hager175-cap.jpg'}
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
                    windowImage={HagerPolo}
                    imageName={'hager175-polo.jpg'}
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
                    windowImage={HagerSocial}
                    imageName={'hager175-social.jpg'}
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
                    windowImage={HagerBanners}
                    imageName={'hager175-banners.jpg'}
                />
        </div>
    )
}