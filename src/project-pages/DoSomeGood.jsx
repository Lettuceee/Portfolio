import "../App.css";
import { Rnd } from 'react-rnd';
import { useRef } from 'react';
import ProjectImg from './ProjectImg.jsx';
import { useState } from 'react';

import DSGTitle from '../assets/dosomegood/dsg-title.gif';
import DSGCallout from '../assets/dosomegood/dsg-callout.gif';
import DSGCalloutFull from '../assets/dosomegood/dsg-callout-fullscreen.gif';

export default function DoSomeGood ({
     en, jp, indexCount, setIndexCount, winIndex, setWinIndex, showWin, setShowWin
}) {
    const nodeRef = useRef(null);

    const [winImg1, setShowWinImg1] = useState(false);
    const [img1Index, setImg1Index] = useState(1);
    const [winImg2, setShowWinImg2] = useState(false);
    const [img2Index, setImg2Index] = useState(1);  
    const [winImg3, setShowWinImg3] = useState(false);
    const [img3Index, setImg3Index] = useState(1);  


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
                            {en && <p>Do Some Good: Shakespeare Festival</p>}
                            {jp && <p className="jpFontHeader">シェイクスピア祭り</p>}
                            <div className="close" onClick={() => setShowWin(false)}></div>
                        </div>
                    <div className="windowContent">
                        <div className="projectContainer">
                            <div style={{textAlign: 'center'}}>
                                {en && <h1>Do Some Good: Shakespeare Festival</h1>}
                                {jp && <h1 className="jpFont">シェイクスピア祭り</h1>}
                            </div>
                            {en && <p>Founded in 2001, the St. Louis Shakespeare Festival not only provides free shows every summer in Forest Park,
                                but takes to the streets by performing in neighborhoods across the metropolitan area. In addition,
                                the Confluence Writers Project gives burgeoning playwrights the opportunity to have their plays commissioned
                                and become national productions.</p>}
                            {jp && <p className="jpFont">2001年に設立されたシェイクスピア祭りは毎夏フォレストパークで無料なショーを与えだけじゃなく
                                市街地の周りに近所の道にも舞台を行っています。さらに、コンフルエンス・ライターズ・プロジェクトは新興の劇作者に脚本をコミッションし
                                国内上越になる機会をあげる。</p>}
                            <div style={{backgroundColor: '#000000', marginBottom: '1%', paddingBottom: '1px'}}>
                                <iframe src="https://player.vimeo.com/video/1060670195?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; picture-in-picture" style={{display: 'block', width: '100%', height: '8vw'}} sandbox="allow-presentation allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>
                            </div>
                            <div className="containerFlex" style={{paddingBottom: '1%'}}>
                                <div className="imgContainer">
                                    <img src={DSGTitle} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg1Index(indexCount)
                                        setShowWinImg1(true)
                                    }}/>
                                </div>
                            </div>
                            <div className="containerFlex" style={{paddingBottom: '5%'}}>
                                <div className="imgContainer">
                                    <img src={DSGCallout} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg2Index(indexCount)
                                        setShowWinImg2(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={DSGCalloutFull} onClick={() => {
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
                    windowImage={DSGTitle}
                    imageName={'dsg-title.gif'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img2Index}
                    setWinIndex={setImg2Index}
                    showWin={winImg2}
                    setShowWin={setShowWinImg2}
                    windowImage={DSGCallout}
                    imageName={'dsg-callout.gif'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img3Index}
                    setWinIndex={setImg3Index}
                    showWin={winImg3}
                    setShowWin={setShowWinImg3}
                    windowImage={DSGCalloutFull}
                    imageName={'dsg-callout-fullscreen.gif'}
                />
        </div>
    )
}