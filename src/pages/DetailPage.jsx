import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom';

// style
import styles from "../styles/DetailPage.module.css"

export default function Detailpage() {
  const location = useLocation();
  const music = location.state.music;
  const navigation = useNavigate();

  const backHandler = () => {
    navigation("/");    
  }

  return (
    <div className={styles.container}> 
        <button className={styles.backSpace} onClick={backHandler}>뒤로가기</button>
            <ul className={styles.info}> 곡 상세 정보
                <li className={styles.image}>
                    <img src={music["im:image"][2].label} alt={`${music["im:name"].label} 앨범 이미지`}/>
                </li>
                <li className={styles.price}>
                    <span >
                    가격 : {music["im:price"].label}
                    </span>
                </li>
                <li className={styles.song}>
                    <span >
                    노래 : {music["im:name"].label} 
                    </span>
                </li>
                <li className={styles.artist}>
                    <span >
                    가수 : {music["im:artist"].label} 
                    </span>
                </li>
                <li className={styles.day}>
                    <span >
                    발매일 : {music["im:releaseDate"].attributes.label}
                    </span>
                </li>
            </ul>
    </div>
  )
}
