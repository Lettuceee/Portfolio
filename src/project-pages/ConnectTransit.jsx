import "../App.css";
import { Rnd } from 'react-rnd';
import { useRef } from 'react';
import ProjectImg from './ProjectImg.jsx';
import { useState } from 'react';

import CTOrange from '../assets/ct-orange.gif';

export default function ConnectTransit ({
     en, jp, indexCount, setIndexCount, winIndex, setWinIndex, showWin, setShowWin
}) {
    const nodeRef = useRef(null);

    const [winImg1, setShowWinImg1] = useState(false);
    const [img1Index, setImg1Index] = useState(1);


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
                            {en && <p>Connect Transit: From A to Beyond</p>}
                            {jp && <p className="jpFont">コネクトトランジット</p>}
                            <div className="close" onClick={() => setShowWin(false)}></div>
                        </div>
                    <div className="windowContent">
                        <div className="projectContainer">
                            <div style={{textAlign: 'center'}}>
                                {en && <h1>Connect Transit: From A to Beyond</h1>}
                                {jp && <h1 className="jpFontHeader">コネクトトランジット</h1>}
                            </div>
                            {en &&<p>Bloomington-Normal, Illinois' public transit system, Connect Transit, was in need of a design overhaul.
                                The brand was looking for an identity that emphasized the reliability of the service, and the opportunities
                                that present themselves when traveling from point A to B, all points in between and beyond.</p>}
                            {jp &&<p className="jpFont">イリノイ州ブルーミントン・ノーマル市の公共輸送システムのコネクトトランジットはデザイン見直しが要りました
                                サービスの信頼できること、さらにポイントAからB、すべてのポイントを巡る時に生じる機会を伝えるアイデンティティを求めていました。</p>}    
                            <div className="containerFlex" style={{paddingBottom: '5%'}}>
                                <div className="imgContainer"style={{width: '100%'}}>
                                    <img src={CTOrange} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg1Index(indexCount)
                                        setShowWinImg1(true)
                                    }}/>
                                </div>
                            </div>
                            <div style={{backgroundColor: '#000000', marginBottom: '1%', paddingBottom: '1px'}}>
                                <iframe src="https://player.vimeo.com/video/966915032?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; picture-in-picture" style={{display: 'block', width: '100%', height: '8vw'}} sandbox="allow-presentation allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>
                            </div>
                            <div style={{backgroundColor: '#000000', marginBottom: '1%', paddingBottom: '1px'}}>
                                <iframe src="https://player.vimeo.com/video/966914904?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; picture-in-picture" style={{display: 'block', width: '100%', height: '8vw'}} sandbox="allow-presentation allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>
                            </div>
                            <div style={{backgroundColor: '#000000', marginBottom: '1%', paddingBottom: '1px'}}>
                                <iframe src="https://player.vimeo.com/video/966914988?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; picture-in-picture" style={{display: 'block', width: '100%', height: '8vw'}} sandbox="allow-presentation allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>
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
                    windowImage={CTOrange}
                    imageName={'ct-orange.gif'}
                />
        </div>
    )
}