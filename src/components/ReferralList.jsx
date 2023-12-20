function ReferralList({ referrals }) {
  return (
    <div className="container mx-auto mt-16 overflow-x-auto">
      <table className="table-auto w-full text-left ">
        <thead className="bg-cyan">
          <tr>
            <th className="p-6">NO</th>
            <th className="p-6">ADDRESS</th>
            <th className="p-6">POINTS</th>
          </tr>
        </thead>

        <tbody>
          {referrals &&
            referrals.map((referral, index) => (
              <tr key={referral.id}>
                <td className=" p-6">{index + 1}</td>
                <td className=" p-6">{referral.address}</td>
                <td className=" p-6">{referral.points}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReferralList;
