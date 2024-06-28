import { Subscription } from "../../components/Subscription";
import { Logo } from "../Home/styles";
import { Container, ContainerCardsSubscription, Title } from "./sytles";

export function SubscriptionContent() {
    const freePlan = ["Acesso à cursos gratuitos", "Acesso à comunidade"]
    const proPlan = ["Funcionalidades do Starter", "Acesso à cursos premium"]
    const busPlan = ["Funcionalidades do PRO","Suporte técnico", "Treinamentos"]

  return (
   <Container>
        <Title>Junte-se à mais de 100 mil desenvolvedores</Title>

        <ContainerCardsSubscription>
            <Subscription title="Starter" value="Grátis" descs={freePlan}/>

            <Subscription title="PRO" value="R$ 20,00 mês" descs={proPlan}/>
            
            <Subscription title="Business" value="R$ 100,00 mês" descs={busPlan}/>
        </ContainerCardsSubscription>

        <Logo><span className="first">{'<'}</span>Aprender<span className="last">{'/>'}</span></Logo>
   </Container>
  )
}
