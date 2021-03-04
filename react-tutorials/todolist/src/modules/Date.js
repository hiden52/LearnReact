const today = new Date();
const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day = DAYS[today.getDay()];

const TODAY = `${year}년 ${month}월 ${date}일 ${day}요일`;

const timeNow = () => {
    const now = new Date();
    return now.toLocaleTimeString();
}

export {TODAY, timeNow};
