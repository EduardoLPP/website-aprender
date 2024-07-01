import { Subscription } from "../../components/Subscription";
import { Logo } from "../Home/styles";
import { Container, ContainerCardsSubscription, Title } from "./sytles";
import { useTranslation } from 'react-i18next';

export function SubscriptionContent() {
  const { t } = useTranslation();

    const freePlan = [t('access-courses'), t('access-community')]
    const proPlan = [t('feat-starter'), t('premium')]
    const busPlan = [t('feat-pro'), t('support'), t('trainings')]

  return (
   <Container>
        <Title>{t('developers')}</Title>

        <ContainerCardsSubscription>
            <Subscription title="Starter" value={t('free')} descs={freePlan}/>

            <Subscription title="PRO" value={t('pro')}  descs={proPlan}/>
            
            <Subscription title="Business" value={t('business')} descs={busPlan}/>
        </ContainerCardsSubscription>

        <Logo><span className="first">{'<'}</span>Aprender<span className="last">{'/>'}</span></Logo>
   </Container>
  )
}
