import React from 'react'
import { RiArrowRightLine, RiShoppingBasketLine } from '@remixicon/react'
import Title from '../ui/title'
import ZoomIn from '../animations/zoomIn'
import { priceData } from '../../utlits/fackData/priceData'


const Pricing = () => {
    return (
        <section className="pricing-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>My Technical Level</p>
                            <h2>Skills.</h2>
                        </Title>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {priceData.map(({ id, info, offers, plan_name, price }) => <Card key={id} info={info} offers={offers} plan_name={plan_name} price={price} id />)}
                </div>
            </div>
        </section>
    )
}
export default Pricing


const Card = ({ info, offers, plan_name, price, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <ZoomIn id={id}>
                <div className="pricing-item ">
                    <div className="pricing-header">
                        <h4 className="title">{plan_name}</h4>
                    </div>
                    <div className="pricing-details">
                        <ul>
                            {
                                offers.map(({ id, unable, item }) => <li key={id} className={`${unable ? "unable" : ""}`}><i><RiArrowRightLine size={16} /></i>{item}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </ZoomIn>
        </div>
    )
}