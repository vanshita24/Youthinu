import Main from "~/layouts/main";
import "../styles/Home.module.css";

export default function Home(props) {
  return (
    <Main>
      <section className="w-full flex flex-col items-center pb-10 bg-fixed">
        <div>
          <br />
          <br />
          <div className="container text-purple-600 text-xl">
            <h4 >
              <b>YouthInU</b>
            </h4>
          </div>
          Founded in Dec 2020, by a first-time women entrepreneur, YouthInU is a
          destination for young aspirants dreaming to achieve big in life.{" "}
          <br />
          Our mission is to create a respected conglomerate where our team works
          and strives hard to delight our customers(ie: kids aged 2 till 22) and
          their community.
        </div>

        <br />
        <div>
          <div className="container text-purple-600 text-xl">
            <h4>
              <b>YIU Academy</b>
            </h4>
          </div>
          Yiuacademy is an online learning portal for kids aged 2 till 22. This
          portal gives an oppurtunity to kids to learn more day to day logical
          things.
        </div>
      </section>
    </Main>
  );
}
