import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const AboutPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* About Section */}
      <section className="flex flex-col lg:flex-row items-center gap-8 py-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-xl font-semibold mb-4">ABOUT COMPANY</p>
          <h2 className="text-4xl font-bold mb-4">ABOUT US</h2>
          <p className="text-gray-600 mb-6">
            We know how large objects will act,
            <br /> but things on a small scale.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Get Quote Now
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/images/about-hero.jpg"
            alt="Shopping woman"
            width={1440}
            height={639}
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-center py-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-xl font-semibold mb-4 text-red-700">
            Problems trying
          </p>
          <p className="text-gray-600 font-extrabold mb-6">
            Met minim Mollie non desert
            <br />
            Alamo est sit cliquey dolor do
            <br />
            met sent.
          </p>
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-gray-600 font-semibold mb-6">
            Problems trying to resolve the conflict between the two major realms
            of
            <br /> Classical physics: Newtonian mechanics
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Happy Customers", value: "15K" },
            { label: "Monthly Visitors", value: "150K" },
            { label: "Countries Worldwide", value: "15" },
            { label: "Top Partners", value: "100+" },
          ].map((stat, index) => (
            <div key={index}>
              <h3 className="text-3xl font-bold text-black">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12">
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/images/video-card.jpg"
              alt="Scenic View"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-4">Meet Our Team</h2>
        <p className="text-xl font-serif text-center mb-8 text-[#737373]">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["team-user-1", "team-user-2", "team-user-3"].map((user, index) => (
            <div key={index} className="text-center">
              <Image
                src={`/images/${user}.jpg`}
                alt={`${user}`}
                width={316}
                height={231}
                className="mx-auto"
              />
              <h3 className="mt-4 text-lg font-semibold">Username</h3>
              <p className="text-gray-600">Profession</p>
              <div className="flex justify-center mt-2 space-x-3">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Big Companies Are Here
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
        <div className="flex justify-center space-x-6">
          {[
            { company: "hooli", icon: "fa-building" },
            { company: "lyft", icon: "fa-car" },
            { company: "stripe", icon: "fa-credit-card" },
            { company: "aws", icon: "fa-cloud" },
          ].map(({ company, icon }) => (
            <div key={company} className="text-center">
              <i className={`fas ${icon} text-4xl text-blue-500`} />
              <p className="mt-2 text-gray-600 font-extrabold">{company}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="flex flex-col lg:flex-row items-center h-[640] gap-8 bg-blue-500">
        <div className="lg:w-2/3 px-24">
          <p className="text-xl font-semibold mb-8">WORK WITH US</p>
          <h2 className="text-4xl font-bold mb-8">Now Lets grow Yours</h2>
          <p className="text-gray-600 mb-10">
            The gradual accumulation of information about atomic and small-scale
            <br />
            behavior during the first quarter of the 20th.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-slate-600">
            Button
          </button>
        </div>
        <div className="lg:w-1/3 flex justify-center">
          <Image
            src="/images/company-hero.jpg"
            alt="company-hero"
            width={590}
            height={640}
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
