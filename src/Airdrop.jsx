import { useState, useEffect } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import Logo from "./assets/logo2.png";
import Task from "./components/Task";
import Invite from "./components/Invite";
import ReferralList from "./components/ReferralList";

import supabase from "./supabase";

function App() {
  // const { connection } = useConnection();
  // const { publicKey, sendTransaction } = useWallet();

  const [referrals, setReferrals] = useState([]);

  //fetch referrals
  useEffect(function () {
    async function fetchReferralsList() {
      let query = supabase.from("referrals").select("*");

      const { data: referralsData, error } = await query
        .order("points", { ascending: false })
        .limit(100);

      if (!error) setReferrals(referralsData);
      else console.log("There was a problem getting data");
    }

    fetchReferralsList();
  }, []);

  return (
    <>
      {/* <WalletMultiButton /> */}
      <header>
        <nav className="h-24">
          <div className="container mx-auto flex h-24 items-center justify-between px-5">
            <a href="/">
              <img src={Logo} alt="logo" className="h-full max-h-20" />
            </a>

            <WalletMultiButton />
          </div>
        </nav>
      </header>

      <div className="container mx-auto mb-20 mt-16 px-8 font-extrabold text-white lg:p-0">
        <h3 className="text-2xl">Complete tasks and get</h3>
        <h1 className="mt-2.5 bg-clip-text text-5xl leading-tight">
          CrazyFrog Airdrop on Solana
        </h1>
      </div>

      <Task referrals={referrals} setReferrals={setReferrals} />
      <Invite />
      <ReferralList referrals={referrals} />
    </>
  );
}

export default App;
