import "../App.css";
import { Rnd } from 'react-rnd';
import { useRef } from 'react';
import ProjectImg from './ProjectImg.jsx';
import { useState } from 'react';

import HBGallup from '../assets/hb/hb-gallup-survey.gif';
import HBKC from '../assets/hb/hb-kc-charlie-hustle-tee.jpg';
import HBChoco from '../assets/hb/hb-chocolate-sleeve.jpg';
import HBPopupHoodie from '../assets/hb/hb-popup-shop-hoodie.jpg';
import HBPopupLS from '../assets/hb/hb-popup-shop-longsleeve.jpg';
import HBMoveCrew from '../assets/hb/hb-move-crew-tee.jpg';
import HBRace from '../assets/hb/hb-race-judicata-tee.jpg';

export default function HuschBlackwell ({
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


    return (
        <div>
            {showWin &&
                <Rnd className="window" id="project"
                minWidth="600px" minHeight="400px" default={{width: 700, height: 600, x: 200, y: 200}}
                dragHandleClassName="windowheader" bounds="body"
                noderef={nodeRef} style={{zIndex:`${winIndex}`}}
                onMouseDown={() => {
                        setIndexCount((prevValue) => prevValue + 1)
                        setWinIndex(indexCount)
                    }}>
                        <div className="windowheader">
                            {en && <p>Husch Blackwell</p>}
                            {jp && <p className="jpFont">ハッシュ・ブラックウェル</p>}

                            <div className="close" onClick={() => setShowWin(false)}></div>
                        </div>
                    <div className="windowContent">
                        <div className="projectContainer">
                            <div style={{textAlign: 'center'}}>
                                {en && <h1>Husch Blackwell</h1>}
                                {jp && <h1 className="jpFontHeader">ハッシュ・ブラックウェル</h1>}

                            </div>
                            {en && <p>Husch Blackwell is a national business and litigation firm that prides itself on its uncommon, people-first approach. Through its
                                values, identity and merchandise, Husch Blackwell isn't afraid to set itself apart and push the boundaries of how a law firm's
                                brand should be perceived.</p>}
                            {jp && <p className="jpFont">ハッシュ・ブラックウェルは全国的な企業と訴訟事務所で、異常な人々に大切する考え方を自慢しています。価値、アイデンティティや商品などで
                                ハッシュ・ブラックウェルは目立って、法律事務所のブランドがどう認識されるべきかを広げるのを恐れません。</p>}
                            <div className="containerVideo">
                                <iframe src="https://player.vimeo.com/video/1081372409?h=fe891b79f7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" style={{display: 'block', width: '100%'}} title="2023 Gallup Survey Final"></iframe>
                            </div>
                            <div className="containerFlex">
                                <div className="imgContainer" style={{width: '100%'}}>
                                    <img src={HBGallup} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg1Index(indexCount)
                                        setShowWinImg1(true)
                                    }}/>
                                </div>
                            </div>
                             <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={HBPopupHoodie} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg4Index(indexCount)
                                        setShowWinImg4(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={HBPopupLS} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg5Index(indexCount)
                                        setShowWinImg5(true)
                                    }}/>
                                </div>
                            </div>
                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={HBMoveCrew} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg6Index(indexCount)
                                        setShowWinImg6(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={HBRace} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg7Index(indexCount)
                                        setShowWinImg7(true)
                                    }}/>
                                </div>
                            </div>
                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={HBKC} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg2Index(indexCount)
                                        setShowWinImg2(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={HBChoco} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg3Index(indexCount)
                                        setShowWinImg3(true)
                                    }}/>
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
                    windowImage={HBGallup}
                    imageName={'hb-gallup-survey-gif'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img2Index}
                    setWinIndex={setImg2Index}
                    showWin={winImg2}
                    setShowWin={setShowWinImg2}
                    windowImage={HBKC}
                    imageName={'hb-kc-charlie-hustle-tee.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img3Index}
                    setWinIndex={setImg3Index}
                    showWin={winImg3}
                    setShowWin={setShowWinImg3}
                    windowImage={HBChoco}
                    imageName={'hb-chocolate-sleeve.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img4Index}
                    setWinIndex={setImg4Index}
                    showWin={winImg4}
                    setShowWin={setShowWinImg4}
                    windowImage={HBPopupHoodie}
                    imageName={'hb-popup-shop-hoodie.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img5Index}
                    setWinIndex={setImg5Index}
                    showWin={winImg5}
                    setShowWin={setShowWinImg5}
                    windowImage={HBPopupLS}
                    imageName={'hb-popup-shop-longsleeve.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img6Index}
                    setWinIndex={setImg6Index}
                    showWin={winImg6}
                    setShowWin={setShowWinImg6}
                    windowImage={HBMoveCrew}
                    imageName={'hb-move-crew-tee.jpg'}
                />  
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img7Index}
                    setWinIndex={setImg7Index}
                    showWin={winImg7}
                    setShowWin={setShowWinImg7}
                    windowImage={HBRace}
                    imageName={'hb-race-judicata-tee.jpg'}
                />  
        </div>
    )
}