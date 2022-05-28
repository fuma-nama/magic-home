import members from "./info/members";
import games from "./info/games";
import friendly from "./images/friendly.svg";
import gamesSvg from "./images/games.svg";
import {
  Button,
  Container,
  Description,
  extendComponent,
  GradientTitle,
  SizedImg,
  MarginDescription,
  Title,
} from "./util/components";
import { Clients } from "./Clients";
import { Services } from "./services";
import { FoundersPanel } from "./founders";
import { SupportPanel } from "./support";
const Item = extendComponent(
  <div className="flex flex-col gap-5 bg-pink-600 rounded-lg p-2 min-w-max" />
);
const Row = extendComponent(
  <Container className="flex flex-row gap-5 flex-wrap" />
);
export function Body() {
  return (
    <div className="flex flex-col gap-52 w-full items-center p-20">
      <MemberGrid />
      <FriendlyPanel />
      <ChatChannelsPanel />
      <Clients />
      <Services />
      <FoundersPanel />
      <SupportPanel />
    </div>
  );
}

function FriendlyPanel() {
  return (
    <Row>
      <SizedImg src={friendly} alt="Friendly Community" />
      <div className="flex flex-col">
        <Title>Friendly and Helpful</Title>
        <GradientTitle>Peoples</GradientTitle>
        <MarginDescription>
          Connect with Pro Gamers, Game Developers,
          <br />
          Game lovers and professionals
        </MarginDescription>
        <Button className="mt-14">Join Us</Button>
      </div>
    </Row>
  );
}

function ChatChannelsPanel() {
  return (
    <Row>
      <div className="flex flex-col">
        <Title>Chat Channel for</Title>
        <GradientTitle>Different Games</GradientTitle>
        <MarginDescription>
          Share your moments of games, invite players and play together
        </MarginDescription>
        <GamesGrid />
      </div>
      <SizedImg src={gamesSvg} alt="Games" />
    </Row>
  );
}
function GamesGrid() {
  return (
    <div className="grid grid-cols-3 py-10 gap-5">
      {games.map((g) => (
        <GameItem game={g} />
      ))}
    </div>
  );
}

function GameItem({ game: { name, image } }: { game: any }) {
  return <img src={image} className="rounded-lg w-40 h-40" alt={name} />;
}

function MemberGrid() {
  return (
    <Container className="flex flex-col gap-5 w-fit">
      <div className="flex flex-col">
        <Title>More then</Title>
        <GradientTitle>100 Members</GradientTitle>
      </div>
      <MarginDescription>
        Find your like-minded friends in the server!
      </MarginDescription>
      <div className="grid grid-cols-9 w-fit gap-5">
        {members.map((m) => (
          <GridItem member={m} />
        ))}
        <Item className="bg-gray-500 text-center">More</Item>
      </div>
    </Container>
  );
}
function GridItem({ member: { name, avatar } }: { member: any }) {
  return (
    <Item>
      <img src={avatar} className="rounded-lg w-20" alt="user avatar" />
      <a className="font-bold">{name}</a>
    </Item>
  );
}