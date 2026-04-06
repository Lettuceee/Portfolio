import "../App.css";
import { Rnd } from 'react-rnd';
import { useRef } from 'react';
import ProjectImg from './ProjectImg.jsx';
import { useState } from 'react';

import Banner1 from '../assets/banner/banner-1.jpg';
import Banner2 from '../assets/banner/banner-2.jpg';
import Banner3 from '../assets/banner/banner-3.jpg';
import Banner4 from '../assets/banner/banner-4.jpg';
import BannerPhoto1 from '../assets/banner/banner-photo-1.jpg';
import BannerPhoto2 from '../assets/banner/banner-photo-2.jpg';
import BannerPhoto3 from '../assets/banner/banner-photo-3.jpg';
import BannerPhoto4 from '../assets/banner/banner-photo-4.jpg';

export default function Banner ({
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
                            {en && <p>Kirkwood Hoarding Banner</p>}
                            {jp && <p className="jpFont">カークウッド建設バナー</p>}

                            <div className="close" onClick={() => setShowWin(false)}></div>
                        </div>
                    <div className="windowContent">
                        <div className="projectContainer">
                            <div style={{textAlign: 'center'}}>
                                {en && <h1>Kirkwood Hoarding Banner</h1>}
                                {jp && <h1 className="jpFontHeader">カークウッド建設バナー</h1>}
                            </div>
                            {en && <p>In 2022, the city of Kirkwood was looking to decorate a local construction site with a colorful,
                                eye-catching banner. This banner encapsulates the very spirit of Kirkwood, from its love of music and
                                multiple parks to its railroad history.
                            </p>}
                            {jp && <p className="jpFont">2022年では、カークウッド市はカラフルな目を引けるバナーで地元の建設地を飾るのを目指してます。
                                このバナーは音楽の愛、複数公園や鉄道の歴史などカークウッドの本質を捉える。</p>}

                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={Banner1} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg1Index(indexCount)
                                        setShowWinImg1(true)
                                    }}/>
                                </div>
                            </div>
                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={Banner2} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg2Index(indexCount)
                                        setShowWinImg2(true)
                                    }}/>
                                </div>
                            </div>
                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={Banner3} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg3Index(indexCount)
                                        setShowWinImg3(true)
                                    }}/>
                                </div>
                            </div>
                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={Banner4} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg4Index(indexCount)
                                        setShowWinImg4(true)
                                    }}/>
                                </div>
                            </div>
                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={BannerPhoto1} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg5Index(indexCount)
                                        setShowWinImg5(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={BannerPhoto2} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg6Index(indexCount)
                                        setShowWinImg6(true)
                                    }}/>
                                </div>
                            </div>
                            <div className="containerFlex">
                                <div className="imgContainer">
                                    <img src={BannerPhoto3} onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setImg7Index(indexCount)
                                        setShowWinImg7(true)
                                    }}/>
                                </div>
                                <div className="imgContainer">
                                    <img src={BannerPhoto4} onClick={() => {
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
                    windowImage={Banner1}
                    imageName={'banner-1.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img2Index}
                    setWinIndex={setImg2Index}
                    showWin={winImg2}
                    setShowWin={setShowWinImg2}
                    windowImage={Banner2}
                    imageName={'banner-2.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img3Index}
                    setWinIndex={setImg3Index}
                    showWin={winImg3}
                    setShowWin={setShowWinImg3}
                    windowImage={Banner3}
                    imageName={'banner-3.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img4Index}
                    setWinIndex={setImg4Index}
                    showWin={winImg4}
                    setShowWin={setShowWinImg4}
                    windowImage={Banner4}
                    imageName={'banner-4.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img5Index}
                    setWinIndex={setImg5Index}
                    showWin={winImg5}
                    setShowWin={setShowWinImg5}
                    windowImage={BannerPhoto1}
                    imageName={'banner-photo-1.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img6Index}
                    setWinIndex={setImg6Index}
                    showWin={winImg6}
                    setShowWin={setShowWinImg6}
                    windowImage={BannerPhoto2}
                    imageName={'banner-photo-2.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img7Index}
                    setWinIndex={setImg7Index}
                    showWin={winImg7}
                    setShowWin={setShowWinImg7}
                    windowImage={BannerPhoto3}
                    imageName={'banner-photo-3.jpg'}
                />
                <ProjectImg
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={img8Index}
                    setWinIndex={setImg8Index}
                    showWin={winImg8}
                    setShowWin={setShowWinImg8}
                    windowImage={BannerPhoto4}
                    imageName={'banner-photo-4.jpg'}
                />
        </div>
    )
}