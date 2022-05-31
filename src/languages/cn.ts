import { Any, Language } from "../util/translate";

export const cn: Language = {
  //Nav
  Home: "主頁",
  Rules: "規則",
  Channels: "頻道",
  Info: "信息",

  //Home Page
  "The powerful community for games": "一個樂於助人、龐大而強大的社區",
  "More then": "多於",
  "Join Us": "加入我們",
  "Find your like-minded friends in the server!":
    "在服務器中尋找志同道合的朋友！",
  "Friendly and Helpful": "友好和樂於助人的",
  Peoples: "服務器成員",
  "Chat Channel for": "不同遊戲的",
  "Different Games": "聊天頻道",
  "Share your moments of games, invite players and play together":
    "分享你的遊戲時刻，邀請玩家一起玩",
  "Opinions from": "意見來自",
  "Our Clients": "我們的客戶",
  "We care about every member of our server": "我們關心服務器的每個成員",
  "Activities and Maps": "活動和地圖",
  "For different Games": "針對不同的遊戲",
  "Fight with other players and proof your power!":
    "與其他玩家戰鬥並證明你的力量！",
  "A funny game in Minecraft": "Minecraft中一個有趣的遊戲",
  "Play with": "玩",
  "Discord Bots": "Discord機器人",
  "Listening to Music, Playing Chat Games, Find some Fun Stickers and More with Bots!":
    "用機器人聽音樂、玩聊天遊戲、尋找有趣的貼紙等等！",
  "The Workers": "這個社區的",
  "Of This Community": "工人",
  "People Who is working for this Community": "為這個社區工作的人",
  "The Founder": "創建者",
  "The Admin Master": "管理員大師",
  "An Youtuber, Pro Gamer, Minecraft Map Creator":
    "Youtuber、職業玩家、Minecraft 地圖創作者",
  "The Most important member, also the admin of Our Community":
    "最重要的成員，也是我們社區的管理員",
  "Website Developer": "網站開發人員",
  "A Full-Stack Engineer who has no friends": "沒有朋友的全棧工程師",
  Features: "特徵",
  Chat: "聊天",
  "Game Play": "遊戲",
  "Issue Helper": "問題助手",
  Bots: "機器人",
  Activities: "活動",
  "Our Community has been created for": "我們的社區已經創建了",
  "2 Years": "2年",
  "Support Our Community": "支持我們的社區",
  Donate: "捐款",

  //Rules Page
  Server: "伺服器",
  "We are always protecting our members. Make sure links, images, videos are safe and not NSFW":
    "我們一直在保護我們的會員。確保鏈接、圖像、視頻是安全的，而不是 NSFW",
  "Take a Look": "看一看",
  "Learn More": "了解更多",

  //Info Page
  "The Developer": "本網站的",
  "Of This Website": "開發者",
  "My Channel": "我的頻道",
  "Report Issues": "報告問題",
  Repository: "Github存儲庫",

  splits: [
    {
      key: [Any, "Members"],
      value: ([count]) => `${count}名成員`,
    },
  ],

  lines: [
    {
      key: [
        "This website is open source.",
        "Find any Problems? Tell me on the Github Repo!",
      ],
      value: ["這個網站是開源的", "發現任何問題？在 Github Repo 上告訴我。"],
    },
    {
      key: [
        "Connect with Pro Gamers, Game Developers,",
        "Game lovers and professionals",
      ],
      value: "與職業遊戲玩家、遊戲開發者、遊戲愛好者和專業人士聯繫",
    },
    {
      key: [
        "Playing with other members in different games",
        "Making new friends and have fun!",
      ],
      value: ["在不同的遊戲中與其他成員一起玩，", "結交新朋友，玩得開心！"],
    },
    {
      key: [
        "Hello, I am MONEY.",
        "I have been worked on this website for a week,",
        "As a Full-Stack Engineer, I have a Github account and my own Youtube Channel",
        "Feel free to subscribe my channel or see My Projects on Github",
      ],
      value: [
        "Hello, 我是MONEY",
        "我在這個網站上工作了一個星期，",
        "作為一名全棧工程師，我有一個 Github 帳戶和我自己的Youtube頻道",
        "歡迎訂閱我的頻道或在 Github 上查看我的項目",
      ],
    },
  ],
};
