import {
  Button,
  Container,
  Description,
  GradientTitle,
  LinkButton,
  MarginDescription,
  Title,
} from "./util/components";
import workers from "./info/workers";
import { ChildrenProps } from "./util/Props";
import { github_link, server_link, youtube_link } from "./links";

export function FoundersPanel() {
  const { founder, developer, admin } = workers;

  return (
    <Container className="flex flex-col max-w-full">
      <GradientTitle>The Workers</GradientTitle>
      <Title>Of This Community</Title>
      <MarginDescription>
        People Who is working for this Community
      </MarginDescription>
      <Profile user={founder} title="The Founder">
        <Description>An Youtuber, Pro Gamer, Minecraft Map Creator</Description>
        <LinkButton link={youtube_link}>Subscribe</LinkButton>
      </Profile>
      <Profile user={admin} title="The Admin Master">
        <Description>
          The Most important member, also the admin of Our Community
        </Description>
        <LinkButton link={server_link}>Support</LinkButton>
      </Profile>
      <Profile user={developer} title="Website Developer">
        <Description>A Full-Stack Engineer who has no friends</Description>
        <LinkButton link={github_link}>Github</LinkButton>
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
    <Container className="flex flex-row gap-5 p-5 rounded-lg bg-slate-800 mt-16 w-auto max-w-full">
      <img src={avatar} alt="Founder Avatar" className="w-40 h-40 rounded-lg" />
      <div className="flex flex-col gap-5 flex-1 min-w-0">
        <Description className="text-pink-600">{title}</Description>
        <GradientTitle>{name}</GradientTitle>
        {children}
      </div>
    </Container>
  );
}
