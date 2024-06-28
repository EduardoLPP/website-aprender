import { Button, ButtonTitle, Container, Desc, LineButton, SubTitle, SubscriptionProps, Title } from "./styles";

export  function Subscription({...props} : SubscriptionProps) {
  return (
    <Container>
        <Title>{props.title}</Title>

        <SubTitle>{props.value}</SubTitle>

        {props.descs.map((data, index) => (
            <Desc key={index}>{data}</Desc>
        ))}

        <Button>
            <ButtonTitle>Assinar</ButtonTitle>
            <LineButton />
        </Button>
       
    </Container>
  )
}
