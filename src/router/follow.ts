import { line } from "bottender/router";

export default line.follow(async (context) => {
  const message: string = `ばりぐっどくんとお友達になってくれてありがとう😃\nぼくは長崎県西海市に住んどるよ😆\n文字の含まれとる画像ば送ってくれたら文章にして返すけんね😃`;
  await context.replyText(message);
});
