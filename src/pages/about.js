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
            <div className="col-md-5">
              <img
                alt="TODO: REPLACE ME"
                className="img-fluid"
                src="/img/img1_PLACEHOLDER_REMOVE_ME.png"
              />
            </div>
            <div className="col-md-6 offset-md-1">
              <h1 className="mb-4 h3">
                We create opportunities that increase women’s participation in the tech industry
              </h1>
              <p className="mb-4">
                TechLadies is a community-led initiative for women to connect, learn, and grow in the tech industry as software engineers, product managers and designers. 
              </p>
              <p className="mb-4">
                Our community consists of women learning technology to enhance their careers and women already in tech.
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
                  src="/img/bg_PLACEHOLDER_REMOVE_ME.png"
                />
              </div>
              <div className="col-md-6 order-md-first d-flex flex-column align-items-start justify-content-center">
                <h2 className="mb-4 h4">How we got started</h2>
                <p>
                  As someone without any formal technical background, Elisha Tan learned to code from the developer community. Being a minority in tech, she wondered if women had adequate opportunities to explore the industry.
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
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-body card-body-sm">
                  <img
                    className="thumbnail mb-3"
                    alt="TODO: REPLACE ME"
                    src="https://i.pravatar.cc/128?img=7"
                  />
                  <h6 className="card-title">Bootcamp Team</h6>
                  <p className="card-text">One liner description here.</p>
                  <div className="mb-3">
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=1"
                    />
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=2"
                    />
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=3"
                    />
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=4"
                    />
                  </div>
                  <a href="#">Contact our team!</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-body card-body-sm">
                  <img
                    className="thumbnail mb-3"
                    alt="TODO: REPLACE ME"
                    src="https://i.pravatar.cc/128?img=7"
                  />
                  <h6 className="card-title">Community Team</h6>
                  <p className="card-text">One liner description here.</p>
                  <div className="mb-3">
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=1"
                    />
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=2"
                    />
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=3"
                    />
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=4"
                    />
                  </div>
                  <a href="#">Contact our team!</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-body card-body-sm">
                  <img
                    className="thumbnail mb-3"
                    alt="TODO: REPLACE ME"
                    src="https://i.pravatar.cc/128?img=7"
                  />
                  <h6 className="card-title">Events Team</h6>
                  <p className="card-text">One liner description here.</p>
                  <div className="mb-3">
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=1"
                    />
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=2"
                    />
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=3"
                    />
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=4"
                    />
                  </div>
                  <a href="#">Contact our team!</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-body card-body-sm">
                  <img
                    className="thumbnail mb-3"
                    alt="TODO: REPLACE ME"
                    src="https://i.pravatar.cc/128?img=7"
                  />
                  <h6 className="card-title">Mentorship Team</h6>
                  <p className="card-text">One liner description here.</p>
                  <div className="mb-3">
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=1"
                    />
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=2"
                    />
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=3"
                    />
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=4"
                    />
                  </div>
                  <a href="#">Contact our team!</a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-body card-body-sm">
                  <img
                    className="thumbnail mb-3"
                    alt="TODO: REPLACE ME"
                    src="https://i.pravatar.cc/128?img=7"
                  />
                  <h6 className="card-title">Chapter Leaders</h6>
                  <p className="card-text">One liner description here.</p>
                  <div className="mb-3">
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=1"
                    />
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=2"
                    />
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=3"
                    />
                    <img
                      className="thumbnail thumbnail-sm"
                      alt="TODO: REPLACE ME"
                      src="https://i.pravatar.cc/128?img=4"
                    />
                  </div>
                  <a href="#">Contact our team!</a>
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
                src="/img/bg_PLACEHOLDER_REMOVE_ME.png"
              />
            </div>
            <div className="col-md-6 offset-md-1 d-flex flex-column align-items-start justify-content-center">
              <h2 className="mb-4 h4">
                Passionate about increasing gender diversity in tech?
              </h2>
              <p className="mb-4">
                We are always looking for volunteers and support from companies.
              </p>
              <NavLink href="/contribute/">
                <a className="btn btn-primary">Learn More</a>
              </NavLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
