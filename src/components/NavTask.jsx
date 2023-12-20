import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Logo from "../assets/logo.png";

function NavTask() {
  return (
    <nav className="bg-cyan h-24">
      <div className="container mx-auto flex h-24 items-center justify-between">
        <a href="/">
          <img src={Logo} alt="logo" className="h-12" />
        </a>

        <WalletMultiButton className="!sm:px-6 bg-blue h-28 px-4 lg:px-8" />
      </div>
    </nav>
  );
}

export default NavTask;
