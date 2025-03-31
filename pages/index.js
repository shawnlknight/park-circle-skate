import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import ExternalLink from '../components/Link'
import Footer from '../components/Footer'
import SupportersList from '../components/SupportersList'
import styles from '../styles/Home.module.css'
import { partnersListOne, partnersListTwo } from '../data/partners'

export default function Home() {
  const numberOfPartners = [...partnersListOne, ...partnersListTwo].length

  return (
    <div className={styles.container}>
      <Head>
        <title>Park Circle Skate</title>
        <meta name="description" content="Park Circle Skatepark Project" />
        <link rel="icon" href="/pc-favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className="mb-10">
          <Image
            src="/pc-skate-logo-main-v2-dark.png"
            alt="Park Circle Skate wheel Logo"
            width={200}
            height={200}
          />
        </div>
        <h1 className={`${styles.themeBlueColor} text-5xl text-center mb-10`}>
          Welcome to Park Circle Skate
        </h1>
        <div
          className={`${styles.banner} w-screen flex justify-center text-center text-2xl italic mb-20 p-12`}
        >
          <div className={`${styles.robotoFontFamily} max-w-lg`}>
            <p>
              We are a group of volunteer community members and businesses in
              the Park Circle area of North Charleston who are advocating for a
              free-to-use, safe, and inclusive concrete skatepark for our
              community to enjoy.
            </p>
          </div>
        </div>

        <div className="mb-28 text-center">
          <h2
            id="promo-video"
            className={`${styles.headingFontFamily} text-4xl mb-5 pt-0`}
          >
            City of North Charleston Announces Skatepark!
          </h2>
          <div className={styles.videoWrapper}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/qy5yDKByACY?si=9X634FIK3ENWJFZQ"
              title="YouTube video player - North Charleston Announces Skatepark!"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mb-24 text-center max-w-xl px-6 flex flex-col gap-8">
          <h2
            id="why-skateparks"
            className={`${styles.headingFontFamily} text-4xl mb-2 pt-0`}
          >
            Why a Skatepark?
          </h2>
          <div>
            <Image
              src="/skater-one.png"
              alt="Skateboarder at skatepark"
              priority
              width={950}
              height={950}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              alt="skate wheel icon"
              height={100}
              width={100}
              src="/wheel-logo.svg"
            />
          </div>

          <div className="text-left">
            <h3 className={`text-3xl mb-5`}>
              No safe and legal place to skate
            </h3>
            <p className="text-xl mb-8">
              Park Circle residents have access to a variety of recreational
              spaces. However, one important activity that is an{' '}
              <b>athletic sport, art form, and lifestyle</b> has been
              overlooked, and that is skateboarding.
            </p>
            <blockquote className={`${styles.blockquote} p-4 bg-slate-50 mb-8`}>
              <p className="p-4 text-xl italic">
                Every skatepark supports hundreds of kids that might otherwise
                have nowhere to go.
              </p>
              <span>
                - Peter Whitley,{' '}
                <ExternalLink
                  href="https://publicskateparkguide.org"
                  displayText="Public Skatepark Guide"
                />
              </span>
            </blockquote>
            <p className="text-xl mb-6">
              You can easily find baseball fields, basketball hoops, and tennis
              courts in most U.S. cities and towns but{' '}
              <b>
                many of these same places do not offer anywhere for skaters to
                legally skate
              </b>
              , much less a skatepark.
            </p>
            <p className="text-xl mb-6">
              Skaters in these areas are forced to ride in dangerous roadways,
              sidewalks, or parking lots where they will more than likely be
              kicked out by local authorities.
            </p>
            <p className="text-xl mb-6">
              &quot;[Skaters] show an uncommon dedication to their sport. And
              what does this commitment to physical exercise and outdoor
              activity earn them? In many areas it gets them a big fine.&quot; (
              <ExternalLink
                href="https://publicskateparkguide.org/vision/the-skateboarding-problem/"
                displayText="Public Skatepark Guide - The Skateboarding Problem"
              />
              )
            </p>
          </div>
        </div>

        <div className="mb-28 text-center">
          <h3 className={`${styles.headingFontFamily} text-4xl mb-2 pt-0`}>
            Skateparks Build Communities
          </h3>
          <div className={styles.videoWrapper}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/RUo8XXptXkc"
              title="YouTube video player - The Skatepark Project, Building Communities"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="w-screen flex justify-center bg-slate-100 py-14">
          <div className="text-center max-w-xl px-6 flex flex-col gap-8 pb-6">
            <h2
              id="skateboarding-appeal"
              className={`${styles.headingFontFamily} text-4xl mb-2 pt-10`}
            >
              Skateboarding&apos;s Appeal
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                alt="Earth with skateboard icon"
                height={100}
                width={100}
                src="/appeal-logo.svg"
              />
            </div>

            <div className="text-left text-xl">
              <p className="mb-6">
                <b>There are 8.8 million skateboarders in the U.S.</b> Up 34%
                from 2019, and this does not account for the many other
                skatepark users, like BMX riders, roller/quad skaters, inline
                skaters, scooter riders, and more. (
                <ExternalLink
                  href="https://www.sfia.org/reports/962_Skateboarding-Participation-Report-2021"
                  displayText="Skateboarding Participation Report, 2021"
                />
                )
              </p>
              <div className="mb-4">
                <Image
                  src="/skater-two.png"
                  alt="Two skateboarders at a skatepark"
                  priority
                  width={950}
                  height={950}
                />
              </div>
              <p className="mb-6">
                Most of the these skateboarders are 24 years old or younger. (
                <ExternalLink
                  href="https://publicskateparkguide.org/vision/the-skateboarding-problem/"
                  displayText="Public Skatepark Guide - The Skateboarding Problem"
                />
                )
              </p>
              <p className="mb-6">
                Skateboarding is the{' '}
                <b>third most commonly reported interest</b> for high school
                students (24% of girls, and 17% of boys). (
                <ExternalLink
                  href="https://www.aspeninstitute.org/wp-content/uploads/2021/11/Aspen-National-Student-Survey-FINAL-Report.pdf"
                  displayText="Aspen Institute National Student Survey Analysis, 2021"
                />
                )
              </p>
              <p className="mb-6">
                Skateparks are the <b>fourth most used recreation space</b> in
                terms of total weekly use hours. They were found to be more
                popular than sports fields, play areas, fitness zones, and dog
                parks when comparing the total weekly use hours. (
                <ExternalLink
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5030121/"
                  displayText="The First National Study of Neighborhood Parks, 2016"
                />
                )
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${styles.themeYellowBg} w-screen flex justify-center py-14 mb-28`}
        >
          <div className="text-center max-w-xl px-6 flex flex-col gap-8 pb-6">
            <h2
              id="benefits"
              className={`${styles.headingFontFamily} text-4xl mb-2 pt-10`}
            >
              Benefits
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                alt="heart icon"
                height={100}
                width={100}
                src="/health-logo.svg"
              />
            </div>

            <div className="text-left text-xl">
              <h3 className={`text-3xl mb-5`}>Safe place</h3>
              <p className="mb-6">
                A local skatepark <b>provides a safe place</b> for people to
                practice their sport and challenge themselves in a healthy way.
                Skaters encourage each other to push beyond what they think is
                possible. A skater can spend hours/days/weeks trying a new trick
                and perfecting it. This persistance teaches them valuable
                lessons that transfer over to other aspects of life.
              </p>
              <blockquote className={`${styles.blockquoteAlternate} p-4 mb-8`}>
                <p className="p-4 italic">
                  One of the great activities is skateboarding. To learn to do a
                  skateboard trick - how many times you&apos;ve got to get
                  something wrong before you get it right... you learn to do
                  that trick, now you&apos;ve got a life lesson. Whenever I see
                  those skateboard kids, I think, &apos;those skateboard kids
                  will be alright.&apos;
                </p>
                <span>- Jerry Seinfeld, Comedian and Social Observer</span>
              </blockquote>
              <h3 className={`text-3xl mb-5`}>Form of exercise</h3>
              <p className="mb-6">
                Skateboarding is an <b>excellent form of exercise</b> and gets
                people outdoors. Both youth and adults get their CDC recommended
                daily cardiovascular exercise while skateboarding at skateparks.
                (
                <ExternalLink
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7241629/"
                  displayText="CSUSM Studies in the International Journal of Exercise Science, 2020"
                />
                )
              </p>
              <h3 className={`text-3xl mb-5`}>Improves mental health</h3>
              <p className="mb-6">
                Along with the benefits to physical health, a recent study of
                skateboarding culture reveals that skateboarding{' '}
                <b>
                  improves mental health, fosters community, and encourages
                  diversity and resilience.
                </b>{' '}
                (
                <ExternalLink
                  href="https://www.google.com/url?q=https://pullias.usc.edu/blog/groundbreaking-study-redefines-skateboarding-culture/&sa=D&source=docs&ust=1659031588220165&usg=AOvVaw39D_tAen3WK8V3Ss-G4QMi"
                  displayText="Pullias Center for Higher Education"
                />
                )
              </p>
              <div className="mb-4">
                <Image
                  src="/skateboard-artistic.png"
                  alt="skateboarder"
                  priority
                  width={950}
                  height={950}
                />
              </div>
              <h3 className={`text-3xl mb-5`}>Artistic expression</h3>
              <p className="mb-6">
                In addition to a sport, skateboarding is also considered to be a
                lifestyle and an art form.{' '}
                <b>
                  It can provide a sense of individuality and a means for
                  artistic expression
                </b>{' '}
                for our youth. Few sports give the individual participant
                complete creative control, and it is through the process of
                self-discovery and testing one&apos;s limits that a skater can
                develop his or her own style.
              </p>
            </div>
          </div>
        </div>

        <div className={`w-screen flex justify-center mb-28`}>
          <div className={`text-center max-w-xl flex flex-col gap-1 px-6`}>
            <h2
              id="endorsed"
              className={`${styles.headingFontFamily} text-4xl pt-0`}
            >
              Endorsed by Tony Hawk&apos;s Foundation
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src="/th-skatepark-project.jpeg"
                alt="tony hawks skatepark project"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.videoWrapper}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/qpFyVG2EPQQ"
                title="YouTube video player - The Tony Hawk Foundation Is Now THE SKATEPARK PROJECT"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className={`text-left text-xl mt-10`}>
              <p className={`mb-6`}>
                Park Circle Skate is officially endorsed by Tony Hawk&apos;s
                non-profit organization,{' '}
                <ExternalLink
                  href="https://skatepark.org/"
                  displayText="The Skatepark Project"
                />
                .{' '}
              </p>
              <p>
                The Skatepark Project helps underserved communities create safe
                and inclusive public skateparks for youth. To-date, they have
                helped open over 600 skateparks. These parks receive more than
                6-million visits annually by youth who benefit from the active
                lifestyle and camaraderie the facilities promote.
              </p>
            </div>
            <div className={`mt-5`}>
              <Link href="/letter-of-support">
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Read Letter of Support
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className={`w-screen flex justify-center bg-slate-100 py-14`}>
          <div className="text-center max-w-xl px-6 flex flex-col gap-8 pb-20">
            <h2
              id="programs"
              className={`${styles.headingFontFamily} text-4xl mb-2 pt-10`}
            >
              Skateboard Clinics
            </h2>
            <div className="text-left text-xl">
              <Image
                src="/kid-skater.png"
                alt="person skateboarding"
                priority
                width={600}
                height={550}
              />
              <p className="mb-4 pt-6">
                Park Circle Skate has collaborated with community partners to
                offer <b>free skateboarding clinics to the youth</b> of North
                Charleston.
              </p>
              <p className="mb-4">
                Collaborations include partnering with the NCPD&apos;s{' '}
                <ExternalLink
                  href="https://police.northcharleston.org/programs_eventss/cops_athletic_program.php"
                  displayText="Cops Athletic Program"
                />{' '}
                and{' '}
                <ExternalLink
                  href="https://landmarksforfamilies.org/"
                  displayText="Landmarks for Families"
                />{' '}
                to provide beginner skateboarding lessons for over 20 youth
                participants.
              </p>
              <Image
                src="/skate-clinic-one.png"
                alt="people with skateboards at clinic"
                priority
                width={600}
                height={375}
              />
              <p className="text-sm text-center text mb-10">
                Skateboard clinic with the Cops Athletic Program{' '}
                {`(October 22nd, 2022)`}
              </p>
              <Image
                src="/skate-clinic-two.png"
                alt="people with skateboards at clinic"
                priority
                width={600}
                height={430}
              />
              <p className="text-sm text-center text mb-10">
                Skateboard clinic with Landmarks for Families{' '}
                {`(November 12th, 2022)`}
              </p>
              <Image
                src="/skate-clinic-three.png"
                alt="people with skateboards at clinic"
                priority
                width={600}
                height={430}
              />
              <p className="text-sm text-center text">
                Skateboard clinic with Landmarks for Families{' '}
                {`(April 1st, 2023)`}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${styles.themeYellowBg} w-screen flex justify-center py-14 mb-28`}
        >
          <div className="text-center max-w-xl px-6 flex flex-col gap-8 pb-6">
            <h3 className={`${styles.headingFontFamily} text-4xl mb-4 pt-10`}>
              Events
            </h3>
            <h4 className={`${styles.headingFontFamily} text-3xl`}>
              Park Circle Art Walk
            </h4>
            <Image
              src="/art-walk.png"
              alt="park circle art walk"
              priority
              width={600}
              height={450}
            />
            <div className="text-left text-xl">
              <p className="mb-4">
                Park Circle Skate was out at the Art Walk on October 15, 2022 to
                help spread the word about the benefits of public skateparks.
              </p>
              <p className="mb-4">
                We also raffled off two skateboard decks that were hand-painted
                by artists at{' '}
                <ExternalLink
                  href="https://www.stardusttattoos.com/"
                  displayText="Stardust Tattoo"
                />
                .
              </p>
            </div>
            <h4 className={`${styles.headingFontFamily} text-3xl mt-10`}>
              North Charleston Christmas Parade
            </h4>
            <Image
              src="/christmas-parade.png"
              alt="north charleston christmas parade info saturday, december 3, 2022"
              priority
              width={600}
              height={500}
            />
            <div className="text-left text-xl">
              <p className="mb-4">
                Park Circle Skate participated in the North Charleston Christmas
                Parade on Saturday, December 3rd, 2022 to help demonstrate the
                need for a <b>free-to-use, safe, and inclusive skatepark</b> for
                our community.
              </p>
              <p className="mb-4">
                We had a diverse group of skateboarders, roller skaters, scooter
                riders, bicyclists, and walkers spreading cheer!
              </p>
            </div>
            <Image
              src="/christmas-one.png"
              alt="group of people from Park Circle Skate"
              priority
              width={900}
              height={550}
            />
            <Image
              src="/christmas-two.png"
              alt="group of people from Park Circle Skate"
              priority
              width={900}
              height={550}
            />
            <h4 className={`${styles.headingFontFamily} text-3xl mt-10`}>
              Roller Derby
            </h4>
            <Image
              src="/roller-derby-one.png"
              alt="group of people at roller derby"
              priority
              width={900}
              height={620}
            />
            <div className="text-left text-xl">
              <p className="mb-4">
                Park Circle Skate had the opportunity to hold a skateboard demo
                during the halftime show at the Roller Derby on March 25th,
                2023. Thanks to the{' '}
                <ExternalLink
                  href="https://www.lowcountryhighrollers.com/"
                  displayText="Lowcountry Highrollers"
                />{' '}
                for having us out!
              </p>
            </div>
          </div>
        </div>

        <div className={`w-screen flex justify-center mb-28`}>
          <div className="text-center max-w-xl px-6 flex flex-col pb-6">
            <h2
              id="partners"
              className={`${styles.headingFontFamily} text-4xl mb-0 pt-0`}
            >
              Community Partners
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                alt="shaking hands icon"
                height={100}
                width={100}
                src="/partner-logo.svg"
              />
            </div>

            <h3 className="py-4 text-2xl">{`(${numberOfPartners} total)`}</h3>
            <div className="text-left text-xl">
              <p className="mb-6">
                Our Community Partners are local businesses who have expressed
                their support for a skatepark in Park Circle and are also
                advocating for this community improvement.
              </p>
              <SupportersList />
            </div>
          </div>
        </div>

        <div className="p-12 mt-20 bg-slate-100 text-center">
          <h2
            id="contact"
            className={`${styles.headingFontFamily} text-4xl mb-6 pt-0`}
          >
            Keep up with us!
          </h2>
          <div className={styles.grid}>
            <a
              href="https://instagram.com/parkcircleskate"
              target="_blank"
              rel="noreferrer"
              className={styles.card}
            >
              <h3>Follow us on Instagram!</h3>
              <p className="text-sm">@parkcircleskate</p>
            </a>

            <a
              href="https://www.facebook.com/groups/882978432691586/"
              target="_blank"
              rel="noreferrer"
              className={styles.card}
            >
              <h3>Join our Facebook group!</h3>
              <p className="text-sm">Park Circle Skate</p>
            </a>
            <a href="mailto:parkcircleskate@gmail.com" className={styles.card}>
              <h3>Email us!</h3>
              <p className="text-sm">parkcircleskate@gmail.com</p>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
