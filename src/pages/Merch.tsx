import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/hooks/use-theme';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import hoodie from '@/assets/merch/hoodie-branded.png';
import crewHat from '@/assets/merch/crew-hat-branded.png';
import baseballCap from '@/assets/merch/baseball-cap.png';
import beanie from '@/assets/merch/beanie.png';
import tshirt from '@/assets/merch/tshirt.png';
import vest from '@/assets/merch/vest.png';
import leatherJacket from '@/assets/merch/crew-jacket-branded.png';
import knapsack from '@/assets/merch/knapsack-branded.png';
import toteBag from '@/assets/merch/tote-bag.png';
import waterBottle from '@/assets/merch/water-bottle-branded.png';
import powerBank from '@/assets/merch/power-bank-branded.png';
import clapperboard from '@/assets/merch/clapperboard.png';
import directorsChair from '@/assets/merch/directors-chair.png';
import lightMeter from '@/assets/merch/light-meter.png';
import martiniKit from '@/assets/merch/martini-kit.png';

interface MerchItem {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

const PRODUCTS: MerchItem[] = [
  { id: 'hoodie', title: 'Filmology Labs Hoodie', description: 'Heavyweight fleece hoodie with embroidered Filmology Labs mark.', price: 78, image: hoodie },
  { id: 'crew-hat', title: 'Crew Hat', description: 'Structured crew cap built for long days on set.', price: 34, image: crewHat },
  { id: 'baseball-cap', title: 'Baseball Cap', description: 'Classic six-panel cap with low-profile brand detail.', price: 32, image: baseballCap },
  { id: 'beanie', title: 'Knit Beanie', description: 'Ribbed knit beanie for cold-weather location shoots.', price: 28, image: beanie },
  { id: 'tshirt', title: 'Studio Tee', description: 'Soft combed-cotton tee with minimal studio branding.', price: 36, image: tshirt },
  { id: 'vest', title: 'Production Vest', description: 'Multi-pocket vest designed for crew and coordinators.', price: 96, image: vest },
  { id: 'jacket', title: 'Crew Jacket', description: 'Weather-ready crew jacket with lined interior.', price: 168, image: leatherJacket },
  { id: 'knapsack', title: 'Knapsack', description: 'Durable daypack sized for gear, laptop and scripts.', price: 120, image: knapsack },
  { id: 'tote', title: 'Canvas Tote', description: 'Heavy canvas tote for scripts, cables and everything else.', price: 30, image: toteBag },
  { id: 'bottle', title: 'Insulated Bottle', description: 'Stainless insulated bottle that survives set life.', price: 38, image: waterBottle },
  { id: 'power-bank', title: 'Power Bank', description: 'Fast-charge power bank for phones and monitors.', price: 58, image: powerBank },
  { id: 'clapperboard', title: 'Clapperboard', description: 'Classic slate, branded for the Filmology Labs campus.', price: 64, image: clapperboard },
  { id: 'directors-chair', title: "Director's Chair", description: 'Folding hardwood chair with canvas seat and back.', price: 210, image: directorsChair },
  { id: 'light-meter', title: 'Light Meter', description: 'Precision handheld meter for accurate exposure.', price: 240, image: lightMeter },
  { id: 'martini-kit', title: 'Martini Shot Kit', description: 'Barware set to toast the last shot of the day.', price: 88, image: martiniKit },
];

const Merch = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />

      <main className="pt-24 md:pt-28 pb-16">
        <div className="container-wide">
          <header className="text-center mb-12 md:mb-16">
            <p className="label-editorial mb-4">Official Merchandise</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Filmology Labs Collection</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Premium apparel, gear and set essentials carrying the Filmology Labs mark.
              Online ordering opens with the campus — contact us for early access.
            </p>
          </header>

          <section aria-label="Merchandise collection">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.map((product) => (
                <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-muted relative overflow-hidden flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h2 className="text-lg font-bold mb-1 truncate">{product.title}</h2>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                    <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer isDark={isDark} />
    </div>
  );
};

export default Merch;
