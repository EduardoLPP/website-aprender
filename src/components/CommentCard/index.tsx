import { Comentary, CommentCardProps, Container, Image, LeftSide, Name, RightSide } from "./styles";

export function CommentCard({...props} : CommentCardProps) {
  return (
    <Container>
        <LeftSide>
            <Image url={props.url}/>
        </LeftSide>
        <RightSide>
            <Name>{props.name}</Name>
            <Comentary>{props.comment}</Comentary>
        </RightSide>
    </Container>
  )
}
