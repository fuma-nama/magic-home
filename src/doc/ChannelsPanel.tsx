import logo from "../images/logo.svg";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Container,
  GradientTitle,
  LinkButton,
  MarginDescription,
  SizedImg,
  Title,
} from "../util/components";
import { server_link } from "../links";

const channelsMd = `
| 小天堂 | 地方介紹                            |
|---------------------------------|-----------------------------|
| 麻瓜們的自介                    | 做自我介紹                  |
| 幹話閒聊                        | 就是聊幹話                  |
| ai機器城                       | 打指令的地方                |
| 野生寶可夢出沒                 | 抓寶可夢~                   |
| 太空狼人殺打字室                | 太空狼人殺玩家打字的地方    |
| 直播(1)                        | 就是直播                    |
| 直播(2)                        | 就是直播                    |
| 音遊直播室                     | 就是直播音遊                |
| 放克放起來                      | friday night funkin的聊天室 |
| minecraft聊天室                 | 就是麥塊                    |
| 跑跑薑餅人                      | 聊跑薑的                    |
| 薑餅人王國                     | 聊薑王的                    |
| DJ餅乾的奇幻主戰場             | 就是直播跑跑的地方          |
| 帕菲餅乾的演唱會               | 直播薑王的地方              |
| 蜂蜜盃公告欄                   | 公告什麼時候比賽            |
| 蜂蜜盃聊天室                    | 蜂蜜盃成員聊天的地方        |
| 電影院                         | 星露谷玩家開直播的地方      |
| 小咚的咚咔大冒險               | 太鼓玩家打字的地方          |
| 貓戰聊天區                     | 貓戰玩家打字的地方          |
| osu打字室                       | osu玩家打字的地方           |
`;

export function ChannelsPanel() {
  return (
    <Container className="flex flex-col w-full p-20 gap-10">
      <Head />
      <ReactMarkdown children={channelsMd} remarkPlugins={[remarkGfm]} />
    </Container>
  );
}

function Head() {
  return (
    <Container className="flex flex-row footer p-5 justify-center">
      <div className="flex flex-col gap-5">
        <GradientTitle>綜合遊戲小天堂</GradientTitle>
        <Title>大致介紹</Title>
        <MarginDescription>我們的大型社區擁有 40 多個頻道！</MarginDescription>
        <LinkButton link={server_link}>Take a Look</LinkButton>
      </div>
      <SizedImg alt="Logo" src={logo} />
    </Container>
  );
}
