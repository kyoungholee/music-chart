import axios from "axios";

export function GetChartList() {
    return axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json");
}