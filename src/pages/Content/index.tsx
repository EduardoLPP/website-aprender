import { BlackCard } from "../../components/BlackCard";
import { CommentCard } from "../../components/CommentCard";
import { Description } from "../../components/Description";
import { Container, ContainerCards, ContainerComments, ContainerDescription } from "./styles";
import { useTranslation } from 'react-i18next';

export function Content() {
  const { t } = useTranslation();

  return (
    <Container>
      <ContainerCards>
            <BlackCard title={t('logic')} url="/images/tag.svg" />

            <BlackCard title={t('html')} url="/images/html.svg" />

            <BlackCard title={t('css')} url="/images/css.svg" />
        </ContainerCards>

        <ContainerComments>
          <CommentCard url="" name="Fernanda Pimentel" comment={t('first-comment')}/>

          <CommentCard url="" name="Pedro Ferreira" comment={t('second-comment')}/>
        </ContainerComments>

        <ContainerDescription>
          <Description title={t('theory')}/>

          <Description title={t('practice')}/>

          <Description title={t('community')}/>
        </ContainerDescription>
    </Container>
  
  )
}
