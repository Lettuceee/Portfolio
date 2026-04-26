import "../App.css";
import { Rnd } from 'react-rnd';
import { useRef } from 'react';
import ProjectImg from './ProjectImg.jsx';
import { useState } from 'react';

import BurkiArt from '../assets/sfs-burki-art.jpg';

export default function SavesForSavings ({
    en, jp,
    defWidth, defX, defY,
    indexCount, setIndexCount,
    winIndex, setWinIndex,
    showWin, setShowWin
}) {
    const nodeRef = useRef(null);

    const [winImg1, setShowWinImg1] = useState(false);
    const [img1Index, setImg1Index] = useState(1);


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
                            {en && <p>CITY SC: Saves for Savings</p>}
                            {jp && <p className="jpFont">CITY SC</p>}
                            <div className="close" onClick={() => setShowWin(false)}></div>
                        </div>
                    <div className="windowContent">
                        <div className="projectContainer">
                            <div style={{textAlign: 'center'}}>
                                {en && <h1>CITY SC: Saves for Savings</h1>}
                                {jp && <h1 className="jpFontHeader">CITY SC</h1>}
                            </div>
                            {en &&<p>In partnership with Together Credit Union, St. Louis CITY SC's Saves for Savings campaign aims to help kids and students
                                learn the importance of finance and budgeting. For every save CITY SC makes, Together Credit Union opens a $300 savings account
                                for a local student. </p>}
                            {jp && <p className="jpFont">トゥゲザー・クレジット・ユニオンと共同で、サッカーチームのSt. Louis CITY SCのセーブズ・フォア・セーブィングズ・キャンペーンは
                                子供や学生が金融や予算の重要性を学ぶのを手伝います。
                                CITY SCがなんでもセーブをすると、トゥゲザー・クレジット・ユニオンは地元の学生のために$300口座を開きます。</p>}

                            <div className="containerVideo">
                                <iframe src="https://player.vimeo.com/video/1081371685?h=aade7a3119&amp;autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style={{height: '5vw'}} referrerPolicy="strict-origin-when-cross-origin" title="Saves for Savings 1800x90"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
                            </div>
                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={BurkiArt} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg1Index(indexCount)
                                        setShowWinImg1(true)
                                    }}/>
                                </div>
                            </div>
                            {en && <p style={{paddingBottom: '5%', textAlign: 'center'}}>DISCLAIMER: Background art was a personal addition not part of the official project.</p>}
                            {jp && <p className="jpFont" style={{paddingBottom: '5%', textAlign: 'center'}}>お知らせ：背景アートは個人的な追加で正式プロジェクトの部分ではない。</p>}
                            <div className="containerVideo">
                                <iframe src="https://player.vimeo.com/video/1081371730?h=80b590ff39&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style={{display: 'block', width: '100%'}} referrerPolicy="strict-origin-when-cross-origin" title="Saves for Savings Test"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
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
                    windowImage={BurkiArt}
                    imageName={'sfs-burki-art.jpg'}
                />
        </div>
    )
}