import Heading from "../components/Heading";
import s from './../styles/Home.module.scss'
import Head from "next/head";
import Socials from "../components/Socials/Socials";

export const getStaticProps = async  () => {
    const response = await fetch(`${process.env.API_HOST}/socials`)
    const data =  await response.json()
    debugger
    if (!data) {
        return {
            notFound: true   // automaticaly redirect to 404
        }
    }
    return {props: {socials: data}}
}



const  Home = ({socials}) =>  {
  return (
      <div className={s.wrapper}>
          <Head>
              <title>Home</title>
          </Head>
        <Heading  text={'Next Application'}/>
        <Socials  socials={socials}/>
      </div>
  )
}

export default Home
