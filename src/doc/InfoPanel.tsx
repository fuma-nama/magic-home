import { dev_yt_link, github_link } from "../links";
import {
  Container,
  GradientTitle,
  Img,
  LinkButton,
  MarginDescription,
  SizedImg,
  Title,
} from "../util/components";

const avatar =
  "https://media.discordapp.net/attachments/615904589320945678/978250819692560404/IMG_1556.png?width=1196&height=897";
export function InfoPanel() {
  return (
    <div className="flex flex-col p-20 gap-10">
      <DeveloperPanel />
      <IssuesPanel />
    </div>
  );
}

function IssuesPanel() {
  return (
    <Container className="flex flex-col gap-5">
      <Title>Report Issues</Title>
      <MarginDescription>
        This website is open source.
        <br />
        Find any Problems? Tell me on the Github Repo!
      </MarginDescription>
      <LinkButton link={github_link}>Repository</LinkButton>
    </Container>
  );
}
function DeveloperPanel() {
  return (
    <Container className="flex flex-row gap-8 flex-wrap">
      <Img
        src={avatar}
        alt="Avatar"
        className="min-w-[25rem] h-min flex-1 max-w-3xl"
      />
      <div className="flex flex-col">
        <GradientTitle>The Developer</GradientTitle>
        <Title>Of This Website</Title>
        <MarginDescription className="leading-normal">
          Hello, I am MONEY.
          <br />
          I have been worked on this website for a week,
          <br />
          As a Full-Stack Engineer, I have a Github account and my own Youtube
          Channel
          <br />
          Feel free to subscribe my channel or see My Projects on Github
          <br />
          <LinkButton link={dev_yt_link} className="mt-10">
            My Channel
          </LinkButton>
        </MarginDescription>
      </div>
    </Container>
  );
}
