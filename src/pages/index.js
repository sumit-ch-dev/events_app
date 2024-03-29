import Head from 'next/head'
import { Inter } from '@next/font/google'
import { HomePage } from '@/components/home/home-page'



const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage data={data}/>
    </div>
  )
}

export async function getServerSideProps() {
  const { events_categories } = await import('data/data.json');
  //console.log(events_categories);
  return {
    props: {
      data: events_categories,
    }
  }
}