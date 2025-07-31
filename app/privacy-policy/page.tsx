// app/privacy-policy/page.tsx
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen">
      <Navbar />

      <main className="pt-16 flex-grow prose lg:prose-xl max-w-4xl mx-auto p-8 mt-12">
        <h1>Zásady ochrany osobních údajů</h1>

        <p>
          Tyto zásady vysvětlují, jak nakládáme s osobními údaji v souladu s nařízením GDPR (EU 2016/679).
        </p>

        <h2>Správce osobních údajů</h2>
        <p>
          <strong>Moje Studio s.r.o.</strong><br />
          IČ: 12345678<br />
          Sídlo: Ulice 12, 110 00 Praha<br />
          Email:{' '}
          <a href="mailto:karolina.krob@gmail.com" className="underline">
            karolina.krob@gmail.com
          </a>
        </p>

        <h2>Jaké údaje shromažďujeme</h2>
        <ul>
          <li>Údaje o návštěvách webu: IP adresa, čas návštěvy, prohlížeč</li>
          <li>Kontaktové údaje, pokud je uvedete (email, jméno)</li>
          <li>Preference cookies, uložené v místním úložišti</li>
        </ul>

        <h2>Účely a právní základ zpracování</h2>
        <ul>
          <li>
            <strong>Naplnění souhlasu:</strong> Zpracování cookies na základě vašeho souhlasu.
          </li>
          <li>
            <strong>Plnění smlouvy:</strong> Kontaktujeme vás na základě vaší žádosti o konzultaci.
          </li>
          <li>
            <strong>Legitimní zájem:</strong> Analýza a optimalizace webu.
          </li>
        </ul>

        <h2>Komu můžeme údaje předávat</h2>
        <p>
          Spolupracujeme s poskytovateli analytických služeb (např. Google Analytics)
          a hostingovými službami. Všichni dodavatelé jsou GDPR compliant.
        </p>

        <h2>Doba uchovávání</h2>
        <p>
          Osobní údaje uchováváme po dobu nezbytnou pro účely,
          ke kterým byly shromážděny, nejdéle však 3 roky.
        </p>

        <h2>Práva subjektu údajů</h2>
        <ul>
          <li>Právo na přístup k údajům</li>
          <li>Právo na opravu údajů</li>
          <li>Právo na výmaz („právo být zapomenut“)</li>
          <li>Právo na omezení zpracování</li>
          <li>Právo vznést námitku</li>
          <li>Právo na přenositelnost údajů</li>
        </ul>

        <h2>Kontakt pro uplatnění práv</h2>
        <p>
          Své žádosti o uplatnění práv prosím směřujte na{' '}
          <a href="mailto:karolina.krob@gmail.com" className="underline">
            karolina.krob@gmail.com
          </a>.
        </p>
      </main>

      <Footer />
    </div>
  );
}
