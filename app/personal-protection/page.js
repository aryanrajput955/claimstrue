import PersonalProtectionDetails from '../components/PersonalProtectionDetails';

export const metadata = {
  title: 'Personal Protection Plan | ClaimTrue Expert Insurance Assistance',
  description: 'Medical emergencies are stressful. Fighting insurance shouldn\'t be. Get expert claim assistance for ₹499/year. Senior citizen support, documentation audit, and guaranteed expert guidance.',
  openGraph: {
    title: 'Personal Protection Plan - Peaceful Claims for You and Your Family',
    description: 'Avoid claim rejections and save 30% on service charges. Expert help for seniors and reimbursement claims.',
  }
};

export default function Page() {
  // Use the generated hero image from the artifacts
  const heroImageUrl = "/personal_protection_hero_1773672193039.png";
  
  return (
    <main>
      <PersonalProtectionDetails heroImageUrl={heroImageUrl} />
    </main>
  );
}
