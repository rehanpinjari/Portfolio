import React from "react";
import "/media/hp/107 GB Volume1/WebDev/30ProjectsToMasterWebDev/01__Portfolio/portfolio/src/Pages/Bio/bio.css";

const Bio = () => {
  return (
    <div id="bio">
      {/* Header (SECTION 1/3) */}
      <header className="masthead">
        <p className="masthead-intro">Hi, I'm</p>
        <h1 className="masthead-heading">John</h1>
      </header>
      {/* the div is used to apply the gradient */}
      <div className="gradient">
        {/* Body (SECTION 2/3) */}
        <section>
          <h2>Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet, vis choro dicam ut. Qui no dicant
            fierent inciderint, ne ius atomorum consequuntur, ea nibh nullam
            mel. No atqui placerat liberavisse mei, ne ceteros nostrum eum. In
            wisi sonet insolens pro. Ei movet malorum consetetur duo. Ex duo
            simul invidunt, nam dolor graeco ut, quo error aeterno consectetuer
            te.
          </p>
          <p className="space-maker">
            Vel ne labitur nominavi luptatum, eu mei labore dictas. Nam no
            tamquam scriptorem. Ius te euismod aliquam scaevola.
          </p>
        </section>
        <section>
          <h2>Where I'm From</h2>
          <p className="space-maker">
            Dicat soluta at nec. Adhuc iuvaret hendrerit mei et, ne sea suas
            fuisset eloquentiam. Illud aliquid cum at, qui everti deseruisse te,
            apeirian periculis eu nam. Nibh impetus offendit ne est.
          </p>
        </section>
        <section>
          <h2>More About Me</h2>
          <h3>What are your favorite hobbies?</h3>
          <p className="space-maker">
            Te harum graeco suavitate sed, at dolore epicuri omittam usu. Porro
            dicant recusabo et eum. Usu eu nihil munere urbanitas, eu vix unum
            corpora partiendo, vis legere euismod utroque eu.
          </p>
          <h3>What's your dream job?</h3>
          <p className="space-maker">
            Amet possim ex mei, vis ei mucius aperiam, ea quidam adolescens sed.
            Tota detracto cu duo, delenit argumentum eu quo.
          </p>
          <h3>What music have you been listening to lately?</h3>
          <p>
            Ius postulant petentium at, ancillae delicata interpretaris in vis,
            ei eos suscipit nominati quaerendum. Quo ne tota ludus vivendum. An
            usu noluisse delicata, delectus petentium et eum.
          </p>
        </section>
      </div>
      {/* Footer (SECTION 3/3) */}
      <footer className="content-footer">
        <p>Say hi to me on these social networks:</p>
        <ul className="social">
          <li>
            <a
              href="https://www.facebook.com/john.coppola?_rdr=p"
              target="_Blank"
            >
              Facebook
            </a>
          </li>
          <li>
            <a href="https://github.com/johnnycopes" target="_Blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/johnnycopes1"
              id="check2"
              target="_Blank"
            >
              Twitter
            </a>
          </li>
        </ul>
        <p>
          Cover image via{" "}
          <a
            href="https://images.unsplash.com/photo-1446797376004-9352dfc9f789?crop=entropy&fit=crop&fm=jpg&h=650&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1375"
            target="_Blank"
          >
            Unsplash
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Bio;
