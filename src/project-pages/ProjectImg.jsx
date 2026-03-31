import "../App.css";
import { Rnd } from 'react-rnd';
import { useRef } from 'react';

export default function ProjectImg ({
    indexCount, setIndexCount,
    winIndex, setWinIndex,
    showWin, setShowWin,
    windowImage, imageName
}) {
    const nodeRef = useRef(null);

    return (
        <div>
            {showWin &&
                <Rnd className="window" id="imageWindow"
                minWidth="400px" default={{width: 500, x: 200, y: 200}}
                dragHandleClassName="windowheader" bounds="body" lockAspectRatio="true"
                noderef={nodeRef} style={{zIndex:`${winIndex}`}}
                onMouseDown={() => {
                        setIndexCount((prevValue) => prevValue + 1)
                        setWinIndex(indexCount)
                    }}>
                        <div className="windowheader">
                            <p>{imageName}</p>
                            <div className="close" onClick={() => setShowWin(false)}></div>
                        </div>
                    <div className="windowContent">
                        <div className="infoContainer">
                            <img src={windowImage} style={{maxWidth: '100%'}}/>
                        </div>
                    </div>
                </Rnd>
            }
        </div>
    )
}