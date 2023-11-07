const AboutUs = () => {
    return (
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-md-auto">
                  <h2> Sobre Nosotros </h2>
                  <p>  We are a team of passionate individuals who love to create amazing things. 
                      Our mission is to provide high-quality services and products that exceed our customers' expectations.
                  </p>
                  
              </div>
          </div>
          <div className="row">
              <div className="col-md-4 col-12">
                  <div className="card">
                      <img 
                      className="card-img-top"
                      style={{maxHeight: "500px"}} 
                      src="https://img.freepik.com/vector-premium/camisa-dibujos-animados_119631-192.jpg" 
                      alt="aboutUsCard1" 
                      />
                      <div className="card-body">
                          <div className="card-title h5"> Productos </div>
                          <p className="card-text">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
                          </p>
                      </div>  
                  </div>
              </div>
  
              <div className="col-md-4 col-12">
                  <div className="card">
                      <img 
                      className="card-img-top"
                      style={{maxHeight: "500px"}}  
                      src="https://i.pinimg.com/564x/cf/85/0c/cf850c2004abb13d3564b70a18b06afb.jpg" 
                      alt="aboutUsCard1" 
                      />
                      <div className="card-body">
                          <div className="card-title h5"> Atención al cliente </div>
                          <p className="card-text">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
                          </p>
                      </div>  
                  </div>
              </div>
  
              <div className="col-md-4 col-12">
                  <div className="card">
                      <img 
                      className="card-img-top" 
                      style={{maxHeight: "500px"}} 
                      src="https://png.pngtree.com/png-vector/20191213/ourmid/pngtree-wrist-watch-illustration-vector-on-white-background-png-image_2069941.jpg" 
                      alt="aboutUsCard1" 
                      />
                      <div className="card-body">
                          <div className="card-title h5"> Velocidad </div>
                          <p className="card-text">
                          This is a wider card with supporting text below as a natural lead-in to additional content.
                          </p>
                      </div>  
                  </div>
              </div>
  
          </div>
  
  
  
      </div>
    );
  };
  
  export default AboutUs;