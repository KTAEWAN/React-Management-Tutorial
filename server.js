const express = require("express"); //웹서버 생성
const bodyParser = require("body-parser"); // 요청정보 처리
const cors = require("cors"); // 교차 출처 리소스 공유(Cross-Origin Resource Sharing, CORS)

const app = express(); // 익스프레스 설정
const port = process.env.port || 5000; // 포트번호 설정 포트번호는 0부터 16비트
const iconv = require("iconv-lite");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // 객체 형식 처리

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/any1",
      name: "김태완",
      birthday: "930604",
      gender: "남자",
      job: "취준생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/any2",
      name: "하승권",
      birthday: "999999",
      gender: "남자",
      job: "취준생",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/any3",
      name: "이호준",
      birthday: "888888",
      gender: "남자",
      job: "얼짱",
    },
  ]);
});
app.listen(port, () => console.log(`Listening on port ${port}`));
