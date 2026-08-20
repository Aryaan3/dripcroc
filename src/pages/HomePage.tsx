import React from 'react';
import { HeroBanner } from '../components/home/HeroBanner';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { NewArrivals } from '../components/home/NewArrivals';
import { EditorialCampaign } from '../components/home/EditorialCampaign';
import { TrendingNow } from '../components/home/TrendingNow';
import { BrandStory } from '../components/home/BrandStory';
import { ShopTheLook } from '../components/home/ShopTheLook';
import { SaleCampaign } from '../components/home/SaleCampaign';
import { StoreLocator } from '../components/home/StoreLocator';
import { InstagramGrid } from '../components/home/InstagramGrid';
import { NewsletterSection } from '../components/home/NewsletterSection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex-1 w-full">
      {/* 3. Hero */}
      <HeroBanner />

      {/* 4. Shop Your Style (Categories) */}
      <CategoryGrid />

      {/* 5. New Arrivals */}
      <NewArrivals />

      {/* 6. Campaign */}
      <EditorialCampaign />

      {/* 7. Trending Now */}
      <TrendingNow />

      {/* 8. Brand Story */}
      <BrandStory />

      {/* 9. Shop The Look */}
      <ShopTheLook />

      {/* 10. Sale */}
      <SaleCampaign />

      {/* 11. Store */}
      <StoreLocator />

      {/* 12. Instagram */}
      <InstagramGrid />

      {/* 13. Newsletter */}
      <NewsletterSection />
    </div>
  );
};
