import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";
import '../@narative/gatsby-theme-novela/styles/bike.scss'

function NotFoundPage() {
  return (
    <Layout>
      <SEO />
      <Section>
        <div style={{ marginTop: "100px" }}>
          <Headings.h1>Kontakt meg</Headings.h1>
          <div class="bike">
              <div class="shadow"></div>
              <div class="wheel"></div>
              <div class="wheel"></div>
              <div class="frame"></div>
              <div class="pedal"></div>
              <div class="pedal"></div>
              <div class="lightbulb"></div>
              <div class="crate"></div>
              <div class="seat"> </div>
              <div class="handlebar"></div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}

export default NotFoundPage;
