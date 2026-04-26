import { useState } from 'react';
import { useRef } from 'react';
import { Rnd } from 'react-rnd';

export default function Settings({
    defWidth, defX, defY,
    indexCount, setIndexCount, settingsIndex, setSettingsIndex,
    setMouseClick, setShowWindowSettings, setTaskStyle,
    setCrtVis, setCrtOption, setCrtText,
    shapesOn, shapesOff,
    setShapesVis, setShapesOn, setShapesOff,
    themeLight, themeTwilight, themeDark, themeRetro,
    setThemeLight, setThemeTwilight, setThemeDark, setThemeRetro,
    en, setEn, jp, setJp,
    enSelected, jpSelected, setEnSelected, setJpSelected
}) {
        const nodeRefSettings = useRef(null);

        const [mouseRazer, setMouseRazer] = useState("selected")
        const [mouseMicrosoft, setMouseMicrosoft] = useState("unselected")
        const [mouseApple, setMouseApple] = useState("unselected")
        const [mouseNone, setMouseNone] = useState("unselected")

        return (
           <Rnd className="window" id="settings"
           minWidth="300px" default={{x: defX, y: defY, width: defWidth, height: 400}}
           dragHandleClassName="windowheader" bounds="body" enableResizing="false"
           noderef={nodeRefSettings} style={{zIndex:`${settingsIndex}`}}
           onMouseDown={() => {
                    setIndexCount((prevValue) => prevValue + 1)
                    setSettingsIndex(indexCount)
                }}>
                <div className="windowheader">
                    {en && <p>Settings</p>}
                    {jp && <p className="jpFont">設定</p>}
                    <div className="close" onClick={() => setShowWindowSettings(false)}></div>
                </div>
                <div className="windowContent" id="settingsContent">
                    <div className="settingsRow">
                        {en && <p><b>Mouse Sound</b></p>}
                        {jp && <p className="jpFont"><b>マウス音</b></p>}
                        <div className="settingsButtons">
                            <div className={`settingsOption ${mouseRazer}`} onClick={() => {
                                setMouseClick(1)
                                setMouseRazer("selected")
                                setMouseMicrosoft("unselected")
                                setMouseApple("unselected")
                                setMouseNone("unselected")
                            }}>
                                Razer
                            </div>
                            <div className={`settingsOption ${mouseMicrosoft}`} onClick={() => {
                                setMouseClick(2)
                                setMouseRazer("unselected")
                                setMouseMicrosoft("selected")
                                setMouseApple("unselected")
                                setMouseNone("unselected")
                            }}>
                                Microsoft
                            </div>
                            <div className={`settingsOption ${mouseApple}`} onClick={() => {
                                setMouseClick(3)
                                setMouseRazer("unselected")
                                setMouseMicrosoft("unselected")
                                setMouseApple("selected")
                                setMouseNone("unselected")
                            }}>
                                Apple
                            </div>
                            <div className={`settingsOption ${mouseNone}`} onClick={() => {
                                setMouseClick(0)
                                setMouseRazer("unselected")
                                setMouseMicrosoft("unselected")
                                setMouseApple("unselected")
                                setMouseNone("selected")
                            }}>
                                None
                            </div>
                        </div>
                    </div>
                    <div className="settingsDivider"></div>
                    <div className="settingsRow">
                        {en && <p><b>Theme</b></p>}
                        {jp && <p className="jpFont"><b>テーマ</b></p>}
                        <div className="settingsButtons">
                            <div className={`settingsOption ${themeLight}`} onClick={() => {
                                setTaskStyle("light")
                                setThemeLight("selected")
                                setThemeTwilight("unselected")
                                setThemeDark("unselected")
                                setThemeRetro("unselected")
                            }}>
                                {en && <div>Light</div>}
                                {jp && <div className="jpFont">ライト</div>}
                            </div>
                            <div className={`settingsOption ${themeTwilight}`} onClick={() => {
                                setTaskStyle("twilight")
                                setThemeLight("unselected")
                                setThemeTwilight("selected")
                                setThemeDark("unselected")
                                setThemeRetro("unselected")
                            }}>
                                {en && <div>Twilight</div>}
                                {jp && <div className="jpFont">日暮れ</div>}
                            </div>
                            <div className={`settingsOption ${themeDark}`} onClick={() => {
                                setTaskStyle("dark")
                                setThemeLight("unselected")
                                setThemeTwilight("unselected")
                                setThemeDark("selected")
                                setThemeRetro("unselected")
                            }}>
                                {en && <div>Dark</div>}
                                {jp && <div className="jpFont">ダーク</div>}
                            </div>
                            <div className={`settingsOption ${themeRetro}`} onClick={() => {
                                setTaskStyle("retro")
                                setThemeLight("unselected")
                                setThemeTwilight("unselected")
                                setThemeDark("unselected")
                                setThemeRetro("selected")
                            }}>
                                {en && <div>Retro</div>}
                                {jp && <div className="jpFont">レトロ</div>}
                            </div>
                        </div>
                    </div>
                    <div className="settingsDivider"></div>
                    <div className="settingsRow">
                        {en && <p><b>Background Squares</b></p>}
                        {jp && <p className="jpFont"><b>背景四角</b></p>}
                        <div className="settingsButtons">
                            <div className={`settingsOption ${shapesOn}`} onClick={() => {
                                setShapesVis("shapesBackground")
                                setShapesOn("selected")
                                setShapesOff("unselected")
                            }}>
                                {en && <div>On</div>}
                                {jp && <div className="jpFont">オン</div>}
                            </div>
                            <div className={`settingsOption ${shapesOff}`} onClick={() => {
                                setShapesVis("shapesAreOff")
                                setShapesOn("unselected")
                                setShapesOff("selected")
                            }}>
                                {en && <div>Off</div>}
                                {jp && <div className="jpFont">オフ</div>}
                            </div>
                        </div>
                    </div>
                    <div className="settingsDivider"></div>
                    <div className="settingsRow">
                        {en && <p><b>Language</b></p>}
                        {jp && <p className="jpFont"><b>言語</b></p>}
                        <div className="settingsButtons">
                            <div className={`settingsOption ${enSelected}`} onClick={() => {
                                setEn(true)
                                setJp(false)
                                setEnSelected("selected")
                                setJpSelected("unselected")
                            }}>
                                <div>English</div>
                            </div>
                            <div className={`settingsOption ${jpSelected}`} onClick={() => {
                                setEn(false)
                                setJp(true)
                                setEnSelected("unselected")
                                setJpSelected("selected")
                            }}>
                                <div className="jpFont">日本語</div>
                            </div>
                        </div>
                    </div>
                </div>
        </Rnd> 
    )
}