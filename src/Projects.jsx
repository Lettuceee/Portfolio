import "./App.css";
import { Rnd } from 'react-rnd';
import { useRef } from 'react';
import { useState } from 'react';

import Hager175 from './project-pages/Hager175.jsx';
import RideFinders from './project-pages/Ridefinders.jsx';
import ConnectTransit from './project-pages/ConnectTransit.jsx';
import SavesForSavings from './project-pages/SavesForSavings.jsx';
import May2025 from './project-pages/May2025.jsx';
import DoSomeGood from './project-pages/DoSomeGood.jsx';
import HuschBlackwell from './project-pages/HuschBlackwell.jsx';
import Charles from './project-pages/Charles.jsx';
import Pinnacle from './project-pages/Pinnacle.jsx';
import Banner from './project-pages/Banner.jsx';
import Banknotes from "./project-pages/Banknotes.jsx";
import Extras from "./project-pages/Extras.jsx";

import IconCt from "./icons/icons-projects/icon-ct.png";
import IconDsg from "./icons/icons-projects/icon-dsg.png";
import IconHager from "./icons/icons-projects/icon-hager.png";
import IconHb from "./icons/icons-projects/icon-hb.png";
import IconCharles from "./icons/icons-projects/icon-charles.png";
import IconHoarding from "./icons/icons-projects/icon-hoarding.png";
import IconLira from "./icons/icons-projects/icon-lira.png";
import IconMay2025 from "./icons/icons-projects/icon-may2025.png";
import IconPinnacle from "./icons/icons-projects/icon-pinnacle.png";
import IconRide from "./icons/icons-projects/icon-ride.png";
import IconSc from "./icons/icons-projects/icon-sc.png";
import IconExtras from "./icons/icons-projects/icon-extras.gif";

export default function Projects ({
    en, jp,
    defWidth, defX, defY,
    indexCount, setIndexCount,
    showWindowProjects, setShowWindowProjects,
    projectsIndex, setProjectsIndex
}) {
    const nodeRefProjects = useRef(null);

    const [winHager175, setShowWinHager175] = useState(false);
    const [Hager175Index, setHager175Index] = useState(1);

    const [winRidefinders, setShowWinRidefinders] = useState(false);
    const [RidefindersIndex, setRidefindersIndex] = useState(1);

    const [winCT, setShowWinCT] = useState(false);
    const [CTIndex, setCTIndex] = useState(1);

    const [winCitySC, setShowWinCitySC] = useState(false);
    const [CitySCIndex, setCitySCIndex] = useState(1);

    const [winDSG, setShowWinDSG] = useState(false);
    const [DSGIndex, setDSGIndex] = useState(1);

    const [winMay2025, setShowWinMay2025] = useState(false);
    const [May2025Index, setMay2025Index] = useState(1);

    const [winHB, setShowWinHB] = useState(false);
    const [HBIndex, setHBIndex] = useState(1);

    const [winCharles, setShowWinCharles] = useState(false);
    const [CharlesIndex, setCharlesIndex] = useState(1);

    const [winPinnacle, setShowWinPinnacle] = useState(false);
    const [PinnacleIndex, setPinnacleIndex] = useState(1);

    const [winBanner, setShowWinBanner] = useState(false);
    const [BannerIndex, setBannerIndex] = useState(1);

    const [winBanknotes, setShowWinBanknotes] = useState(false);
    const [BanknotesIndex, setBanknotesIndex] = useState(1);

    const [winExtras, setShowWinExtras] = useState(false);
    const [ExtrasIndex, setExtrasIndex] = useState(1);


    return (
        <div>
            {showWindowProjects &&
                <Rnd className="window" id="projects"
                minWidth="200px" minHeight="300px" default={{width: defWidth, height: 400, x: defX, y: defY}}
                dragHandleClassName="windowDrag" bounds="body"
                noderef={nodeRefProjects} style={{zIndex:`${projectsIndex}`}}
                onMouseDown={() => {
                        setIndexCount((prevValue) => prevValue + 1)
                        setProjectsIndex(indexCount)
                    }}>
                        <div className="windowheader">
                            {en &&<p>Projects</p>}
                            {jp &&<p className="jpFont">プロジェクト</p>}
                            <div className="windowDrag"></div>
                            <div className="close" onClick={() => setShowWindowProjects(false)}></div>
                        </div>
                    <div className="windowContent">
                        <div className="projectsContainer">
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${IconHager})`}}
                                        onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setHager175Index(indexCount)
                                        setShowWinHager175(true)
                                    }}></div>
                                    {en && <div>Hager Companies 175th</div>}
                                    {jp && <div className="jpFont">ハーガー・カンパニーズ 175周年</div>}
                                </div>
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${IconRide})`}}
                                        onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setRidefindersIndex(indexCount)
                                        setShowWinRidefinders(true)
                                    }}></div>
                                    {en && <div>RideFinders: Do the Ride Thing</div>}
                                    {jp && <div className="jpFont">ライドファインダーズ</div>}
                                </div>
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${IconCt})`}}
                                        onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setCTIndex(indexCount)
                                        setShowWinCT(true)
                                    }}></div>
                                    {en && <div>Connect Transit: From A to Beyond</div>}
                                    {jp && <div className="jpFont">コンネクトトラジット</div>}
                                </div> 
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${IconSc})`}}
                                        onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setCitySCIndex(indexCount)
                                        setShowWinCitySC(true)
                                    }}></div>
                                    {en && <div>CITY SC: Saves for Savings</div>}
                                    {jp && <div className="jpFont">CITY SC</div>}
                                </div>
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${IconDsg})`}}
                                    onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setDSGIndex(indexCount)
                                        setShowWinDSG(true)
                                    }}></div>
                                    {en && <div>Do Some Good: Shakespeare Festival</div>}
                                    {jp && <div className="jpFont">シェイクスピア祭り</div>}
                                </div>
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${IconMay2025})`}}
                                    onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setMay2025Index(indexCount)
                                        setShowWinMay2025(true)
                                    }}></div>
                                    {en && <div>May2025 Poster Series</div>}
                                    {jp && <div className="jpFont">May2025 ポスターシリーズ</div>}
                                </div>
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${IconHb})`}}
                                    onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setHBIndex(indexCount)
                                        setShowWinHB(true)
                                    }}></div>
                                    {en && <div>Husch Blackwell</div>}
                                    {jp && <div className="jpFont">ハッシュ・ブラックウェル</div>}
                                </div>
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${IconCharles})`}}
                                    onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setCharlesIndex(indexCount)
                                        setShowWinCharles(true)
                                    }}></div>
                                    {en && <div>Charles D'Angelo: Beyond the Scale</div>}
                                    {jp && <div className="jpFont">ビヨンド・ザー・スケール</div>}
                                </div>
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${IconPinnacle})`}}
                                    onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setPinnacleIndex(indexCount)
                                        setShowWinPinnacle(true)
                                    }}></div>
                                    {en && <div>ASID Pinnacle Awards 2023</div>}
                                    {jp && <div className="jpFont">ASID ピナクル賞 2023</div>}
                                </div>
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${IconHoarding})`}}
                                    onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setBannerIndex(indexCount)
                                        setShowWinBanner(true)
                                    }}></div>
                                    {en && <div>Kirkwood Hoarding Banner</div>}
                                    {jp && <div className="jpFont">カークウッド建設バナー</div>}
                                </div>
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${IconLira})`}}
                                    onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setBanknotesIndex(indexCount)
                                        setShowWinBanknotes(true)
                                    }}></div>
                                    {en && <div>Vatican Lira Banknote Concept</div>}
                                    {jp && <div className="jpFont">バチカン・リラ札コンセプト</div>}
                                </div>
                            </div>
                            <div className="icon">
                                <div className="iconImgText">
                                    <div className="iconImg" id="projectIcon" style={{backgroundImage:`url(${IconExtras})`}}
                                    onClick={() => {
                                        setIndexCount((prevValue) => prevValue + 1)
                                        setExtrasIndex(indexCount)
                                        setShowWinExtras(true)
                                    }}></div>
                                    {en && <div>Extras</div>}
                                    {jp && <div className="jpFont">エクストラ</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </Rnd>
                }
                <Hager175
                    en={en}
                    jp={jp}
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={Hager175Index}
                    setWinIndex={setHager175Index}
                    showWin={winHager175}
                    setShowWin={setShowWinHager175}
                />
                <RideFinders
                    en={en}
                    jp={jp}
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={RidefindersIndex}
                    setWinIndex={setRidefindersIndex}
                    showWin={winRidefinders}
                    setShowWin={setShowWinRidefinders}
                />
                <ConnectTransit
                    en={en}
                    jp={jp}
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={CTIndex}
                    setWinIndex={setCTIndex}
                    showWin={winCT}
                    setShowWin={setShowWinCT}
                />
                <SavesForSavings
                    en={en}
                    jp={jp}
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={CitySCIndex}
                    setWinIndex={setCitySCIndex}
                    showWin={winCitySC}
                    setShowWin={setShowWinCitySC}
                />
                <DoSomeGood
                    en={en}
                    jp={jp}
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={DSGIndex}
                    setWinIndex={setDSGIndex}
                    showWin={winDSG}
                    setShowWin={setShowWinDSG}
                />
                <May2025
                    en={en}
                    jp={jp}
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={May2025Index}
                    setWinIndex={setMay2025Index}
                    showWin={winMay2025}
                    setShowWin={setShowWinMay2025}
                />
                <HuschBlackwell
                    en={en}
                    jp={jp}
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={HBIndex}
                    setWinIndex={setHBIndex}
                    showWin={winHB}
                    setShowWin={setShowWinHB}
                />
                <Charles
                    en={en}
                    jp={jp}
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={CharlesIndex}
                    setWinIndex={setCharlesIndex}
                    showWin={winCharles}
                    setShowWin={setShowWinCharles}
                /> 
                <Pinnacle
                    en={en}
                    jp={jp}
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={PinnacleIndex}
                    setWinIndex={setPinnacleIndex}
                    showWin={winPinnacle}
                    setShowWin={setShowWinPinnacle}
                />
                <Banner
                    en={en}
                    jp={jp}
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={BannerIndex}
                    setWinIndex={setBannerIndex}
                    showWin={winBanner}
                    setShowWin={setShowWinBanner}
                />
                <Banknotes
                    en={en}
                    jp={jp}
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={BanknotesIndex}
                    setWinIndex={setBanknotesIndex}
                    showWin={winBanknotes}
                    setShowWin={setShowWinBanknotes}
                />
                <Extras
                    en={en}
                    jp={jp}
                    defWidth={defWidth}
                    defX={defX}
                    defY={defY}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    winIndex={ExtrasIndex}
                    setWinIndex={setExtrasIndex}
                    showWin={winExtras}
                    setShowWin={setShowWinExtras}
                />
        </div>
    )
}