// import Image from "next/image";

import { UserButton } from "@clerk/nextjs";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SetupPage = () => {
  return (
    <div className="p-4">
      <UserButton afterSwitchSessionUrl="/"></UserButton>
    </div>
  );
}

export default SetupPage;