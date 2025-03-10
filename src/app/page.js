import styles from "./global.module.scss";
import Header from "@/components/organisms/Header/Header";
import Container from "@/layouts/Container/Container";
import Welcome from "@/components/pages/Welcome/welcome";
import Services from "@/components/pages/Services/Services";
import Advantage from "@/components/pages/Advantages/Advantage";
import Contacts from "@/components/pages/Contacts/Contacts";
import Footer from "@/components/pages/Footer/Footer";
import Copyright from '@/components/atoms/Copyright/Copyright';
export default function Home() {
  return (
     <div className={styles.global}>
         <Header/>

          <Container>
               <Welcome/>
               <Services/>
           </Container>
           <Advantage/>
           <Contacts/>
           <Footer/>
          <Copyright/>

     </div>
  );
}
