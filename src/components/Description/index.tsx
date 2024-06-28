import { Container, DescroptionProps, Line, Title } from "./styles";

export function Description({...props} : DescroptionProps) {
  return (
    <Container>
        <Line />

        <Title>{props.title}</Title>
    </Container>
  )
}
