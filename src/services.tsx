import {
  Container,
  GradientTitle,
  SizedImg,
  MarginDescription,
  Title,
  extendComponent,
  Img,
} from "./util/components";
import games from "./info/games";
import bots from "./info/bots";

export function Services() {
  return (
    <>
      <Activities />
      <OtherServices />
    </>
  );
}

function OtherServices() {
  return (
    <Container className="flex flex-col">
      <Title>Play with</Title>
      <GradientTitle>Discord Bots</GradientTitle>
      <MarginDescription>
        Listening to Music, Playing Chat Games, Find some Fun Stickers and More
        with Bots!
      </MarginDescription>
      <div className="flex flex-row gap-5 flex-wrap mt-10">
        {bots.map((icon) => (
          <img src={icon} className="rounded-lg w-20 h-20" alt="bot" />
        ))}
      </div>
    </Container>
  );
}

function Activities() {
  return (
    <Container className="flex flex-col max-w-full">
      <GradientTitle>Activities and Maps</GradientTitle>
      <Title>For different Games</Title>
      <MarginDescription>
        Playing with other members in different games <br />
        Making new friends and have fun!
      </MarginDescription>
      <div className="flex flex-row flex-wrap gap-10 mt-20">
        <HoneyCup />
        <GhostCatchRoom />
      </div>
    </Container>
  );
}

const GamePanel = extendComponent(
  <Container className="flex flex-row gap-5 flex-wrap" />
);
function HoneyCup() {
  return (
    <GamePanel>
      <Img src={games[2].image} className="w-52 h-52 rounded-lg" />
      <div className="flex flex-col flex-1">
        <GradientTitle>蜂蜜盃</GradientTitle>
        <MarginDescription>
          Fight with other players and proof your power!
        </MarginDescription>
      </div>
    </GamePanel>
  );
}

function GhostCatchRoom() {
  return (
    <GamePanel>
      <Img src={games[0].image} className="w-52 h-52 rounded-lg" />
      <div className="flex flex-col flex-1">
        <GradientTitle>鬼抓人密室</GradientTitle>
        <MarginDescription>A funny game in Minecraft</MarginDescription>
      </div>
    </GamePanel>
  );
}
