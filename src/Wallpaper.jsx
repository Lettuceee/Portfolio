import { useRef } from 'react';
import Logo from './Logo.jsx';
import { Rnd } from 'react-rnd';

export default function Wallpaper({
    en, jp,
    defWidth, defX, defY,
    setPaperStyle, setPaperShapesVideoVis, 
    setPaperHudVideoVis, setPaperPortholeVideoVis,
    indexCount, setIndexCount,
    wallpaperIndex, setWallpaperIndex,
    taskStyle,
    setShowWindowWallpaper
}) {
        const nodeRefWallpaper = useRef(null);

        return (
           <Rnd className="window" id="wallpaper"
           minWidth="300px" default={{x: defX, y: defY, width: defWidth, height: 450}}
           dragHandleClassName="windowDrag" bounds="body" lockAspectRatio="true"
           noderef={nodeRefWallpaper} style={{zIndex:`${wallpaperIndex}`}}
           onMouseDown={() => {
                    setIndexCount((prevValue) => prevValue + 1)
                    setWallpaperIndex(indexCount)
                }}>
                <div className="windowheader">
                    {en && <p>Wallpaper</p>}
                    {jp && <p className="jpFont">壁紙</p>}
                    <div className="windowDrag"></div>
                    <div className="close" onClick={() => setShowWindowWallpaper(false)}></div>
                </div>
                <div className="windowContent">
                    <div className="paperSelect">
                        <div className="paperOption">
                            <div className="paperPreview" id={taskStyle} onClick={() => {
                                setPaperShapesVideoVis(false)
                                setPaperHudVideoVis(false)
                                setPaperPortholeVideoVis(false)
                                setPaperStyle("noPaper")
                            }}>
                            <div id="bgLogoPreview">
                                <Logo logoViewbox={"0 0 1783.4 405.84"}/>
                            </div>
                        </div>
                        {en && <div>Default</div>}
                        {jp && <div className="jpFont">デフォルト</div>}
                        </div>
                        <div className="paperOption">
                            <div className="paperPreview" id="shapesPreview" onClick={() => {
                                setPaperStyle("shapesPreview")
                                setPaperShapesVideoVis(true)
                                setPaperHudVideoVis(false)
                                setPaperPortholeVideoVis(false)
                            }}></div>
                            {en && <div>▶ Shapes</div>}
                            {jp && <div className="jpFont">▶ シェイプ</div>}
                        </div>
                        <div className="paperOption">
                            <div className="paperPreview" id="hudPreview" onClick={() => {
                                setPaperStyle("hudPreview")
                                setPaperHudVideoVis(true)
                                setPaperShapesVideoVis(false)
                                setPaperPortholeVideoVis(false)
                            }}></div>
                            {en && <div>▶ Hologram</div>}
                            {jp && <div className="jpFont">▶ ホログラム</div>}
                        </div>
                        <div className="paperOption">
                            <div className="paperPreview" id="portholePreview" onClick={() => {
                                setPaperStyle("portholePreview")
                                setPaperPortholeVideoVis(true)
                                setPaperShapesVideoVis(false)
                                setPaperHudVideoVis(false)
                            }}></div>
                            {en && <div>▶ Porthole</div>}
                            {jp && <div className="jpFont">▶ ポルチオール</div>}
                        </div>
                        <div className="paperOption">
                            <div className="paperPreview" id="underpass" onClick={() => {
                                setPaperShapesVideoVis(false)
                                setPaperHudVideoVis(false)
                                setPaperPortholeVideoVis(false)
                                setPaperStyle("underpass")
                            }}></div>
                            {en && <div>Underpass</div>}
                            {jp && <div className="jpFont">アンダーパス</div>}
                        </div>
                        <div className="paperOption">
                            <div className="paperPreview" id="burki" onClick={() => {
                                setPaperShapesVideoVis(false)
                                setPaperHudVideoVis(false)
                                setPaperPortholeVideoVis(false)
                                setPaperStyle("burki")
                            }}></div>
                            <div>CITY SC</div>
                        </div>
                        <div className="paperOption">
                            <div className="paperPreview" id="pigeons" onClick={() => {
                                setPaperShapesVideoVis(false)
                                setPaperHudVideoVis(false)
                                setPaperPortholeVideoVis(false)
                                setPaperStyle("pigeons")
                            }}></div>
                            {en && <div>D.C. Pigeons</div>}
                            {jp && <div className="jpFont">首都ハト</div>}
                        </div>
                        <div className="paperOption">
                            <div className="paperPreview" id="dogs" onClick={() => {
                                setPaperShapesVideoVis(false)
                                setPaperHudVideoVis(false)
                                setPaperPortholeVideoVis(false)
                                setPaperStyle("dogs")
                            }}></div>
                            {en && <div>Mularky and Ollie</div>}
                            {jp && <div className="jpFont">マルラキーとオリー</div>}
                        </div>
                        <div className="paperOption">
                            <div className="paperPreview" id="vrchat1" onClick={() => {
                                setPaperShapesVideoVis(false)
                                setPaperHudVideoVis(false)
                                setPaperPortholeVideoVis(false)
                                setPaperStyle("vrchat1")
                            }}></div>
                            VRChat 1
                        </div>
                        <div className="paperOption">
                            <div className="paperPreview" id="vrchat2" onClick={() => {
                                setPaperShapesVideoVis(false)
                                setPaperHudVideoVis(false)
                                setPaperPortholeVideoVis(false)
                                setPaperStyle("vrchat2")
                            }}></div>
                            VRChat 2
                        </div>
                        <div className="paperOption">
                            <div className="paperPreview" id="img8461" onClick={() => {
                                setPaperShapesVideoVis(false)
                                setPaperHudVideoVis(false)
                                setPaperPortholeVideoVis(false)
                                setPaperStyle("img8461")
                            }}></div>
                            IMG_8461
                        </div>
                        <div className="paperOption">
                            <div className="paperPreview" id="sunset" onClick={() => {
                                setPaperShapesVideoVis(false)
                                setPaperHudVideoVis(false)
                                setPaperPortholeVideoVis(false)
                                setPaperStyle("sunset")
                            }}></div>
                            {en && <div>Desert Sunset</div>}
                            {jp && <div className="jpFont">砂漠の夕暮れ</div>}
                        </div>
                    </div>
                </div>
        </Rnd> 
    )
}