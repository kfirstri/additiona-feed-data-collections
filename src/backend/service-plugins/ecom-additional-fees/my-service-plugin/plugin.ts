import { additionalFees } from "@wix/ecom/service-plugins";

import { auth } from "@wix/essentials";
import { items,  } from "@wix/data";

additionalFees.provideHandlers({
  calculateAdditionalFees: async ({ request, metadata }) => {
    console.log("got request", request, metadata);

    const elevated = auth.elevate(items.queryDataItems);
    const data = await elevated({
      dataCollectionId: "kfir",
    }).find();

    console.log("Log from GET.");
    console.log("data", data.items);

    return {
      additionalFees: [
        {
          code: "wrapping-fee",
          name: "Wrapping Fee",
          price: "5",
          taxDetails: {
            taxable: false,
          },
        },
      ],
      currency: "EUR",
    };
  },
});
