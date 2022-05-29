import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import safe from "../images/safe.svg";
import { Container, Img, LinkButton } from "../util/components";

const panelMd = `
## Server
# Rules
&nbsp;  
We are always protecting our members.
Make sure links, images, videos are safe and not NSFW

Take a look at: https://discord.com/guidelines
`;

const rulesMd = `
### 更新日期: 2022/05/07

| 入住天堂須知                                                                    |
|------------------------------------------------------------------------------------|
| 1. 必須先看完這裡的規則                                                            |
| 2. 一定要領身分組及自我介紹                                                        |
| 3. 不要過度錯頻除非小俊也是                                                        |
| 4. 不要亂領身分組(例如:點了又消)                                                   |

| 聊天規則                                                                        |
|---------------------------------------------------------------------------------|
| 1. 不要洗頻                                                                      |
| 2. 不要和任何人吵架                                                              |
| 3. 不要在 大家的廣告欄 以外的地方放你的頻道及連結 (有些頻道有自己的影片區)       |
| 4. 影片以及照片不可過度含有成人內容 想要開車是有一定的風險讓整個伺服器的人都沒得 |
| 5. 請不要以任何形式的詐騙 (冒用其他人名義, 隨意公開私人群組, 不是好的網站, 現金交易)
如果是被盜帳號的請自行處理善後 |

| 伺服器規則                                       |
|--------------------------------------------------|
| 1. 不要嘗試炸服 鋪路工人找的到(例如1代的公宅事件) |
| 2. 不要嘗試破壞任何東西 我說過我是清潔工          |
| 3. 沒玩不要領蠑螈好夥伴身分組                     |
| 4. 請不要攻擊任何生物除非是怪物                   |

| 管理員規則                            |
|---------------------------------------|
| 1. 不要亂tag everyone(包括服主)        |
| 2. 不要亂禁言(包括服主)                |
| 3. 不要亂ban人除非真的有問題(包括服主) |
| 4. 不要亂動別人的暱稱(包括服主)        |
| 5. 不要亂給警告(包括服主)              |
`;

export function RulesPanel() {
  return (
    <Container className="flex flex-col w-full p-20 gap-10">
      <div className="flex flex-row gap-5">
        <Img alt="safe" src={safe} className="flex-1 w-0 min-w-[20rem]" />
        <div>
          <ReactMarkdown
            className="flex flex-col"
            children={panelMd}
            remarkPlugins={[remarkGfm]}
          />
          <LinkButton link="https://discord.com/guidelines" className="mt-5">
            Learn More
          </LinkButton>
        </div>
      </div>
      <ReactMarkdown children={rulesMd} remarkPlugins={[remarkGfm]} />
    </Container>
  );
}
