import clients from "./info/clients";
import {
  Container,
  Description,
  GradientTitle,
  MarginDescription,
  Title,
} from "./util/components";

export function Clients() {
  return (
    <Container className="flex flex-col gap-10 max-w-7xl">
      <div className="flex flex-col">
        <Title>Opinions from</Title>
        <GradientTitle>Our Clients</GradientTitle>
      </div>
      <MarginDescription>
        We care about every member of our server
      </MarginDescription>
      <ClientGrid />
    </Container>
  );
}

function ClientGrid() {
  return (
    <div className="flex flex-row flex-wrap gap-5">
      {clients.map((c) => (
        <ClientItem key={c.head} client={c} />
      ))}
    </div>
  );
}

function ClientItem({ client }: { client: any }) {
  return (
    <div className="flex flex-row rounded-lg gap-3 bg-pink-600 p-3">
      <img src={client.image} className="w-20 h-20" />
      <div className="flex flex-col gap-3">
        <Description>{client.head}</Description>
        <a className="text-xl">{client.content}</a>
      </div>
    </div>
  );
}
