import {
  Button,
  Container,
  Description,
  GradientTitle,
  MarginDescription,
} from "./util/components";

export function SupportPanel() {
  return (
    <Container className="w-full flex flex-col items-center footer gap-16 p-10">
      <Features />
      <HistoryPanel />
      <div className="flex flex-col gap-5 items-center">
        <MarginDescription>Support Our Community</MarginDescription>
        <div className="flex flex-row gap-5">
          <Button>Join Us</Button>
          <Button>Donate</Button>
        </div>
      </div>
    </Container>
  );
}

function Features() {
  const feature = ["Chat", "Game Play", "Issue Helper", "Bots", "Activities"];

  return (
    <Container className="flex flex-col">
      <GradientTitle>Features</GradientTitle>
      <Container className="grid grid-cols-3 gap-10">
        {feature.map((f) => (
          <div className="bg-pink-600 min-w-fit h-52 rounded-lg p-10 text-center">
            <Description>{f}</Description>
          </div>
        ))}
      </Container>
    </Container>
  );
}

function HistoryPanel() {
  return (
    <div className="flex flex-col items-center">
      <a className="text-5xl font-bold">Our Community has been created for</a>
      <GradientTitle>2 Years</GradientTitle>
    </div>
  );
}
