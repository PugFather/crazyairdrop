import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

import supabase from "../supabase";

function Invite() {
  const [referralLink, setReferralLink] = useState("");
  const [points, setPoints] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const { publicKey } = useWallet();
  const address = publicKey?.toBase58();

  // Generate referral link based on the user's wallet address
  useEffect(() => {
    if (address) {
      setReferralLink(`http://localhost:3000/?ref=${address}`);
    }
    if (!address) {
      setReferralLink("");
    }
    // async function fetchPoint() {
    //   const { data: point } = await supabase
    //     .from("referrals")
    //     .select("points")
    //     .eq("address", address);

    //   setPoints(point[0].points);
    // }
    async function fetchPoint() {
      const { data: point } = await supabase
        .from("referrals")
        .select("points")
        .eq("address", address);

      if (point && point.length > 0) {
        setPoints(point[0].points);
      }
    }
    fetchPoint();
  }, [address]);

  return (
    <>
      {/* INVITE FRIEND */}
      <div className="container mx-auto mt-8 rounded-lg bg-[#546283] p-10 shadow-md">
        <div className="mb-7 flex flex-col">
          <div className="bg-success flex h-10 w-10 items-center justify-center  rounded-lg">
            {/* <img src={link} alt="check" /> */}
          </div>
        </div>
        <h2 className="mb-2 text-2xl font-semibold">Invite Friends</h2>
        <p className="mb-4 font-extrabold text-white">
          Total Points: <span className="">{points}</span>
        </p>
        <div className="mt-6">
          <form>
            <div className="relative mt-1 flex">
              <div className="w-full shadow-sm">
                <input
                  type="text"
                  name="referralLink"
                  id="referralLink"
                  defaultValue={referralLink}
                  className="text-cyan bg-light-grey block w-full rounded-md py-3 pl-4  pr-10 focus:outline-none"
                  disabled
                />
              </div>

              <button
                type="button"
                className="absolute right-0 top-0 inline-flex h-full items-center rounded-md bg-black px-4 py-2 text-base font-medium text-white focus:outline-none"
                onClick={() => {
                  navigator.clipboard.writeText(referralLink);
                  setCopySuccess(true);
                  setTimeout(() => {
                    setCopySuccess(false);
                  }, 3000);
                }}
              >
                {copySuccess ? "Copied!" : "Copy Link"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Invite;
