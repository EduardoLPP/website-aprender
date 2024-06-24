import { Button } from "../../components/Button";
import { Container, ContainerSubtitle, ContainerTitle, ContainerTitles, Logo, NotebookImage, Subtitle, Title } from "./styles";

export function Home() {
  return (
   <Container>
    <ContainerTitles>
      <Logo><span className="first">{'<'}</span>Aprender<span className="last">{'/>'}</span></Logo>

        <ContainerTitle>
          <Title>Desenvolva soluções incríveis</Title>
        </ContainerTitle>

        <ContainerSubtitle>
            <Subtitle>Uma plataforma de aprendizado para alcançar seu próximo nível como programador(a)</Subtitle>
        </ContainerSubtitle>

        <Button title="Quero me candidatar" />

    </ContainerTitles>
       
    <NotebookImage />
        
   </Container>
  )
}
