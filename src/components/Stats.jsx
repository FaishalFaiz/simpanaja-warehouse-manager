import React from 'react';

export default function Stats() {
    return (
        <section className="stats bg-utama flex flex-row gap-0 md:gap-20 flex-wrap  justify-center items-center text-white  px-30 rounded-none border-aksen">
                <div className="stat ">
                    <p className="stat-title">Active Users</p>
                    <p className="stat-value ">8.4K</p>
                    <p className="stat-desc">+15% since last week</p>
                </div>
                <div className="stat ">
                    <p className="stat-title">Pages View</p>
                    <p className="stat-value ">220K</p>
                    <p className="stat-desc">+11% traffic growth</p>
                </div>
                <div className="stat">
                    <p className="stat-title ">Average Session</p>
                    <p className="stat-value ">4m 37s</p>
                    <p className="stat-desc ">+6% longer than last month</p>
                </div>
                <div className="stat">
                    <p className="stat-title ">Total Likes</p>
                    <p className="stat-value ">25.6K</p>
                    <p className="stat-desc ">21% more than last month</p>
                </div>
            </section>
    )
}