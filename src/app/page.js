import Image from "next/image";
import styles from "./global.module.scss";
import Header from "@/components/organisms/Header/Header";
import Container from "@/layouts/Container/Container";
import Welcome from "@/components/pages/Welcome/welcome";
import Services from "@/components/pages/Services/Services";

export default function Home() {
  return (
     <div className={styles.global}>
         <Header/>

       <Container>
           <Welcome/>
           <Services/>

       </Container>
   

     </div>
  );
}
