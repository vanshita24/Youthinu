import Main from "~/layouts/main";
import { MainFooter } from '~/components/Footers';
import "../styles/Home.module.css";
export default function Home(props) {
    return (
      <Main>
          <h1 className="text-purple-600  text-4xl font-headline font-sans font-extrabold flex justify-start mt-20">Find Classes</h1>
          <div className="bg-gray-100">
              <div className="container h-48 flex justify-center items-center mt-3">
                  <div className="relative">
                      <div className="absolute top-4 left-3"><svg class="w-6 h-6 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="none" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div>
                      <input type="text" class="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Any topic or teacher"></input>
                      <div className="absolute top-2 right-2"><button class="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">Search</button></div>
                  </div>
              </div>
          </div>
    <br></br>
    <br></br>
    <br></br>
        <MainFooter/>
      </Main>
    );
  }
  