import React from 'react'
import { useLocation } from "react-router-dom";

// style
import styles from "../styles/DetailPage.module.css"


export default function Detailpage() {
  const location = useLocation();
  const music = location.state.music;

  console.log(music)

  return (
         <div className={styles.container}> 
            <ul className={styles.info}> 곡 상세 정보
                <li className=''>
                    <img src={music["im:image"][2].label}  alt="차트사진"/>
                </li>
                <li>
                    <span className={styles.price}>
                    가격 : {music["im:price"].label}
                    </span>
                </li>
                <li>
                    <span className={styles.song}>
                    노래 : {music["im:name"].label} 
                    </span>
                    <span className={styles.artist}>
                    가수 : {music["im:artist"].label} 
                    </span>
                </li>
                <li>
                    <span>
                    발매일 : {music["im:releaseDate"].attributes.label}
                    </span>
                </li>
            </ul>
         </div>
  )
}
