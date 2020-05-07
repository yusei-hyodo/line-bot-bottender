import { line } from "bottender/router";
import { LineContext, LineEvent } from "bottender";

export default line.message(async (context: LineContext) => {
  const event = context.event as LineEvent;

  switch (event.message?.type) {
    case "text":
      await context.replyText(event.message.text);
      break;
    default:
      await context.replyText("テキストを送ってよ");
      break;
  }
});
