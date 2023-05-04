import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import ExternalLink from '../components/Link'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function LetterOfSupport() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Letter of Support</title>
        <meta name="description" content="Letter of support" />
        <link rel="icon" href="/pc-favicon.png" />
      </Head>

      <div className={`w-screen flex justify-center`}>
        <div className="mb-24 text-center max-w-xl px-6 flex flex-col gap-8">
          <h1
            className={`${styles.headingFontFamily} text-3xl mb-2 mt-20 pt-0`}
          >
            Letter of Support
          </h1>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              src="/th-skatepark-project.jpeg"
              alt="the skatepark project logo"
              width={100}
              height={100}
            />
          </div>
          <div className="text-left">
            <p className="text-xl mb-20">September 7th, 2022</p>
            <p className="text-xl mb-8">To Whom It May Concern:</p>
            <p className="text-xl mb-8">
              We are proud to support the exemplary community efforts towards a
              contemporary concrete action sports facility in North Charleston,
              SC.
            </p>
            <p className="text-xl mb-8">
              This letter is in support of the Park Circle Skate collective’s
              efforts to obtain funding for the construction of the facility,
              and for the continued use of best practices by local volunteers
              and municipal officials.
            </p>
            <p className="text-xl mb-8">
              We’ve worked closely with passionate members of the North
              Charleston community to help them ensure the skatepark project is
              completed efficiently and up to contemporary standards. They’ve
              created a platform for the voices of the local action sports
              community to be heard, and a pathway for them to experience
              meaningful civic engagement. Not only will these folks be immersed
              in local government, public policy and project planning, but it’s
              a collective endeavor that will result in a truly unique space
              that serves the community for decades. We’re confident the project
              will continue to follow the path of best practices, including the
              hiring of specialist skatepark design and construction firms to
              adequately execute the community’s vision.
            </p>
            <p className="text-xl mb-8">
              As the leader in skatepark advocacy training and skatepark grant
              funding in the United States, we do our best to help communities
              (here and abroad) work toward better public space for their youth.
              With approximately 4,000 skateparks in our nation, we are seeing
              lasting value in these facilities through their ability to draw
              teenagers and young-adults off the streets, off of their couches,
              out of trouble and into a healthy, active setting that strengthens
              the individual and the local community. We’ve seen and experienced
              the many benefits a public skatepark brings to a community – the
              creation of habitual exercise habits outside of league
              restrictions or age, community interaction and social cohesion
              outside the boundaries of wealth, race, religion or creed, and the
              development of perseverance and creative expression that’s carried
              into user’s lives long after the skatepark session is over.
            </p>
            <p className="text-xl mb-8">
              It’s clear to us that the resulting facility from a project like
              this will enhance the quality of life in the community for decades
              to come. Having access to an attractive and functional space with
              little barrier to entry goes a long way toward community cohesion
              and positive health outcomes.
            </p>
            <p className="text-xl mb-8">
              We, at The Skatepark Project, applaud any organization’s
              commitment to support and engage with the local action sports
              community. We feel the North Charleston skatepark project is worth
              supporting, and look forward to seeing who in the area has stepped
              up to help create a space that changes lives and transforms a
              community. Please feel free to reach out to me if you have any
              questions about the public skatepark process, or if we can help in
              any way.
            </p>
            <div className="text-xl mb-8">
              <div className="mb-5">Sincerely,</div>
              <div>
                <Image
                  src="/andre-signature.png"
                  alt="andrew taylor signature"
                  width={250}
                  height={75}
                />
              </div>
              <div>Andre Charles Taylor</div>
              <div>Programs Coordinator</div>
              <div>The Skatepark Project</div>
              <div>
                <ExternalLink
                  href="https://skatepark.org/"
                  displayText="www.skatepark.org"
                />
              </div>
              <div>(760) 477-2479</div>
              <div>andre@skatepark.org</div>
            </div>
            <div className={`mt-5 text-center`}>
              <Link href="/">
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
