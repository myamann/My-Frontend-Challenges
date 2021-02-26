import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="py-10 px-4">
      <Head>
        <title>Mehmet Yaman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="rounded-lg ovewflow-hidden mx-auto md:w-2/4 shadow-lg">
        <section className="p-8 bg-white rounded-t-lg">
          <h1 className="text-xl text-green-600 font-semibold">
            Join our community
          </h1>
          <h2 className="text-yellow-600 font-semibold pt-4">
            30-day hassle-free money back guarantee
          </h2>
          <p className="pt-2 text-gray-500">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </section>
        <section className="text-white md:flex md:flex-row ">
          <div className="bg-green-500 p-10 md:w-1/2 md:rounded-bl-lg">
            <h2 className="text-lg font-semibold">Monthly Subscription</h2>
            <div className="flex items-center pt-2 pb-2">
              <p className="text-2xl font-semibold">$29</p>
              <p className="ml-2 font-hairline">per month</p>
            </div>
            <p className="font-light text-md ">
              Full access for less then $1 a day
            </p>
            <button className="bg-yellow-600 w-full shadow-md text-white font-bold py-2 px-4 rounded mt-6">
              Sign Up
            </button>
          </div>
          <div className="bg-green-400 p-10 md:w-1/2 md:rounded-br-lg">
            <h2 className="font-semibold text-lg">Why Us</h2>
            <div className="text-sm font-light pt-2">
              <p>Tutorials by industry experts</p>
              <p>Peer & expert code review</p>
              <p>Coding exercises</p>
              <p>Access to our GitHub repos</p>
              <p>Community forum</p>
              <p>Flashcard decks</p>
              <p>New videos every week</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
