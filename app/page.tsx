import Banner from './components/Banner/index';
import Work from './components/Work/index';

import Features from './components/Features/index';
import Simple from './components/Simple/index';
import Trade from './components/Trade/index';
import Faq from './components/Faq/index';
import Pricing from './components/pricing/Pricing';


export default function Home() {
    return (
        <main className={"bg-gradient-to-r from-[#034023] to-[#021c11] lg:bg-none"}>
            <Banner/>
            <Work/>
            {/*<Table />*/}
            <Features/>
            <Simple/>
            <Trade/>
            <Pricing/>
            <Faq/>
        </main>
    )
}
