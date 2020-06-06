// import React from "react";
// import { FacebookProvider, CustomChat } from "react-facebook";

// export default class FbChat extends React.Component {
//   render() {
//     return (
//       <FacebookProvider appId="2285143261761855" chatSupport>
//         <CustomChat mess pageId="102468261416433" minimized={false} />
//       </FacebookProvider>
//     );
//   }
// }

import React from "react";
import MessengerCustomerChat from "./lib/MessengerCustomerChat";

export default function FbChat() {
  return (
    <MessengerCustomerChat
      // shouldShowDialog={true}
      themeColor="#fa3c4c"
      pageId="102468261416433"
      appId="522004081838280"
      version="6.0"
      greetingDialogDisplay="fade"
      // xfbml={false}
    />
  );
}
