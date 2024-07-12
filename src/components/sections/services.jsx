import React from 'react'
import {
    RiGlobalFill,
    RiQuillPenLine,
    RiPantoneFill,
    RiDatabaseFill,
    RiDatabase2Fill,
    RiLock2Fill
} from '@remixicon/react'
import Title from '../ui/title'
import ZoomIn from '../animations/zoomIn'

const servicesList = [
    {
        id: 1,
        icon: <RiGlobalFill size={63} />,
        service_name: "Full-Stack Web Application Development",
        service_description: "Seamless web applications with intuitive interfaces and powerful backends using Java, PHP, ReactJS, and Angular."
    },
    {
        id: 2,
        icon: <RiDatabase2Fill size={65} />,
        service_name: "Database Design and Optimization",
        service_description: "Ensures efficient and scalable databases, including MySql, Postgres, and MongoDB, with optimization to boost data performance."
    },
    {
        id: 3,
        icon: <RiLock2Fill size={65} />,
        service_name: "Network Infrastructure Planning and Security",
        service_description: "Design and secure network infrastructures using OSI Model principles, safeguarding against cyber threats and ensuring data reliability."
    },

]
const Services = () => {
    return (
        <section id="services" className="services-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>Services</p>
                            <h2>Quality Services</h2>
                        </Title>
                    </div>
                </div>
                <div className="row">
                    {
                        servicesList.map(({ icon, id, service_description, service_name }) => {
                            return (
                                <div key={id} className="col-lg-4 col-md-6">
                                    <ZoomIn id={id}>
                                        <div className="service-item">
                                            {icon}
                                            <h4>{service_name}</h4>
                                            <p>{service_description}</p>
                                        </div>
                                    </ZoomIn>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services