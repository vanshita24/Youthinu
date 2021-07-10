import Main from "~/layouts/main";
import { MainFooter } from '~/components/Footers';
import "../styles/Home.module.css";







export default function Home(props) {
  return (
      
      <Main>
          <h1 className="text-purple-600  text-4xl font-headline font-sans font-extrabold flex justify-center mt-20">Frequently Asked Questions (FAQs)</h1>
          <div className="grid  md:grid-cols-4 gap-6 sm:grid-cols-2 ">
          <article className='   relative h-full  sm:max-w-xl sm:mx-auto bg-gray-50 flex justify-center rounded-xl flex-row shadow-sm hover:shadow-lg overflow-hidden mt-10 w-64 '>
              <div className="flex flex-col">
              <h className="text-2xl font-bold font-sans">What is yiu academy ?</h>
              <p>Yiuacademy is a marketplace and online learning portal for kids aged 2 till 22. We help parents find great classes for their kids. And we help teachers to promote their classes to parents. We offer both recorded video classes and live classes from teachers.</p>
              </div>
              
          </article>
          <article className='   relative h-full  sm:max-w-xl sm:mx-auto bg-gray-50 flex justify-center rounded-xl flex-row shadow-sm hover:shadow-lg overflow-hidden mt-10 w-64 '>
              <div className="flex flex-col">
              <h className="text-2xl font-bold font-sans">How do yiuacademy classes work ?</h>
              <p>
    We offer both recorded video classes and live classes from teachers. Live classes include live meetings over video zoom or google meet. </p>
              </div>
              
          </article>
          <article className='   relative h-full  sm:max-w-xl sm:mx-auto bg-gray-50 flex justify-center rounded-xl flex-row shadow-sm hover:shadow-lg overflow-hidden mt-10 w-64 '>
              <div className="flex flex-col">
              <h className="text-2xl font-bold font-sans">How does the class timings for online classes work ?</h>
              <p>No, there is no trial session. But we do refund of remaining classes if you are not satisfied with the class or the teacher.</p>
              </div>
          </article>
          <article className='   relative h-full  sm:max-w-xl sm:mx-auto bg-gray-50 flex justify-center rounded-xl flex-row shadow-sm hover:shadow-lg overflow-hidden mt-10 w-64 '>
              <div className="flex flex-col">
              <h className="text-2xl font-bold font-sans">Is there a free trial session for the live classes ?</h>
              <p>No, there is no trial session. But we do refund of remaining classes if you are not satisfied with the class or the teacher.</p>
              </div>
              
          </article>
          <article className='   relative h-full  sm:max-w-xl sm:mx-auto bg-gray-50 flex justify-center rounded-xl flex-row shadow-sm hover:shadow-lg overflow-hidden mt-10 w-64 '>
              <div className="flex flex-col">
              <h className="text-2xl font-bold font-sans">How do you pay for classes ?</h>
              <p>Parents pay for each workshop they enroll. At this time, we accept payment by credit or debit card.
</p>
              </div>
              
          </article>
          <article className='   relative h-full  sm:max-w-xl sm:mx-auto bg-gray-50 flex justify-center rounded-xl flex-row shadow-sm hover:shadow-lg overflow-hidden mt-10 w-64 '>
              <div className="flex flex-col">
              <h className="text-2xl font-bold font-sans">Do you provide discounts for siblings or multiple kids?</h>
              <p> At this time "NO". But we might do it in future.</p>
              </div>
              
          </article>
          <article className='   relative h-full  sm:max-w-xl sm:mx-auto bg-gray-50 flex justify-center rounded-xl flex-row shadow-sm hover:shadow-lg overflow-hidden mt-10 w-64 '>
              <div className="flex flex-col">
              <h className="text-2xl font-bold font-sans">What does YIU live Academy offer for teachers?</h>
              <p> We offer a platform for teachers to promote and deliver online classes. This includes:
      Best crafted online listings of your classes
      Access to our community of learners
      Integrated video chat platform and messaging
      We do our best to simplify the logistics, so you can focus on crafting the class experience.</p>
              </div>
              
          </article>
          
          


        
  





          </div>
          

          
          <MainFooter/>
      </Main>
      
   

  );
}
