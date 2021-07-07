import Main from "~/layouts/main";
//import "../styles/Home.module.css";
import { MainFooter } from '~/components/Footers';
export default function ThirdPost() {

    return (
        <Main>
            <header className="relative flex items-center justify-center h-96 mb-12 overflow-hidden ">
  
  <img
    
    className="absolute z-10 w-auto min-w-full min-h-full max-w-none "
    src="/images/cover.jpeg"
  />
    


</header>
            <h1>Welcome!!</h1>
            <MainFooter/>
        </Main>
    )
    
  }