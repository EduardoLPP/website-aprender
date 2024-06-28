import { BlackCard } from "../../components/BlackCard";
import { CommentCard } from "../../components/CommentCard";
import { Description } from "../../components/Description";
import { Container, ContainerCards, ContainerComments, ContainerDescription } from "./styles";

export function Content() {
  return (
    <Container>
      <ContainerCards>
            <BlackCard title="Lógica de programação" url="/images/tag.svg" />

            <BlackCard title="Introdução à HTML" url="/images/html.svg" />

            <BlackCard title="Introdução à CSS" url="/images/css.svg" />
        </ContainerCards>

        <ContainerComments>
          <CommentCard url="" name="Fernanda Pimentel" comment="A plataforma é incrível e a metodologia dos cursos são de alcance para quem está começando ou quem já está avançado em alguma tecnologia."/>

          <CommentCard url="" name="Pedro Ferreira" comment="Com muitos exercícios práticos e a ajuda da  comunidade do Aprender, consegui passar em um processo seletivo"/>
        </ContainerComments>

        <ContainerDescription>
          <Description title="Teoria"/>

          <Description title="Prática"/>

          <Description title="Comunidade"/>
        </ContainerDescription>
    </Container>
  
  )
}
