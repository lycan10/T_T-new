import { useEffect, useState } from "react";
import goshippo from "../functions/goshippo";

const useCartTotal = (cart, checkout) => {
    const [loading, setLoading] = useState(false);
    const [shipping, setShipping] = useState({ regular: { amount: 0, provider: "" }, express: { amount: 0, provider: "" } });
    const [total, setTotal] = useState(0);
    const [error, setError] = useState(null);

    const subTotals = cart.length
        ? cart.map((item) => item.quantity * (item.product.price ? item.product.price : 0))
        : [];

    const subTotal = cart.length
        ? subTotals.reduce((a, b) => parseFloat(a) + b).toFixed(2)
        : 0;

    // const shipping = { cost, error, loading };

    // shippingCost

    // const total = (parseFloat(total) + parseFloat(shipping)).toFixed(2);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const address_to = goshippo.address(checkout);
                const parcels = cart.map((item) => goshippo.parcel(item.product));

                const shipment = await goshippo.createShipment({ address_to, parcels })

                // console.log(shipment);

                const regular = parseFloat(shipment.rates.filter((item) => item.attributes.includes("BESTVALUE"))[0]);
                const express = parseFloat(shipment.rates.filter((item) => item.attributes.includes("FASTEST"))[0]);

                setShipping({ regular, express });
                // console.log("Shipping: ", { regular, express });
                setTotal((parseFloat(subTotal) + parseFloat(regular.amount)).toFixed(2))

                // const res = await goshippo.createShipment()

                // setData(json);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart, checkout]);

    return { loading, error, shipping, subTotal, subTotals, total };
};

export default useCartTotal;
