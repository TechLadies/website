import Head from 'next/head';
import NavLink from '../components/NavLink';

export default function Home() {
  return (
    <div>
      <Head>
        <title>About | TechLadies</title>
      </Head>
      <main>
        <div className="container py-6">
          <div className="row gy-6">
            <div className="col-md-6">
              <img
                alt="About TechLadies"
                className="about-image mb-4"
                src="/illustrations/illus_aboutus.png"
              />
            </div>
            <div className="col-md-6">
              <h1 className="mb-4">
                We create opportunities to increase women’s participation in tech
              </h1>
              <p className="mb-4 text-body large-line-height">
                TechLadies is a community-led initiative for women to connect, learn, and grow in the tech industry as software engineers, product managers, data scientists, and UI/UX designers. 
              </p>
              <p className="mb-4 text-body large-line-height">
                Our community is for women in tech and women keen in switching careers into tech.
              </p>
              <a
                className="btn btn-primary"
                href="https://www.facebook.com/groups/techladiescode/"
              >
                Join our Community
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray">
          <div className="container py-6">
            <div className="row gy-6">
              <div className="col-md-5 offset-md-1 order-md-last">
                <img
                  alt="TODO: REPLACE ME"
                  className="img-fluid"
                  src="/photos/history.jpg"
                />
              </div>
              <div className="col-md-6 order-md-first d-flex flex-column align-items-start justify-content-center">
                <h2 className="mb-4 h4">How we got started</h2>
                <p>
                  As someone with no formal technical background, Elisha Tan learned to code from the developer community. Being a minority in tech, she wondered if women had adequate opportunities to explore the industry.
                </p>
                <p>
                  That’s why she started TechLadies in 2016, to provide a space where women can learn technical skills and switch careers into the tech industry. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-6">
          <div className="row mb-5">
            <div className="col-md-10 offset-md-1">
              <h2 className="text-center">
                Today, TechLadies is led by a small group of volunteers
              </h2>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body card-body-sm">
                  <h6 className="card-title">Chapter Leaders</h6>
                  <p className="card-text">Leads chapters in Singapore, Malaysia, and Vietnam.</p>
                  <div className="mb-4">
                    <img
                      className="thumbnail thumbnail-lg"
                      alt="Elisha Tan"
                      src="/team/elisha.jpg"
                    />
                    <img
                      className="thumbnail thumbnail-lg"
                      alt="Suying Lim"
                      src="/team/suying.png"
                    />
                    <img
                      className="thumbnail thumbnail-lg"
                      alt="Thy Huynh"
                      src="/team/thy.jpg"
                    />
                    <img
                      className="thumbnail thumbnail-lg"
                      alt="Tran Bui"
                      src="/team/tranbui.jpg"
                    />
                  </div>
                  <a href="mailto:elisha@techladies.co">Contact the Chapter Leaders</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card">
                <div className="card-body card-body-sm">
                  <h6 className="card-title">Mentorship Team</h6>
                  <p className="card-text">Leads the TechLadies Mentorship program.</p>
                  <div className="mb-4">
                    <img
                      className="thumbnail thumbnail-lg"
                      alt="Poon Choryi"
                      src="/team/choryi.jpeg"
                    />
                    <img
                      className="thumbnail thumbnail-lg"
                      alt="Lillian So"
                      src="/team/lillian.jpg"
                    />
                    <img
                      className="thumbnail thumbnail-lg"
                      alt="Ng Shi Qi"
                      src="/team/shiqi.jpg"
                    />
                    <img
                      className="thumbnail thumbnail-lg"
                      alt="Shelvia Ho"
                      src="/team/shelvia.jpg"
                    />
                  </div>
                  <a href="mailto:mentorship@techladies.co">Contact the Mentorship Team</a>
                </div>
              </div>
            </div>
            
            
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-body card-body-sm">
                  <h6 className="card-title">Bootcamp Team</h6>
                  <p className="card-text">Leads our flagship program, TechLadies Bootcamp.</p>
                  <div className="mb-4">
                    <img
                      className="thumbnail thumbnail-lg"
                      alt="Angel Felismino"
                      src="/team/angel.png"
                    />
                    <img
                      className="thumbnail thumbnail-lg"
                      alt="Anna Lisicka"
                      src="/team/anna.jpeg"
                    />
                    <img
                      className="thumbnail thumbnail-lg"
                      alt="Tejasvita Rao"
                      src="/team/tejasvita.jpeg"
                    />
                  </div>
                  <a href="mailto:bootcamp@techladies.co">Contact the Bootcamp Team</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-body card-body-sm">
                  <h6 className="card-title">Community Team</h6>
                  <p className="card-text">Grows our TechLadies Community online.</p>
                  <div className="mb-4">
                    <img
                      className="thumbnail thumbnail-lg"
                      alt="Marta Sanke"
                      src="/team/marta.jpg"
                    />
                    <img
                      className="thumbnail thumbnail-lg"
                      alt="Rae Koh"
                      src="/team/rae.jpg"
                    />
                    <img
                      className="thumbnail thumbnail-lg"
                      alt="Liang Hui Qian"
                      src="/team/qian.jpg"
                    />
                  </div>
                  <a href="mailto:elisha@techladies.co">Contact the Community team</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-body card-body-sm">
                  <h6 className="card-title">Events Team</h6>
                  <p className="card-text">Organizes activities to engage with the community.</p>
                  <div className="mb-4">
                    <img
                      className="thumbnail thumbnail-lg"
                      alt="Giselle Cheo"
                      src="/team/giselle.png"
                    />
                    <img
                      className="thumbnail thumbnail-lg"
                      alt="Vanessa Zhao"
                      src="/team/vanessa.jpg"
                    />
                  </div>
                  <a href="mailto:events@techladies.co">Contact the Events Team</a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="container py-6">
          <div className="row gy-6">
            <div className="col-md-5">
              <img
                alt="TODO: REPLACE ME"
                className="img-fluid"
                src="/photos/team.jpg"
              />
            </div>
            <div className="col-md-6 offset-md-1 d-flex flex-column align-items-start justify-content-center">
              <h2 className="mb-4 h4">
                Passionate about increasing gender diversity in tech?
              </h2>
              <p className="mb-4">
                We are looking for volunteers and support from companies.
              </p>
              <NavLink href="/contribute/">
                <a className="btn btn-primary">Volunteer with TechLadies</a>
              </NavLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
