import { Button } from "../../components/Button";
import { useTranslation } from 'react-i18next';
import { Container, ContainerSubtitle, ContainerTitle, ContainerTitles, Logo, NotebookImage, Subtitle, Title, TranslateButton, TranslateText } from "./styles";
import i18n from '../../configuration/translator'

export function Home() {
  const { t } = useTranslation();
  
  const changeLanguage = () => {
    const currentLanguage = i18n.language;

    if(currentLanguage == 'en'){
      i18n.changeLanguage('pt');
    }
    else{
      i18n.changeLanguage('en');
    }
  };

  return (
   <Container>

    <TranslateButton onClick={() => changeLanguage()}>
        <TranslateText>{i18n.language == 'en' ? 'Traduzir (pt-Br)' : 'Translate (en)'}</TranslateText>
    </TranslateButton>

    <ContainerTitles>
      <Logo><span className="first">{'<'}</span>Aprender<span className="last">{'/>'}</span></Logo>

        <ContainerTitle>
          <Title>{t('solutions')}</Title>
        </ContainerTitle>

        <ContainerSubtitle>
            <Subtitle>{t('level')}</Subtitle>
        </ContainerSubtitle>

        <Button title={t('button')} />

    </ContainerTitles>
       
    <NotebookImage />
        
   </Container>
  )
}

