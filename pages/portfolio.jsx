import { useState } from "react";
import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import { Skeleton } from "antd";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";

const Portfolio = () => {

    const { isLoading, error, data } = useQuery('portfolio', () =>
        axios.get('api/portfolio')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))
    return (
        // <BannerLayout>
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Portofolio</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">

                {
                    isLoading ?
                        [1, 2, 3, 4].map((item, idx) => (
                            <ImageAndParagraphSkeleton key={idx} className={"w-full object-cover"} />
                        ))
                        :
                        data?.map((data, key) => (
                            <PortfolioCard key={key} data={data} />
                        ))

                }


            </div >
        </>

        // <Footer />
        // </BannerLayout >
    );
};

export default Portfolio;
