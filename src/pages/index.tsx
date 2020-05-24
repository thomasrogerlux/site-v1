import React, { FC } from "react";

import { Hero } from "../components/Hero";
import { Header } from "../components/Header";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Footer } from "../components/Footer";

const Index: FC = () => {
    return (
        <main>
            <Header />
            <Hero />
            <Services />
            <About />
            <Footer />
        </main>
    );
}

export default Index;
