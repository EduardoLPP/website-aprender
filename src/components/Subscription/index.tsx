import { Button, ButtonTitle, Container, Desc, LineButton, SubTitle, SubscriptionProps, Title } from "./styles";
import { useTranslation } from 'react-i18next';

export  function Subscription({...props} : SubscriptionProps) {
  const { t } = useTranslation()
  
  return (
    <Container>
        <Title>{props.title}</Title>

        <SubTitle>{props.value}</SubTitle>

        {props.descs.map((data, index) => (
            <Desc key={index}>{data}</Desc>
        ))}

        <Button>
            <ButtonTitle>{t('subscribe')}</ButtonTitle>
            <LineButton />
        </Button>
       
    </Container>
  )
}
