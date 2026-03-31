import "../App.css";
import { Rnd } from 'react-rnd';
import { useRef } from 'react';
import ProjectImg from './ProjectImg.jsx';
import { useState } from 'react';

import BanknotesLineup from '../assets/banknotes/banknotes.png';
import BanknotesSpread from '../assets/banknotes/banknotes-spread.png';
import Banknotes10 from '../assets/banknotes/banknote-10.gif';
import Banknotes20 from '../assets/banknotes/banknote-20.gif';
import Banknotes50 from '../assets/banknotes/banknote-50.gif';

export default function Banknotes ({
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
                            {en && <p>Vatican Lira Banknote Concept</p>}
                            {jp && <p className="jpFont">バチカン・リラ札コンセプト</p>}
                            <div className="close" onClick={() => setShowWin(false)}></div>
                        </div>
                    <div className="windowContent">
                        <div className="projectContainer">
                            <div style={{textAlign: 'center'}}>
                                {en && <h1>Vatican Lira Banknote Concept</h1>}
                                {jp && <h1 className="jpFontHeader">バチカン・リラ札コンセプト</h1>}
                            </div>
                            {en &&<div>
                                <p>For this college project, my class and I were tasked with creating or redesigning
                                    banknotes for a country of our choice. I ultimately decided on the Vatican Lira,
                                    and took on the unqiue challenge of visualizing what the Lira would look like today
                                    were it not replaced with the Euro.</p>
                                <p> Each banknote depicts a different pope and a piece of Vatican art or architecture
                                    commissioned by that pope. Transparent security strips and accessibility features
                                    are also integrated into the designs.</p>
                            </div>}
                            {jp && <div className="jpFont">
                                <p>この大学プロジェクトの目標は、自分で選んだ国の札を作るか見直すです
                                    ユーロに入れ替わらない場合で見た目のコンセプトを生じるチャレンジをやって、ヴァチカンのリラを選びました。</p>
                                <p>それぞれの札は、別の教皇とその教皇に依頼された芸術品や建物が出します。そして、本格的なストリップとアクセシビリティ
                                    機能も入ってあります。</p>
                            </div>}
                            <div className="containerFlex" style={{paddingBottom: '1%'}}>
                                <div className="imgContainer">
                                    <img src={BanknotesLineup} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg1Index(indexCount)
                                        setShowWinImg1(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={BanknotesSpread} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg2Index(indexCount)
                                        setShowWinImg2(true)
                                    }}/>
                                </div>
                            </div>
                            <div className="containerFlex" style={{paddingBottom: '1%'}}>
                                <div className="imgContainer">
                                    <img src={Banknotes10} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg3Index(indexCount)
                                        setShowWinImg3(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={Banknotes20} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg4Index(indexCount)
                                        setShowWinImg4(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={Banknotes50} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg5Index(indexCount)
                                        setShowWinImg5(true)
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
                    windowImage={BanknotesLineup}
                    imageName={'banknotes-lineup.png'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img2Index}
                    setWinIndex={setImg2Index}
                    showWin={winImg2}
                    setShowWin={setShowWinImg2}
                    windowImage={BanknotesSpread}
                    imageName={'banknotes-spread.png'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img3Index}
                    setWinIndex={setImg3Index}
                    showWin={winImg3}
                    setShowWin={setShowWinImg3}
                    windowImage={Banknotes10}
                    imageName={'banknotes-10.gif'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img4Index}
                    setWinIndex={setImg4Index}
                    showWin={winImg4}
                    setShowWin={setShowWinImg4}
                    windowImage={Banknotes20}
                    imageName={'banknotes-20.gif'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img5Index}
                    setWinIndex={setImg5Index}
                    showWin={winImg5}
                    setShowWin={setShowWinImg5}
                    windowImage={Banknotes50}
                    imageName={'banknotes-50.gif'}
                />
        </div>
    )
}