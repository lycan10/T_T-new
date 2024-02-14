export const GOSHIPPO_SERVER = "https://api.goshippo.com";
export const GOSHIPPO_APIKEY = "shippo_test_6b1434047e32cf566ec052161801686255ca9b89";

export const callStrapiBackend = async (
    type = "GET",
    content,
    parameters = {},
    data = null
) => {
    let params = "";
    let id = null;

    if (parameters.id) {
        id = parameters.id;
        delete parameters.id;
    }

    const keys = Object.keys(parameters);

    keys.forEach((key, i) => {
        params += `${i ? "&" : "?"}${key}=${parameters[key]}`;
    });

    let options = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `ShippoToken ${GOSHIPPO_APIKEY}`,
            "Shippo-API-Version": "2018-02-08"
        },
        method: type,
        redirect: "follow"
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    return (
        await fetch(
            `${GOSHIPPO_SERVER}/${content}${id ? `/${id}` : ""}${params}`,
            options
        )
    ).json();
};

const goshippo = {
    get: (content, parameters) =>
        callStrapiBackend("GET", content, {}),
    post: (content, data) =>
        callStrapiBackend("POST", content, {}, data),
    put: (content, parameters, data) =>
        callStrapiBackend("PUT", content, parameters, data),
    delete: (content, parameters) =>
        callStrapiBackend("DELETE", content, parameters),

        
    createAddress: ({
        object_purpose = "PURCHASE",
        name = "Mr Hippo",
        street1 = "965 Mission St #572",
        city = "San Francisco",
        state = "CA",
        zip = "94103",
        country = "US",
        phone = "4151234567",
        email = "mrhippo@goshippo.com"
    }) => {
        return callStrapiBackend("POST", "addresses", {}, { object_purpose, name, street1, city, state, zip, country, phone, email });
    },


    address: ({
        firstName,
        lastName,
        phoneNumber,
        streetAddress,
        country,
        state,
        city,
        zipCode,
        email,
    }) => ({
        name: `${firstName} ${lastName}`,
        street1: streetAddress,
        street2: "",
        city,
        state,
        zip: zipCode,
        country,
        phone: phoneNumber,
        email
    }),


    parcel: ({
        weight,
        length,
        width,
        height,
    }) => ({
        weight,
        length,
        width,
        height,
        distance_unit: "in",
        mass_unit: "lb"
    }),


    createShipment: ({
        address_to,
        parcels = []
    }) => {
        return callStrapiBackend("POST", "shipments", {}, {
            address_from: {
                name: "Gbogboade Ikechukwu",
                company: "Total Trailers",
                street1: "1747 E Auburn Rd",
                city: "Rochester Hills",
                state: "MI",
                zip: "48307",
                country: "US",
                phone: "+1 734 829 0776",
                email: "totaltrailerdev@gmail.com",
            },
            address_to,
            parcels,
            extra: {
                signature_required: "DIRECT"
            },
            async: false
        });
    },


    checkRate: ({ Object_id }) => {
        return callStrapiBackend("GET", "rates", { id: Object_id });
    }
};

export default goshippo;