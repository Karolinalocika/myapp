// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 text-center">
      <p className="text-sm">© {new Date().getFullYear()} MojeStudio. Všechna práva vyhrazena.</p>
    </footer>
  );
}
