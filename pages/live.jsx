import Main from "~/layouts/main";
import "../styles/Home.module.css";
import { MainFooter } from '~/components/Footers';
import Head from 'next/head'
import Link from 'next/link'

export default function Home(props) {
  return (
    <div>
      <Main>
      
      <header className="flex items-center justify-center mb-12 overflow-hidden ">
  
  <video
    autoPlay
    loop
    muted
    className=" w-auto  h-1/4"
    height="720"
    width="1280"
  >
    <source
      src="/videos/banner.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</header>
<div className="h-full px-12 py-12 lg:flex lg:justify-center lg:items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-x-16">
            <div className="w-full max-w-md mx-auto ">
            <img className=" rounded-lg shadowed-lg mb-10" src="/images/school.jpeg"/>
           <Link href="/liveAcademy/school">
  <a className=" flex justify-center focus:outline-none focus:ring focus:border-yellow-300 hover:bg-yellow-600 p-3 text-xl text-white  bg-purple-900 active:scale-100 active:text-yellow-500   focus:shadow-outline rounded-xl">School Courses</a>
</Link>
            </div>
            <div className="w-full max-w-md mx-auto ">
            <img className=" rounded-lg shadowed-lg mb-10" src="/images/school.jpeg"/>
           <Link href="/liveAcademy/individual">
  <a className=" flex justify-center focus:outline-none focus:ring focus:border-yellow-300 hover:bg-yellow-600 p-3 text-xl text-white  bg-purple-900 active:scale-100 active:text-yellow-500   focus:shadow-outline rounded-xl">Individual Courses</a>
</Link>
            </div>
      </div>
  
    
    </div>



  <section className="w-full flex flex-col  items-center pb-10 bg-fixed">
    <div>
    <div  className=" grid  md:grid-cols-3 gap-6 sm:grid-cols-1 ">
    <article className=' relative h-full  sm:max-w-xl sm:mx-auto bg-gray-50 flex rounded-xl flex-col shadow-sm hover:shadow-lg overflow-hidden w-96 mt-64'>
      <figure>
        <img
          src="/images/mathsPic.jpeg"
          layout='responsive'
          height={222}
          width={400}
        />
      </figure>

      <div className='flex flex-col items-center flex-grow'>
        <div className="flex justify-end">
        <h1
         className="mt-6 text-3xl font-headline tracking-tight font-extrabold text-gray-900 leading-snug ml-5">
         Go down deep enough into anything  <br />
         <span className="text-green-700">and you will find Mathematics</span>
         <div className=" font-bold text-xl">-	Dean Schlicter</div>
       </h1>
       
        
        
        </div>
        
        
        
        <p className='text-gray-600 p-5  line-clamp-3'>Experts say that Mathematics is the gate and key of Science. All these Sciences such as Physics, Medicine, and Engineering progress only with the aid of Mathematics. So it is aptly remarked, “Mathematics is a Science of all Sciences and art of all arts.” It is much more than Arithmetic, more than Algebra more than Geometry. Also, it is much more than Trigonometry, Statistics, and Calculus. Primarily mathematics is a way of thinking and organizing logical proofs. Mathematics intimately connects with everyday life and is necessary to the successful conduct of affairs. We use math every day. For example, we use math when crossing the road, cooking, telling the time, and many more.

Mathematics makes our life orderly and prevents chaos. Certain qualities nurtured by mathematics are the power of reasoning, creativity, abstract or spatial thinking, critical thinking, problem-solving ability, and even efficient communication skills. 
Mathematics is the cradle of all creations, without which the world cannot move an inch. Everyone needs mathematics in their day-to-day life, be it a cook or a farmer, a carpenter or a mechanic, a shopkeeper or a doctor, an engineer or a scientist, a musician or a magician. Even insects use mathematics in their everyday life for existence. Snails make their shells, spiders design their webs, and bees build hexagonal combs. There are countless examples of mathematical patterns in nature’s fabric. To live in a mathematically-driven world and not know math is like walking through an art museum with your eyes closed.
</p>
        <div className="flex justify-center  h-35  ">
        <a
          className='mb-5 bg-red-500 py-2 px-3 rounded-md text-white font-semibold text-lg mr-10 ml-6 mt-10 '
          href="/live/art">
          Read More
        </a>
        

        </div>
        
      </div>
    </article>
    <article className=' relative h-full  sm:max-w-xl sm:mx-auto bg-gray-50 flex rounded-xl flex-col shadow-sm hover:shadow-lg overflow-hidden w-96 mt-64'>
      <figure>
        <img
          src="/images/art.jpeg"
          layout='responsive'
          height={222}
          width={400}
        />
      </figure>

      <div className='flex flex-col items-center flex-grow'>
        <div className="flex justify-end">
        <h1
         className="mt-6 text-3xl font-headline tracking-tight font-extrabold text-gray-900 leading-snug ml-5">
         Art is as natural as sunshine  <br />
         <span className="text-green-700">And as vital as nourishment</span>
         <div className=" font-bold text-xl">- Mary Ann F. Kohl</div>
       </h1>
       
        
        
        </div>
        
        
        
        <p className='text-gray-600 p-5 line-clamp-6'>Everyone is artistic in some form or the other. Art takes many forms, from cooking and baking to woodworking, welding, interior design, sewing, crafting, etc. We all do something creative in our day-to-day lives. Learning to paint is just an extension of that creativity and has many perks. While staying fit is vital for your health, finding a creative outlet keeps your mind strong while also expanding your horizons. Painting provides a fun, new hobby that sharpens your mind and delivers various health benefits.  

 

               Entering your little world of creativity and forgetting outside stressors would serve as a mini-vacation for your mind. Art is an activity highly recommended for children to help brain development and improve creativity and problem-solving. Painting can be very meditative. Using a brush and paint, you can block out all the noise and stress of life and lose yourself in the creative process. Pouring your emotions into your painting is the best way to express the thoughts and feelings that you have trouble saying out loud. 

 

                   There is no doubt that the arts are fun for kids. Diving into those finger paints and making a beautiful picture to hang on the fridge is indeed exhilarating. The arts don't just stop after developing children's creativity; the skills they learn from arts spill over into academic achievement. A report says that young people who indulge in the arts are four times more likely to be recognized for academic achievement than children who do not participate.  

 

Drawing and painting stimulate both hemispheres of the brain, both the left and the right. The left invokes the logical essence, while the right side exploits our creativity and emotions. The practice of drawing and painting are procedures that demand a certain amount of patience and caution; it teaches us to wait, to listen, and to appreciate silence; in short, to have peace, prudence, and respect for ourselves and others. People who frequently use creative outlets such as writing, painting, and drawing have less chance of developing memory loss illnesses as they age. 

 

Given all the beneficial attributes to this artistic hobby, it is clear that painting builds good mental health in individuals of every age. 

            The “Earth” without “art” is just "Eh."  

                                                               - Demetri Martin. 

YIU Academy brings forward many beginner-friendly courses to help you craft your way to the world of art. These comprehensive courses teach you about different drawing styles, painting, pencil shading, water coloring, acrylic painting, rubber block carving, and whatnot. The courses offered would help you move on to the next level of creativity. Ready to adorn your world with art? Reach out to us! Take the first steps towards art today for your kids and ignite the artist in them at the comfort of your home. </p>
        <div className="flex justify-center  h-35  ">
        <a
          className='mb-5 bg-red-500 py-2 px-3 rounded-md text-white font-semibold text-lg mr-10 ml-6 mt-10 '
          href="/liveAcademy/art">
          Read More
        </a>
        

        </div>
        
      </div>
    </article>

    
    <article className=' relative h-full  sm:max-w-xl sm:mx-auto bg-gray-50 flex rounded-xl flex-col shadow-sm hover:shadow-lg overflow-hidden w-96 mt-64'>
      <figure>
        <img
          src="/images/coding.jpeg"
          layout='responsive'
          height={222}
          width={400}
        />
      </figure>

      <div className='flex flex-col items-center flex-grow'>
        <div className="flex justify-end">
        <h1
         className="mt-6 text-3xl font-headline tracking-tight font-extrabold text-gray-900 leading-snug ml-5">
         Everybody should learn to program a computer   <br />
         <span className="text-green-700">because it teaches you how to think</span>
         <div className=" font-bold text-xl">- Steve Jobs</div>
       </h1>
       
        
        
        </div>
        
        
        
        <p className='text-gray-600 p-5 line-clamp-3'>Coding, in the simplest of terms, is telling a computer what you want it to do. It involves typing in step-by-step commands for the computer to follow. Code powers our digital world. Every website, smartphone app, computer program, calculator, and even microwave relies on code to operate. Thus coders are the architects and builders of the digital age. Over the next ten years, there would be around 1.4 million jobs in computer sciences. Jobs not directly linked to computer science (such as banking, medicine, and journalism) will also need a basic understanding of programming and coding. Therefore, students who learn coding at a young age will have numerous progressive employment opportunities available to them in the future.

Coding helps children to be able to visualize abstract concepts, lets them apply math to real-world situations and makes math fun and creative. Children who learn to code understand how to plan and organize thoughts. Coding is a basic literacy in the digital age, and kids need to understand and work with the technology around them. Having children learn coding at a young age prepares them for the future. Coding helps children with communication, creativity, math, writing, and confidence.

Steve Jobs once said, “Everybody should learn to program a computer because it teaches you how to think.” When you know how to think, you open up endless possibilities to your work and life. Coding trains your brain to think deeply, identify the troubles, break things up, then put the pieces together to arrive at a solution. These troubleshooting skills help you become smarter personally and professionally and see a situation from a new perspective. Some might think coding is boring with standard formulas, but it can be fun and creative. There won’t be the same problems to be resolved every time; you will overcome different challenges that require new solutions. While working on coding projects, you can make use of your creativity to provide a tailored solution to an issue – and your innovative solution might somehow change the world.

Technology is a growing trend in the digital economy, providing massive job opportunities. Programmers, software engineers, and developers are in high demand across different industries. With coding as the fundamental skill, you open up career choices. It also makes your portfolio stand out from the others. From problem-solving skills, job opportunities, critical thinking, and creativity, there are many reasons why one should learn to code.
Learning to code can help your life in a way you can never imagine. 

YouthInU Academy brings forward several structured courses to help students learn vital coding skills in an accelerated curriculum. These courses help you become proficient in Java, Python, Scratch, etc. Learn coding from scratch with us at the comfort of your home. If you want to give your child something enjoyable to do, which will also be educational and help them learn, our coding courses would be the perfect gift. 

Instead of continuing to be a digital consumer, start your journey with us to become a digital creator!!



</p>
        <div className="flex justify-center  h-35  ">
        <a
          className='mb-5 bg-red-500 py-2 px-3 rounded-md text-white font-semibold text-lg mr-10 ml-6 mt-10 '
          href="/live/art">
          Read More
        </a>
        

        </div>
        
      </div>
    </article>



    </div>

      
    
      

    

    


      
        


      
      
        
    
        







    
  


      
      
    </div>

    <br />
    
  </section>
  <MainFooter />
      </Main>
      

    </div>
    
  );
}


