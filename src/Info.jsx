import "./App.css";
import { Rnd } from 'react-rnd';
import { useRef } from 'react';
import IconBrandon from "./assets/DSC01481-circle.png";
import IconLettuce from "./assets/lettuce-icon.png";

export default function Info({
    en, jp, indexCount, setIndexCount, setShowWindowInfo, infoIndex, setInfoIndex
}) {
    const nodeRefInfo = useRef(null);

    return (
        <Rnd className="window" id="info"
        minWidth="450px" minHeight="300px" default={{width: 420, height: 500, x: 200, y: 200}}
        dragHandleClassName="windowheader" bounds="body"
        noderef={nodeRefInfo} style={{zIndex:`${infoIndex}`}}
        onMouseDown={() => {
            setIndexCount((prevValue) => prevValue + 1)
            setInfoIndex(indexCount)
        }}>
            <div className="windowheader">
                {en && <p>Info/Email</p>}
                {jp && <p className="jpFont">情報・連絡</p>}
                <div className="close" onClick={() => setShowWindowInfo(false)}></div>
            </div>
            <div className="windowContent">
                <div className="infoContainer">
                    <div className="container4col">
                        <div id="infoImg" style={{backgroundImage:`url(${IconBrandon})`}}></div>
                        {en && <h1 style={{gridColumnStart: 2, gridColumnEnd: 4}}>Welcome to my website!</h1>}
                        {jp && <h1 className="jpFontHeader" style={{gridColumnStart: 2, gridColumnEnd: 4}}>サイトえようこそ！</h1>}
                        <div id="infoImg" style={{backgroundImage:`url(${IconLettuce})`}}></div>
                    </div>
                    {en && <div>
                        <p>I'm Brandon Sharp, a multidisciplinary designer based in St. Louis, Missouri.
                            Whether it's graphic design, motion media, video or 3D-modeling,
                            I aim for my projects to be attention-grabbing and entertaining;
                            at the end of the day, my goal is to make people smile!</p>
                         <p>When I'm not on the clock, you can find me playing the piano, hunting for shiny Pokémon
                            in Pokémon GO, working on personal projects, or practicing Japanese in VRChat.</p>
                        <p>I've always been fascinated with websites and games that simulate desktop environments, such as <a href="https://poolsuite.net/" target="_blank">Poolsuite</a> and <a href="https://store.steampowered.com/app/844590/Hypnospace_Outlaw/" target="_blank">Hypnospace Outlaw</a>;
                            this eventually inspired me to create a website that's part portfolio, part desktop playground.
                            <b> Drag things around! Resize the windows! Change the wallpaper! </b>Do whatever pleases you.</p>
                        <p>This site was made entirely using ReactJS, with Vite as my build tool of choice.
                            If by chance you're trying to make your own website, feel free to peek at
                            the source code!</p>
                        <p>Have a project in mind? Got overflow? Let's talk! Shoot me a message
                            at <b>brandonsharpdesign@gmail.com.</b></p>
                        <p><a href="https://codepen.io/mohaiman/pen/MQqMyo" target="_blank">CSS animated background squares</a> by Mohammad Abdul Mohaiman<br />
                            All sound effects created by me.</p>
                    </div>}
                    {jp && <div className="jpFont">
                        <p>ミズーリ州のセントルイス市に拠点、マルチディシプリナリーデザイナーのシャープ・ブランドンです！
                            グラフィックデザイン、モーションメディア、ビデオ、3Dモデリングなど、プロジェクトが人目を引き
                            楽しませるのを目指してます。結局、目標はみんなが笑顔を！</p>
                        <p>仕事をしてないとき、ピアノを弾いたり、ポケモンGOで色違いポケモンを探したり、自分のプロジェクトをしたり、
                            VRChatで日本語を練習したりしてます。</p>
                        <p><a href="https://poolsuite.net/" target="_blank">Poolsuite</a>と<a href="https://store.steampowered.com/app/844590/Hypnospace_Outlaw/" target="_blank">Hypnospace Outlaw</a>などのデスクトップ環境の
                        ウェブサイトやゲームにいつもめっちゃ興味があって、結局ポートフォリオであり、デスクトッププレイグラウンドでもあるサイトを作りたかったんです。
                            <b>アイコンをドラッグしよう！ウィンドウをリサイズしよう！壁紙を変えよう！</b>なんでも自由に！</p>
                        <p>このサイトはViteのツールを使って、完全にReactJSで作成された。自分のウェブサイトを作ろうとしている場合は、
                            ぜひソースコードを見よう！</p>
                        <p>プロジェクトを考えてますか？溢れてますか？話しよう！<b>brandonsharpdesign@gmail.com</b>で連絡ください！</p>
                        <p>ちなみに、日本語がペラペラじゃないから翻訳のエラーの場合はぜひ教えてください！</p>
                        <p><a href="https://codepen.io/mohaiman/pen/MQqMyo" target="_blank">CSS立ち昇る背景四角</a>: Mohammad Abdul Mohaiman<br />
                            SEが全部自分で作られた。</p>
                    </div>}
                </div>
            </div>
        </Rnd>

    )
}