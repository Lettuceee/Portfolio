import "../App.css";
import { Rnd } from 'react-rnd';
import { useRef } from 'react';
import ProjectImg from './ProjectImg.jsx';
import { useState } from 'react';

import RFBill1 from '../assets/ridefinders/ridefinders-billboard-1.jpg';
import RFBill2 from '../assets/ridefinders/ridefinders-billboard-2.jpg';
import RFBill3 from '../assets/ridefinders/ridefinders-billboard-3.jpg';
import RFSocial from '../assets/ridefinders/ridefinders-social.jpg';
import RFInfo from '../assets/ridefinders/ridefinders-infographic.jpg';
import RFPost1 from '../assets/ridefinders/ridefinders-post-1.jpg';
import RFPost2 from '../assets/ridefinders/ridefinders-post-2.jpg';
import RFPost3 from '../assets/ridefinders/ridefinders-post-3.jpg';

export default function RideFinders ({
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
                            {en && <p>RideFinders: Do the Ride Thing</p>}
                            {jp && <p className="jpFont">ライドファインダーズ</p>}
                            <div className="close" onClick={() => setShowWin(false)}></div>
                        </div>
                    <div className="windowContent">
                        <div className="projectContainer">
                            <div style={{textAlign: 'center'}}>
                                {en && <h1>RideFinders: Do the Ride Thing</h1>}
                                {jp && <h1 className="jpFontHeader">ライドファインダーズ</h1>}
                            </div>
                            {en && <p>RideFinders is a carpooling and vanpooling service run by Madison County Transit, servicing the Greater St. Louis area.
                                Providing safe, reliable transportation for employees to get to and from work, RideFinders helps companies and their staff
                                save money on gas, reduce overall traffic, and contribute to a cleaner environment!</p>}
                            {jp && <p className="jpFont">ライドファインダーズは、マディソン郡に営まれてセントルイス市を提供しているライドシェアサービスです。
                                安全で信頼できる通勤手段を設け、ライドファインダーズはガス代を省くこと、交通を減らすこと、清浄な環境を支えることで企業とスタッフを手伝う！</p>}
                            <div className="containerVideo">
                            <iframe src="https://player.vimeo.com/video/856874230?h=d12fc6e339&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; picture-in-picture" style={{display: 'block', width: '100%'}} className="embed-content" sandbox="allow-presentation allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>
                            </div>
                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={RFBill1} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg1Index(indexCount)
                                        setShowWinImg1(true)
                                    }}/>
                                </div>
                            </div>
                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={RFBill2} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg2Index(indexCount)
                                        setShowWinImg2(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={RFBill3} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg3Index(indexCount)
                                        setShowWinImg3(true)
                                    }}/>
                                </div>
                            </div>
                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={RFSocial} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg4Index(indexCount)
                                        setShowWinImg4(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={RFInfo} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg5Index(indexCount)
                                        setShowWinImg5(true)
                                    }}/>
                                </div>
                            </div>
                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={RFPost1} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg6Index(indexCount)
                                        setShowWinImg6(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={RFPost2} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg7Index(indexCount)
                                        setShowWinImg7(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={RFPost3} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg8Index(indexCount)
                                        setShowWinImg8(true)
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
                    windowImage={RFBill1}
                    imageName={'ridefinders-billboard-1.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img2Index}
                    setWinIndex={setImg2Index}
                    showWin={winImg2}
                    setShowWin={setShowWinImg2}
                    windowImage={RFBill2}
                    imageName={'ridefinders-billboard-2.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img3Index}
                    setWinIndex={setImg3Index}
                    showWin={winImg3}
                    setShowWin={setShowWinImg3}
                    windowImage={RFBill3}
                    imageName={'ridefinders-billboard-3.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img4Index}
                    setWinIndex={setImg4Index}
                    showWin={winImg4}
                    setShowWin={setShowWinImg4}
                    windowImage={RFSocial}
                    imageName={'ridefinders-social.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img5Index}
                    setWinIndex={setImg5Index}
                    showWin={winImg5}
                    setShowWin={setShowWinImg5}
                    windowImage={RFInfo}
                    imageName={'ridefinders-infographic.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img6Index}
                    setWinIndex={setImg6Index}
                    showWin={winImg6}
                    setShowWin={setShowWinImg6}
                    windowImage={RFPost1}
                    imageName={'ridefinders-post-1.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img7Index}
                    setWinIndex={setImg7Index}
                    showWin={winImg7}
                    setShowWin={setShowWinImg7}
                    windowImage={RFPost2}
                    imageName={'ridefinders-post-2.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img8Index}
                    setWinIndex={setImg8Index}
                    showWin={winImg8}
                    setShowWin={setShowWinImg8}
                    windowImage={RFPost3}
                    imageName={'ridefinders-post-3.jpg'}
                />
        </div>
    )
}