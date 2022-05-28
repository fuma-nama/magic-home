import {
  Button,
  Container,
  Description,
  GradientTitle,
  MarginDescription,
  Title,
} from "./util/components";
import workers from "./info/workers";
import { ChildrenProps } from "./util/Props";

export function FoundersPanel() {
  const { founder, developer, admin } = workers;

  return (
    <Container className="flex flex-col">
      <GradientTitle>The Workers</GradientTitle>
      <Title>Of This Community</Title>
      <MarginDescription>
        People Who is working for this Community
      </MarginDescription>
      <Profile user={founder} title="The Founder">
        <Description>An Youtuber, Pro Gamer, Minecraft Map Creator</Description>
        <Button>Subscribe</Button>
      </Profile>
      <Profile user={admin} title="The Admin Master">
        <Description>
          The Most important member, also the admin of Our Community
        </Description>
        <Button>Support Him</Button>
      </Profile>
      <Profile user={developer} title="Website Developer">
        <Description>A Full-Stack Engineer who has no friends</Description>
        <Button>His Github</Button>
      </Profile>
    </Container>
  );
}

function Profile({
  user: { avatar, name },
  children,
  title,
}: ChildrenProps<any> & { user: any; title: string }) {
  return (
    <Container className="flex flex-row gap-5 p-5 rounded-lg bg-slate-800 mt-16">
      <img src={avatar} alt="Founder Avatar" className="w-40 h-40 rounded-lg" />
      <div className="flex flex-col gap-5">
        <Title>{title}</Title>
        <GradientTitle>{name}</GradientTitle>
        {children}
      </div>
    </Container>
  );
}
