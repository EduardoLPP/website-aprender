import { Container, IconCard, Title } from "./styles"; 
import { CardProps } from "./styles";

export function BlackCard({...props} : CardProps) {
  return (
    <Container>
        <IconCard url={props.url}></IconCard>
        <Title>{props.title}</Title>
    </Container>
  )
}
