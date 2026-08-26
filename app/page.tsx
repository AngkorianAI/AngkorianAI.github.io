const springerUrl =
  "https://link.springer.com/chapter/10.1007/978-3-032-36039-7_23";
const heritageUrl =
  "https://www.researchgate.net/publication/413569705_Angkorian-HeritageObj_AI-Assisted_Visual_Condition_Assessment_of_Khmer_Stone_Heritage_Objects";
const githubUrl = "https://github.com/AngkorianAI/AngkorianAI.github.io";

const metrics = [
  ["230", "full inscription images"],
  ["760", "annotated text regions"],
  ["2,733", "annotated text lines"],
  ["3,493", "binarization masks"],
  ["534", "script-period labels"],
] as const;

const team = [
  ["Nimol Thuon", "Project lead · Methodology"],
  ["Jun Du", "Principal investigator"],
  ["Ranysakol Thuon", "Data validation"],
  ["Panhapin Theang", "Data preparation · Annotations"],
  ["Cheam Darith", "Khmer epigraphy"],
  ["Wang Zhangrui", "Methodology · Experiments"],
] as const;

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Angkorian-AI home">
          <span className="brand-seal" aria-hidden="true">
            A
          </span>
          <span className="brand-type">
            <strong>Angkorian–AI</strong>
            <small>Khmer Heritage Intelligence</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#benchmark">Benchmark</a>
          <a href="#people">People</a>
        </nav>

        <div className="header-actions">
          <a className="header-github" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a className="header-cta" href="mailto:nimol.thn@gmail.com">
            Collaborate <span aria-hidden="true">↗</span>
          </a>
        </div>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#benchmark">Benchmark</a>
            <a href="#people">People</a>
            <a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="mailto:nimol.thn@gmail.com">Collaborate</a>
          </nav>
        </details>
      </header>

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span>Angkorian–AI Project</span>
            <span>Jan 2026 — Present</span>
          </p>
          <h1 id="hero-title">
            Computational research for <em>Khmer stone heritage.</em>
          </h1>
          <p className="hero-intro">
            Angkorian–AI advances computer vision for Khmer stone heritage—
            building datasets, benchmarks, and preservation-centered methods
            for inscription analysis and visual condition assessment.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={springerUrl} target="_blank" rel="noreferrer">
              ICDAR 2026 paper <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-outline" href={heritageUrl} target="_blank" rel="noreferrer">
              ICPR 2026 paper <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">
              GitHub repository <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className="publication-register" aria-label="2026 publication record">
          <div className="register-heading">
            <span>Publication record</span>
            <strong>2026</strong>
          </div>
          <article>
            <span className="register-index">01</span>
            <div>
              <p className="register-venue">ICDAR 2026 · Vienna, Austria</p>
              <h2>Angkorian-KSI: A Multi-task Benchmark for Khmer Stone Inscription Analysis</h2>
              <p>N. Thuon · J. Du · R. Thuon · P. Theang</p>
              <a href={springerUrl} target="_blank" rel="noreferrer">Open paper <span aria-hidden="true">↗</span></a>
            </div>
          </article>
          <article>
            <span className="register-index">02</span>
            <div>
              <p className="register-venue">ICPR 2026 · Lyon, France</p>
              <h2>Angkorian-HeritageObj: AI-Assisted Visual Condition Assessment</h2>
              <p>N. Thuon · P. Theang</p>
              <a href={heritageUrl} target="_blank" rel="noreferrer">Open paper <span aria-hidden="true">↗</span></a>
            </div>
          </article>
          <a className="register-github" href={githubUrl} target="_blank" rel="noreferrer">
            View Angkorian–AI on GitHub <span aria-hidden="true">↗</span>
          </a>
        </aside>
      </section>

      <section className="research-register" aria-label="Project overview">
        <div><span>Field</span><strong>Computer vision &amp; document analysis</strong></div>
        <div><span>Domain</span><strong>Khmer stone heritage</strong></div>
        <div><span>Research outputs</span><strong>2 conference papers · 2026</strong></div>
        <div><span>Primary region</span><strong>Angkor, Cambodia</strong></div>
      </section>

      <section className="research-section section-shell" id="research">
        <div className="section-kicker">
          <p className="eyebrow">Research program / 01</p>
          <p className="section-note">
            One preservation mission. Two complementary computational views.
          </p>
        </div>
        <div className="research-heading">
          <h2>AI that begins with the material evidence.</h2>
          <p>
            Khmer stone surfaces are neither clean pages nor standard objects.
            Relief-induced shadows, erosion, biological growth, texture, and
            historical variation shape every task we study.
          </p>
        </div>

        <div className="track-grid">
          <article className="track-card track-card-light">
            <span className="track-number">01</span>
            <div className="track-visual inscription-crop">
              <img
                src="/research/ksi-annotations.jpg"
                alt="Angkorian-KSI annotations for layout, binarization, and script-period classification"
                width="2340"
                height="684"
                loading="lazy"
              />
            </div>
            <div className="track-copy">
              <p className="eyebrow">Inscription intelligence</p>
              <h3>Recovering structure from carved text.</h3>
              <p>
                Detect text regions and lines, extract binary text masks, and
                recognize historical periods across severely weathered Khmer
                stone inscriptions.
              </p>
              <div className="chip-row" aria-label="Angkorian-KSI tasks">
                <span>KSI–LA</span><span>KSI–B</span><span>KSI–C</span>
              </div>
            </div>
          </article>

          <article className="track-card track-card-red">
            <span className="track-number">02</span>
            <div className="track-visual heritage-crop">
              <img
                src="/research/heritage-collection.jpg"
                alt="Khmer stone heritage objects documented for visual condition assessment"
                width="1548"
                height="718"
                loading="lazy"
              />
            </div>
            <div className="track-copy">
              <p className="eyebrow">Condition intelligence</p>
              <h3>Making visible degradation measurable.</h3>
              <p>
                Support expert assessment of stone damage and severity with
                classification, bounding-box detection, segmentation, and
                interpretable visual evidence.
              </p>
              <div className="chip-row" aria-label="Heritage object research tasks">
                <span>Detection</span><span>Segmentation</span><span>Assessment</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="publications-section" id="publications">
        <div className="section-shell">
          <div className="section-kicker">
            <p className="eyebrow">Selected publications / 02</p>
            <p className="section-note">Conference proceedings · 2026</p>
          </div>
          <div className="publication-intro">
            <h2>Peer-reviewed publications.</h2>
            <p>
              Two complementary studies establish the project’s research
              agenda across historical document analysis and visual condition
              assessment.
            </p>
          </div>

          <article className="publication publication-featured">
            <div className="publication-meta">
              <span className="pub-index">01</span>
              <span>Paper · ICDAR 2026 (Vienna, Austria)</span>
              <span>LNCS 16974 · pp. 387–404</span>
            </div>
            <div className="publication-body">
              <div className="publication-copy">
                <p className="pub-type">Conference paper · First online 24 Aug 2026</p>
                <h3>
                  Angkorian-KSI: A Multi-task Benchmark for Khmer Stone
                  Inscription Analysis
                </h3>
                <p className="authors">
                  Nimol Thuon · Jun Du · Ranysakol Thuon · Panhapin Theang
                </p>
                <p className="citation-line">DOI: 10.1007/978-3-032-36039-7_23</p>
                <p className="abstract">
                  The first benchmark dedicated to automated digital analysis
                  of Khmer stone inscriptions, spanning structural detection,
                  text-mask extraction, and historical period recognition.
                  Baselines expose a pronounced domain gap created by erosion,
                  relief shading, complex stone texture, and linguistic variation.
                </p>
                <div className="publication-actions">
                  <a className="button button-dark" href={springerUrl} target="_blank" rel="noreferrer">
                    Read ICDAR paper <span aria-hidden="true">↗</span>
                  </a>
                  <a className="button button-outline" href={githubUrl} target="_blank" rel="noreferrer">
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
              <figure className="publication-figure">
                <img
                  src="/research/ksi-benchmark-pipeline.jpg"
                  alt="Angkorian-KSI data collection and three-task benchmark pipeline"
                  width="2614"
                  height="1138"
                  loading="lazy"
                />
                <figcaption>Benchmark construction and task design</figcaption>
              </figure>
            </div>
          </article>

          <article className="publication publication-secondary">
            <div className="publication-meta">
              <span className="pub-index">02</span>
              <span>Paper · ICPR 2026 (Lyon, France)</span>
              <span>PRESTIGE Workshop · Cultural Heritage</span>
            </div>
            <div className="publication-body">
              <div className="publication-copy">
                <p className="pub-type">Conference workshop paper · Aug 2026</p>
                <h3>
                  Angkorian-HeritageObj: AI-Assisted Visual Condition
                  Assessment of Khmer Stone Heritage Objects
                </h3>
                <p className="authors">Nimol Thuon · Panhapin Theang</p>
                <p className="citation-line">ICPR–PRESTIGE Workshop · August 2026</p>
                <p className="abstract">
                  A preservation-oriented study of AI-assisted visual condition
                  assessment for Khmer stone objects, evaluating modern vision
                  architectures against damage severity, surface degradation,
                  and demanding field-capture conditions.
                </p>
                <div className="publication-actions">
                  <a className="button button-dark" href={heritageUrl} target="_blank" rel="noreferrer">
                    Read ICPR paper <span aria-hidden="true">↗</span>
                  </a>
                  <a className="button button-outline" href={githubUrl} target="_blank" rel="noreferrer">
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
              <figure className="publication-figure heritage-figure">
                <img
                  src="/research/heritage-models.png"
                  alt="Model pathways for AI-assisted stone heritage condition assessment"
                  width="4088"
                  height="2433"
                  loading="lazy"
                />
                <figcaption>Evaluation pathways for condition assessment</figcaption>
              </figure>
            </div>
          </article>
        </div>
      </section>

      <section className="benchmark-section" id="benchmark">
        <div className="section-shell benchmark-shell">
          <div className="benchmark-copy">
            <p className="eyebrow">Angkorian-KSI / Benchmark</p>
            <h2>A compact dataset built for a difficult domain.</h2>
            <p>
              Curated from <em>in situ</em> captures across multiple sites in a
              UNESCO World Heritage archaeological region, Angkorian-KSI turns
              field imagery into a coordinated three-task evaluation framework.
            </p>
            <a className="text-link light-link" href={springerUrl} target="_blank" rel="noreferrer">
              View paper details <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="metric-grid" aria-label="Angkorian-KSI dataset statistics">
            {metrics.map(([value, label]) => (
              <div className="metric" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <figure className="benchmark-figure">
            <img
              src="/research/ksi-binarization.jpg"
              alt="Comparison of binarization methods for degraded Khmer stone inscriptions"
              width="2752"
              height="834"
              loading="lazy"
            />
            <figcaption>
              <span>Model comparison</span>
              <span>Text-mask extraction under degradation</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="method-section section-shell">
        <div className="section-kicker">
          <p className="eyebrow">How we work / 03</p>
          <p className="section-note">A preservation-centered research pipeline</p>
        </div>
        <div className="method-layout">
          <div className="method-title">
            <h2>From field capture to evidence.</h2>
            <p>
              Each stage is designed to keep provenance, uncertainty, and
              expert review visible.
            </p>
          </div>
          <ol className="method-list">
            <li>
              <span>01</span>
              <div><h3>Document</h3><p>Capture objects, inscriptions, surfaces, and context under real field conditions.</p></div>
            </li>
            <li>
              <span>02</span>
              <div><h3>Curate</h3><p>Clean and structure images with site, period, object, and provenance metadata.</p></div>
            </li>
            <li>
              <span>03</span>
              <div><h3>Annotate</h3><p>Build detailed polygons, masks, bounding boxes, text lines, and expert-defined labels.</p></div>
            </li>
            <li>
              <span>04</span>
              <div><h3>Benchmark</h3><p>Evaluate modern vision architectures against Khmer stone’s distinctive domain shift.</p></div>
            </li>
            <li>
              <span>05</span>
              <div><h3>Return</h3><p>Translate outputs into inspectable evidence for researchers and heritage specialists.</p></div>
            </li>
          </ol>
        </div>
      </section>

      <section className="evidence-section" aria-labelledby="evidence-title">
        <div className="section-shell">
          <div className="evidence-heading">
            <p className="eyebrow light">Inside the research / 04</p>
            <h2 id="evidence-title">The benchmark makes failure visible.</h2>
            <p>
              Severe texture, erosion, lighting, and overlapping carvings test
              the limits of systems trained on cleaner visual domains.
            </p>
          </div>
          <div className="evidence-grid">
            <figure className="evidence-wide">
              <img
                src="/research/ksi-layout-results.jpg"
                alt="Layout analysis predictions compared with ground truth on a Khmer inscription"
                width="3616"
                height="1254"
                loading="lazy"
              />
              <figcaption><span>01</span> Layout analysis under severe textural noise</figcaption>
            </figure>
            <figure>
              <img
                src="/research/ksi-field-sites.jpg"
                alt="Field sites, historical periods, and sample inscriptions in Angkorian-KSI"
                width="2522"
                height="1252"
                loading="lazy"
              />
              <figcaption><span>02</span> Geographic and historical scope</figcaption>
            </figure>
            <figure>
              <img
                src="/research/ksi-classification.jpg"
                alt="Script-period classification results across modern vision architectures"
                width="2010"
                height="686"
                loading="lazy"
              />
              <figcaption><span>03</span> Cross-architecture robustness</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="people-section section-shell" id="people">
        <div className="section-kicker">
          <p className="eyebrow">Research network / 05</p>
          <p className="section-note">Computer vision · Epigraphy · Heritage documentation</p>
        </div>
        <div className="people-layout">
          <div>
            <h2>Built across disciplines and borders.</h2>
            <p className="people-intro">
              Angkorian–AI brings technical research into dialogue with Khmer
              language, material culture, field evidence, and preservation practice.
            </p>
            <div className="institution-list" aria-label="Collaborating institutions">
              <span>NERC–SLIP · China</span>
              <span>Université Paris Cité · France</span>
              <span>Paragon International University · Cambodia</span>
              <span>Angkor National Museum · Cambodia</span>
            </div>
          </div>
          <div className="team-list">
            {team.map(([name, role], index) => (
              <article key={name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{name}</h3><p>{role}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-stone" aria-hidden="true">
          <img src="/research/ksi-domain-gap.jpg" alt="" width="2723" height="737" loading="lazy" />
        </div>
        <div className="contact-copy">
          <p className="eyebrow light">Collaboration</p>
          <h2>Let’s build a responsible digital future for Khmer heritage.</h2>
          <p>
            We welcome conversations with conservators, archaeologists,
            epigraphers, museums, Cambodian universities, and computer vision
            researchers working on preservation-centered methods.
          </p>
          <a className="button button-light" href="mailto:nimol.thn@gmail.com">
            Contact the project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <a className="brand footer-brand" href="#top">
            <span className="brand-seal" aria-hidden="true">A</span>
            <span className="brand-type"><strong>Angkorian–AI</strong><small>Khmer Heritage Intelligence</small></span>
          </a>
          <p>
            Deep learning and computer vision for the preservation and
            computational analysis of Khmer stone heritage.
          </p>
          <nav aria-label="External links">
            <a href={springerUrl} target="_blank" rel="noreferrer">Springer ↗</a>
            <a href={heritageUrl} target="_blank" rel="noreferrer">ResearchGate ↗</a>
            <a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Angkorian–AI</span>
          <span>Research for cultural continuity.</span>
        </div>
      </footer>
    </main>
  );
}
