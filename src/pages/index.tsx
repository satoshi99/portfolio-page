import type { NextPage } from 'next'
import bgImage from '../public/index_bg.jpg'
import { HomeTemplate } from '../components/templates/HomeTemplate'

const Index: NextPage = () => <HomeTemplate bgImage={bgImage} />

export default Index
