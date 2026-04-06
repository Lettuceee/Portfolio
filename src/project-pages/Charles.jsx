import "../App.css";
import { Rnd } from 'react-rnd';
import { useRef } from 'react';


export default function Charles ({
     en, jp, indexCount, setIndexCount, winIndex, setWinIndex, showWin, setShowWin
}) {
    const nodeRef = useRef(null);


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
                            {en && <p>Charles D'Angelo: Beyond the Scale</p>}
                            {jp && <p className="jpFont">ビヨンド・ザ・スケール</p>}
                            <div className="close" onClick={() => setShowWin(false)}></div>
                        </div>
                    <div className="windowContent">
                        <div className="projectContainer">
                            <div style={{textAlign: 'center'}}>
                                {en && <h1>Charles D'Angelo: Beyond the Scale</h1>}
                                {jp && <h1 className="jpFontHeader">ビヨンド・ザ・スケール</h1>}
                            </div>
                            {en && <p>Charles D'Angelo is a nation-renowned weight loss and mindset development coach,
                                teaching not only how to lose weight but to keep it off. Charles has helped countless clients, from doctors to senators,
                                reach and maintain their weight loss goals — no shots, pills or gimmicks.</p>}
                            {jp && <p className="jpFont">チャールズ・デ・アンジェロは、国家的な体重減少とマインドの成長のコードです。どうやって瘦せるだけじゃなく、やせた体重を保つことを
                                教えます。注射、薬、ギミックなし、医者や上院議員など、チャールズが無数人を助けました。</p>}
                            <div className="containerVideo" >
                                <iframe src="https://player.vimeo.com/video/1175992997?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; picture-in-picture" style={{display: 'block', width: '100%'}} sandbox="allow-presentation allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>
                            </div>
                        </div>
                    </div>
                </Rnd>
                }
        </div>
    )
}