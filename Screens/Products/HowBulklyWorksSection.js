import React from 'react'
import BulklySlider from '../../Components/BulklySlider';




export default function HowBulklyWorksSection() {

    const data = [
        {
            step: 1,
            title: "Browse Verified Products",
            desc: "Every product and vendor is thoroughly vetted by our quality team before listing.",
        },
        {
            step: 2,
            title: "Join the Bulk Order",
            desc: "Production starts when minimum orders are reached. Share with friends to unlock lower prices!",
        },
        {
            step: 3,
            title: "Receive Quality Guaranteed",
            desc: "Get manufacturer-direct products with full transparency, testing reports, and 100% replacement guarantee.",
        },
    ];
    return (
        <BulklySlider data={data} />
    )
}
