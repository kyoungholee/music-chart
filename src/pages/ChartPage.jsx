import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// api
import { GetChartList } from '../api/chart';

// style
import styles from "../styles/ChartPage.module.css"

export default function ChartPage() {
    const [initialList, setInitialList] = useState([]);
    const [chartList, setChartList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        GetChartList().then((res) => {
            setInitialList(res.data.feed.entry);
            setChartList(res.data.feed.entry);
        });
    }, []);

    const sortChart = (e) => {
        let sortList = [];
        switch(e.target.id) {
            case "ascending" :
                sortList = chartList.sort((a, b) => a["im:name"].label.toLowerCase() > b["im:name"].label.toLowerCase() ? 1 : -1)
                break;
            case "descending" : 
                sortList = chartList.sort((a, b) => a["im:name"].label.toLowerCase() > b["im:name"].label.toLowerCase() ? -1 : 1)
                break;
            default : 
                sortList = chartList;
                break;
        }
        setChartList([...sortList]);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const resultData = initialList.filter((data) => data["im:name"].label.toLowerCase().includes(inputValue.toLowerCase()));
        setChartList([...resultData]);
    }
    
    const handlerInputValue = (e) => {
      setInputValue(e.target.value);
    }

  return (
    <main className={styles.container}>
        <h1 className={styles.title} >이엘 뮤직 Top 100 차트</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="searchId">
            <input type="text" className={styles.inputField} id="searchId" name="searchList" placeholder="원하시는 음원을 입력해주세요." onChange={handlerInputValue} />
            <button type="submit" className={styles.inputButton}>검색</button>
            </label>
        </form>
        <div className={styles.sortButton}>
            <button id="ascending" onClick={sortChart}>오름차순</button>
            <button id="descending" onClick={sortChart}>내림차순</button>
        </div>
    
        <ul>
            {chartList && chartList.map((data) => (
                <Link key={data.id.attributes["im:id"]} to = {`/detail/${data.id.attributes["im:id"]}`} state={{ music: data }}>
                    <li className={styles.chartContainer}>
                        <img src={data["im:image"][0].label}  alt={`${data["im:name"].label} 앨범 이미지`} />
                        <h1 className={styles.chartTitle}>{data.title.label}</h1>
                    </li>
                </Link>
            ))}
        </ul>
    </main>
  )
}