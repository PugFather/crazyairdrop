import Header from "../components/NavTask";
import Task from "../components/Task";
import Invite from "../components/Invite";
import ReferralList from "../components/ReferralList";

import supabase from "../supabase";

import { useEffect, useState } from "react";

//APP

function Airdrop() {
  const [referrals, setReferrals] = useState([]);

  //fetch referrals
  useEffect(function () {
    async function fetchReferralsList() {
      let query = supabase.from("referrals").select("*");

      const { data: referralsData, error } = await query
        .order("points", { ascending: false })
        .limit(100);

      if (!error) setReferrals(referralsData);
      else alert("There was a problem getting data");
    }

    fetchReferralsList();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto my-16 p-10 font-extrabold text-white lg:p-0">
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

export default Airdrop;
