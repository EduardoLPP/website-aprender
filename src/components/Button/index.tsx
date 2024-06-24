import { Container, Title } from "./styles";

interface ButtonProps {
    title : string,
}

export function Button({...props} : ButtonProps) {
  return (
    <Container>
        <Title>{props.title}</Title>
    </Container>
  )
}
