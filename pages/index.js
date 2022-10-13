import IndexEvent from '../components/indexEvent';
import IndexHero from "../components/indexHero";
import IndexNav from '../components/indexnav';
import IndexFooter from '../components/indexFooter';
import IndexStats from '../components/IndexStat';
import IndexPricing from '../components/indexPricing';
import Script from 'next/script';
export default function Home() {
  return (
    <div>
      <IndexNav />
      <IndexHero />
      <IndexEvent />
      <IndexEvent />
      <IndexStats />
      <IndexPricing />
      <IndexFooter />
      <Script src="https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/<Merchant-ID>.js" />
    </div>
  )
}
