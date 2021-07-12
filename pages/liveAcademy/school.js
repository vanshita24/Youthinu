import Main from "~/layouts/main";
//import "../styles/Home.module.css";
import { MainFooter } from '~/components/Footers';
export default function ThirdPost() {

    return (
        <Main>
            <header className="relative flex items-center justify-center h-96 mb-12 overflow-hidden ">
  
  <img
    
    className="absolute z-10 w-auto min-w-full min-h-full max-w-none "
    src="/images/tile.jpeg"
  />
    


</header>
<div className="h-full px-8 py-12 lg:flex lg:justify-center lg:items-center">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-6">
        <div className="w-full max-w-md mx-auto ">
            <img className=" rounded-t-lg shadowed-lg" src="/images/maths.jpeg"/>
            <h1 className=" shadowed-lg h-14 px-4 py-4 border border-black-400 font-bold  font-sans  rounded-b-lg ">Logical math</h1>
            </div>
            <div className="w-full max-w-md mx-auto ">
            <img className=" rounded-t-lg shadowed-lg" src="/images/coding.jpeg"/>
            <h1 className=" shadowed-lg h-14 px-4 py-4 border border-black-400 font-bold font-sans rounded-b-lg">  Coding</h1>
            </div>
          <div className="w-full max-w-md mx-auto">
            <img className=" rounded-t-lg shadowed-lg"src="/images/school.jpeg"/>
            <h1 className=" shadowed-lg h-14 px-4 py-4 border border-black-400 font-bold font-sans rounded-b-lg ">Combo</h1>
            </div>
           
           
          </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
    
            <MainFooter/>
        </Main>
    )
    
  }