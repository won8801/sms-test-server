import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// 간단한 테스트용 API
app.get('/', (req, res) => {
  res.send('✅ 서버가 잘 작동 중입니다!');
});

app.listen(PORT, () => {
  console.log(`✅ 서버가 포트 ${PORT}에서 실행 중!`);
});
