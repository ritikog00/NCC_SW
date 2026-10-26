import { useState, type ReactNode } from 'react';
import { achievements, latestHighlights } from '@/data/achievements';
import {
  ArrowRight, BookOpen, Flag, HeartHandshake, Instagram, Menu, Shield, Sparkles, Tent, Trophy, Users, X,
} from 'lucide-react';
import {
  Link, Route, Switch, useLocation, Router as WouterRouter,
} from 'wouter';

const links = [
  ['Home', '/'], ['Updates', '/updates'], ['Achievements', '/achievements'],
  ['Camps', '/campus'], ['Samaant', '/samaant'], ['About Us', '/about'],
] as const;

function Crest({ className = '' }: { className?: string }) {
  return <img className={className} src="/images/ncc-badge.png" alt="DTU NCC Girls Wing badge" />;
}

function Header() {
  const [path] = useLocation();
  const [open, setOpen] = useState(false);
  return <>
    <div className="topline" />
    <header className="header">
      <div className="wrap navrow">
        <Link href="/" className="brand" data-testid="link-brand" onClick={() => setOpen(false)}>
          <Crest /><span><strong>DTU NCC</strong><small>Girls Wing · Unity · Discipline · Leadership</small></span>
        </Link>
        <nav className={`navlinks ${open ? 'open' : ''}`} aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}
            className={path === href ? 'active' : ''} data-testid={`link-nav-${label.toLowerCase().replaceAll(' ', '-')}`}>{label}</Link>)}
        </nav>
        <div className="nav-motto">Discipline&nbsp;&nbsp; | &nbsp;&nbsp;Courage&nbsp;&nbsp; | &nbsp;&nbsp;Leadership</div>
        <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}
          onClick={() => setOpen(!open)} data-testid="button-mobile-menu">{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </header>
  </>;
}

function Footer() {
  return <footer className="footer">
    <div className="wrap">
      <div className="footer-row">
        <Link href="/" className="brand"><Crest /><span><strong>DTU NCC</strong><small>Girls Wing · Delhi Technological University</small></span></Link>
        <nav className="footer-links" aria-label="Footer navigation">{links.slice(1).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
        <a className="footer-instagram" href="https://www.instagram.com/dtu_ncc_sw/" target="_blank" rel="noopener noreferrer" aria-label="Instagram: @dtu_ncc_sw"><Instagram size={15} /><span>Instagram · @dtu_ncc_sw</span></a>
        <a className="footer-official" href="https://dtu.ac.in/" target="_blank" rel="noopener noreferrer">DTU official website <ArrowRight size={14} /></a>
        <span className="nav-motto">“Together We Grow”</span>
      </div>
      <div className="copyright"><span>Delhi Technological University · NCC Girls Wing</span><span>Service before self. Courage in every step.</span></div>
    </div>
  </footer>;
}

function Shell({ children }: { children: ReactNode }) {
  return <><Header />{children}<Footer /></>;
}

function SectionTitle({ kicker, title, text, href, linkLabel = 'Explore more' }: { kicker?: string; title: string; text?: string; href?: string; linkLabel?: string }) {
  return <div className="section-head"><div>{kicker && <div className="eyebrow">{kicker}</div>}<h2 className="serif">{title}</h2>{text && <p>{text}</p>}</div>
    {href && <Link className="text-link" href={href}>{linkLabel}<ArrowRight size={15} /></Link>}</div>;
}

const principles = [
  { icon: Shield, title: 'Discipline & leadership', detail: 'Building confidence, character and a steady sense of purpose.' },
  { icon: BookOpen, title: 'Learning by doing', detail: 'Practical training that prepares cadets for life beyond campus.' },
  { icon: Tent, title: 'Camps & adventure', detail: 'New terrain, new challenges, stronger bonds.' },
  { icon: HeartHandshake, title: 'Service & community', detail: 'Showing up for one another and for the people around us.' },
  { icon: Users, title: 'Culture & connection', detail: 'Celebrating the diversity and unity of India.' },
];

const shoulderRanks = [
  { abbreviation: 'SUO', title: 'Senior Under Officer' },
  { abbreviation: 'JUO', title: 'Junior Under Officer' },
];
const armyRanks = [
  { abbreviation: 'CQMS', title: 'Company Quarter Master Sergeant' },
  { abbreviation: 'SGT', title: 'Sergeant' },
  { abbreviation: 'CPL', title: 'Corporal' },
  { abbreviation: 'L/CPL', title: 'Lance Corporal' },
];

const image = (name: string) => `/images/achievement/${name}`;
const campusImage = (name: string) => name.startsWith('/') ? name : image(name);

function HomePage() {
  return <main className="page-enter">
    <section className="hero">
      <div className="hero-copy"><div className="eyebrow">DTU NCC Girls Wing</div>
        <h1>Strong girls.<br />A stronger nation.</h1>
        <p>We grow through discipline, leadership and service — shaping confident young women ready to make a difference.</p>
        <Link href="/about" className="btn hero-cta">Discover our journey <ArrowRight size={15} /></Link>
      </div>
      <div className="hero-art"><img className="home-training-photo" src="/images/home-training.jpg" alt="DTU NCC cadets taking part in a team fitness drill on campus" /></div>
    </section>
    <div className="wrap">
      <section className="cto-section">
        <div className="cto-photo"><img src="/images/cto-parinita-sinha.jpg" alt="Parinita Sinha, Care Taking Officer of the DTU NCC Girls Wing" /></div>
        <div className="cto-copy">
          <div className="eyebrow">Care Taking Officer · CTO</div>
          <h2>Parinita Sinha</h2>
          <p className="cto-role">Care Taking Officer, DTU NCC Girls Wing</p>
          <p>With care, discipline and encouragement, Parinita Sinha supports cadets as they grow in confidence, take on new challenges and learn to lead together.</p>
        </div>
      </section>
      <section className="section officer-moments">
        <SectionTitle kicker="Moments from the gathering" title="Under officers" text="Meet the cadet leaders who stand alongside the wing." />
        <figure className="officer-moment">
          <img src="/images/under-officers.jpg" alt="Four DTU NCC cadet leaders standing together in uniform" loading="lazy" />
          <figcaption><span className="eyebrow">Under officers</span><p>SUO Kanak Nagpal · JUO Arpita Prakash · JUO Bhumika · JUO Rashi Kumari</p></figcaption>
        </figure>
      </section>
      <section className="section rank-section">
        <SectionTitle kicker="Rank panel · 2026" title="Leadership, earned step by step." text="A look at the ranks and responsibilities that help cadets grow into confident leaders." />
        <div className="rank-panel" data-testid="rank-panel">
          <div className="rank-panel-intro">
            <img src="/images/ncc-badge.png" alt="DTU NCC Girls Wing badge" loading="lazy" />
            <div><div className="eyebrow">DTU NCC Girls Wing</div><h3>Rank structure</h3><p>Every step brings new skills, responsibility and opportunities to lead.</p></div>
          </div>
          <div className="rank-display">
            <section className="rank-category">
              <h4>Shoulder ranks</h4>
              <ol className="rank-list">
                {shoulderRanks.map(({ abbreviation, title }, index) => <li key={abbreviation}>
                  <RankBadge abbreviation={abbreviation} />
                  <span><strong>{title}</strong><small>{String(index + 1).padStart(2, '0')} · {abbreviation}</small></span>
                </li>)}
              </ol>
            </section>
            <section className="rank-category">
              <h4>Army ranks</h4>
              <ol className="rank-list">
                {armyRanks.map(({ abbreviation, title }, index) => <li key={abbreviation}>
                  <RankBadge abbreviation={abbreviation} />
                  <span><strong>{title}</strong><small>{String(index + 3).padStart(2, '0')} · {abbreviation}</small></span>
                </li>)}
              </ol>
            </section>
            <div className="rank-arm-title"><h4>Arms title</h4><span>NCC</span></div>
          </div>
        </div>
      </section>
      <section className="strip" aria-label="What makes the wing"><PrincipleStrip /></section>
      <section className="section" style={{ paddingTop: 8 }}>
        <SectionTitle kicker="Moments that move us" title="Our highlights" text="A record of courage, commitment and the joy of doing things together." href="/updates" linkLabel="All updates" />
        <div className="highlights">{latestHighlights.map((item, index) => <Link href="/updates" className="highlight" key={item.title} data-testid={`card-highlight-${index}`}>
          <img src={item.image} alt={item.title} /><div className="highlight-body"><small>{item.date} · Field notes</small><h3>{item.title}</h3><p>{item.detail}</p></div>
        </Link>)}</div>
      </section>
      <section className="section" style={{ paddingTop: 7 }}>
        <SectionTitle kicker="A legacy in motion" title="Where effort becomes achievement" text="From annual training camps to national gatherings, every milestone belongs to the cadets who put in the work." href="/achievements" linkLabel="Explore achievements" />
        <div className="campus-feature">
          <img src="/images/home-achievement.jpg" alt="DTU NCC Girls Wing cadets together in uniform on campus" />
          <div><div className="eyebrow" style={{ color: '#edc975' }}>Pride, earned together</div><h2>Every achievement<br />starts with showing up.</h2><p>Our cadets learn to lead, listen and keep going. Their camp results and shared experiences are proof of what steady teamwork can do.</p><Link href="/achievements" className="btn">See the milestones <ArrowRight size={15} /></Link></div>
        </div>
      </section>
      <QuoteBand />
    </div>
  </main>;
}

function PrincipleStrip() {
  return <>{principles.map(({ icon: Icon, title, detail }) => <div className="strip-item" key={title}><Icon className="strip-icon" size={24} strokeWidth={1.7} /><span><strong>{title}</strong><small>{detail}</small></span></div>)}</>;
}

function RankBadge({ abbreviation }: { abbreviation: string }) {
  const fontSize = abbreviation.length > 4 ? 7 : abbreviation.length > 3 ? 8 : 10;
  return <svg className="rank-badge" viewBox="0 0 48 48" role="img" aria-label={`${abbreviation} rank marker`}>
    <path d="M24 3.5 42 10v14.2c0 9.3-6.7 17.1-18 20.3C12.7 41.3 6 33.5 6 24.2V10l18-6.5Z" fill="#efe3c8" stroke="#9b7a43" strokeWidth="1.5" />
    <path d="M13 16h22M15 20h18M17 24h14" stroke="#8c2630" strokeWidth="1.5" strokeLinecap="round" />
    <text x="24" y="35" textAnchor="middle" fill="#203f3b" fontFamily="Arial, sans-serif" fontSize={fontSize} fontWeight="700">{abbreviation}</text>
  </svg>;
}

function QuoteBand() {
  return <aside className="quote-band"><img src="/images/home-hero.jpg" alt="" /><blockquote>“NCC is not just a training programme, it is a way of life.”<cite>Discipline · courage · service</cite>
    <a className="quote-instagram" href="https://www.instagram.com/dtu_ncc_sw/" target="_blank" rel="noopener noreferrer"><Instagram size={14} />Instagram · @dtu_ncc_sw</a>
  </blockquote></aside>;
}

function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="page-hero"><div className="wrap"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{children}</p></div></section>;
}

function AchievementPage() {
  const [year, setYear] = useState('All years');
  const years = ['All years', ...Array.from(new Set(achievements.map((item) => String(item.year))))];
  const filtered = year === 'All years' ? achievements : achievements.filter((item) => String(item.year) === year);
  return <main className="page-enter"><PageIntro eyebrow="Discipline · courage · excellence" title="A record of doing our best.">
    Across camps, competitions and service, each result reflects the dedication and team spirit of DTU's cadets.
  </PageIntro><div className="wrap section">
    <SectionTitle title="The achievement archive" text="Verified highlights from the Girls Wing, organized by year." />
    <div className="filter-row" role="group" aria-label="Filter achievements by year">{years.map((item) => <button className={`filter-pill ${year === item ? 'selected' : ''}`} key={item} onClick={() => setYear(item)} data-testid={`filter-year-${item.replaceAll(' ', '-').toLowerCase()}`}>{item}</button>)}</div>
    <div className="achievement-list">{filtered.map((entry, index) => <article className="achievement-card" key={`${entry.year}-${entry.event}`} data-testid={`achievement-${entry.year}-${index}`}>
      <img src={entry.image} alt={`${entry.event} achievement`} loading="lazy" /><div><small>{entry.year} · Camp & competition</small><h3>{entry.event}</h3><p className="date">{entry.date}</p><ul>{entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>
    </article>)}</div>
  </div></main>;
}

const notices = [
  { date: '12–17 October 2026', title: 'SUO Kanak Nagpal attends RCTC', detail: 'At Pithoragarh, Kanak took part in rappelling, jumaring and artificial wall climbing, alongside team and cultural competitions.', tag: 'RCTC · Pithoragarh', img: '/images/tsc-group.jpg' },
  { date: '31 August–11 September 2026', title: 'DTU cadets at Thal Sainik Camp', detail: 'LCPL Milan and CDT Shweta took part in obstacle training and map reading, developing fitness, navigation and teamwork.', tag: 'TSC · 2026', img: '/images/tsc-blazers.jpg' },
  { date: 'July 2026', title: 'Cadets shine at CATC', detail: 'DTU cadets earned podium finishes across Flag Area, Quiz and Book Review at the Combined Annual Training Camp.', tag: 'Training camp', img: image('image2.jpeg') },
  { date: '2025', title: 'A world record in motion', detail: 'At the NCC PM Rally, more than 500 cadets performed 12 distinct dance forms in two minutes.', tag: 'National event', img: image('image10.png') },
  { date: 'December 2024', title: 'Celebrating the spirit of EBSB', detail: 'At Agartala, DTU cadets earned silver medals in Tug of War and Ground Song.', tag: 'Cultural exchange', img: image('image13.png') },
  { date: 'October 2024', title: 'EBSB Camp: excellence in pitching', detail: 'LCPL Kanchan secured first position in Pitching at the Ek Bharat Shreshtha Bharat camp.', tag: 'Camp result', img: image('image12.png') },
];
function UpdatesPage() {
  return <main className="page-enter"><PageIntro eyebrow="From the field" title="The latest from our wing.">Updates, camp notes and moments worth celebrating from the DTU NCC Girls Wing.</PageIntro>
    <div className="wrap section"><SectionTitle title="News & notices" text="A selection of recent milestones from the wing's documented activity." />
      <div className="notice-list">{notices.map((item, i) => <article className="notice" key={item.title} data-testid={`notice-${i}`}><span className="notice-date">{item.date}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><span className="notice-tag">{item.tag}</span></article>)}</div>
      <div className="section" style={{ paddingBottom: 10 }}><SectionTitle kicker="More to discover" title="Stories told through action" /><div className="highlights">{notices.slice(0, 3).map((item) => <article className="highlight" key={item.title}><img src={item.img} alt={item.title} loading="lazy" /><div className="highlight-body"><small>{item.date} · {item.tag}</small><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</div></div>
    </div></main>;
}

const campusPhotos = [
  ['/images/cadet-community-wide.jpg', 'The cadet community'], ['image5.jpeg', 'Training camp'], ['image12.png', 'Guard of Honour'],
  ['image13.png', 'EBSB camp'], ['image15.jpeg', 'Army attachment'], ['image21.png', 'A shared win'],
  ['image14.png', 'Camp life'], ['image20.jpeg', 'Annual training'],
  ['/images/campus-fitness.jpg', 'Training in formation'], ['/images/campus-team.jpg', 'Cadets together on campus'],
];
function CampusPage() {
  return <main className="page-enter"><PageIntro eyebrow="Our campus" title="Where discipline meets possibility.">At DTU, the Girls Wing brings together a close-knit community, purposeful training and opportunities to learn far beyond the classroom.</PageIntro>
    <div className="wrap section">
      <section className="camp-report rctc-report">
        <figure className="camp-report-photo"><img src="/images/suo-kanak-nagpal.jpg" alt="SUO Kanak Nagpal at RCTC" /><figcaption>SUO Kanak Nagpal</figcaption></figure>
        <div className="camp-report-copy">
          <div className="eyebrow" style={{ color: '#edc975' }}>RCTC · Pithoragarh · 12–17 October 2026</div>
          <h2>Rock Climbing and Training Camp</h2>
          <p>SUO Kanak Nagpal attended the Rock Climbing and Training Camp, held in Pithoragarh from 12 October to 17 October 2026. The camp provided an opportunity to participate in thrilling activities such as rappelling, jumaring, and artificial wall climbing, which enhanced confidence, courage, and physical endurance. Participating in Tug of War and cultural competitions promoted teamwork, unity, and a spirit of healthy competition. The visits to Mostmanu Temple, Chandak View Point, and Kamakhya Devi Temple made the experience even more enriching. Overall, the camp was a wonderful journey of learning, adventure, and personal growth for our cadet.</p>
        </div>
      </section>
      <section className="tsc-section rctc-gallery">
        <div className="tsc-copy">
          <div className="eyebrow">RCTC · Pithoragarh</div>
          <h2>In the field together.</h2>
          <p>Cadets came together for climbing, adventure training and shared camp experiences in the hills of Pithoragarh.</p>
        </div>
        <div className="tsc-photo-grid rctc-photo-grid">
          <figure><img src="/images/rctc-group.jpg" alt="NCC cadets gathered at the RCTC Pithoragarh camp" loading="lazy" /><figcaption>RCTC cadets at Pithoragarh</figcaption></figure>
          <figure><img src="/images/rctc-adventure.jpg" alt="A cadet taking part in outdoor adventure training at camp" loading="lazy" /><figcaption>Adventure training in the field</figcaption></figure>
        </div>
      </section>
      <section className="tsc-section">
        <div className="tsc-copy">
          <div className="eyebrow">TSC · Thal Sainik Camp</div>
          <h2>Strength, precision and perseverance.</h2>
          <p>Our cadets, LCPL Milan and CDT Shweta participated in the prestigious national-level Thal Sainik camp held from 31st August to 11th September 2026. The camp tested cadets' physical fitness, precision, determination, and military skills. L/CPL Milan participated in obstacle training, which enhanced physical fitness, stamina, confidence, and determination. Cadet Shweta participated in map reading, which improved her navigation skills, observation, accuracy, and geographical understanding. Both cadets gained valuable knowledge, developed discipline and teamwork, and learned the importance of perseverance and dedication. Overall, the camp was a memorable experience that contributed to their personal growth and strengthened their commitment to NCC.</p>
        </div>
        <div className="tsc-photo-grid">
          <figure><img src="/images/tsc-blazers.jpg" alt="LCPL Milan and CDT Shweta at Thal Sainik Camp" loading="lazy" /><figcaption>LCPL Milan · CDT Shweta</figcaption></figure>
          <figure><img src="/images/tsc-camo-group.jpg" alt="DTU NCC Girls Wing cadets in uniform at TSC" loading="lazy" /><figcaption>Cadets at TSC</figcaption></figure>
          <figure><img src="/images/tsc-pushups.jpg" alt="Cadets during physical training at camp" loading="lazy" /><figcaption>Physical training</figcaption></figure>
        </div>
      </section>
      <div className="campus-feature"><img src={image('image18.jpeg')} alt="Cadets together after a successful camp" /><div><div className="eyebrow" style={{ color: '#edc975' }}>A place to belong</div><h2>Learning side by side.<br />Growing together.</h2><p>Campus life is shaped by shared practice, the trust built in camp and the pride of representing DTU. Cadets find room to take initiative and support one another.</p><Link href="/about" className="btn">Meet the Girls Wing <ArrowRight size={15} /></Link></div></div>
      <section className="section"><SectionTitle kicker="A few glimpses" title="Life in the wing" text="Training, travel, teamwork and the friendships formed along the way." /><div className="campus-grid">{campusPhotos.map(([file, title]) => <div className="campus-tile" key={file}><img src={campusImage(file)} alt={title} loading="lazy" /><span>{title}</span></div>)}</div></section>
      <section className="section"><SectionTitle title="A well-rounded experience" text="NCC invites cadets to keep learning—in formation, in the field and as part of a community." /><div className="values-grid">{principles.slice(0, 4).map(({ icon: Icon, title, detail }) => <article className="value" key={title}><Icon size={23} /><h3>{title}</h3><p>{detail}</p></article>)}</div></section>
    </div></main>;
}

const festItems = [
  { icon: Flag, title: 'Drill competitions', text: 'Discipline in every step, strength in every formation.' },
  { icon: Sparkles, title: 'Cultural displays', text: 'Tradition, creativity and expression.' },
  { icon: Users, title: 'Panel discussions', text: 'Ideas that build a stronger tomorrow.' },
  { icon: Shield, title: 'Defence conclave', text: 'Insights from distinguished experts and veterans.' },
  { icon: Trophy, title: 'Prize distribution', text: 'Recognising talent, effort and achievement.' },
];
const samaantPhotos = [
  {
    src: '/images/samaant-command.jpg',
    alt: 'An invited speaker addresses cadets at Samaant 2026',
    title: 'Command & Conquer',
    detail: 'A stage address for the cadets and guests gathered at Samaant ’26.',
  },
  {
    src: '/images/samaant-moments.jpg',
    alt: 'A collage of guests and cadets speaking on stage at Samaant 2026',
    title: 'On stage together',
    detail: 'A few moments with the speakers, guests and cadets who shaped the gathering.',
  },
];
function SamaantPage() {
  return <main className="page-enter">
    <section className="fest-hero"><div className="hero-copy"><div className="fest-label">Annual inter-college NCC fest</div><h1>Samaant<br />2026</h1><div className="eyebrow">Command & Conquer · Unity · Leadership</div><p>Samaant ’26 brings cadets, officers and guests together for a day of shared pride, leadership and community.</p><a href="#fest-highlights" className="btn hero-cta">Explore the fest <ArrowRight size={15} /></a></div><div className="hero-art"><img src="/images/samaant-group.jpg" alt="Cadets, officers and guests gathered on stage at Samaant 2026" /></div></section>
    <div className="wrap"><section className="strip" style={{ gridTemplateColumns: 'repeat(5,1fr)' }}>{festItems.map(({ icon: Icon, title, text }) => <div className="strip-item" key={title}><Icon className="strip-icon" size={23} /><span><strong>{title}</strong><small>{text}</small></span></div>)}</section>
      <section className="section" id="fest-highlights"><SectionTitle kicker="A day of shared spirit" title="The Samaant experience" text="From precise formations to the colour of cultural performances, the fest celebrates every side of NCC life." /><div className="fest-events">{festItems.map(({ icon: Icon, title, text }) => <article className="fest-event" key={title}><Icon size={24} /><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="section samaant-gallery"><SectionTitle kicker="Samaant ’26" title="Moments from the gathering" text="A look back at the people and conversations that brought the day together." /><div className="samaant-photo-grid">{samaantPhotos.map((photo) => <article className="samaant-photo-card" key={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy" /><div><h3>{photo.title}</h3><p>{photo.detail}</p></div></article>)}</div></section>
      <section className="samaant-closing"><div><div className="eyebrow" style={{ color: '#edc975' }}>More than a fest</div><h2>Leadership, service<br />and a shared spirit.</h2><p>From the stage address to the gathering of cadets and guests, Samaant ’26 celebrates the people who come together through NCC.</p></div><Link href="/achievements" className="btn">Discover our journey <ArrowRight size={15} /></Link></section>
    </div></main>;
}

function AboutPage() {
  return <main className="page-enter"><PageIntro eyebrow="About the Girls Wing" title="Purpose in every step.">The DTU NCC Girls Wing is a community where young women grow into thoughtful leaders—through discipline, service, shared challenge and the confidence to lead.</PageIntro>
    <div className="wrap section"><section className="campus-feature"><div style={{ padding: 0 }}><img src="/images/cadet-community-wide.jpg" alt="The DTU NCC Girls Wing cadet community gathered together" /></div><div><div className="eyebrow" style={{ color: '#edc975' }}>Who we are</div><h2>Character built<br />in good company.</h2><p>Rooted in the National Cadet Corps and part of Delhi Technological University, our wing brings together cadets who want to test themselves, serve others and make the most of every opportunity.</p><p>Here, leadership is practised by listening as much as by stepping forward. Every parade, camp and shared endeavour is a chance to become more capable—and to help the people beside you do the same.</p></div></section>
      <section className="section"><SectionTitle kicker="What guides us" title="Values we live by" text="The principles that shape our training, our friendships and the way we represent DTU." /><div className="values-grid">{principles.map(({ icon: Icon, title, detail }) => <article className="value" key={title}><Icon size={23} /><h3>{title}</h3><p>{detail}</p></article>)}</div></section>
       <section className="section" style={{ paddingTop: 0 }}><SectionTitle title="One wing. Many ways to grow." text="Cadets discover their strengths across camps, competitions, cultural exchange and service. The experience is demanding, rewarding and always shared." /><div className="campus-grid">{campusPhotos.slice(0,4).map(([file,title])=><div className="campus-tile" key={file}><img src={campusImage(file)} alt={title} loading="lazy" /><span>{title}</span></div>)}</div></section>
      <QuoteBand />
    </div></main>;
}

function NotFound() {
  return <main className="notfound page-enter"><div><div className="code">404</div><h1>Not the path you meant to take.</h1><p>This page seems to have wandered off parade. Let's get you back to the wing.</p><Link href="/" className="btn">Back to home <ArrowRight size={15} /></Link></div></main>;
}

function Router() {
  return <Shell><Switch>
    <Route path="/" component={HomePage} />
    <Route path="/updates" component={UpdatesPage} />
    <Route path="/achievements" component={AchievementPage} />
    <Route path="/campus" component={CampusPage} />
    <Route path="/samaant" component={SamaantPage} />
    <Route path="/about" component={AboutPage} />
    <Route component={NotFound} />
  </Switch></Shell>;
}

function App() {
  return <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter>;
}

export default App;
