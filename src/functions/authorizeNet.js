export const AUTHORIZE_NET_API = "https://api.authorize.net/xml/v1/request.api";

export const WEBSITE_URL = "https://totaltrailerparts.com";

export const apiLoginID = "2f4xyFwC34"; //
export const transactionKey = "84563Rtz7AUMXqj3"; //Test: "3R53TgYR4rg76U6X";
export const merchantAuthentication = {
  name: apiLoginID,
  transactionKey,
};

export const generateRef = (max = 99999, min = 10000) => {
  const rand = Math.round(Math.random() * (max - min)) + min;
  return rand;
};

// const authorizeNet = async ({
//   ref,
//   amount,
//   card: { cardNumber, expirationDate, cardCode },
//   cart,
// }) => {
//   let options = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//   };

//   options.body = JSON.stringify({
//     createTransactionRequest: {
//       merchantAuthentication,
//       refId: ref, // "123456"
//       transactionRequest: {
//         transactionType: "authCaptureTransaction",
//         amount, // "5",
//         payment: {
//           creditCard: {
//             cardNumber, //: "5424000000000015",
//             expirationDate, //: "2025-12",
//             cardCode, //: "999",
//           },
//         },
//         lineItems: {
//           lineItem: {
//             itemId: "1",
//             name: "vase",
//             description: "Cannes logo",
//             quantity: "18",
//             unitPrice: "45.00",
//           },
//         },
//         tax: {
//           amount: "4.26",
//           name: "level2 tax name",
//           description: "level2 tax",
//         },
//         duty: {
//           amount: "8.55",
//           name: "duty name",
//           description: "duty description",
//         },
//         shipping: {
//           amount: "4.26",
//           name: "level2 tax name",
//           description: "level2 tax",
//         },
//         poNumber: "456654",
//         customer: {
//           id: "99999456654",
//         },
//         billTo: {
//           firstName: "Ellen",
//           lastName: "Johnson",
//           company: "Souveniropolis",
//           address: "14 Main Street",
//           city: "Pecan Springs",
//           state: "TX",
//           zip: "44628",
//           country: "US",
//         },
//         shipTo: {
//           firstName: "China",
//           lastName: "Bayles",
//           company: "Thyme for Tea",
//           address: "12 Main Street",
//           city: "Pecan Springs",
//           state: "TX",
//           zip: "44628",
//           country: "US",
//         },
//         customerIP: "192.168.1.1",
//         transactionSettings: {
//           setting: {
//             settingName: "testRequest",
//             settingValue: "false",
//           },
//         },
//         userFields: {
//           userField: [
//             {
//               name: "MerchantDefinedFieldName1",
//               value: "MerchantDefinedFieldValue1",
//             },
//             {
//               name: "favorite_color",
//               value: "blue",
//             },
//           ],
//         },
//         processingOptions: {
//           isSubsequentAuth: "true",
//         },
//         subsequentAuthInformation: {
//           originalNetworkTransId: "123456789NNNH",
//           originalAuthAmount: "45.00",
//           reason: "resubmission",
//         },
//         authorizationIndicatorType: {
//           authorizationIndicator: "final",
//         },
//       },
//     },
//   });

//   return (await fetch(`${AUTHORIZE_NET_API}`, options)).json();
// };

export const requestPaymentPageToken = async ({
  amount,
  user: { id, email },
  checkout: {
    firstName,
    lastName,
    phoneNumber,
    company,
    streetAddress,
    country,
    state,
    city,
    zipCode,
  },
}) => {
  let options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  };

  options.body = JSON.stringify({
    getHostedPaymentPageRequest: {
      merchantAuthentication,
      transactionRequest: {
        transactionType: "authCaptureTransaction",
        amount,
        profile: {
          customerProfileId: id,
        },
        customer: {
          email,
        },
        billTo: {
          firstName,
          lastName,
          company,
          address: streetAddress,
          city,
          state,
          zip: zipCode,
          country,
        },
      },
      hostedPaymentSettings: {
        setting: [
          {
            settingName: "hostedPaymentReturnOptions",
            settingValue: `{"showReceipt": true, "url": "${WEBSITE_URL}/payment?message=success", "urlText": "Continue", "cancelUrl": "${WEBSITE_URL}/payment?message=cancelled", "cancelUrlText": "Cancel"}`,
          },
          {
            settingName: "hostedPaymentButtonOptions",
            settingValue: '{"text": "Pay"}',
          },
          {
            settingName: "hostedPaymentStyleOptions",
            settingValue: '{"bgColor": "blue"}',
          },
          {
            settingName: "hostedPaymentPaymentOptions",
            settingValue:
              '{"cardCodeRequired": false, "showCreditCard": true, "showBankAccount": true}',
          },
          {
            settingName: "hostedPaymentSecurityOptions",
            settingValue: '{"captcha": false}',
          },
          {
            settingName: "hostedPaymentShippingAddressOptions",
            settingValue: '{"show": false, "required": false}',
          },
          {
            settingName: "hostedPaymentBillingAddressOptions",
            settingValue: '{"show": false, "required": false}',
          },
          {
            settingName: "hostedPaymentCustomerOptions",
            settingValue:
              '{"showEmail": false, "requiredEmail": false, "addPaymentProfile": true}',
          },
          {
            settingName: "hostedPaymentOrderOptions",
            settingValue:
              '{"show": true, "merchantName": "Total Trailer Parts"}',
          },
          {
            settingName: "hostedPaymentIFrameCommunicatorUrl",
            settingValue: `{"url": "${WEBSITE_URL}/special"}`,
          },
        ],
      },
    },
  });

  return (await fetch(`${AUTHORIZE_NET_API}`, options)).json();
};
