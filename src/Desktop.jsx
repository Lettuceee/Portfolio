import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { useRef } from 'react';
import anime from 'animejs';

import "./App.css";

import Logo from './Logo.jsx';
import Intro from './Intro.jsx';
import Info from './Info.jsx';
import Projects from './Projects.jsx';
import Wallpaper from './Wallpaper.jsx';
import Settings from './Settings.jsx';

import IconInfo from "./icons/icon-info.png";
import IconFolder from "./icons/icon-folder.png";
import IconMusic from "./icons/icon-music.png";
import IconWallpaper from "./icons/icon-wallpaper.png";
import IconSettings from "./icons/icon-settings.png";
import IconLi from "./icons/icon-li.png";
import IconIg from "./icons/icon-ig.png";

import paperShapesVideo from "./wallpaper/shapes_Camera_a_1920x1080.mp4";
import paperHudVideo from "./wallpaper/future-hud_Camera_a.mp4";
import paperPortholeVideo from "./wallpaper/porthole.mp4";

import mouseDown1 from './sfx/mouse-down-1.mp3';
import mouseUp1 from './sfx/mouse-up-1.mp3';
import mouseDown2 from './sfx/mouse-down-2.mp3';
import mouseUp2 from './sfx/mouse-up-2.mp3';
import mouseDown3 from './sfx/mouse-down-3.mp3';
import mouseUp3 from './sfx/mouse-up-3.mp3';

export default function Desktop() {

    /* zIndex for windows */
    const [indexCount, setIndexCount] = useState(2)

    /* NodeRefs for desktop icons */
    const nodeRefIcon1 = useRef(null);
    const nodeRefIcon2 =useRef(null);
    const nodeRefIcon3 = useRef(null);
    const nodeRefIcon4 =useRef(null);
    const nodeRefIcon5 = useRef(null);
    const nodeRefIcon6 =useRef(null);
    const nodeRefIcon7 = useRef(null);

    /* Date and time for taskbar */
    const [time, setTime] = useState()
    const [date, setDate] = useState()

    /* Mode and wallpaper */
    const [taskStyle, setTaskStyle] = useState("twilight")
    const [themeLight, setThemeLight] = useState("unselected")
    const [themeTwilight, setThemeTwilight] = useState("selected")
    const [themeDark, setThemeDark] = useState("unselected")
    const [themeRetro, setThemeRetro] = useState("unselected")

    /* Wallaper */
    const [paperStyle, setPaperStyle] = useState("noPaper")
    const [paperShapesVideoVis, setPaperShapesVideoVis] = useState(false)
    const [paperHudVideoVis, setPaperHudVideoVis] = useState(false)
    const [paperPortholeVideoVis, setPaperPortholeVideoVis] = useState(false)

    /* CRT */
    const [crtVis, setCrtVis] = useState(true)
    const [crtOption, setCrtOption] = useState("selected")
    const [crtText, setCrtText] = useState("ON")

    /* Background shapes */
    const [shapesVis, setShapesVis] = useState("shapesBackground")
    const [shapesOn, setShapesOn] = useState("selected")
    const [shapesOff, setShapesOff] = useState("unselected")

    /* Language */
    const [en, setEn] = useState(true)
    const [jp, setJp] = useState(false)
    const [enSelected, setEnSelected] = useState("selected")
    const [jpSelected, setJpSelected] = useState("unselected")

    const [showWindowInfo, setShowWindowInfo] = useState(false)
    const [showWindowWallpaper, setShowWindowWallpaper] = useState(false)
    const [showWindowProjects, setShowWindowProjects] = useState(false)
    const [showWindowSettings, setShowWindowSettings] = useState(false)
    const [infoIndex, setInfoIndex] = useState(1)
    const [projectsIndex, setProjectsIndex] = useState(1)
    const [wallpaperIndex, setWallpaperIndex] = useState(1)
    const [settingsIndex, setSettingsIndex] = useState(1)

    const mouseDownClick1 = new Audio(mouseDown1)
    const mouseUpClick1 = new Audio(mouseUp1)
    const mouseDownClick2 = new Audio(mouseDown2)
    const mouseUpClick2 = new Audio(mouseUp2)
    const mouseDownClick3 = new Audio(mouseDown3)
    const mouseUpClick3 = new Audio(mouseUp3)
    const [mouseClick, setMouseClick] = useState(1)


    function crtSwitch() {
        setCrtVis(crtVis === true ? false : true)
        setCrtText(crtText === "ON" ? "OFF" : "ON")
        setCrtOption(crtOption === "selected" ? "unselected" : "selected")
    }
    
    function animeLogo() {
        anime ({
            targets: '#bgLogo',
            opacity: 1,
            duration: 1000,
            delay: 4700,
            easing: 'cubicBezier(.25, .0, .15, 1)',
        })
    };
    
    function animeIcon() {
        anime ({
                targets: '#desktopIcon',
                translateX: [-200, 0],
                duration: 400,
                easing: 'cubicBezier(.25, .0, .15, 1)',
                delay: (_el, i) => { return 4300 + i * 50; },
        });
    }

    function animeMode() {
        anime ({
                targets: '.modeButton, .toggleSwitch',
                translateX: [200, 0],
                duration: 400,
                easing: 'cubicBezier(.25, .0, .15, 1)',
                delay: (_el, i) => { return 4450 + i * 50; },
        });
    }

    function animeTaskbar() {
        anime ({
                targets: '#taskbar',
                translateY: [50, 0],
                duration: 400,
                easing: 'cubicBezier(.25, .0, .15, 1)',
                delay: 4800,
        });
    }
          
    useEffect(() => {

        animeIcon();
        animeTaskbar();
        animeMode();
        animeLogo();

        setInterval(() => {

            const dateObject = new Date()

            let hour = dateObject.getHours().toString()
            const meridiem = hour >= 12 ? "PM " : "AM"
            hour = hour % 12 || 12
            const minute = dateObject.getMinutes().toString().padStart(2,0)

            const month = (dateObject.getMonth() + 1).toString()
            const day = dateObject.getDate().toString()
            const year = dateObject.getFullYear().toString()

            const currentTime = hour + ':' + minute + ' ' + meridiem
            const currentDate = month + '/' + day + '/' + year

            setTime(currentTime)
            setDate(currentDate)
        }, 1000)    
    }, [])

    return (

            <div id="desktop" className={taskStyle}
            onMouseDownCapture={() => {
                if (mouseClick === 1) {
                    mouseDownClick1.currentTime = 0;
                    mouseDownClick1.play()
                }
                if (mouseClick === 2) {
                    mouseDownClick2.currentTime = 0;
                    mouseDownClick2.play()
                }
                if (mouseClick === 3) {
                    mouseDownClick3.currentTime = 0;
                    mouseDownClick3.play()
                }
            }}
            onMouseUp={() => {
                if (mouseClick === 1) {
                    mouseUpClick1.currentTime = 0;
                    mouseUpClick1.play()
                }
                if (mouseClick === 2) {
                    mouseUpClick2.currentTime = 0;
                    mouseUpClick2.play()
                }
                if (mouseClick === 3) {
                    mouseUpClick3.currentTime = 0;
                    mouseUpClick3.play()
                }
            }}>
                {crtVis &&
                    <div className="crt"></div>
                }
                <div id="bgLogo">
                    <Logo logoViewbox={"0 0 1777.39 405.84"}/>
                </div>
                <div className="wallpaper" id={paperStyle}></div>
                {paperShapesVideoVis &&
                    <video autoPlay loop muted className="paperVideo">
                        <source src={paperShapesVideo} type="video/mp4" />
                    </video>
                }
                {paperHudVideoVis &&
                    <video autoPlay loop muted className="paperVideo">
                        <source src={paperHudVideo} type="video/mp4" />
                    </video>
                }
                {paperPortholeVideoVis &&
                    <video autoPlay loop muted className="paperVideo">
                        <source src={paperPortholeVideo} type="video/mp4" />
                    </video>
                }
                <div id="intro"><Intro /></div>
                <ul className={shapesVis} id={paperStyle}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    </ul>
                <div className="icons">
                    <Draggable bounds="body" nodeRef={nodeRefIcon1}>
                        <div ref={nodeRefIcon1} className="icon" id="desktopIcon" onDoubleClick={() => {
                            setIndexCount((prevValue) => prevValue + 1)
                            setInfoIndex(indexCount)
                            setShowWindowInfo(true)
                        }}>
                            <div className="iconImgText">
                                <div className="iconImg" style={{backgroundImage:`url(${IconInfo})`}}></div>
                                {en && <div>Info/Email</div>}
                                {jp && <div className="jpFont">情報・連絡</div>}
                            </div>
                        </div>
                    </Draggable>
                    <Draggable bounds="body" nodeRef={nodeRefIcon2}>
                        <div ref={nodeRefIcon2} className="icon" id="desktopIcon" onDoubleClick={() => {
                            setIndexCount((prevValue) => prevValue + 1)
                            setProjectsIndex(indexCount)
                            setShowWindowProjects(true)
                        }}>
                            <div className="iconImgText">
                                <div className="iconImg" style={{backgroundImage:`url(${IconFolder})`}}></div>
                                {en && <div>Projects</div>}
                                {jp && <div className="jpFont">プロジェクト</div>}
                            </div>
                        </div>
                    </Draggable>
                    <Draggable bounds="body" nodeRef={nodeRefIcon3}>                    
                        <div ref={nodeRefIcon3} className="icon" id="desktopIcon" style={{display: 'none'}}>
                            <div className="iconImgText">
                                <div className="iconImg" style={{backgroundImage:`url(${IconMusic})`}}></div>
                                {en && <div>Music</div>}
                                {jp && <div className="jpFont">音楽</div>}
                            </div>
                        </div>
                    </Draggable>
                    <Draggable bounds="body" nodeRef={nodeRefIcon4}>                    
                        <div ref={nodeRefIcon4} className="icon" id="desktopIcon" onDoubleClick={() => {
                            setIndexCount((prevValue) => prevValue + 1)
                            setWallpaperIndex(indexCount)
                            setShowWindowWallpaper(true)
                        }}>
                            <div className="iconImgText">
                                <div className="iconImg" style={{backgroundImage:`url(${IconWallpaper})`}}></div>
                                {en && <div>Wallpaper</div>}
                                {jp && <div className="jpFont">壁紙</div>}
                            </div>
                        </div>
                    </Draggable>
                    <Draggable bounds="body" nodeRef={nodeRefIcon5}>                    
                        <div ref={nodeRefIcon5} className="icon" id="desktopIcon"onDoubleClick={() => {
                            setIndexCount((prevValue) => prevValue + 1)
                            setSettingsIndex(indexCount)
                            setShowWindowSettings(true)
                        }}>
                            <div className="iconImgText">
                                <div className="iconImg" style={{backgroundImage:`url(${IconSettings})`}}></div>
                                {en && <div>Settings</div>}
                                {jp && <div className="jpFont">設定</div>}
                            </div>
                        </div>
                    </Draggable>
                    <Draggable bounds="body" nodeRef={nodeRefIcon6}>                    
                        <div ref={nodeRefIcon6} className="icon" id="desktopIcon" onDoubleClick={() => window.open('https://www.linkedin.com/in/brandonsharpdesign/', '_blank').focus()}>
                            <div className="iconImgText">
                                <div className="iconImg" style={{backgroundImage:`url(${IconLi})`}}></div>
                                <svg id="linkIcon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                                    <rect width="10" height="10" style={{fill:"white"}}/>
                                    <polygon id="linkArrow" style={{fill:"#eb4f14"}} points="8.7 1.29 8.7 8.71 6.3 6.31 1.29 8.71 3.69 3.7 1.29 1.29 8.7 1.29"/>
                                </svg>
                                {en && <div>LinkedIn</div>}
                                {jp && <div className="jpFont">リンクトイン</div>}
                            </div>
                        </div>
                    </Draggable>
                    <Draggable bounds="body" nodeRef={nodeRefIcon7}>                    
                        <div ref={nodeRefIcon7} className="icon" id="desktopIcon" onDoubleClick={() => window.open('https://www.instagram.com/sharp_wit_graphics/', '_blank').focus()}>
                            <div className="iconImgText">
                                <div className="iconImg" style={{backgroundImage:`url(${IconIg})`}}></div>
                                <svg id="linkIcon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                                    <rect width="10" height="10" style={{fill:"white"}}/>
                                    <polygon id="linkArrow" style={{fill:"#eb4f14"}} points="8.7 1.29 8.7 8.71 6.3 6.31 1.29 8.71 3.69 3.7 1.29 1.29 8.7 1.29"/>
                                </svg>
                                {en && <div>Instagram</div>}
                                {jp && <div className="jpFont">インスタ</div>}
                            </div>
                        </div>
                    </Draggable>
                </div>
                <div id="modes">
                    <div className="toggleSwitch">
                        <input className="toggleInput" id="toggle" type="checkbox" onClick={() => crtSwitch()}></input>
                        <label className="toggleLabel" htmlFor="toggle"></label>
                        <div className="crtText"><p>CRT: {crtText}</p></div>
                    </div>
                    <div id="modeButtons">
                        <div id="modeContainer">
                            <div className="modeButton" id="modeLight" onClick={() => {
                                setTaskStyle("light")
                                setThemeLight("selected")
                                setThemeTwilight("unselected")
                                setThemeDark("unselected")
                                setThemeRetro("unselected")
                                }}></div>
                        </div>
                        <div id="modeContainer">
                            <div className="modeButton" id="modeTwilight" onClick={() => {
                                setTaskStyle("twilight")
                                setThemeLight("unselected")
                                setThemeTwilight("selected")
                                setThemeDark("unselected")
                                setThemeRetro("unselected")
                                }}></div>
                        </div>
                        <div id="modeContainer">
                            <div className="modeButton" id="modeDark" onClick={() => {
                                setTaskStyle("dark")
                                setThemeLight("unselected")
                                setThemeTwilight("unselected")
                                setThemeDark("selected")
                                setThemeRetro("unselected")
                            }}></div>
                        </div>
                        <div id="modeContainer">
                            <div className="modeButton" id="modeRetro" onClick={() => {
                                setTaskStyle("retro")
                                setThemeLight("unselected")
                                setThemeTwilight("unselected")
                                setThemeDark("unselected")
                                setThemeRetro("selected")
                            }}></div>
                        </div>
                        <div style={{marginTop: "50px"}}>
                            <div id="modeContainer">
                                <div className={`modeButton ${enSelected}`} id="modeEN" onClick={() => {
                                    setEn(true)
                                    setJp(false)
                                    setEnSelected("selected")
                                    setJpSelected("unselected")
                                }}></div>
                            </div>
                            <div id="modeContainer">
                                <div className={`modeButton ${jpSelected}`} id="modeJP" onClick={() => {
                                    setEn(false)
                                    setJp(true)
                                    setEnSelected("unselected")
                                    setJpSelected("selected")
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="taskbar">
                    <div id="date">{date}</div>
                    <div id="clock">{time}</div>
                </div>
                {showWindowInfo &&
                    <Info
                        en={en}
                        jp={jp}
                        indexCount={indexCount}
                        setIndexCount={setIndexCount}
                        infoIndex={infoIndex}
                        setInfoIndex={setInfoIndex}
                        setShowWindowInfo={setShowWindowInfo}
                    />
                }
                <Projects
                    en={en}
                    jp={jp}
                    indexCount={indexCount}
                    setIndexCount={setIndexCount}
                    projectsIndex={projectsIndex}
                    setProjectsIndex={setProjectsIndex}
                    showWindowProjects={showWindowProjects}
                    setShowWindowProjects={setShowWindowProjects}
                />
                {showWindowWallpaper &&
                    <Wallpaper
                        en={en}
                        jp={jp}
                        setPaperStyle={setPaperStyle}
                        setPaperShapesVideoVis={setPaperShapesVideoVis}
                        setPaperHudVideoVis={setPaperHudVideoVis}
                        setPaperPortholeVideoVis={setPaperPortholeVideoVis}
                        indexCount={indexCount}
                        setIndexCount={setIndexCount}
                        wallpaperIndex={wallpaperIndex}
                        setWallpaperIndex={setWallpaperIndex}
                        taskStyle={taskStyle}
                        setShowWindowWallpaper={setShowWindowWallpaper}
                    />
                }
                {showWindowSettings &&
                    <Settings
                        indexCount={indexCount}
                        setIndexCount={setIndexCount}
                        settingsIndex={settingsIndex}
                        setSettingsIndex={setSettingsIndex}
                        setMouseClick={setMouseClick}
                        setShowWindowSettings={setShowWindowSettings}
                        setTaskStyle={setTaskStyle}
                        setCrtVis={setCrtVis}
                        setCrtOption={setCrtOption}
                        setCrtText={setCrtText}
                        shapesOn={shapesOn}
                        shapesOff={shapesOff}
                        setShapesVis={setShapesVis}
                        setShapesOn={setShapesOn}
                        setShapesOff={setShapesOff}
                        themeLight={themeLight}
                        themeTwilight={themeTwilight}
                        themeDark={themeDark}
                        themeRetro={themeRetro}
                        setThemeLight={setThemeLight}
                        setThemeTwilight={setThemeTwilight}
                        setThemeDark={setThemeDark}
                        setThemeRetro={setThemeRetro}
                        en={en}
                        setEn={setEn}
                        jp={jp}
                        setJp={setJp}
                        enSelected={enSelected}
                        jpSelected={jpSelected}
                        setEnSelected={setEnSelected}
                        setJpSelected={setJpSelected}
                    />
                }

            </div>
    )    
}