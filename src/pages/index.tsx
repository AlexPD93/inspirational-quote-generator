import React, { useState } from "react";
import Head from "next/head";

import styles from "@/styles/Home.module.css";

// Components
import {
  GradientBackgroundCon,
  BackgroundImage1,
  BackgroundImage2,
  FootCon,
  FooterLink,
  QuoteGeneratorCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorTitle,
  QuoteGeneratorSubTitle,
  GenerateQuoteButton,
  GenerateQuoteButtonText,
} from "../../components/QuoteGenerator/QuoteGeneratorElements";

// Assets
import Cloud1 from "../../assets/cloud-and-thunder.png";
import Cloud2 from "../../assets/cloudy-weather.png";

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A fun project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBackgroundCon>
        {/* Quote generator modal pop-up */}

        {/* <QuoteGeneratorModal /> */}

        {/* Quote Generator */}

        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>
              Daily Inspiration Generator
            </QuoteGeneratorTitle>

            <QuoteGeneratorSubTitle>
              Looking for a splash of inspiration? Generate a quote card with a
              random inspirational quote provided by{" "}
              <FooterLink
                href="https://zenquotes.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ZenQuotes API
              </FooterLink>
              .
            </QuoteGeneratorSubTitle>

            <GenerateQuoteButton>
              <GenerateQuoteButtonText>Make a Quote</GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>

        <BackgroundImage1
          src={Cloud1}
          height="300"
          alt="cloudybackground1"
        ></BackgroundImage1>

        <BackgroundImage2
          src={Cloud2}
          height="300"
          alt="cloudybackground1"
        ></BackgroundImage2>

        <FootCon>
          <>
            Quotes Generated: {numberOfQuotes}
            <br />
            Developed with love by{" "}
            <FooterLink
              href="https://www.linkedin.com/in/aperezdavies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alex Perez-Davies
            </FooterLink>
          </>
        </FootCon>
      </GradientBackgroundCon>
    </>
  );
}
